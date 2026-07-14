/**
 * Pricing configuration and helper functions for segment-based (tramo) fare calculation
 */

// Base rate per kilometer in MXN
export const TARIFA_BASE_POR_KM = 6;

export interface ParadaViaje {
  nombre: string;
  distanciaDesdeAnteriorKm: number; // 0 for the first stop (origin)
}

export interface TramoCalculado {
  index: number;
  origen: string;
  destino: string;
  distanciaKm: number;
  tarifaTotalTramo: number;
  pasajerosIds: string[];
  tarifaSugeridaIndividual: number;
}

/**
 * Finds the index of a stop name in the list of trip stops (ignoring case, accents, etc.)
 */
export function findStopIndex(paradas: ParadaViaje[], name: string): number {
  if (!name || name === "todos") return -1;
  const normalizedSearch = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return paradas.findIndex(p => {
    const normalizedParada = p.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return normalizedParada.includes(normalizedSearch) || normalizedSearch.includes(normalizedParada);
  });
}

/**
 * Calculates all segments (tramos) for a trip and who is present in each segment.
 */
export function calcularTramos(
  paradas: ParadaViaje[],
  pasajerosIds: string[],
  pasajerosRutas: { [usuarioId: string]: { origen: string; destino: string } } = {}
): TramoCalculado[] {
  const tramos: TramoCalculado[] = [];
  if (paradas.length < 2) return tramos;

  for (let i = 0; i < paradas.length - 1; i++) {
    const origenStop = paradas[i];
    const destinoStop = paradas[i + 1];
    const distancia = destinoStop.distanciaDesdeAnteriorKm;
    const tarifaTotal = TARIFA_BASE_POR_KM * distancia;

    // Determine who is present in this tramo
    const pasajerosEnTramo: string[] = [];
    pasajerosIds.forEach(pid => {
      const ruta = pasajerosRutas[pid];
      if (ruta) {
        const idxOrig = findStopIndex(paradas, ruta.origen);
        const idxDest = findStopIndex(paradas, ruta.destino);
        if (idxOrig !== -1 && idxDest !== -1 && idxOrig < idxDest) {
          if (i >= idxOrig && i < idxDest) {
            pasajerosEnTramo.push(pid);
          }
        } else {
          // If passenger route indices are invalid, assume full trip
          pasajerosEnTramo.push(pid);
        }
      } else {
        // Default to full trip if no specific route is saved
        pasajerosEnTramo.push(pid);
      }
    });

    const numPasajeros = pasajerosEnTramo.length;
    const tarifaIndividual = numPasajeros > 0 ? tarifaTotal / numPasajeros : tarifaTotal;

    tramos.push({
      index: i,
      origen: origenStop.nombre,
      destino: destinoStop.nombre,
      distanciaKm: distancia,
      tarifaTotalTramo: tarifaTotal,
      pasajerosIds: pasajerosEnTramo,
      tarifaSugeridaIndividual: tarifaIndividual
    });
  }

  return tramos;
}

/**
 * Calculates the total suggested fare for a passenger traveling between two stops in a trip.
 * If they are not yet in the trip, computes what the fare WOULD be if they joined.
 */
export function calcularTarifaSugeridaSubruta(
  paradas: ParadaViaje[],
  pasajerosIds: string[],
  pasajerosRutas: { [usuarioId: string]: { origen: string; destino: string } } = {},
  currentUserId: string,
  origenBuscado: string,
  destinoBuscado: string,
  isUserJoined: boolean
): {
  tarifaSugeridaTotal: number;
  tramosRelevantes: {
    origen: string;
    destino: string;
    distanciaKm: number;
    tarifaTotalTramo: number;
    pasajerosCountActivo: number; // present right now
    simulatedCount: number; // simulated passengers
    tarifaSugerida: number; // what they pay
    esSolo: boolean; // if they are solo in this tramo
  }[];
} {
  // If the user is already joined, use their saved route.
  // Otherwise, use the searched subroute (with fallbacks).
  let routeOrigen = origenBuscado;
  let routeDestino = destinoBuscado;

  if (isUserJoined && pasajerosRutas[currentUserId]) {
    routeOrigen = pasajerosRutas[currentUserId].origen;
    routeDestino = pasajerosRutas[currentUserId].destino;
  }

  let idxOrig = findStopIndex(paradas, routeOrigen);
  let idxDest = findStopIndex(paradas, routeDestino);

  // Fallbacks if not found
  if (idxOrig === -1) idxOrig = 0;
  if (idxDest === -1) idxDest = paradas.length - 1;
  if (idxOrig >= idxDest) {
    idxOrig = 0;
    idxDest = paradas.length - 1;
  }

  const tramosCalculados = calcularTramos(paradas, pasajerosIds, pasajerosRutas);
  const tramosRelevantes: any[] = [];
  let tarifaSugeridaTotal = 0;

  for (let i = idxOrig; i < idxDest; i++) {
    const tramo = tramosCalculados[i];
    if (!tramo) continue;

    // If the user is NOT in the trip yet, we simulate them joining.
    const isPresent = tramo.pasajerosIds.includes(currentUserId);
    const pasajerosCountActivo = tramo.pasajerosIds.length;
    
    let simulatedCount = pasajerosCountActivo;
    if (!isUserJoined && !isPresent) {
      simulatedCount += 1;
    }

    const esSolo = simulatedCount <= 1;
    const tarifaSugerida = tramo.tarifaTotalTramo / (simulatedCount || 1);

    tarifaSugeridaTotal += tarifaSugerida;

    tramosRelevantes.push({
      origen: tramo.origen,
      destino: tramo.destino,
      distanciaKm: tramo.distanciaKm,
      tarifaTotalTramo: tramo.tarifaTotalTramo,
      pasajerosCountActivo,
      simulatedCount,
      tarifaSugerida,
      esSolo
    });
  }

  return {
    tarifaSugeridaTotal: Math.round(tarifaSugeridaTotal),
    tramosRelevantes
  };
}
