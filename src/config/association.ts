// Chiffres clés et partenaires de l'association, affichés sur l'accueil.
// Le contenu des thématiques est dans src/content/thematiques/.

// Chiffres clés 2025, repris du rapport d'activité. Les 4 premiers s'affichent sur l'accueil,
// tous sur la page « L'association ».
export const chiffres = [
  { valeur: '+6 000', label: 'usagers accueillis au tiers-lieu de compétences' },
  { valeur: '+2 500', label: "bénéficiaires de l'aide alimentaire" },
  { valeur: '354', label: "jeunes mobilisés par Quartiers d'Été" },
  { valeur: '238', label: "personnes accompagnées vers l'emploi" },
  { valeur: '115', label: 'enfants accompagnés' },
  { valeur: '24', label: 'jeunes en mobilité internationale' },
  { valeur: '210', label: 'participants aux actions de patrimoine' },
  { valeur: '15', label: 'associations accompagnées' },
];

// Partenaires : logo dans src/assets/logos/partenaires/ ; sans logo, le nom s'affiche.
export const partenaires = [
  { nom: "Guid'Asso Mayotte", logo: 'guid-asso' },
  { nom: 'CRESS Mayotte', logo: 'cress-mayotte' },
  { nom: 'World Central Kitchen', logo: 'world-central-kitchen' },
  { nom: 'Nestlé', logo: 'nestle' },
  { nom: 'Grow e.V.', logo: 'grow', petit: true },
  { nom: "Mob'Helios Mayotte", logo: 'mob-helios' },
  { nom: 'Apave Camas formation', logo: 'apave-camas-formation' },
  { nom: 'Ville de Dzaoudzi-Labattoir', logo: 'ville-de-dzaoudzi-labattoir' },
  { nom: 'France Travail', logo: 'france-travail' },
  { nom: 'Mission Locale de Mayotte', logo: 'mission-locale' },
  { nom: 'Action & Solidarité Mayotte Sud-Ouest' },
];

// Financeurs : logo dans src/assets/logos/financeurs/ ; sans logo, le nom s'affiche.
export const financeurs = [
  { nom: 'Financé par l’Union européenne · NextGenerationEU', logo: 'union-europeenne' },
  { nom: 'Plan d’investissement dans les compétences, République française et Agence nationale de la cohésion des territoires', logo: 'pic-republique-anct' },
  { nom: 'Préfet de Mayotte', logo: 'prefet-de-mayotte' },
  { nom: 'DEFFINOV · Tiers-lieux de formation', logo: 'deffinov' },
  { nom: 'DEETS Mayotte', logo: 'deets' },
  { nom: 'Fondation de France', logo: 'fondation-de-france' },
  { nom: 'Erasmus+ Jeunesse & Sport', logo: 'erasmus-plus' },
  { nom: 'FONJEP Solidarité internationale', logo: 'fonjep' },
  { nom: 'Agence du Service Civique', logo: 'agence-service-civique' },
  { nom: 'Délégation régionale académique à la jeunesse, à l’engagement et aux sports', logo: 'drajes' },
  { nom: 'Direction des affaires culturelles', logo: 'direction-affaires-culturelles' },
  { nom: 'Communauté de communes de Petite-Terre', logo: 'communaute-de-communes-petite-terre' },
  { nom: 'Cité éducative de Petite-Terre', logo: 'cite-educative' },
  { nom: 'Startup Europe, Commission européenne', logo: 'startup-europe' },
];

// Textes de la page « L'association », repris du rapport d'activité 2025.
export const presentation = {
  creation: 'juillet 2022',
  histoire: [
    'LEPAM, pour « Luttons Ensemble pour un Avenir Meilleur », est née en juillet 2022 sous l’impulsion de huit jeunes mahorais désireux de contribuer au développement de leur territoire. Face au manque de structures inclusives pour la jeunesse, ils ont choisi d’agir et de créer un espace d’engagement, d’accompagnement et d’espoir.',
    'L’association s’appuie sur trois piliers : jeunesse et éducation populaire, insertion professionnelle et mobilité. Ses locaux, dont son tiers-lieu de compétences, sont à Labattoir, en Petite-Terre, mais ses actions s’adressent à toute la population de Mayotte.',
  ],
  mission: 'Œuvrer pour un avenir plus équitable, plus inclusif et plus durable, au service de la jeunesse mahoraise et du développement du territoire.',
};

export const valeurs = [
  { titre: 'Solidarité', texte: 'Agir pour réduire les inégalités et accompagner les publics les plus fragiles.' },
  { titre: 'Engagement', texte: 'Encourager chaque jeune à devenir acteur de son parcours et de son avenir.' },
  { titre: 'Ouverture', texte: 'Favoriser la mobilité, la découverte et l’ouverture au monde.' },
  { titre: 'Éducation', texte: 'Faire de l’apprentissage un levier d’émancipation et de réussite.' },
  { titre: 'Innovation', texte: 'Proposer des réponses nouvelles et adaptées aux réalités du territoire.' },
];

// Actions de solidarité menées après le cyclone Chido
export const solidarite = {
  texte: 'Face aux difficultés sociales accentuées par le cyclone Chido, LEPAM s’est mobilisée pour les populations les plus vulnérables : denrées alimentaires, produits d’hygiène, vêtements et fournitures scolaires.',
  resultat: 'Plus de 2 500 bénéficiaires en 2025, avec le soutien de la DEETS, de la Fondation de France, de World Central Kitchen, de Nestlé et d’Action & Solidarité Mayotte Sud-Ouest.',
};

// Les personnes qui font vivre l'association en 2025
export const forces = [
  { valeur: '38', label: 'bénévoles' },
  { valeur: '25', label: 'volontaires en service civique' },
  { valeur: '4', label: 'salariés' },
  { valeur: '2', label: 'alternants' },
  { valeur: '4', label: 'contrats PEC' },
];

// Équipe affichée sur la page « L'association ». Section masquée tant que la liste est vide.
// photo : nom du fichier (sans extension) déposé dans src/assets/photos/equipe/
// Exemple : { nom: 'Prénom Nom', role: 'Président·e', photo: 'prenom-nom' },
export const equipe: { nom: string; role: string; photo?: string }[] = [];

// Réseaux et reconnaissances de l'association, mis en avant sur l'accueil et « L'association ».
// logo : nom du fichier (sans extension) déposé dans src/assets/logos/reseaux/
export const reseaux = [
  {
    id: 'guid-asso',
    nom: "Guid'Asso",
    logo: 'guid-asso',
    court: "Structure labellisée Guid'Asso Mayotte",
    presentation:
      "Guid'Asso est un réseau national de proximité, co-construit par l'État et Le Mouvement associatif. Il propose un service gratuit et accessible à tous : bénévoles, dirigeants, salariés ou porteurs de projet, quels que soient la taille ou le secteur de l'association.",
    role: "Membre labellisé, LEPAM met son expertise au service des associations de tout le territoire mahorais. Nous sommes spécialisés dans la mobilité internationale (projets Erasmus+ et FONJEP) : en 2025, nous avons accompagné 15 associations, dont 3 ont concrétisé leur projet de mobilité.",
    points: [
      'Démarches administratives : création, statuts, Le Compte Asso',
      'Recherche de financements : subventions et partenariats',
      'Structuration de projets : gouvernance, recrutement, formation des bénévoles',
    ],
  },
  {
    id: 'fonjep',
    nom: 'FONJEP',
    logo: 'fonjep',
    court: 'Association marraine FONJEP',
    presentation:
      "Une association marraine est une structure clé des dispositifs de solidarité internationale du FONJEP : JSI (Jeunes de Solidarité Internationale) et VVVSI (Ville, Vie, Vacances / Solidarité Internationale).",
    role: "LEPAM est l'une des deux associations marraines de Mayotte, et s'appuie sur ses mobilités internationales pour aider les associations à monter leurs projets : méthode, financements, préparation des jeunes et suivi.",
    points: ['JSI : Jeunes de Solidarité Internationale', 'VVVSI : Ville, Vie, Vacances / Solidarité Internationale'],
  },
];
