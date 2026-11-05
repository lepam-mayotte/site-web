# Site de LEPAM Mayotte

Site de l'association LEPAM Mayotte, en ligne sur https://lepammayotte.fr.

- Construit avec [Astro](https://astro.build) et Tailwind CSS.
- Hébergé sur Netlify : chaque `git push` sur la branche `main` met le site à jour.
- Les adhésions, dons et billetterie restent gérés sur AssoConnect.

**Pour modifier le site (actualités, photos, textes, publication) : voir [docs/guide-maintenance.md](docs/guide-maintenance.md).**

## Commandes

| Commande | Rôle |
|---|---|
| `npm install` | Installe les dépendances (une seule fois) |
| `npm run dev` | Affiche le site en local sur http://localhost:4321 |
| `npm run nouvelle-actu` | Crée une nouvelle actualité et son dossier photos |
| `npm run build` | Vérifie que le site se construit sans erreur |
