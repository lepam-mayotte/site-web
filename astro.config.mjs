// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Adresse officielle du site : sert au sitemap, aux adresses canoniques et aux aperçus de partage
  site: 'https://lepammayotte.fr',
  // Scripts et styles toujours dans des fichiers séparés (jamais intégrés dans le HTML),
  // pour permettre une politique de sécurité stricte (Content-Security-Policy, voir netlify.toml)
  build: {
    inlineStylesheets: 'never',
    // association.html plutôt que association/index.html : Netlify sert /association sans redirection
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },

  integrations: [
    react(),
    // Pages techniques exclues du sitemap
    sitemap({ filter: (page) => !/\/(maintenance|404)(\.html)?$/.test(page) }),
  ]
});