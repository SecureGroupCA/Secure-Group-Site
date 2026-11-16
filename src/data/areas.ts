export interface Area {
  slug: string;
  name: string;
  region: string;
  primary?: boolean;
  seoTitle: string;
  description: string;
  h1: string;
  intro: string[];
  neighbourhoods: string[];
  localNotes: string[];   // what we know about security in this city
  topServices: string[];  // service slugs
  topSectors: string[];   // sector slugs
  faqs: { q: string; a: string }[];
  responseTime: string;
}

export const areas: Area[] = [
  {
    slug: 'vaughan',
    name: 'Vaughan',
    region: 'York Region',
    primary: true,
    seoTitle: 'Security Guard Company in Vaughan, ON | Secure Group Protection Services',
    description: 'Vaughan’s local security guard company since 2014. Licensed guards, mobile patrol, construction site security, condo security and alarm response. Office at 90 Winges Rd. Call 416-751-1894.',
    h1: 'Security guards in Vaughan',
    intro: [
      'Our office is at 90 Winges Rd in Woodbridge. When you call, you are talking to a security company that is already in Vaughan, not one driving in from across the city.',
      'We have protected Vaughan job sites, condos, warehouses, plazas and car lots since 2014. Our guards know the roads, the industrial parks and the neighbourhoods.',
      'Most Vaughan clients have a guard on site within 2 hours of calling.',
    ],
    neighbourhoods: ['Woodbridge', 'Maple', 'Concord', 'Thornhill', 'Kleinburg', 'Vellore Village', 'Vaughan Metropolitan Centre', 'Pine Valley', 'Sonoma Heights', 'Islington Woods'],
    localNotes: [
      'Vaughan has one of the largest industrial areas in Canada. Warehouse and truck-yard security is our busiest service here.',
      'The Vaughan Metropolitan Centre and Highway 7 corridor are adding condo towers every year. Each one needs a trained lobby guard.',
      'New subdivisions in Kleinburg, Vellore Village and Maple mean active construction sites that need weekend coverage.',
      'Car theft is a known problem across York Region. Dealerships along Highway 7 and Jane Street use our overnight patrols.',
    ],
    topServices: ['security-guards', 'construction-site-security', 'mobile-patrol', 'condo-security', 'video-monitoring', 'alarm-response'],
    topSectors: ['industrial-and-warehouse', 'construction', 'condos-and-residential', 'automotive', 'retail', 'property-management'],
    faqs: [
      { q: 'Where is your Vaughan office?', a: '90 Winges Rd, Suite 206, in Woodbridge, just off Highway 7 and Weston Rd.' },
      { q: 'How fast can you get a guard to a site in Vaughan?', a: 'Often within 2 hours. For planned work we can usually start the same day.' },
      { q: 'Do you cover all of Vaughan?', a: 'Yes. Woodbridge, Maple, Concord, Thornhill, Kleinburg and every neighbourhood in between.' },
      { q: 'Are your guards licensed in Ontario?', a: 'Yes. Every guard holds a valid Ontario security guard licence. You can verify any licence on the ServiceOntario website.' },
    ],
    responseTime: 'As little as 2 hours',
  },
  {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel Region',
    seoTitle: 'Security Guard Services in Mississauga, ON | Secure Group',
    description: 'Licensed security guards, mobile patrol, warehouse security and condo security in Mississauga. Serving the airport corridor, Meadowvale, Port Credit and City Centre. Call 416-751-1894.',
    h1: 'Security guards in Mississauga',
    intro: [
      'Mississauga is home to the airport cargo corridor, thousands of warehouses, and some of the tallest condo towers in Canada. All of them need security that shows up.',
      'We send licensed guards and patrols across Mississauga from our Vaughan base, with dispatch 24 hours a day.',
    ],
    neighbourhoods: ['City Centre', 'Port Credit', 'Meadowvale', 'Streetsville', 'Erin Mills', 'Malton', 'Dixie', 'Cooksville', 'Clarkson', 'Airport Corporate Centre'],
    localNotes: [
      'The airport and Dixie-Derry corridor is one of the busiest cargo areas in Canada. Truck yard and warehouse security is in high demand.',
      'Condo towers in City Centre and Port Credit need front-desk guards who are good with residents.',
      'Plazas along Dundas and Hurontario use mobile patrol to cover parking lots after dark.',
    ],
    topServices: ['security-guards', 'mobile-patrol', 'video-monitoring', 'condo-security', 'alarm-response'],
    topSectors: ['industrial-and-warehouse', 'condos-and-residential', 'retail', 'construction', 'property-management'],
    faqs: [
      { q: 'Do you have guards near the airport?', a: 'Yes. The Malton and Airport Corporate Centre area is one of our regular patrol zones.' },
      { q: 'How fast is response in Mississauga?', a: 'For planned work, same day. For emergencies, usually within a few hours depending on the location.' },
    ],
    responseTime: 'Same day for planned work',
  },
  {
    slug: 'bradford',
    name: 'Bradford',
    region: 'Simcoe County',
    seoTitle: 'Security Guard Services in Bradford West Gwillimbury | Secure Group',
    description: 'Licensed security guards, construction site security and mobile patrol in Bradford West Gwillimbury and Bond Head. Fast-growing town, local-feeling service. Call 416-751-1894.',
    h1: 'Security guards in Bradford',
    intro: [
      'Bradford is growing fast. New subdivisions, new plazas, and new warehouses along Highway 400 all need security.',
      'We serve Bradford West Gwillimbury and Bond Head from our Vaughan office, which is a short drive down the 400.',
    ],
    neighbourhoods: ['Bradford', 'Bond Head', 'Green Valley', 'Highway 400 Employment Lands', 'Holland Marsh', 'Dissette Street corridor'],
    localNotes: [
      'Active subdivision construction means job sites that need weekend guards and camera towers.',
      'Farm equipment and fuel theft in the Holland Marsh area is a real concern. Mobile patrol helps.',
      'New warehouses along the 400 need gate guards and overnight monitoring.',
    ],
    topServices: ['construction-site-security', 'mobile-patrol', 'security-guards', 'video-monitoring'],
    topSectors: ['construction', 'industrial-and-warehouse', 'retail', 'property-management'],
    faqs: [
      { q: 'Do you really come out to Bradford?', a: 'Yes. Bradford is about 30 minutes up Highway 400 from our office. We have regular clients there.' },
      { q: 'Can you guard a farm property?', a: 'Yes. Mobile patrol and camera towers work well for farms and rural yards.' },
    ],
    responseTime: 'Same day for planned work',
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'City of Toronto',
    seoTitle: 'Security Guard Company in Toronto | Secure Group Protection Services',
    description: 'Licensed security guards, condo security, construction site security and event security across Toronto, North York, Etobicoke and Scarborough. Call 416-751-1894.',
    h1: 'Security guards in Toronto',
    intro: [
      'From condo lobbies downtown to job sites in Scarborough, we send licensed guards across the City of Toronto every day.',
      'Our dispatch desk runs 24 hours a day, and our office in Vaughan is minutes from the 400 and 401.',
    ],
    neighbourhoods: ['Downtown', 'North York', 'Etobicoke', 'Scarborough', 'York', 'East York', 'Liberty Village', 'Yorkville', 'Rexdale', 'Don Mills'],
    localNotes: [
      'Toronto condo boards want guards with people skills and a clean uniform. That is our standard.',
      'Construction never stops in Toronto. Weekend and night coverage on job sites is a big part of our work.',
      'Retail on Queen, Yonge and in the big malls uses our loss-prevention guards during busy seasons.',
    ],
    topServices: ['security-guards', 'condo-security', 'construction-site-security', 'investigations', 'alarm-response'],
    topSectors: ['condos-and-residential', 'construction', 'retail', 'law-firms', 'hospitality'],
    faqs: [
      { q: 'Do you cover all of Toronto?', a: 'Yes. Downtown, North York, Etobicoke, Scarborough and everywhere in between.' },
      { q: 'Can you provide event security in Toronto?', a: 'Yes. Weddings, corporate events, store openings and festivals.' },
    ],
    responseTime: 'Often within 2 to 3 hours',
  },
  {
    slug: 'brampton',
    name: 'Brampton',
    region: 'Peel Region',
    seoTitle: 'Security Guard Services in Brampton, ON | Secure Group',
    description: 'Licensed security guards, truck yard security, warehouse gate control and mobile patrol in Brampton. Serving Bramalea, Steeles corridor and Highway 410. Call 416-751-1894.',
    h1: 'Security guards in Brampton',
    intro: [
      'Brampton is the trucking capital of Ontario. Truck yards, cross-docks and warehouses are everywhere, and so is cargo theft.',
      'We put guards at the gate, patrol the yard and watch the cameras so your trailers stay where you left them.',
    ],
    neighbourhoods: ['Bramalea', 'Steeles Avenue corridor', 'Highway 410 industrial', 'Downtown Brampton', 'Springdale', 'Mount Pleasant', 'Castlemore', 'Heart Lake'],
    localNotes: [
      'Truck and trailer theft is the number one concern we hear from Brampton clients.',
      'Gate guards who log every truck and seal number make a real difference.',
      'New subdivisions in Mount Pleasant and Castlemore need construction site coverage.',
    ],
    topServices: ['security-guards', 'mobile-patrol', 'video-monitoring', 'construction-site-security'],
    topSectors: ['industrial-and-warehouse', 'construction', 'retail', 'automotive'],
    faqs: [
      { q: 'Can you guard a truck yard overnight?', a: 'Yes. Overnight gate guards and yard patrols are our most common Brampton service.' },
    ],
    responseTime: 'Same day for planned work',
  },
  {
    slug: 'markham',
    name: 'Markham',
    region: 'York Region',
    seoTitle: 'Security Guard Services in Markham, ON | Secure Group',
    description: 'Licensed security guards, office building security, condo security and mobile patrol in Markham. Serving Unionville, Milliken and the 404 tech corridor. Call 416-751-1894.',
    h1: 'Security guards in Markham',
    intro: [
      'Markham mixes tech offices, condo towers and quiet neighbourhoods. Each needs a different kind of guard.',
      'We serve Markham from our Vaughan office across Highway 7, with the same 24-hour dispatch.',
    ],
    neighbourhoods: ['Unionville', 'Milliken', 'Markham Village', 'Thornhill', 'Cornell', 'Highway 404 corridor', 'Downtown Markham', 'Berczy Village'],
    localNotes: [
      'Office parks along the 404 use our guards for lobby control and after-hours patrols.',
      'Downtown Markham condos need polished front-desk staff.',
      'Retail plazas along Highway 7 and Kennedy use mobile patrol.',
    ],
    topServices: ['security-guards', 'condo-security', 'mobile-patrol', 'alarm-response'],
    topSectors: ['condos-and-residential', 'property-management', 'retail', 'health-care'],
    faqs: [
      { q: 'Do you serve Thornhill on the Markham side?', a: 'Yes. Both the Vaughan and Markham sides of Thornhill.' },
    ],
    responseTime: 'Often within 2 to 3 hours',
  },
  {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    region: 'York Region',
    seoTitle: 'Security Guard Services in Richmond Hill, ON | Secure Group',
    description: 'Licensed security guards, condo security, retail security and mobile patrol in Richmond Hill. Serving Yonge Street, Oak Ridges and Bayview. Call 416-751-1894.',
    h1: 'Security guards in Richmond Hill',
    intro: [
      'Richmond Hill is condo towers on Yonge, big plazas, and quiet estates in Oak Ridges. We cover all of it.',
      'Our Vaughan office is a short drive west, and our dispatch runs around the clock.',
    ],
    neighbourhoods: ['Yonge Street corridor', 'Oak Ridges', 'Bayview Hill', 'Richmond Hill Centre', 'Jefferson', 'Mill Pond', 'Elgin Mills'],
    localNotes: [
      'New towers near Richmond Hill Centre need trained lobby guards.',
      'Plazas on Yonge and Highway 7 use mobile patrol after close.',
      'Estate homes in Oak Ridges and Bayview Hill book private patrols and executive protection.',
    ],
    topServices: ['condo-security', 'mobile-patrol', 'security-guards', 'investigations'],
    topSectors: ['condos-and-residential', 'retail', 'property-management', 'hospitality'],
    faqs: [
      { q: 'Can you patrol a private estate?', a: 'Yes. We offer scheduled patrols and on-site guards for private homes.' },
    ],
    responseTime: 'Often within 2 to 3 hours',
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
