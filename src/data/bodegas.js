/* =========================================================
   VINOS WALCO — bodegas (EDITAR)
   ========================================================= */

export const BODEGAS = [
  {
    id: "losamaichas",
    nombre: "Bodega Comunitaria Los Amaichás",
    lugar: "Valle Calchaquí · Tucumán",
    historia:
      "La primera bodega del país perteneciente a una comunidad originaria. " +
      "Con identidad diaguita y más de 40 productores, elaboran sus vinos de " +
      "forma natural, con levaduras nativas y métodos transmitidos por " +
      "generaciones. Su línea Sumak Kawsay —“saber vivir” en lengua kakán— " +
      "honra esa herencia.",
    estado: "borrador",
  },
  {
    id: "michango",
    nombre: "Bodega Michango",
    lugar: "Siján · Valle de Pomán · Catamarca",
    historia:
      "En el Valle de Pomán, localidad de Siján, Provincia de Catamarca, se " +
      "encuentra El Manchao, un majestuoso cerro que conecta al cielo en su " +
      "punto máximo a 4561 metros sobre el nivel del mar con el lugar exacto, " +
      "en su base, donde hace más de cien años, nuestra familia dio inicio a " +
      "una dinastía de agricultores que continúan evolucionando.\n\n" +
      "El nombre del Cerro El Manchao proviene de la lengua aborigen Kakán y " +
      "significa lugar de miedo.",
    estado: "ok",
  },
  {
    id: "mariadelpilar",
    nombre: "Finca María del Pilar",
    lugar: "Beltrán · Santiago del Estero",
    historia:
      "Bodega santiagueña cuyo concepto “Legado de la primera vid” da nombre a " +
      "su familia de etiquetas de autor, sobre suelos franco arenosos y cosecha " +
      "manual. [Texto provisional — falta historia oficial.]",
    estado: "falta-info",
  },
];

/** Devuelve el nombre de una bodega a partir de su id. */
export const nombreBodega = (id) =>
  (BODEGAS.find((b) => b.id === id) || {}).nombre || "";

/** Etiqueta corta para los filtros (sin "Bodega"/"Finca"). */
export const etiquetaBodega = (nombre) =>
  nombre.replace(/^Bodega( Comunitaria)?|^Finca /, "").trim();
