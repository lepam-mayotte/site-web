// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Scripts et styles toujours dans des fichiers séparés (jamais intégrés dans le HTML),
  // pour permettre une politique de sécurité stricte (Content-Security-Policy, voir netlify.toml)
  build: {
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },

  integrations: [react()]
});
