// Configuration centrale du site : coordonnées, menu, liens AssoConnect.
// Si un formulaire AssoConnect change d'adresse, c'est ici qu'on le modifie.

export const site = {
  name: 'LEPAM Mayotte',
  fullName: 'Luttons Ensemble pour un Avenir Meilleur à Mayotte',
  description:
    "Association de Petite-Terre engagée pour l'éducation, la mobilité, l'insertion et la solidarité à Mayotte.",
  address: '53 boulevard des Amoureux, 97615 Labattoir',
  email: 'lepam@lepammayotte.com',
  telephone: '02 69 64 04 93',
  telephoneLien: 'tel:+262269640493', // format international, pour appeler depuis n'importe quel téléphone
  // Un réseau sans adresse n'est pas affiché
  socials: [
    { nom: 'Facebook', url: '' }, // À compléter
    { nom: 'Instagram', url: 'https://www.instagram.com/lepam_976' },
    { nom: 'LinkedIn', url: '' }, // À compléter
    { nom: 'YouTube', url: 'https://www.youtube.com/@lepam976' },
  ],
};

// Informations légales, affichées dans les mentions légales (« À compléter » tant qu'elles sont vides)
export const legal = {
  forme: 'Association loi 1901',
  rna: '', // numéro RNA, commence par W (registre des associations)
  siret: '', // si l'association en a un
  siege: site.address, // à modifier si le siège est différent du tiers-lieu
  responsablePublication: '', // en général le ou la président·e
  miseAJour: '27 octobre 2026',
};

// À la bascule du domaine, remplacer www.lepammayotte.fr par le sous-domaine AssoConnect.
const assoconnect = 'https://www.lepammayotte.fr';

export const links = {
  don: `${assoconnect}/collect/donation/01HK0J16JRJV40FZV0AE1GMBVC/campagne-de-dons-pour-soutenir-nos-projets-a-mayotte`,
  adhesion: `${assoconnect}/page/3005861-adhesion`, // À remplacer par l'URL /collect/... du formulaire
  connexion: `${assoconnect}/contacts/login`, // Connexion des administrateurs à AssoConnect
  cv: `${assoconnect}/page/2720178-deposer-un-cv`, // À remplacer par l'URL /collect/... du formulaire
};

// Adresses e-mail des candidatures (ouvertes avec un objet prérempli)
const mail = (adresse: string, objet: string) => `mailto:${adresse}?subject=${encodeURIComponent(objet)}`;

export const candidatures = {
  benevolat: mail(site.email, 'Devenir bénévole'),
  serviceCivique: mail('rh@lepammayotte.com', 'Candidature service civique'),
  reservation: mail('tiers-lieu@lepammayotte.com', 'Réservation au tiers-lieu'),
};

export const nav = [
  { label: "L'association", href: '/association' },
  { label: 'Nos actions', href: '/actions' },
  { label: 'Actualités', href: '/actualites' },
  { label: "S'engager", href: '/s-engager' },
  { label: 'Contact', href: '/contact' },
];
