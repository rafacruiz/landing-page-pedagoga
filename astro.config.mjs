// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ✏️ Cambia esta URL por el dominio definitivo cuando lo tengas.
// Se usa para el sitemap, el robots.txt y las etiquetas canónicas (SEO).
const SITE_URL = 'https://www.tudominio.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
