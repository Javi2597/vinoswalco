# vinoswalco

Sitio de **Vinos Walco** — vinos de altura del norte argentino. Venta directa de vinos de autor (Los Amaichás, Michango, Finca María del Pilar).

Construido con [Astro](https://astro.build/). El catálogo y las bodegas se renderizan en build (HTML real para SEO); los datos viven separados de la lógica.

## Desarrollo

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor local (http://localhost:4321)
pnpm build        # generar sitio estático en dist/
pnpm preview      # previsualizar el build
```

## Estructura

```
src/
  data/        # contacto, bodegas y vinos (editables)
  components/  # secciones de la página
  layouts/     # <head> y shell del documento
  pages/       # index.astro + interactividad de cliente
  styles/      # global.css
public/img/    # imágenes (botellas)
_legacy/       # versión HTML/CSS/JS original (referencia)
```

Para editar vinos, bodegas o contacto, modificá los archivos de `src/data/`.
