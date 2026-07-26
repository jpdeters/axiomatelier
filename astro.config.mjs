// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // <-- Replace this with your actual website domain
  site: 'https://axiomatelier.com',

  integrations: [sitemap()],
  adapter: cloudflare()
});