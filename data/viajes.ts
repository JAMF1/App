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
      nombre: "Metro Tasqueña (Andenes de Autobuses Sur)",
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
    tarifaTotal: 40,
    tarifaConductor: 34,
    tarifaPlataforma: 6,
    estado: "finalizado",
    metodoPago: "efectivo",
    fecha: "2026-07-08T08:15:00-06:00"
  },
  {
    id: "viaje_2",
    conductorId: "cond_4",
    pasajerosIds: ["usr_3"],
    origen: {
      nombre: "Metro General Anaya (Salida Oriente)",
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
    fecha: "2026-07-09T10:00:00-06:00"
  },
  {
    id: "viaje_3",
    conductorId: "cond_1",
    pasajerosIds: ["usr_4", "usr_5"],
    origen: {
      nombre: "Estación Tren Ligero Huipulco (Frente a Hospitales)",
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
    fecha: "2026-07-10T07:30:00-06:00"
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
    fecha: "2026-07-10T08:45:00-06:00"
  },
  {
    id: "viaje_5",
    conductorId: "cond_1",
    pasajerosIds: ["usr_2", "usr_3", "usr_4"],
    origen: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    destino: {
      nombre: "Metro Tasqueña (Andenes de Autobuses Sur)",
      lat: 19.3440,
      lng: -99.1428
    },
    distanciaKm: 6.2,
    tiempoEstimadoMin: 20,
    tarifaTotal: 40,
    tarifaConductor: 34,
    tarifaPlataforma: 6,
    estado: "finalizado",
    metodoPago: "spei",
    fecha: "2026-07-08T18:10:00-06:00"
  },
  {
    id: "viaje_6",
    conductorId: "cond_4",
    pasajerosIds: ["usr_5"],
    origen: {
      nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)",
      lat: 19.3039,
      lng: -99.1171
    },
    destino: {
      nombre: "Estación Tren Ligero Huipulco (Frente a Hospitales)",
      lat: 19.2929,
      lng: -99.1504
    },
    distanciaKm: 5.4,
    tiempoEstimadoMin: 15,
    tarifaTotal: 35,
    tarifaConductor: 30,
    tarifaPlataforma: 5,
    estado: "cancelado",
    metodoPago: "efectivo",
    fecha: "2026-07-09T14:30:00-06:00"
  }
];
