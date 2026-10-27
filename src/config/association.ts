// Chiffres clés et partenaires de l'association, affichés sur l'accueil.
// Le contenu des thématiques est dans src/content/thematiques/.

// Chiffres repris des publications de l'association (à faire valider).
export const chiffres = [
  { valeur: '2022', label: 'année de création' },
  { valeur: '100', label: 'visiteurs aux Journées du patrimoine 2025' },
  { valeur: '57', label: 'enfants à la journée plage des Badamiers' },
  { valeur: '20+', label: 'partenaires publics et associatifs' },
];

export const partenaires = [
  'Ville de Dzaoudzi-Labattoir',
  'Préfecture de Mayotte',
  'Fondation de France',
  'FONJEP',
  'Erasmus+ Jeunesse & Sport',
  'DRAJES Mayotte',
  'CRESS Mayotte',
  'CNRS',
  'Croix-Rouge Mayotte',
  'Communauté de communes de Petite-Terre',
];

// Financeurs, affichés avec leur logo sur l'accueil.
// Le logo est lu dans src/assets/logos/financeurs/<logo>.(svg|png|jpg|webp) ;
// tant qu'il n'est pas déposé, le nom s'affiche à sa place.
export const financeurs = [
  { nom: 'Financé par l’Union européenne · NextGenerationEU', logo: 'union-europeenne' },
  { nom: 'Plan d’investissement dans les compétences, République française et Agence nationale de la cohésion des territoires', logo: 'pic-republique-anct' },
  { nom: 'Préfet de Mayotte', logo: 'prefet-de-mayotte' },
  { nom: 'DEFFINOV · Tiers-lieux de formation', logo: 'deffinov' },
];

// Textes de la page « L'association » (repris de l'ancien site, à faire valider).
export const presentation = {
  creation: 'juillet 2022',
  histoire: [
    'LEPAM, pour « Luttons Ensemble pour un Avenir Meilleur », est née en juillet 2022 à Petite-Terre, avec une conviction : la jeunesse de Mayotte a tout pour réussir, à condition de lui en donner les moyens.',
    'L’association conçoit et met en œuvre des projets locaux et internationaux d’éducation populaire, de jeunesse et de solidarité. Elle s’adresse en priorité aux jeunes, mais aussi aux adultes et aux personnes âgées.',
  ],
  mission:
    'Favoriser l’inclusion sociale, l’insertion professionnelle et le vivre-ensemble, et lutter contre toutes les formes de discrimination.',
};

export const valeurs = [
  { titre: 'Coopération', texte: 'Nous agissons dans l’esprit de l’économie sociale et solidaire, avec les habitants et les acteurs du territoire.' },
  { titre: 'Éducation', texte: 'La formation et l’accès à l’emploi des jeunes sont au cœur de nos projets.' },
  { titre: 'Solidarité', texte: 'Nous renforçons la cohésion sociale et soutenons les plus fragiles.' },
  { titre: 'Proximité', texte: 'Une action sociale ancrée dans les quartiers de Petite-Terre, au plus près des besoins.' },
];

// Membres de l'association qui font vivre ses projets
export const membres = [
  { titre: 'Membres fondateurs', texte: 'À l’origine du projet associatif en 2022.' },
  { titre: 'Bureau', texte: 'Il pilote l’association et ses décisions au quotidien.' },
  { titre: 'Adhérents', texte: 'Ils soutiennent le projet et participent à la vie de l’association.' },
  { titre: 'Membres bienfaiteurs', texte: 'Ils apportent un soutien financier ou matériel à nos actions.' },
];

// Équipe affichée sur la page « L'association ». Section masquée tant que la liste est vide.
// photo : nom du fichier (sans extension) déposé dans src/assets/photos/equipe/
// Exemple : { nom: 'Prénom Nom', role: 'Président·e', photo: 'prenom-nom' },
export const equipe: { nom: string; role: string; photo?: string }[] = [];
