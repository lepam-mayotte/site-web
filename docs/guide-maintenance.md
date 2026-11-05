# Guide de maintenance du site LEPAM Mayotte

Ce guide explique comment modifier le site **lepammayotte.fr** : ajouter une actualité et ses photos, changer un texte ou un lien, puis publier la modification.

Le site est construit avec **Astro**. Le code est sur **GitHub** (dépôt `lepam-mayotte/site-web`) et **Netlify** publie automatiquement le site à chaque envoi sur la branche `main`.

---

## 1. Avant de commencer (une seule fois par ordinateur)

Il faut :

- **VS Code** pour modifier les fichiers ;
- **Node.js** version 24 (https://nodejs.org) ;
- **Git**, et l'accès au dépôt GitHub `lepam-mayotte/site-web` (demander à un propriétaire de l'organisation GitHub).

Récupérer le projet et installer ses dépendances, dans un terminal :

```bash
git clone https://github.com/lepam-mayotte/site-web.git
cd site-web
npm install
```

Sur l'ordinateur qui a déjà le projet (dossier `Bureau/lepam-mayotte`), il suffit d'ouvrir ce dossier dans VS Code.

---

## 2. Voir le site sur son ordinateur

Dans VS Code, ouvrir le terminal (menu **Terminal → New Terminal**), puis :

```bash
git pull
npm run dev
```

- `git pull` récupère les dernières modifications publiées par les autres.
- `npm run dev` lance le site sur **http://localhost:4321**. La page se met à jour à chaque enregistrement de fichier.
- Pour arrêter : `Ctrl + C` dans le terminal.

> Si une nouvelle photo ou une nouvelle actualité n'apparaît pas, arrêter (`Ctrl + C`) puis relancer `npm run dev`.

---

## 3. Où se trouve quoi

| Je veux modifier… | Fichier ou dossier |
|---|---|
| Les actualités | `src/content/actus/` (un fichier `.md` par actualité) |
| Les photos d'une actualité | `src/assets/photos/actus/<nom-de-l-actualité>/` |
| Le texte d'un pôle (Tiers-lieu, Mobilité…) | `src/content/thematiques/<pôle>.md` |
| Les photos d'un pôle | `src/assets/photos/<pôle>/` |
| Les 3 photos en haut de l'accueil | `src/assets/photos/accueil/` (`01-…`, `02-…`, `03-…`) |
| La photo de la page L'association | `src/assets/photos/association/bandeau.jpg` |
| Coordonnées, réseaux sociaux, liens AssoConnect, mentions légales | `src/config/site.ts` |
| Chiffres clés, valeurs, partenaires, financeurs, Guid'Asso / FONJEP | `src/config/association.ts` |
| Logos des financeurs / partenaires | `src/assets/logos/financeurs/` et `src/assets/logos/partenaires/` |

On ne touche normalement pas aux dossiers `src/pages/`, `src/components/` et `src/layouts/` : ils contiennent la mise en page.

---

## 4. Ajouter une actualité

### 4.1 Créer l'actualité

Dans le terminal :

```bash
npm run nouvelle-actu
```

Le script pose quelques questions :

1. **Titre** de l'actualité.
2. **Date de publication** : appuyer sur Entrée pour garder la date du jour, ou taper une date au format `AAAA-MM-JJ` (ex. `2026-11-14`).
3. **Thématique** : `tiers-lieu`, `mobilite`, `insertion`, `patrimoine` ou `environnement`. L'actualité apparaîtra aussi sur la page de ce pôle.
4. **Événement à venir ?** `o` pour oui, `n` pour non. Si oui, la date de l'événement est demandée : l'actualité apparaîtra dans l'agenda « À venir ».

Le script crée deux choses :

- le fichier texte, par exemple `src/content/actus/2026-11-journee-portes-ouvertes.md` ;
- le dossier photos, par exemple `src/assets/photos/actus/2026-11-journee-portes-ouvertes/`.

### 4.2 Écrire le texte

Ouvrir le fichier `.md` créé dans VS Code. Il ressemble à ceci :

```markdown
---
titre: "Journée portes ouvertes au tiers-lieu"
date: 2026-11-14
thematique: tiers-lieu
resume: "Une ou deux phrases qui résument l'actualité."
photo: "Description de la photo du bandeau"
---

Texte de l'actualité. Laissez une ligne vide entre deux paragraphes.
```

- **Entre les deux lignes `---`** : les informations de l'actualité. Remplacer `resume` (affiché sur les cartes) et `photo` (description de la photo, utile aux personnes malvoyantes).
- **Sous le deuxième `---`** : le texte de l'actualité. Une ligne vide sépare deux paragraphes.

Pour un **événement**, le bloc contient aussi :

```markdown
evenement:
  date: 2026-11-14
  horaires: "9h – 12h"
  lieu: "Tiers-lieu LEPAM, Labattoir"
  # billetterie: https://asso.lepammayotte.fr/collect/...
```

Pour afficher un bouton **S'inscrire**, retirer le `#` devant `billetterie` et coller le lien du formulaire AssoConnect. Une fois la date passée, le site affiche automatiquement « Cet événement est passé » (à la prochaine publication).

Si on ne connaît que le **mois** (et pas le jour), ajouter `dateAuMois: true` sous la ligne `date` : le site affichera par exemple « novembre 2026 ».

### 4.3 Ajouter les photos de l'actualité

Déposer les photos dans le dossier créé par le script (`src/assets/photos/actus/<nom-de-l-actualité>/`) :

- **`bandeau.jpg`** : la photo principale. Elle s'affiche en grand en haut de l'actualité, sur sa carte et dans l'aperçu quand on partage le lien. De préférence **en paysage**.
- **Toutes les autres photos** forment la **galerie** en bas de l'actualité, avec agrandissement au clic. Elles sont classées par ordre alphabétique : mettre `01-`, `02-`… devant les noms pour imposer un ordre.

Aucun code à modifier : le site lit le dossier tout seul.

### 4.4 Règles pour les photos (partout sur le site)

- **Formats** : JPG, PNG ou WebP. Les photos HEIC d'iPhone doivent être exportées en JPG.
- **Noms** : en minuscules, sans accents ni espaces, avec des tirets. Ex. `atelier-cv-au-tiers-lieu.jpg`. Le nom sert de description de la photo : il doit dire ce qu'on y voit.
- **Poids** : idéalement moins de 5 Mo par photo. Le site les optimise automatiquement (conversion et redimensionnement), inutile de les compresser avant.
- **Droit à l'image** : ne publier que des photos autorisées, en particulier quand on reconnaît des enfants.

---

## 5. Autres modifications courantes

### Modifier le texte d'un pôle

Ouvrir `src/content/thematiques/<pôle>.md`. Le fichier contient le titre, le résumé, l'objectif, les chiffres, les actions, etc. Modifier uniquement le texte après les `:`.

**Piège fréquent** : si un texte contient « deux-points suivis d'un espace » (ex. `Tous les publics : familles`), il faut le mettre **entre guillemets** :

```markdown
public: "Tous les publics : familles, jeunes et habitants."
```

Sinon le site ne se construit plus (voir la section 7).

### Ajouter ou remplacer une photo d'un pôle

Dans `src/assets/photos/<pôle>/` : `bandeau.jpg` est la grande photo du haut de la page, les autres forment la galerie.

### Changer un lien, une coordonnée, un réseau social

Dans `src/config/site.ts`. Les liens AssoConnect sont regroupés dans le bloc `links`. Le réglage `assoconnectActif` indique si les boutons de don et d'adhésion mènent aux formulaires AssoConnect (`true`) ou à la page maintenance (`false`).

### Mettre à jour les chiffres clés ou les partenaires

Dans `src/config/association.ts`. Pour ajouter un logo de partenaire : déposer le fichier dans `src/assets/logos/partenaires/` (ex. `nouveau-partenaire.png`) puis ajouter une ligne dans la liste `partenaires` :

```ts
{ nom: 'Nom du partenaire', logo: 'nouveau-partenaire' },
```

---

## 6. Publier la modification (GitHub → Netlify)

### 6.1 Vérifier avant de publier

Toujours regarder le résultat sur http://localhost:4321, puis lancer :

```bash
npm run build
```

Si la dernière ligne indique **`Complete!`**, tout va bien. S'il y a une erreur, ne pas publier : voir la section 7.

### 6.2 Envoyer sur GitHub

Dans le terminal :

```bash
git add -A
git commit -m "Ajoute l'actualité Journée portes ouvertes"
git push
```

- `git add -A` : prépare tous les fichiers modifiés ou ajoutés.
- `git commit -m "…"` : enregistre une version avec un message qui dit **ce qui a changé**.
- `git push` : envoie sur GitHub.

On peut aussi le faire sans terminal, dans VS Code : onglet **Source Control** (icône de branche à gauche) → écrire le message → **Commit** → **Sync Changes**.

### 6.3 Mise en ligne automatique

Dès que le `git push` est fait, **Netlify reconstruit et publie le site tout seul**, en 1 à 2 minutes. Recharger ensuite https://lepammayotte.fr pour voir la modification (en navigation privée si l'ancienne version reste affichée).

Pour suivre la publication : https://app.netlify.com → projet **lepam-site** → **Deploys**. Un déploiement en vert (« Published ») est en ligne ; en rouge, il a échoué et **l'ancienne version reste en ligne** (rien n'est cassé pour les visiteurs).

### 6.4 Pour des changements importants : passer par une branche

Pour une modification importante (nouvelle page, refonte d'une section), mieux vaut travailler sur une **branche**, sans toucher au site en ligne :

```bash
git switch -c nom-de-ma-branche
# … modifications, puis :
git add -A
git commit -m "Description du changement"
git switch main
git merge nom-de-ma-branche
git push
```

Le site en ligne n'est mis à jour qu'au `git push` sur `main`.

---

## 7. En cas de problème

| Problème | Solution |
|---|---|
| `npm run build` affiche une erreur avec un nom de fichier `.md` | Une ligne entre les `---` est mal écrite. Le plus souvent : un texte contenant `: ` à mettre entre guillemets, ou une date mal formée (format `AAAA-MM-JJ`). |
| Une photo n'apparaît pas | Vérifier qu'elle est dans le bon dossier, au format JPG/PNG/WebP, puis relancer `npm run dev`. |
| `git push` est refusé | Faire d'abord `git pull`, puis à nouveau `git push`. |
| Le site en ligne n'a pas changé | Regarder l'onglet **Deploys** sur Netlify. S'il est rouge, cliquer dessus pour voir l'erreur. Sinon, vider le cache ou tester en navigation privée. |
| Revenir en arrière après une mauvaise publication | `git revert HEAD` puis `git push` : annule la dernière version et republie la précédente. |

---

## 8. Ce qu'il ne faut pas toucher

- **Chez Gandi** (nom de domaine) : ne pas modifier les enregistrements MX, TXT, `gm1/gm2/gm3._domainkey`, `webmail` et SRV, sinon **les e-mails `@lepammayotte.fr` s'arrêtent**. Ne jamais remplacer les serveurs de noms Gandi par ceux de Netlify.
- **`netlify.toml`** : il contient les règles de sécurité et les redirections des anciennes adresses.
- **Les comptes** (GitHub, Netlify, Gandi, AssoConnect) doivent rester au nom de l'association, avec au moins deux personnes ayant accès.
