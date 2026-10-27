// Crée une nouvelle actualité : npm run nouvelle-actu
// Pose quelques questions, puis crée le fichier Markdown et le dossier de photos.
import { createInterface } from 'node:readline';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';

const thematiques = readdirSync('src/content/thematiques')
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace('.md', ''));

// Lecture ligne par ligne : fonctionne au clavier comme avec des réponses envoyées d'un coup
const rl = createInterface({ input: process.stdin });
const lignes = rl[Symbol.asyncIterator]();
const demander = async (question) => {
  process.stdout.write(question);
  const { value, done } = await lignes.next();
  if (done) {
    console.error('\nCréation annulée.');
    process.exit(1);
  }
  return value.trim();
};

const titre = await demander('Titre de l’actualité : ');
const aujourdhui = new Date().toISOString().slice(0, 10);
const date = (await demander(`Date de publication (${aujourdhui}) : `)) || aujourdhui;
console.log(`Thématiques : ${thematiques.join(', ')}`);
let thematique = '';
while (!thematiques.includes(thematique)) thematique = await demander('Thématique : ');
const evenement = (await demander('Est-ce un événement à venir ? (o/n) : ')).toLowerCase() === 'o';
const dateEvenement = evenement ? await demander("Date de l'événement (AAAA-MM-JJ) : ") : '';
rl.close();

// « Journées du patrimoine 2026 » → « journees-du-patrimoine-2026 »
const slug = titre
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '') // retire les accents
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
const id = `${date.slice(0, 7)}-${slug}`;
const fichier = `src/content/actus/${id}.md`;

if (existsSync(fichier)) {
  console.error(`Le fichier ${fichier} existe déjà.`);
  process.exit(1);
}

const blocEvenement = evenement
  ? `evenement:
  date: ${dateEvenement || date}
  horaires: "9h – 12h"
  lieu: "À préciser"
  # billetterie: https://www.lepammayotte.fr/collect/...
`
  : '';

writeFileSync(
  fichier,
  `---
titre: "${titre.replace(/"/g, '\\"')}"
date: ${date}
thematique: ${thematique}
resume: "Une ou deux phrases qui résument l'actualité."
photo: "Description de la photo du bandeau"
${blocEvenement}---

Texte de l'actualité. Laissez une ligne vide entre deux paragraphes.
`,
);
mkdirSync(`src/assets/photos/actus/${id}`, { recursive: true });

console.log(`
Actualité créée :
  - texte  : ${fichier}
  - photos : src/assets/photos/actus/${id}/ (bandeau.jpg + autres photos pour la galerie)
`);
