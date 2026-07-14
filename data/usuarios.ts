export interface Usuario {
  id: string;
  nombre: string;
  correoInstitucional: string;
  rol: "pasajero" | "conductor" | "admin";
  fotoUrl?: string;
  calificacionPromedio: number;
  fechaRegistro: string;
  genero: "femenino" | "masculino";
}

export const usuarios: Usuario[] = [
  {
    id: "usr_1",
    nombre: "Sofía Hernández García",
    correoInstitucional: "sofia.hernandez@alumnos.xoc.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.8,
    fechaRegistro: "2026-02-15",
    genero: "femenino"
  },
  {
    id: "usr_2",
    nombre: "Mateo Alejandro Ruíz",
    correoInstitucional: "mateo.ruiz@alumnos.xoc.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.9,
    fechaRegistro: "2026-03-01",
    genero: "masculino"
  },
  {
    id: "usr_3",
    nombre: "Dra. Elena Ramos Ortiz",
    correoInstitucional: "elena.ramos@alumnos.xoc.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 5.0,
    fechaRegistro: "2026-01-10",
    genero: "femenino"
  },
  {
    id: "usr_4",
    nombre: "Valeria Mendoza Solís",
    correoInstitucional: "valeria.mendoza@alumnos.xoc.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.7,
    fechaRegistro: "2026-04-12",
    genero: "femenino"
  },
  {
    id: "usr_5",
    nombre: "Diego Torres Juárez",
    correoInstitucional: "diego.torres@alumnos.xoc.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.6,
    fechaRegistro: "2026-05-18",
    genero: "masculino"
  }
];
