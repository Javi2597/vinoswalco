/* =========================================================
   VINOS WALCO — catálogo de vinos (EDITAR)
   Las imágenes viven en public/img/botellas/ y se referencian
   con ruta absoluta desde la raíz del sitio ("/img/...").
   ========================================================= */

export const VINOS = [
  {
    id: "enraizado",
    bodega: "mariadelpilar",
    nombre: "Enraizado",
    linea: "Joven · Marselan",
    varietal: "95% Marselan · 5% Syrah",
    cosecha: "2023",
    img: "/img/botellas/mariadelpilar-01-enraizado-bottle.jpg",
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
      "Embotellado": "25 de enero de 2024",
    },
  },
  {
    id: "quilla",
    bodega: "mariadelpilar",
    nombre: "Quilla",
    linea: "Joven · Blend",
    varietal: "50% Malbec · 35% Petit Verdot · 15% Syrah",
    cosecha: "2023",
    img: "/img/botellas/mariadelpilar-02-quilla-bottle.jpg",
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
      "Embotellado": "26 de agosto de 2024",
    },
  },
  {
    id: "laconquista",
    bodega: "mariadelpilar",
    nombre: "La Conquista",
    linea: "Reserva · Blend",
    varietal: "50% Malbec · 30% Petit Verdot · 10% Cabernet Sauvignon · 10% Marselan",
    cosecha: "2022",
    img: "/img/botellas/mariadelpilar-03-laconquista-bottle.jpg",
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
      "Embotellado": "13 de diciembre de 2023",
    },
  },
  {
    id: "lamision",
    bodega: "mariadelpilar",
    nombre: "La Misión",
    linea: "Reserva · Malbec",
    varietal: "90% Malbec '23 · 5% Petit Verdot · 5% Malbec '22",
    cosecha: "2023",
    img: "/img/botellas/mariadelpilar-04-lamision-bottle.png",
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
      "Embotellado": "8 de abril de 2025",
    },
  },
  {
    id: "lacanonizacion",
    bodega: "mariadelpilar",
    nombre: "La Canonización",
    linea: "Reserva · Petit Verdot",
    varietal: "95% Petit Verdot · 5% Marselan",
    cosecha: "2022",
    img: "/img/botellas/mariadelpilar-05-lacanonizacion-bottle.jpg",
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
      "Embotellado": "25 de enero de 2024",
    },
  },
  {
    id: "kakuy",
    bodega: "mariadelpilar",
    nombre: "Kakuy",
    linea: "Joven · Malbec",
    varietal: "95% Malbec · 5% Marselan",
    cosecha: "2024",
    img: "/img/botellas/mariadelpilar-06-kakuy-bottle.png",
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
      "Embotellado": "7 de abril de 2025",
    },
  },
  {
    id: "andreatta-dulce",
    bodega: "michango",
    nombre: "Andreatta Dulce Natural",
    linea: "Blanco dulce natural",
    varietal: "50% Torrontés · 50% Moscatel",
    cosecha: "—",
    img: "/img/botellas/michango-07-andreatta-dulce-natural-bottle.png",
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
      "Maridaje": "Quesos fuertes, postres, picadas y sobremesas",
    },
  },
  {
    id: "andreatta-torrontes",
    bodega: "michango",
    nombre: "Andreatta Torrontés",
    linea: "Blanco",
    varietal: "100% Torrontés",
    cosecha: "—",
    img: "/img/botellas/michango-08-andreatta-torrontes-bottle.png",
    cata:
      "Color amarillo claro con reflejos verdosos. Notas florales y cítricas, " +
      "de sabor fresco y vivaz, con acidez equilibrada y agradable.",
    ficha: {
      "Zona de cultivo": "Siján – Valle de Pomán – Catamarca",
      "Altura del viñedo": "1000 mts",
      "Edad del viñedo": "80 años",
      "Producción anual": "3000 botellas",
      "Enólogos": "Marcelo Moreno, Nicolás Rizza",
      "Maridaje": "Empanadas, humita, pollo asado, comida asiática y mariscos",
    },
  },
  {
    id: "andreatta-malbec",
    bodega: "michango",
    nombre: "Andreatta Malbec",
    linea: "Tinto",
    varietal: "100% Malbec",
    cosecha: "—",
    img: "/img/botellas/michango-09-andreatta-malbec-bottle.png",
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
      "Maridaje": "Quesos suaves, carnes rojas asadas y pastas con salsas suaves",
    },
  },
  {
    id: "sumak-criolla",
    bodega: "losamaichas",
    nombre: "Sumak Kawsay Criolla",
    linea: "Tinto · ancestral",
    varietal: "100% Criolla",
    cosecha: "—",
    img: "/img/botellas/losamaichas-10-sumakkawsay-criolla-bottle.png",
    cata:
      "Muy aromático: frutas rojas como fresas, dátiles, rosas secas y notas " +
      "picantes. Un vino rústico pero de alta calidad y único, que debe " +
      "saborearse para ser entendido.",
    ficha: {
      "Origen": "Plantas ancestrales cultivadas en Amaicha por más de 400 años",
      "Vinificación": "Maceración de 3 semanas, levaduras autóctonas, sin roble",
      "Crianza": "14 meses en acero inoxidable + 12 meses en botella",
      "Elaboración": "Natural, métodos de la comunidad Los Amaichás",
    },
  },
  {
    id: "sumak-malbec",
    bodega: "losamaichas",
    nombre: "Sumak Kawsay Malbec",
    linea: "Tinto",
    varietal: "100% Malbec",
    cosecha: "—",
    img: "/img/botellas/losamaichas-11-sumakkawsay-malbec-bottle.png",
    cata:
      "Intensamente aromático: cereza, frutos secos y grafito, con notas de " +
      "miel y chocolate del largo paso por barrica. Según los métodos " +
      "tradicionales, no se filtra ni refina, por lo que puede contener " +
      "residuos.",
    ficha: {
      "Vinificación": "Cosecha a mano; 50% en barrica de roble francés",
      "Crianza": "15 meses (50% con duelas de roble francés, 50% en barrica)",
      "Producción": "Limitada (15.000 botellas en la cosecha 2015)",
      "Elaboración": "Tradicional, sin filtrar ni refinar",
    },
  },
];
