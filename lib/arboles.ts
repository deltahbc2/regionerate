export type RangoSiembra = "reciente" | "medio" | "antiguo";

export const RANGOS_SIEMBRA: {
  valor: RangoSiembra;
  etiqueta: string;
  descripcion: string;
  icono: string;
}[] = [
  {
    valor: "reciente",
    etiqueta: "Hace menos de 3 meses",
    descripcion: "De 0 a 3 meses",
    icono: "🌱",
  },
  {
    valor: "medio",
    etiqueta: "Hace 4 a 12 meses",
    descripcion: "De 4 a 12 meses",
    icono: "🪴",
  },
  {
    valor: "antiguo",
    etiqueta: "Hace 1 año o más",
    descripcion: "1 año o más",
    icono: "🌳",
  },
];

export function getMesesDesdeSiembra(
  fechaPlantacion: string,
  ahora: Date = new Date()
): number | null {
  const fecha = new Date(fechaPlantacion);
  if (Number.isNaN(fecha.getTime())) {
    return null;
  }
  if (fecha.getTime() > ahora.getTime()) {
    return 0;
  }
  const mesesCalendario =
    (ahora.getFullYear() - fecha.getFullYear()) * 12 +
    (ahora.getMonth() - fecha.getMonth());
  // Si aún no se cumple el día del mes, no contar el mes en curso.
  const ajuste = ahora.getDate() < fecha.getDate() ? 1 : 0;
  return Math.max(0, mesesCalendario - ajuste);
}

export function getRangoSiembra(
  fechaPlantacion: string,
  ahora: Date = new Date()
): RangoSiembra {
  const meses = getMesesDesdeSiembra(fechaPlantacion, ahora);
  if (meses === null) {
    return "reciente";
  }
  if (meses <= 3) {
    return "reciente";
  }
  if (meses <= 12) {
    return "medio";
  }
  return "antiguo";
}

export function getIconoPorFechaPlantacion(
  fechaPlantacion: string,
  ahora: Date = new Date()
): string {
  const rango = getRangoSiembra(fechaPlantacion, ahora);
  if (rango === "medio") {
    return "🪴";
  }
  if (rango === "antiguo") {
    return "🌳";
  }
  return "🌱";
}

export function getEtiquetaRango(rango: RangoSiembra): string {
  if (rango === "medio") {
    return "Hace 4 a 12 meses";
  }
  if (rango === "antiguo") {
    return "Hace 1 año o más";
  }
  return "Hace menos de 3 meses";
}

/**
 * Convierte el rango elegido en el formulario a una fecha ISO
 * representativa, para que el icono del mapa quede en el rango correcto:
 * - reciente: hoy
 * - medio: hace 8 meses (punto medio de 4-12)
 * - antiguo: hace 18 meses (claramente mayor a 1 año)
 */
export function getFechaPorRango(
  rango: RangoSiembra,
  ahora: Date = new Date()
): string {
  if (rango === "medio") {
    const fecha = new Date(ahora);
    fecha.setMonth(fecha.getMonth() - 8);
    return fecha.toISOString();
  }
  if (rango === "antiguo") {
    const fecha = new Date(ahora);
    fecha.setMonth(fecha.getMonth() - 18);
    return fecha.toISOString();
  }
  return ahora.toISOString();
}
