import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une thématique = un fichier Markdown dans src/content/thematiques/.
// Le nom du fichier donne l'adresse de la page : mobilite.md → /actions/mobilite
// Les photos sont lues dans src/assets/photos/<même nom>/ (bandeau.jpg + galerie).
const thematiques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thematiques' }),
  schema: z.object({
    titre: z.string(),
    ordre: z.number(), // position dans les menus et les grilles
    accroche: z.string(),
    resume: z.string(),
    photo: z.string(), // description de la photo du bandeau (texte alternatif)
    objectif: z.string(),
    public: z.string(),
    chiffres: z.array(z.object({ valeur: z.string(), label: z.string() })).default([]),
    titreActions: z.string().default('Ce que nous faisons'),
    actions: z.array(z.object({ titre: z.string(), texte: z.string() })).default([]),
    // Services proposés, avec une liste facultative (ex. matériel disponible) (facultatif)
    services: z
      .array(z.object({ titre: z.string(), texte: z.string(), elements: z.array(z.string()).default([]) }))
      .default([]),
    // À qui s'adressent les services (facultatif)
    publics: z.array(z.string()).default([]),
    // Adresse et position GPS, pour afficher une carte (facultatif)
    lieu: z
      .object({ adresse: z.string(), horaires: z.string().optional(), lat: z.number(), lon: z.number() })
      .optional(),
    // Le bouton principal mène à /contact, sauf si « bouton » et « lien » sont précisés
    appel: z.object({
      titre: z.string(),
      texte: z.string(),
      bouton: z.string().default('Participer'),
      lien: z.string().default('/contact'),
    }),
  }),
});

// Une actualité = un fichier Markdown dans src/content/actus/
const actus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actus' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    thematique: reference('thematiques'),
    resume: z.string(),
  }),
});

export const collections = { thematiques, actus };
