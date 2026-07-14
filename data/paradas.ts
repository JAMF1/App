export interface PuntoDesignado {
  id: string;
  nombre: string;
  tipo: "metro" | "plaza" | "universidad";
  destacado?: boolean;
}

export const PUNTOS_DESIGNADOS: PuntoDesignado[] = [
  { id: "metro_lomas", nombre: "Metro Lomas Estrella", tipo: "metro", destacado: true },
  { id: "metro_tlahuac", nombre: "Metro Tláhuac", tipo: "metro", destacado: true },
  { id: "metro_constitucion", nombre: "Metro Constitución de 1917", tipo: "metro", destacado: true },
  { id: "metro_tasquena", nombre: "Metro Tasqueña", tipo: "metro" },
  { id: "metro_anaya", nombre: "Metro General Anaya", tipo: "metro" },
  { id: "tren_huipulco", nombre: "Estación Tren Ligero Huipulco", tipo: "metro" },
  { id: "plaza_acoxpa", nombre: "Plaza Paseo Acoxpa", tipo: "plaza" },
  { id: "plaza_terraza", nombre: "Plaza Terraza Coapa", tipo: "plaza" },
  { id: "plaza_galerias", nombre: "Plaza Galerías Coapa", tipo: "plaza" },
  { id: "uam_xochimilco", nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", tipo: "universidad" }
];
