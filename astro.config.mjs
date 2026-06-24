// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 'site' es el dominio real: lo usan canonical y el sitemap.
  site: 'https://vinoswalco.com.ar',
  // @astrojs/sitemap genera /sitemap-index.xml + /sitemap-0.xml en cada build.
  integrations: [sitemap()],
});
