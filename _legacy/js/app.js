/* =========================================================
   VINOS WALCO — datos y lógica de la página
   Editá este archivo para cambiar textos, vinos y contacto.
   ========================================================= */

/* --- CONTACTO (EDITAR) ---------------------------------- */
const CONTACTO = {
  // Número en formato internacional sin "+", espacios ni guiones.
  whatsapp: "5490000000000",          // TODO: reemplazar por el número real
  instagram: "vinoswalco",            // TODO: confirmar usuario real
  email: "hola@vinoswalco.com.ar"     // TODO: confirmar / quitar si no aplica
};

/* --- BODEGAS -------------------------------------------- */
const BODEGAS = [
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
    estado: "borrador"
  },
  {
    id: "michango",
    nombre: "Bodega Michango",
    lugar: "Siján · Valle de Pomán · Catamarca",
    historia:
      "Bodega catamarqueña que cultiva en el Valle de Pomán, a 1000 metros de " +
      "altura, con viñedos de 80 años. Su línea Andreatta reúne blancos frescos " +
      "y tintos de carácter. [Texto provisional — falta historia oficial.]",
    estado: "falta-info"
  },
  {
    id: "mariadelpilar",
    nombre: "Finca María del Pilar",
    lugar: "Beltrán · Santiago del Estero",
    historia:
      "Bodega santiagueña cuyo concepto “Legado de la primera vid” da nombre a " +
      "su familia de etiquetas de autor, sobre suelos franco arenosos y cosecha " +
      "manual. [Texto provisional — falta historia oficial.]",
    estado: "falta-info"
  }
];

/* --- VINOS ---------------------------------------------- */
const VINOS = [
  {
    id: "enraizado",
    bodega: "mariadelpilar",
    nombre: "Enraizado",
    linea: "Joven · Marselan",
    varietal: "95% Marselan · 5% Syrah",
    cosecha: "2023",
    img: "img/botellas/mariadelpilar-01-enraizado-bottle.jpg",
    cata:
      "Profundo color rojo. Potente aroma que conjuga frutos rojos, mineral y " +
      "eucalipto. Suave al paladar, con final intenso y prolongado. Gran " +
      "personalidad; la acidez marcada aporta frescura y realza los frutos " +
      "rojos maduros y la mineralidad.",
    ficha: {
      "Vendimia": "2ª semana de febrero, cosecha manual",
      "Suelo": "Franco arenoso",
      "Ubicación": "Beltrán – Santiago del Estero",
      "Fermentación": "Levaduras seleccionadas. Huevos de fermentación y tanque inoxidable",
      "Maloláctica": "Espontánea, con bacterias nativas",
      "Crianza": "Tanque inoxidable con 30% de paso por roble francés",
      "Embotellado": "25 de enero de 2024"
    }
  },
  {
    id: "quilla",
    bodega: "mariadelpilar",
    nombre: "Quilla",
    linea: "Joven · Blend",
    varietal: "50% Malbec · 35% Petit Verdot · 15% Syrah",
    cosecha: "2023",
    img: "img/botellas/mariadelpilar-02-quilla-bottle.jpg",
    cata:
      "Color rojo rubí, límpido y brillante. Notas de cereza, frutilla y " +
      "frambuesa, entrada dulce y untuosa, acidez marcada que realza su " +
      "frescura. Taninos redondos, cuerpo medio y final frutado que perdura.",
    ficha: {
      "Vendimia": "Febrero, cosecha manual (Syrah y Malbec 1ª sem.; Petit Verdot 3ª sem.)",
      "Suelo": "Franco arenoso",
      "Ubicación": "Beltrán – Santiago del Estero",
      "Fermentación": "Tinas plásticas y acero inoxidable, 14 días. Malbec y Syrah cofermentados",
      "Maloláctica": "Espontánea, con bacterias nativas",
      "Crianza": "Tanque inoxidable, sin paso por madera",
      "Embotellado": "26 de agosto de 2024"
    }
  },
  {
    id: "laconquista",
    bodega: "mariadelpilar",
    nombre: "La Conquista",
    linea: "Reserva · Blend",
    varietal: "50% Malbec · 30% Petit Verdot · 10% Cabernet Sauvignon · 10% Marselan",
    cosecha: "2022",
    img: "img/botellas/mariadelpilar-03-laconquista-bottle.jpg",
    cata:
      "Color rojo violáceo intenso. En nariz, equilibrio entre vino y madera: " +
      "cereza negra, guinda, ciruela, mora y una puntita de pimiento ahumado " +
      "junto a vainilla, tabaco rubio y chocolate. En boca, concentrado y " +
      "elegante, taninos dulces y redondos, buena persistencia.",
    ficha: {
      "Vendimia": "3ª semana de febrero, cosecha manual",
      "Suelo": "Franco arenoso",
      "Ubicación": "Beltrán – Santiago del Estero",
      "Fermentación": "Levaduras seleccionadas, en tinas plásticas y acero inoxidable",
      "Maloláctica": "Espontánea, con bacterias nativas",
      "Crianza": "12 meses en barrica francesa (80% del vino)",
      "Embotellado": "13 de diciembre de 2023"
    }
  },
  {
    id: "lamision",
    bodega: "mariadelpilar",
    nombre: "La Misión",
    linea: "Reserva · Malbec",
    varietal: "90% Malbec '23 · 5% Petit Verdot · 5% Malbec '22",
    cosecha: "2023",
    img: "img/botellas/mariadelpilar-04-lamision-bottle.png",
    cata:
      "Color rojo negruzco con notas violáceas. Vino elegante, de nariz " +
      "intensa: cereza negra y ciruela junto a vainilla y chocolate del paso " +
      "por madera. El 5% de Malbec viejo aporta complejidad. En boca, " +
      "concentrado, de taninos dulces y final largo y agradable.",
    ficha: {
      "Vendimia": "3ª semana de febrero, cosecha manual",
      "Suelo": "Franco arenoso",
      "Ubicación": "Beltrán – Santiago del Estero",
      "Fermentación": "Levaduras seleccionadas. Huevos de fermentación y acero inoxidable",
      "Maloláctica": "Espontánea, con bacterias nativas",
      "Crianza": "9 meses en barrica francesa (70% del vino)",
      "Embotellado": "8 de abril de 2025"
    }
  },
  {
    id: "lacanonizacion",
    bodega: "mariadelpilar",
    nombre: "La Canonización",
    linea: "Reserva · Petit Verdot",
    varietal: "95% Petit Verdot · 5% Marselan",
    cosecha: "2022",
    img: "img/botellas/mariadelpilar-05-lacanonizacion-bottle.jpg",
    cata:
      "Color rojo profundo con tonos violáceos. Aroma complejo, intenso a " +
      "frutos rojos y negros —ciruela, moras, arándanos— y notas especiadas: " +
      "clavo, canela y pimienta. En boca, voluminoso, taninos firmes " +
      "redondeados por la madera y final largo y persistente.",
    ficha: {
      "Vendimia": "3ª semana de febrero, cosecha manual",
      "Suelo": "Franco arenoso",
      "Ubicación": "Beltrán – Santiago del Estero",
      "Fermentación": "Levaduras seleccionadas, en tinas plásticas y acero inoxidable",
      "Maloláctica": "Espontánea, con bacterias nativas",
      "Crianza": "14 meses en barrica francesa (100% del vino)",
      "Embotellado": "25 de enero de 2024"
    }
  },
  {
    id: "kakuy",
    bodega: "mariadelpilar",
    nombre: "Kakuy",
    linea: "Joven · Malbec",
    varietal: "95% Malbec · 5% Marselan",
    cosecha: "2024",
    img: "img/botellas/mariadelpilar-06-kakuy-bottle.png",
    cata:
      "Color rojo con reflejos violetas, límpido y brillante. Intensidad media, " +
      "notas de cereza y ciruela negra, con vainilla y dulce de leche que " +
      "realzan la fruta. Entrada dulce, taninos redondos y buena acidez; final " +
      "de boca frutado.",
    ficha: {
      "Vendimia": "2ª semana de febrero, cosecha manual",
      "Suelo": "Franco arenoso",
      "Ubicación": "Beltrán – Santiago del Estero",
      "Fermentación": "Levaduras seleccionadas, en tanques de inoxidable",
      "Maloláctica": "Espontánea, con bacterias nativas",
      "Crianza": "Inoxidable con 30% de madera de cuarto uso (70% francesa, 30% americana)",
      "Embotellado": "7 de abril de 2025"
    }
  },
  {
    id: "andreatta-dulce",
    bodega: "michango",
    nombre: "Andreatta Dulce Natural",
    linea: "Blanco dulce natural",
    varietal: "50% Torrontés · 50% Moscatel",
    cosecha: "—",
    img: "img/botellas/michango-07-andreatta-dulce-natural-bottle.png",
    cata:
      "Delicado color amarillo con leves notas doradas. Aromas a melón, " +
      "durazno blanco y damascos maduros. En boca, frutal con notas de compota " +
      "y mermelada; excelente equilibrio entre acidez y dulzura natural.",
    ficha: {
      "Zona de cultivo": "Siján – Valle de Pomán – Catamarca",
      "Altura del viñedo": "1000 mts",
      "Edad del viñedo": "80 años",
      "Producción anual": "3000 botellas",
      "Enólogos": "Marcelo Moreno, Nicolás Rizza",
      "Maridaje": "Quesos fuertes, postres, picadas y sobremesas"
    }
  },
  {
    id: "andreatta-torrontes",
    bodega: "michango",
    nombre: "Andreatta Torrontés",
    linea: "Blanco",
    varietal: "100% Torrontés",
    cosecha: "—",
    img: "img/botellas/michango-08-andreatta-torrontes-bottle.png",
    cata:
      "Color amarillo claro con reflejos verdosos. Notas florales y cítricas, " +
      "de sabor fresco y vivaz, con acidez equilibrada y agradable.",
    ficha: {
      "Zona de cultivo": "Siján – Valle de Pomán – Catamarca",
      "Altura del viñedo": "1000 mts",
      "Edad del viñedo": "80 años",
      "Producción anual": "3000 botellas",
      "Enólogos": "Marcelo Moreno, Nicolás Rizza",
      "Maridaje": "Empanadas, humita, pollo asado, comida asiática y mariscos"
    }
  },
  {
    id: "andreatta-malbec",
    bodega: "michango",
    nombre: "Andreatta Malbec",
    linea: "Tinto",
    varietal: "100% Malbec",
    cosecha: "—",
    img: "img/botellas/michango-09-andreatta-malbec-bottle.png",
    cata:
      "Color rojo rubí intenso con notas violáceas. Aromas de frutos rojos con " +
      "mermelada y vainilla. Equilibrado, de taninos dulces y agradable final " +
      "de boca.",
    ficha: {
      "Zona de cultivo": "Siján – Valle de Pomán – Catamarca",
      "Altura del viñedo": "1000 mts",
      "Edad del viñedo": "80 años",
      "Producción anual": "6000 botellas",
      "Enólogos": "Marcelo Moreno, Nicolás Rizza",
      "Maridaje": "Quesos suaves, carnes rojas asadas y pastas con salsas suaves"
    }
  },
  {
    id: "sumak-criolla",
    bodega: "losamaichas",
    nombre: "Sumak Kawsay Criolla",
    linea: "Tinto · ancestral",
    varietal: "100% Criolla",
    cosecha: "—",
    img: "img/botellas/losamaichas-10-sumakkawsay-criolla-bottle.png",
    cata:
      "Muy aromático: frutas rojas como fresas, dátiles, rosas secas y notas " +
      "picantes. Un vino rústico pero de alta calidad y único, que debe " +
      "saborearse para ser entendido.",
    ficha: {
      "Origen": "Plantas ancestrales cultivadas en Amaicha por más de 400 años",
      "Vinificación": "Maceración de 3 semanas, levaduras autóctonas, sin roble",
      "Crianza": "14 meses en acero inoxidable + 12 meses en botella",
      "Elaboración": "Natural, métodos de la comunidad Los Amaichás"
    }
  },
  {
    id: "sumak-malbec",
    bodega: "losamaichas",
    nombre: "Sumak Kawsay Malbec",
    linea: "Tinto",
    varietal: "100% Malbec",
    cosecha: "—",
    img: "img/botellas/losamaichas-11-sumakkawsay-malbec-bottle.png",
    cata:
      "Intensamente aromático: cereza, frutos secos y grafito, con notas de " +
      "miel y chocolate del largo paso por barrica. Según los métodos " +
      "tradicionales, no se filtra ni refina, por lo que puede contener " +
      "residuos.",
    ficha: {
      "Vinificación": "Cosecha a mano; 50% en barrica de roble francés",
      "Crianza": "15 meses (50% con duelas de roble francés, 50% en barrica)",
      "Producción": "Limitada (15.000 botellas en la cosecha 2015)",
      "Elaboración": "Tradicional, sin filtrar ni refinar"
    }
  }
];

/* =========================================================
   LÓGICA DE LA PÁGINA
   ========================================================= */
const waLink = (texto) =>
  `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`;

const nombreBodega = (id) => (BODEGAS.find((b) => b.id === id) || {}).nombre || "";

document.addEventListener("DOMContentLoaded", () => {
  renderBodegas();
  renderFiltros();
  renderVinos("todos");
  setupModal();
  setupContacto();
  setupNav();
  document.getElementById("anio").textContent = new Date().getFullYear();
});

/* ---- Bodegas ---- */
function renderBodegas() {
  const cont = document.getElementById("bodegas-grid");
  cont.innerHTML = BODEGAS.map(
    (b) => `
    <article class="bodega-card">
      <span class="bodega-card__lugar">${b.lugar}</span>
      <h3 class="bodega-card__nombre">${b.nombre}</h3>
      <p class="bodega-card__texto">${b.historia}</p>
    </article>`
  ).join("");
}

/* ---- Filtros del catálogo ---- */
function renderFiltros() {
  const cont = document.getElementById("filtros");
  const botones = [
    { id: "todos", label: "Todos" },
    ...BODEGAS.map((b) => ({ id: b.id, label: b.nombre.replace(/^Bodega( Comunitaria)?|^Finca /, "").trim() }))
  ];
  cont.innerHTML = botones
    .map(
      (b, i) =>
        `<button class="filtro ${i === 0 ? "is-active" : ""}" data-bodega="${b.id}">${b.label}</button>`
    )
    .join("");
  cont.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro");
    if (!btn) return;
    cont.querySelectorAll(".filtro").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderVinos(btn.dataset.bodega);
  });
}

/* ---- Catálogo de vinos ---- */
function renderVinos(bodegaId) {
  const cont = document.getElementById("vinos-grid");
  const lista = bodegaId === "todos" ? VINOS : VINOS.filter((v) => v.bodega === bodegaId);
  cont.innerHTML = lista
    .map(
      (v) => `
    <article class="vino-card" data-id="${v.id}" tabindex="0" role="button" aria-label="Ver ficha de ${v.nombre}">
      <div class="vino-card__img">
        <img src="${v.img}" alt="${v.nombre} — ${nombreBodega(v.bodega)}" loading="lazy">
      </div>
      <div class="vino-card__body">
        <span class="vino-card__bodega">${nombreBodega(v.bodega)}</span>
        <h3 class="vino-card__nombre">${v.nombre}</h3>
        <p class="vino-card__varietal">${v.varietal}</p>
        <span class="vino-card__ver">Ver ficha</span>
      </div>
    </article>`
    )
    .join("");

  cont.querySelectorAll(".vino-card").forEach((card) => {
    const open = () => abrirModal(card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

/* ---- Modal de ficha ---- */
let modalEl, ultimoFoco;
function setupModal() {
  modalEl = document.getElementById("modal");
  modalEl.addEventListener("click", (e) => {
    if (e.target.dataset.close !== undefined) cerrarModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl.classList.contains("is-open")) cerrarModal();
  });
}

function abrirModal(id) {
  const v = VINOS.find((x) => x.id === id);
  if (!v) return;
  ultimoFoco = document.activeElement;
  const filas = Object.entries(v.ficha)
    .map(([k, val]) => `<div class="ficha__fila"><dt>${k}</dt><dd>${val}</dd></div>`)
    .join("");
  document.getElementById("modal-contenido").innerHTML = `
    <button class="modal__cerrar" data-close aria-label="Cerrar">&times;</button>
    <div class="modal__grid">
      <div class="modal__img"><img src="${v.img}" alt="${v.nombre}"></div>
      <div class="modal__info">
        <span class="modal__bodega">${nombreBodega(v.bodega)}</span>
        <h3 class="modal__nombre">${v.nombre}</h3>
        <p class="modal__linea">${v.linea}${v.cosecha && v.cosecha !== "—" ? " · Cosecha " + v.cosecha : ""}</p>
        <p class="modal__varietal">${v.varietal}</p>
        <p class="modal__cata">${v.cata}</p>
        <dl class="ficha">${filas}</dl>
        <a class="btn btn--wa" href="${waLink("¡Hola! Quiero consultar por el vino " + v.nombre + " (" + nombreBodega(v.bodega) + ").")}" target="_blank" rel="noopener">
          Consultar por WhatsApp
        </a>
      </div>
    </div>`;
  modalEl.classList.add("is-open");
  document.body.style.overflow = "hidden";
  modalEl.querySelector(".modal__cerrar").focus();
}

function cerrarModal() {
  modalEl.classList.remove("is-open");
  document.body.style.overflow = "";
  if (ultimoFoco) ultimoFoco.focus();
}

/* ---- Contacto / enlaces dinámicos ---- */
function setupContacto() {
  const wa = waLink("¡Hola Vinos Walco! Quiero hacer una consulta.");
  document.querySelectorAll("[data-wa]").forEach((a) => (a.href = wa));
  document.querySelectorAll("[data-ig]").forEach((a) => {
    a.href = `https://instagram.com/${CONTACTO.instagram}`;
    if (a.dataset.ig === "text") a.textContent = "@" + CONTACTO.instagram;
  });
  document.querySelectorAll("[data-email]").forEach((a) => {
    a.href = `mailto:${CONTACTO.email}`;
    if (a.dataset.email === "text") a.textContent = CONTACTO.email;
  });
}

/* ---- Navegación móvil + scroll suave ---- */
function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", false);
    })
  );
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  });
}
