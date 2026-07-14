import React from "react";
import { DollarSign, HelpCircle, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { ParadaViaje, calcularTarifaSugeridaSubruta, TARIFA_BASE_POR_KM } from "../lib/pricing";

interface FareBreakdownProps {
  paradas: ParadaViaje[];
  pasajerosIds: string[];
  pasajerosRutas?: { [usuarioId: string]: { origen: string; destino: string } };
  currentUserId: string;
  origenBuscado: string;
  destinoBuscado: string;
  isUserJoined: boolean;
}

export default function FareBreakdown({
  paradas,
  pasajerosIds,
  pasajerosRutas = {},
  currentUserId,
  origenBuscado,
  destinoBuscado,
  isUserJoined
}: FareBreakdownProps) {
  // Compute segment-based fares for user's relevant sub-route
  const { tarifaSugeridaTotal, tramosRelevantes } = calcularTarifaSugeridaSubruta(
    paradas,
    pasajerosIds,
    pasajerosRutas,
    currentUserId,
    origenBuscado,
    destinoBuscado,
    isUserJoined
  );

  return (
    <div className="bg-gray-50/60 rounded-3xl p-5 border border-gray-100/80 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary-light text-primary rounded-xl">
            <DollarSign className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-black text-gray-800 uppercase tracking-wider block">
              Desglose de Tarifa por Tramos
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">
              Tarifa base: ${TARIFA_BASE_POR_KM} MXN/km
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-xl border border-primary/5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Modelo de Recuperación Justo</span>
        </div>
      </div>

      {/* Segments (Tramos) list */}
      <div className="space-y-3">
        {tramosRelevantes.length === 0 ? (
          <p className="text-xs text-gray-400 text-center py-2">
            Selecciona paradas válidas para calcular la contribución sugerida.
          </p>
        ) : (
          tramosRelevantes.map((tramo, index) => {
            // Maximum possible fare for this segment (number of passengers = 1)
            const tarifaSolo = tramo.tarifaTotalTramo;

            return (
              <div
                key={index}
                className="bg-white p-3.5 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all space-y-2.5"
              >
                {/* Segment stops indicators */}
                <div className="flex items-center gap-1.5 text-xs text-gray-700 font-bold">
                  <span className="truncate max-w-[130px] sm:max-w-xs">{tramo.origen}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="truncate max-w-[130px] sm:max-w-xs text-primary">{tramo.destino}</span>
                  <span className="text-[10px] text-gray-400 font-normal shrink-0 ml-auto">
                    ({tramo.distanciaKm.toFixed(1)} km)
                  </span>
                </div>

                {/* Contribution suggestions based on occupancy */}
                {tramo.esSolo ? (
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-amber-50/50 p-2.5 rounded-xl border border-amber-100/60">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-600" />
                        <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wide">
                          Tramo sin acompañantes
                        </span>
                      </div>
                      <span className="text-xs font-black text-amber-700">
                        Tarifa sugerida: hasta ${tarifaSolo.toFixed(0)} MXN
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-normal pl-1 flex items-start gap-1">
                      <HelpCircle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>
                        Este es el monto sugerido si viajas solo con este conductor en este tramo, calculado para ayudarle a cubrir su gasolina. Si se suman más pasajeros a este tramo, el monto por persona disminuye automáticamente.
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between items-center bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/60">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                      <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">
                        Compartido ({tramo.simulatedCount} pasajeros)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 line-through mr-1.5 font-semibold">
                        ${tarifaSolo.toFixed(0)} MXN
                      </span>
                      <span className="text-xs font-black text-emerald-700">
                        Tarifa sugerida: ${tramo.tarifaSugerida.toFixed(0)} MXN
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Totals Summary */}
      <div className="pt-3 border-t border-dashed border-gray-200 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase block tracking-wider">
            Contribución Sugerida Total
          </span>
          <span className="text-[10px] text-gray-400 font-medium">
            Calculado para {tramosRelevantes.length} {tramosRelevantes.length === 1 ? "tramo" : "tramos"} de tu ruta
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-400 font-bold mr-1 block sm:inline">Aporte total sugerido:</span>
          <span className="text-lg font-black text-primary">
            ${tarifaSugeridaTotal} MXN
          </span>
        </div>
      </div>
    </div>
  );
}
