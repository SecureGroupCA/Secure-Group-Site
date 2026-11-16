/** One place for every fact about the business. Change it here, it changes everywhere. */
export const site = {
  name: 'Secure Group Protection Services',
  shortName: 'Secure Group',
  legalName: 'Secure Group Protection Services Inc.',
  tagline: 'Licensed security guards for Vaughan and the GTA.',
  phone: '416-751-1894',
  phoneHref: 'tel:+14167511894',
  email: 'info@secure-group.ca',
  address: {
    street: '90 Winges Rd, Suite 206',
    city: 'Vaughan',
    province: 'ON',
    postal: 'L4L 6A9',
    country: 'CA',
  },
  geo: { lat: 43.7906, lng: -79.5547 },
  founded: 2014,
  hours: 'Open 24 hours, 7 days a week',
  /** PSISA agency licence number, confirmed by the owner 2026-11-16 */
  licence: { number: '1190623', verified: true },
  insurance: 'Fully insured with $10 million general liability coverage',
  /** ULC licence number for the monitoring station, confirmed by the owner 2026-11-16 */
  ulc: { number: '17515', verified: true },
  serviceArea: 'Vaughan, Toronto, Mississauga, Brampton, Markham, Richmond Hill and Bradford',
  url: 'https://secure-group.ca',
  responseTime: 'Guards on site in as little as 2 hours',
  social: {
    facebook: '',
    instagram: 'https://www.instagram.com/securegroup/',
    /** TODO from client: full LinkedIn company page URL */
    linkedin: '',
    google: '',
  },
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Who We Protect', href: '/sectors' },
  { label: 'Areas', href: '/areas/vaughan' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];
