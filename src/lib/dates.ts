// Formats de date en français, utilisés dans les actualités.

export const dateLongue = (date: Date) =>
  date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Indian/Mayotte' });

export const jourEtMois = (date: Date) => ({
  jour: date.toLocaleDateString('fr-FR', { day: 'numeric', timeZone: 'Indian/Mayotte' }),
  mois: date.toLocaleDateString('fr-FR', { month: 'short', timeZone: 'Indian/Mayotte' }).replace('.', ''),
});

// Un événement est « à venir » jusqu'à la fin de sa journée.
// Calculé à la construction du site : chaque publication (git push) remet la liste à jour.
export const estAVenir = (date: Date) => date.getTime() + 24 * 60 * 60 * 1000 > Date.now();
