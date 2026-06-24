// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 'site' es el dominio real: lo usa el canonical.
  // El sitemap es un archivo estático en public/sitemap.xml (sitio de 1 página).
  site: 'https://vinoswalco.com.ar',
});
