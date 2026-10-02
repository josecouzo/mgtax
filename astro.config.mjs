// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: SITE = https://<usuario>.github.io, BASE = /<nombre-repo>
// (el workflow de deploy los inyecta; en local se usan los valores por defecto)
export default defineConfig({
  site: process.env.SITE ?? 'https://mgtaxmakerllc.com',
  base: process.env.BASE ?? '/',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
