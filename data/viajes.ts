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
}

export const viajes: Viaje[] = [
  {
    id: "viaje_1",
    conductorId: "cond_1",
    pasajerosIds: ["usr_1", "usr_2"],
    origen: {
      nombre: "Metro Lomas Estrella",
      lat: 19.3255,
      lng: -99.0912
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 4.5,
    tiempoEstimadoMin: 12,
    tarifaTotal: 36,
    tarifaConductor: 31,
    tarifaPlataforma: 5,
    estado: "finalizado",
    metodoPago: "efectivo",
    fecha: "2026-07-08T08:15:00-06:00"
  },
  {
    id: "viaje_2",
    conductorId: "cond_4",
    pasajerosIds: ["usr_3"],
    origen: {
      nombre: "Metro Tláhuac",
      lat: 19.2863,
      lng: -99.0051
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 12.3,
    tiempoEstimadoMin: 30,
    tarifaTotal: 98,
    tarifaConductor: 83,
    tarifaPlataforma: 15,
    estado: "en_curso",
    metodoPago: "spei",
    fecha: "2026-07-09T10:00:00-06:00"
  },
  {
    id: "viaje_3",
    conductorId: "cond_1",
    pasajerosIds: ["usr_4"],
    origen: {
      nombre: "Metro Constitución de 1917",
      lat: 19.3458,
      lng: -99.0631
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 8.2,
    tiempoEstimadoMin: 20,
    tarifaTotal: 66,
    tarifaConductor: 56,
    tarifaPlataforma: 10,
    estado: "programado",
    metodoPago: "efectivo",
    fecha: "2026-07-10T07:30:00-06:00"
  },
  {
    id: "viaje_4",
    conductorId: "cond_4",
    pasajerosIds: ["usr_1"],
    origen: {
      nombre: "Plaza Paseo Acoxpa",
      lat: 19.2995,
      lng: -99.1415
    },
    destino: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    distanciaKm: 5.1,
    tiempoEstimadoMin: 15,
    tarifaTotal: 41,
    tarifaConductor: 35,
    tarifaPlataforma: 6,
    estado: "programado",
    metodoPago: "spei",
    fecha: "2026-07-10T08:45:00-06:00"
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
    fecha: "2026-07-08T18:10:00-06:00"
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
    fecha: "2026-07-09T14:30:00-06:00"
  }
];
