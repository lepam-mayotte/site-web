// Configuration centrale du site : coordonnées, menu, liens AssoConnect.
// Si un formulaire AssoConnect change d'adresse, c'est ici qu'on le modifie.

export const site = {
  name: 'LEPAM Mayotte',
  fullName: 'Luttons Ensemble pour un Avenir Meilleur à Mayotte',
  description:
    "Association mahoraise engagée pour l'éducation, la mobilité, l'insertion et la solidarité, au service de toute la population de Mayotte.",
  address: '53 boulevard des Amoureux, 97615 Labattoir',
  email: 'lepam@lepammayotte.com',
  telephone: '02 69 64 04 93',
  telephoneLien: 'tel:+262269640493', // format international, pour appeler depuis n'importe quel téléphone
  // Un réseau sans adresse n'est pas affiché
  socials: [
    { nom: 'Facebook', url: 'https://www.facebook.com/p/LEPAM-100091974715737/' },
    { nom: 'Instagram', url: 'https://www.instagram.com/lepam_976' },
    { nom: 'TikTok', url: 'https://www.tiktok.com/@lepam976' },
    { nom: 'Snapchat', url: 'https://www.snapchat.com/add/lepam976' },
    { nom: 'LinkedIn', url: 'https://www.linkedin.com/in/lepam-mayotte-7a033031a/' },
    { nom: 'YouTube', url: 'https://www.youtube.com/@lepam976' },
  ],
};

// Informations légales, affichées dans les mentions légales (« À compléter » tant qu'elles sont vides)
export const legal = {
  forme: 'Association loi 1901',
  rna: 'W9T1007801',
  siret: '', // si l'association en a un
  siege: site.address, // à modifier si le siège est différent du tiers-lieu
  responsablePublication: 'ASSOUMANY Sarah-binti', // la présidente, représentante légale de l'association
  miseAJour: '31 octobre 2026',
};

// Mettre à true quand AssoConnect aura son sous-domaine (remplacer aussi l'adresse ci-dessous) :
// tous les boutons d'adhésion et de don retrouvent alors leur formulaire.
const assoconnectActif = false;
const assoconnect = 'https://www.lepammayotte.fr';
const formulaire = (chemin: string) => (assoconnectActif ? `${assoconnect}${chemin}` : '/maintenance');

export const links = {
  don: formulaire('/collect/donation/01HK0J16JRJV40FZV0AE1GMBVC/campagne-de-dons-pour-soutenir-nos-projets-a-mayotte'),
  adhesion: formulaire('/collect/description/478651-b-devenir-benevole?header=%2Fpage%2F3005861-adhesion'),
  connexion: 'https://app.assoconnect.com/login', // Connexion des administrateurs, indépendante du domaine
  cv: 'https://docs.google.com/forms/d/e/1FAIpQLScf8m8YUvc65_OvQwD067_rmv3hNhSGTLgnkxS1ITYjPe29gg/viewform', // formulaire Google
};

// Adresses e-mail des candidatures (ouvertes avec un objet prérempli)
const mail = (adresse: string, objet: string) => `mailto:${adresse}?subject=${encodeURIComponent(objet)}`;

export const candidatures = {
  benevolat: mail(site.email, 'Devenir bénévole'),
  serviceCivique: mail('rh@lepammayotte.com', 'Candidature service civique'),
  reservation: mail('tiers-lieu@lepammayotte.com', 'Réservation au tiers-lieu'),
  associations: mail(site.email, "Accompagnement Guid'Asso"),
};

export const nav = [
  { label: "L'association", href: '/association' },
  { label: 'Nos actions', href: '/actions' },
  { label: 'Actualités', href: '/actualites' },
  { label: "S'engager", href: '/s-engager' },
  { label: 'Contact', href: '/contact' },
];
