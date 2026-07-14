// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.axiomatelier.com', // <-- Replace this with your actual website domain
  integrations: [sitemap()]
});