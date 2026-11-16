import { site } from '@/data/site';

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'SecurityService'],
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: '+1-416-751-1894',
  email: site.email,
  foundingDate: String(site.founded),
  image: `${site.url}/og.png`,
  logo: `${site.url}/images/logo-black.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  areaServed: ['Vaughan', 'Toronto', 'Mississauga', 'Brampton', 'Markham', 'Richmond Hill', 'Bradford West Gwillimbury'].map((n) => ({ '@type': 'City', name: n })),
  priceRange: '$$',
});

export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { '@id': `${site.url}/#organization` },
});

export const service = (name: string, description: string, path: string, area?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${site.url}${path}`,
  serviceType: name,
  provider: { '@id': `${site.url}/#organization` },
  areaServed: area ? { '@type': 'City', name: area } : site.serviceArea,
});

export const faq = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
});

export const article = (o: { title: string; description: string; path: string; published: Date; modified?: Date; image?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: o.title,
  description: o.description,
  url: `${site.url}${o.path}`,
  datePublished: o.published.toISOString(),
  dateModified: (o.modified ?? o.published).toISOString(),
  image: o.image ? `${site.url}${o.image}` : `${site.url}/og.png`,
  author: { '@type': 'Organization', name: site.name },
  publisher: { '@id': `${site.url}/#organization` },
  mainEntityOfPage: `${site.url}${o.path}`,
});

export const jobPosting = () => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Licensed Security Guard',
  description: 'Secure Group Protection Services is hiring licensed Ontario security guards for full-time and part-time shifts in Vaughan, Toronto and the GTA. Must hold a valid Ontario security guard licence.',
  datePosted: '2026-11-16',
  validThrough: '2027-11-16',
  employmentType: ['FULL_TIME', 'PART_TIME'],
  hiringOrganization: { '@type': 'Organization', name: site.name, sameAs: site.url },
  jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.province, postalCode: site.address.postal, addressCountry: 'CA' } },
  applicantLocationRequirements: { '@type': 'Country', name: 'Canada' },
});
