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
