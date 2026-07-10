import { Usuario } from "./usuarios";

export interface Conductor extends Usuario {
  estadoSolicitud: "pendiente" | "en_revision" | "aprobado" | "rechazado";
  vehiculo: {
    marca: string;
    modelo: string;
    color: string;
    placas: string;
    asientosDisponibles: number;
  };
}

export const conductores: Conductor[] = [
  {
    id: "cond_1",
    nombre: "Ing. Carlos Fuentes Bravo",
    correoInstitucional: "carlos.fuentes@alumnos.xoc.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.9,
    fechaRegistro: "2026-01-20",
    estadoSolicitud: "aprobado",
    vehiculo: {
      marca: "Nissan",
      modelo: "Versa",
      color: "Gris Platino",
      placas: "982-YUZ",
      asientosDisponibles: 4
    }
  },
  {
    id: "cond_2",
    nombre: "Andrea Peralta Luna",
    correoInstitucional: "andrea.peralta@alumnos.xoc.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.7,
    fechaRegistro: "2026-03-10",
    estadoSolicitud: "aprobado",
    vehiculo: {
      marca: "Chevrolet",
      modelo: "Aveo",
      color: "Rojo Rubí",
      placas: "NMX-45-89",
      asientosDisponibles: 3
    }
  },
  {
    id: "cond_3",
    nombre: "Dr. Rodrigo Silva Nava",
    correoInstitucional: "rodrigo.silva@alumnos.xoc.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 5.0,
    fechaRegistro: "2026-02-05",
    estadoSolicitud: "aprobado",
    vehiculo: {
      marca: "Toyota",
      modelo: "Prius (Híbrido)",
      color: "Blanco Perlado",
      placas: "A-543-BCN",
      asientosDisponibles: 4
    }
  },
  {
    id: "cond_4",
    nombre: "Mariana Delgado Ríos",
    correoInstitucional: "mariana.delgado@alumnos.xoc.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.8,
    fechaRegistro: "2026-04-01",
    estadoSolicitud: "aprobado",
    vehiculo: {
      marca: "Volkswagen",
      modelo: "Vento",
      color: "Azul Marino",
      placas: "Z90-WXC",
      asientosDisponibles: 3
    }
  }
];
