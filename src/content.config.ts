import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une actualité = un fichier Markdown dans src/content/actus/
const actus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actus' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    thematique: z.enum(['mobilite', 'environnement', 'patrimoine', 'insertion', 'tiers-lieu']),
    resume: z.string(),
  }),
});

export const collections = { actus };
