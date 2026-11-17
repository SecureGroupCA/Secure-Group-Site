import { site } from './site';

export type ProvinceSlug = 'ontario' | 'british-columbia' | 'alberta';

export interface Province {
  slug: ProvinceSlug;
  name: string;
  short: string;            // 'ON', 'BC', 'AB'
  seoTitle: string;
  description: string;
  h1: string;
  lead: string;
  intro: string[];
  licence: { label: string; number: string; verified: boolean; regulator: string; checkUrl: string };
  guardLicence: string;     // what every guard must hold in this province
  topServices: string[];    // service slugs
  topSectors: string[];     // sector slugs
  faqs: { q: string; a: string }[];
}

/**
 * The three provinces we serve. City pages live in areas.ts and point here with `province`.
 * TODO from client: BC and Alberta business licence numbers, then set verified: true.
 * Until then the number is hidden and a "to be added" note shows on the province page.
 */
export const provinces: Province[] = [
  {
    slug: 'ontario',
    name: 'Ontario',
    short: 'ON',
    seoTitle: 'Security Guard Company in Ontario | Secure Group Protection Services',
    description: 'Licensed security guards, mobile patrol, construction site security, condo security and alarm monitoring across Ontario. Head office in Vaughan. Call 416-751-1894.',
    h1: 'Security guards in Ontario',
    lead: 'Licensed guards and patrols across Ontario, from the GTA to Ottawa, Hamilton, London, Kitchener-Waterloo and Barrie.',
    intro: [
      'Ontario is home base. Our head office is at 90 Winges Rd in Vaughan, and we have protected Ontario job sites, condos and warehouses since 2014.',
      'Every guard we send in Ontario holds a valid Ontario security guard licence. Our agency is licensed under Ontario’s Private Security and Investigative Services Act.',
      'In the GTA, a guard is often on site within 2 hours. For cities farther out, we plan the start date with you when you call.',
    ],
    licence: { label: 'Ontario PSISA agency licence', number: site.licence.number, verified: site.licence.verified, regulator: 'Ontario Ministry of the Solicitor General', checkUrl: 'https://www.ontario.ca/page/private-security-and-investigative-services' },
    guardLicence: 'a valid Ontario security guard licence',
    topServices: ['security-guards', 'mobile-patrol', 'construction-site-security', 'condo-security', 'alarm-monitoring', 'fire-alarm-monitoring', 'camera-installation', 'alarm-response', 'investigations', 'clean-up'],
    topSectors: ['construction', 'condos-and-residential', 'industrial-and-warehouse', 'property-management', 'retail', 'automotive'],
    faqs: [
      { q: 'Where is your Ontario office?', a: 'Our head office is at 90 Winges Rd, Suite 206, in Vaughan.' },
      { q: 'Do you cover all of Ontario?', a: 'We work across the GTA every day, and we also take jobs in Ottawa, Hamilton, London, Kitchener-Waterloo, Barrie and other Ontario cities. Call us with your address.' },
      { q: 'Are your Ontario guards licensed?', a: 'Yes. Every guard holds a valid Ontario security guard licence. You can check any licence on the Ontario government website.' },
      { q: 'How fast can you start?', a: 'In the GTA, often within 2 hours. In other Ontario cities, we agree on a start date when you call.' },
    ],
  },
  {
    slug: 'british-columbia',
    name: 'British Columbia',
    short: 'BC',
    seoTitle: 'Security Guard Company in British Columbia | Secure Group Protection Services',
    description: 'Licensed security guards, mobile patrol, construction site security and condo security across British Columbia: Vancouver, Surrey, Burnaby, Richmond, Kelowna and Victoria. Call 416-751-1894.',
    h1: 'Security guards in British Columbia',
    lead: 'Licensed guards and patrols across BC, from Metro Vancouver to the Fraser Valley, the Okanagan and Vancouver Island.',
    intro: [
      'Secure Group is licensed to provide security services in British Columbia. We bring the same simple promise we keep in Ontario: show up, do the job right, and write it down.',
      'Every guard we send in BC holds a valid BC security worker licence.',
      'Call us with your address and the hours you need. We will tell you honestly what fits and when we can start.',
    ],
    licence: { label: 'BC security business licence', number: '', verified: false, regulator: 'BC Security Programs Division', checkUrl: 'https://www2.gov.bc.ca/gov/content/employment-business/business/security-services' },
    guardLicence: 'a valid BC security worker licence',
    topServices: ['security-guards', 'mobile-patrol', 'construction-site-security', 'condo-security', 'alarm-monitoring', 'fire-alarm-monitoring', 'camera-installation', 'alarm-response', 'investigations', 'clean-up'],
    topSectors: ['construction', 'condos-and-residential', 'industrial-and-warehouse', 'retail', 'property-management', 'hospitality'],
    faqs: [
      { q: 'Are you licensed in British Columbia?', a: 'Yes. Secure Group holds a BC security business licence, and every guard we send holds a valid BC security worker licence.' },
      { q: 'Which BC cities do you cover?', a: 'Vancouver, Surrey, Burnaby, Richmond, Abbotsford, Kelowna and Victoria, plus nearby towns. Call us with your address.' },
      { q: 'How fast can you start in BC?', a: 'We agree on a start date when you call. For planned work, tell us as early as you can.' },
      { q: 'Is the phone number the same for BC?', a: `Yes. Call ${site.phone}, day or night.` },
    ],
  },
  {
    slug: 'alberta',
    name: 'Alberta',
    short: 'AB',
    seoTitle: 'Security Guard Company in Alberta | Secure Group Protection Services',
    description: 'Licensed security guards, mobile patrol, construction site security and industrial security across Alberta: Calgary, Edmonton, Red Deer and Lethbridge. Call 416-751-1894.',
    h1: 'Security guards in Alberta',
    lead: 'Licensed guards and patrols across Alberta, from Calgary and Edmonton to Red Deer and Lethbridge.',
    intro: [
      'Secure Group is licensed to provide security services in Alberta. Job sites, warehouses, yards and buildings across the province get the same simple promise we keep in Ontario: show up, do the job right, and write it down.',
      'Every guard we send in Alberta holds a valid Alberta security services licence.',
      'Call us with your address and the hours you need. We will tell you honestly what fits and when we can start.',
    ],
    licence: { label: 'Alberta security services business licence', number: '', verified: false, regulator: 'Alberta Security Programs', checkUrl: 'https://www.alberta.ca/security-profession-licences-permits' },
    guardLicence: 'a valid Alberta security services licence',
    topServices: ['security-guards', 'mobile-patrol', 'construction-site-security', 'condo-security', 'alarm-monitoring', 'fire-alarm-monitoring', 'camera-installation', 'alarm-response', 'investigations', 'clean-up'],
    topSectors: ['construction', 'industrial-and-warehouse', 'property-management', 'retail', 'automotive', 'condos-and-residential'],
    faqs: [
      { q: 'Are you licensed in Alberta?', a: 'Yes. Secure Group holds an Alberta security services business licence, and every guard we send holds a valid Alberta security services licence.' },
      { q: 'Which Alberta cities do you cover?', a: 'Calgary, Edmonton, Red Deer and Lethbridge, plus nearby towns. Call us with your address.' },
      { q: 'Can you guard a remote industrial site?', a: 'Yes. Gate guards, yard patrols and site checks work well for yards, laydown areas and job sites outside the city.' },
      { q: 'Is the phone number the same for Alberta?', a: `Yes. Call ${site.phone}, day or night.` },
    ],
  },
];

export const provinceBySlug = (slug: string) => provinces.find((p) => p.slug === slug);
