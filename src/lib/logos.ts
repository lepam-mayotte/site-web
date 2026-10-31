// Lit les logos de src/assets/logos/<dossier>/ à partir du nom de fichier, sans extension.

import type { ImageMetadata } from 'astro';

const fichiers = import.meta.glob<{ default: ImageMetadata }>('/src/assets/logos/**/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
});

export function logoDans(dossier: string, nom: string) {
  return Object.entries(fichiers).find(
    ([chemin]) => chemin.startsWith(`/src/assets/logos/${dossier}/`) && chemin.split('/').pop()!.replace(/\.[^.]+$/, '') === nom,
  )?.[1].default;
}
