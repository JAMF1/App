import { ParadaViaje } from "../src/lib/pricing";

export interface Viaje {
  id: string;
  conductorId: string;
  pasajerosIds: string[];
  origen: { nombre: string; lat: number; lng: number };
  destino: { nombre: string; lat: number; lng: number };
  distanciaKm: number;
  tiempoEstimadoMin: number;
  tarifaTotal: number;
  tarifaConductor: number;
  tarifaPlataforma: number;
  estado: "programado" | "en_curso" | "finalizado" | "cancelado";
  metodoPago: "spei" | "efectivo";
  fecha: string;
  
  // Custom segment-based stops list with distances
  paradas: ParadaViaje[];
  // Segment passenger routing
  pasajerosRutas?: { [usuarioId: string]: { origen: string; destino: string } };
}

export const viajes: Viaje[] = [
  {
    id: "viaje_1",
    conductorId: "cond_1",
    pasajerosIds: ["usr_1", "usr_2"],
    origen: {
      nombre: "Metro Tasqueña",
      lat: 19.3440,
      lng: -99.1428
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 6.2,
    tiempoEstimadoMin: 18,
    tarifaTotal: 36,
    tarifaConductor: 31,
    tarifaPlataforma: 5,
    estado: "finalizado",
    metodoPago: "efectivo",
    fecha: "2026-07-08T08:15:00-06:00",
    paradas: [
      { nombre: "Metro Tasqueña", distanciaDesdeAnteriorKm: 0 },
      { nombre: "Plaza Galerías Coapa", distanciaDesdeAnteriorKm: 3.5 },
      { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", distanciaDesdeAnteriorKm: 2.7 }
    ],
    pasajerosRutas: {
      "usr_1": { origen: "Metro Tasqueña", destino: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)" },
      "usr_2": { origen: "Plaza Galerías Coapa", destino: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)" }
    }
  },
  {
    id: "viaje_2",
    conductorId: "cond_4",
    pasajerosIds: ["usr_3"],
    origen: {
      nombre: "Metro General Anaya",
      lat: 19.3585,
      lng: -99.1454
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 8.5,
    tiempoEstimadoMin: 22,
    tarifaTotal: 50,
    tarifaConductor: 42,
    tarifaPlataforma: 8,
    estado: "en_curso",
    metodoPago: "spei",
    fecha: "2026-07-09T10:00:00-06:00",
    paradas: [
      { nombre: "Metro General Anaya", distanciaDesdeAnteriorKm: 0 },
      { nombre: "Metro Tasqueña", distanciaDesdeAnteriorKm: 1.8 },
      { nombre: "Plaza Galerías Coapa", distanciaDesdeAnteriorKm: 4.0 },
      { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", distanciaDesdeAnteriorKm: 2.7 }
    ],
    pasajerosRutas: {
      "usr_3": { origen: "Metro Tasqueña", destino: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)" }
    }
  },
  {
    id: "viaje_3",
    conductorId: "cond_1",
    pasajerosIds: ["usr_4", "usr_5"],
    origen: {
      nombre: "Estación Tren Ligero Huipulco",
      lat: 19.2929,
      lng: -99.1504
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 5.4,
    tiempoEstimadoMin: 15,
    tarifaTotal: 35,
    tarifaConductor: 30,
    tarifaPlataforma: 5,
    estado: "programado",
    metodoPago: "efectivo",
    fecha: "2026-07-10T07:30:00-06:00",
    paradas: [
      { nombre: "Estación Tren Ligero Huipulco", distanciaDesdeAnteriorKm: 0 },
      { nombre: "Plaza Paseo Acoxpa", distanciaDesdeAnteriorKm: 2.1 },
      { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", distanciaDesdeAnteriorKm: 3.3 }
    ],
    pasajerosRutas: {
      "usr_4": { origen: "Estación Tren Ligero Huipulco", destino: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)" },
      "usr_5": { origen: "Plaza Paseo Acoxpa", destino: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)" }
    }
  },
  {
    id: "viaje_4",
    conductorId: "cond_4",
    pasajerosIds: ["usr_1"],
    origen: {
      nombre: "Periférico Sur (Frente a Centro Comercial Perisur)",
      lat: 19.3031,
      lng: -99.1868
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 9.8,
    tiempoEstimadoMin: 25,
    tarifaTotal: 60,
    tarifaConductor: 51,
    tarifaPlataforma: 9,
    estado: "programado",
    metodoPago: "spei",
    fecha: "2026-07-10T08:45:00-06:00",
    paradas: [
      { nombre: "Periférico Sur (Frente a Centro Comercial Perisur)", distanciaDesdeAnteriorKm: 0 },
      { nombre: "Plaza Paseo Acoxpa", distanciaDesdeAnteriorKm: 4.7 },
      { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", distanciaDesdeAnteriorKm: 5.1 }
    ],
    pasajerosRutas: {
      "usr_1": { origen: "Periférico Sur (Frente a Centro Comercial Perisur)", destino: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)" }
    }
  },
  {
    id: "viaje_5",
    conductorId: "cond_1",
    pasajerosIds: ["usr_2", "usr_3"],
    origen: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    destino: {
      nombre: "Metro Tasqueña",
      lat: 19.3440,
      lng: -99.1428
    },
    distanciaKm: 6.2,
    tiempoEstimadoMin: 18,
    tarifaTotal: 50,
    tarifaConductor: 42,
    tarifaPlataforma: 8,
    estado: "finalizado",
    metodoPago: "spei",
    fecha: "2026-07-08T18:10:00-06:00",
    paradas: [
      { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", distanciaDesdeAnteriorKm: 0 },
      { nombre: "Plaza Galerías Coapa", distanciaDesdeAnteriorKm: 2.7 },
      { nombre: "Metro Tasqueña", distanciaDesdeAnteriorKm: 3.5 }
    ],
    pasajerosRutas: {
      "usr_2": { origen: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", destino: "Metro Tasqueña" },
      "usr_3": { origen: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", destino: "Plaza Galerías Coapa" }
    }
  },
  {
    id: "viaje_6",
    conductorId: "cond_4",
    pasajerosIds: [],
    origen: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    destino: {
      nombre: "Plaza Galerías Coapa",
      lat: 19.2925,
      lng: -99.1235
    },
    distanciaKm: 3.8,
    tiempoEstimadoMin: 10,
    tarifaTotal: 30,
    tarifaConductor: 25,
    tarifaPlataforma: 5,
    estado: "programado",
    metodoPago: "efectivo",
    fecha: "2026-07-09T14:30:00-06:00",
    paradas: [
      { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", distanciaDesdeAnteriorKm: 0 },
      { nombre: "Plaza Galerías Coapa", distanciaDesdeAnteriorKm: 3.8 }
    ],
    pasajerosRutas: {}
  }
];
