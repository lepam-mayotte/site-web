// Configuration centrale du site : coordonnées, menu, liens AssoConnect.
// Si un formulaire AssoConnect change d'adresse, c'est ici qu'on le modifie.

export const site = {
  name: 'LEPAM Mayotte',
  fullName: 'Luttons Ensemble pour un Avenir Meilleur à Mayotte',
  description:
    "Association de Petite-Terre engagée pour l'éducation, la mobilité, l'insertion et la solidarité à Mayotte.",
  address: '53 boulevard des Amoureux, 97615 Labattoir',
  email: 'contact@lepammayotte.com', // À confirmer avec l'association
  socials: {
    instagram: 'https://www.instagram.com/lepam_976',
    youtube: 'https://www.youtube.com/@lepam976',
    facebook: '', // À compléter
  },
};

// À la bascule du domaine, remplacer www.lepammayotte.fr par le sous-domaine AssoConnect.
const assoconnect = 'https://www.lepammayotte.fr';

export const links = {
  don: `${assoconnect}/collect/donation/01HK0J16JRJV40FZV0AE1GMBVC/campagne-de-dons-pour-soutenir-nos-projets-a-mayotte`,
  adhesion: `${assoconnect}/page/3005861-adhesion`, // À remplacer par l'URL /collect/... du formulaire
  connexion: `${assoconnect}/contacts/login`, // Connexion des administrateurs à AssoConnect
};

export const nav = [
  { label: "L'association", href: '/association' },
  { label: 'Nos actions', href: '/actions' },
  { label: 'Actualités', href: '/actualites' },
  { label: "S'engager", href: '/s-engager' },
  { label: 'Contact', href: '/contact' },
];
