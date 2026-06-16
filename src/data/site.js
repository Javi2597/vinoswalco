/* =========================================================
   VINOS WALCO — datos de contacto (EDITAR)
   ========================================================= */

export const CONTACTO = {
  // Número en formato internacional sin "+", espacios ni guiones.
  whatsapp: "5491141699328",          // 11 4169-9328 (formato internacional AR móvil: 549 + área + número)
  instagram: "vinoswalco",            // TODO: confirmar usuario real
  email: "hola@vinoswalco.com.ar",    // TODO: confirmar / quitar si no aplica
};

/** Arma un enlace de WhatsApp con texto pre-cargado. */
export const waLink = (texto) =>
  `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`;

export const igLink = `https://instagram.com/${CONTACTO.instagram}`;
export const emailLink = `mailto:${CONTACTO.email}`;
