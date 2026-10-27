// Lit automatiquement les photos de src/assets/photos/<dossier>/.
// - bandeau.jpg (ou .png, .webp) sert d'image principale de la page ;
// - toutes les autres photos forment la galerie, triées par nom de fichier.
// Le texte alternatif est déduit du nom du fichier : « marche-nosy-be.jpg » → « Marche nosy be ».

import type { ImageMetadata } from 'astro';

const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export interface PhotoDossier {
  src: ImageMetadata;
  alt: string;
}

const nomDeFichier = (chemin: string) => chemin.split('/').pop()!.replace(/\.[^.]+$/, '');

const texteAlternatif = (nom: string) => {
  const texte = nom.replace(/^\d+[-_]/, '').replace(/[-_]+/g, ' ').trim();
  return texte.charAt(0).toUpperCase() + texte.slice(1);
};

export function photosDu(dossier: string) {
  const photos = Object.entries(fichiers)
    .filter(([chemin]) => chemin.startsWith(`/src/assets/photos/${dossier}/`))
    .sort(([a], [b]) => a.localeCompare(b, 'fr'))
    .map(([chemin, module]) => ({ nom: nomDeFichier(chemin), src: module.default }));

  const bandeau = photos.find((p) => p.nom.toLowerCase() === 'bandeau')?.src;
  const galerie: PhotoDossier[] = photos
    .filter((p) => p.nom.toLowerCase() !== 'bandeau')
    .map((p) => ({ src: p.src, alt: texteAlternatif(p.nom) }));

  return { bandeau, galerie };
}
