export const site = {
  name: 'MG Tax Maker LLC',
  phone: '+1 (502) 679-7027',
  phoneHref: 'tel:+15026797027',
  email: 'info@mgtaxmakerllc.com',
  whatsapp: 'https://wa.me/15026797027',
  whatsappMsg: {
    es: 'https://wa.me/15026797027?text=Hola%20MG%20Tax%20Maker%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n',
    en: 'https://wa.me/15026797027?text=Hi%20MG%20Tax%20Maker%2C%20I%20would%20like%20more%20information',
  },
  reviews: 'https://search.google.com/local/reviews?placeid=CXU1sqrFqqy0EBM',
  leaveReview: 'https://g.page/r/CXU1sqrFqqy0EBM/review',
  social: {
    tiktok: 'https://www.tiktok.com/@mg_tax_maker',
    instagram: 'https://www.instagram.com/mg_tax_maker/',
    facebook: 'https://www.facebook.com/share/1Kmvi7shui/',
  },
  checklistPdf: '/checklist-taxes-2025.pdf',
  photoCredit: {
    author: 'Charles Delano / USACE Louisville District',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Louisville,_Kentucky_skyline_at_night_(2021).jpg',
  },
};

/** Prefix an internal path with the deploy base (GitHub Pages serves from /<repo>/). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
