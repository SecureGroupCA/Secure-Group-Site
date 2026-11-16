export interface Sector {
  slug: string;
  name: string;
  short: string;
  seoTitle: string;
  description: string;
  intro: string[];
  risks: string[];        // "What usually goes wrong"
  howWeHelp: string[];
  services: string[];     // service slugs
  faqs: { q: string; a: string }[];
}

export const sectors: Sector[] = [
  {
    slug: 'construction',
    name: 'Construction',
    short: 'High-rise and low-rise job sites across Vaughan and the GTA.',
    seoTitle: 'Construction Site Security Company in Vaughan & GTA | Secure Group',
    description: 'Security for high-rise and low-rise construction sites in Vaughan, Toronto and the GTA. Gate control, night patrols, camera towers and fire watch since 2014.',
    intro: [
      'A job site is full of things people want to steal: copper, tools, lumber, machines. It is also a place where a trespasser can get badly hurt.',
      'We have guarded job sites across the GTA since 2014. Our guards know how a site works, from the gate log to the hoist to the hot-work permit.',
    ],
    risks: ['Tool and copper theft on weekends', 'Trespassers and injury claims', 'Unlogged visitors at the gate', 'Fire during hot work', 'Vandalism to finished units'],
    howWeHelp: ['Gate guard with sign-in by day', 'Patrols and camera towers by night', 'Fire watch with a proper log', 'Daily report with photos to the super', 'Fast add-on coverage for long weekends'],
    services: ['construction-site-security', 'video-monitoring', 'mobile-patrol'],
    faqs: [
      { q: 'Can you start before the weekend?', a: 'Yes. Most job sites get a guard within 48 hours, often sooner.' },
      { q: 'Do you know site safety rules?', a: 'Yes. Our guards wear the right gear, sign in, and follow your site orientation.' },
    ],
  },
  {
    slug: 'condos-and-residential',
    name: 'Condos & Residential',
    short: 'Lobbies, garages and common areas where residents want to feel safe.',
    seoTitle: 'Condo & Residential Security Guards in Vaughan & Toronto | Secure Group',
    description: 'Security guards and concierge staff for condos, apartments and townhouse communities in Vaughan, Toronto and the GTA. Friendly faces, clear board reports.',
    intro: [
      'People choose a building because it feels safe. A good guard at the front desk is a big part of that feeling.',
      'Our condo guards greet residents, check visitors, patrol the garage and handle the small problems before they become big ones.',
    ],
    risks: ['Tailgating into the lobby', 'Car break-ins in the garage', 'Noise and rule complaints', 'Package theft', 'Trespassers in stairwells'],
    howWeHelp: ['Front desk and concierge coverage', 'Scheduled garage and stairwell patrols', 'Visitor and contractor sign-in', 'Rule enforcement with a calm approach', 'Monthly report for the board'],
    services: ['condo-security', 'security-guards', 'mobile-patrol'],
    faqs: [
      { q: 'Can one person do concierge and security?', a: 'Yes. We train guards for both and most buildings prefer one person who can do each.' },
      { q: 'Will residents see the same guards?', a: 'We keep a small team on each building so faces stay familiar.' },
    ],
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    short: 'One security partner for every building in your portfolio.',
    seoTitle: 'Security Services for Property Managers in the GTA | Secure Group',
    description: 'Security guards, mobile patrol, alarm response and clean-up for property management companies across Vaughan and the GTA. One partner, one invoice, clear reports.',
    intro: [
      'Property managers juggle many buildings and many vendors. Security should be the easy one.',
      'We cover guards, patrols, alarm response and after-damage clean-up. One contact, one invoice, and a report you can forward to your client.',
    ],
    risks: ['Different vendors for each building', 'Slow response after alarms', 'No paper trail for incidents', 'Vacant units and break-ins', 'Tenant complaints about safety'],
    howWeHelp: ['One contact for all your properties', 'Patrol routes that cover several sites', 'Alarm response with photo reports', 'Board-up and clean-up after damage', 'Monthly summaries per building'],
    services: ['security-guards', 'mobile-patrol', 'alarm-response', 'clean-up'],
    faqs: [
      { q: 'Can you cover buildings in different cities?', a: 'Yes. We work across Vaughan, Toronto, Mississauga, Brampton, Markham, Richmond Hill and Bradford.' },
      { q: 'Do you offer one invoice for everything?', a: 'Yes. One monthly invoice broken down by property.' },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail',
    short: 'Loss prevention and a safe feeling for staff and shoppers.',
    seoTitle: 'Retail Security Guards & Loss Prevention in the GTA | Secure Group',
    description: 'Retail security guards and loss prevention for stores and plazas in Vaughan, Toronto and the GTA. Reduce theft, keep staff safe, and stay open with confidence.',
    intro: [
      'Shoplifting is up. Staff are being asked to handle things they were never trained for. A visible guard changes that.',
      'Our retail guards deter theft, support staff, and handle incidents calmly so your customers feel welcome.',
    ],
    risks: ['Shoplifting and organized theft', 'Staff facing aggressive customers', 'Parking lot break-ins', 'After-hours break-ins', 'Holiday season crowds'],
    howWeHelp: ['Uniformed or plain-clothes guards', 'Door and parking lot presence', 'Alarm response after close', 'Extra coverage for holidays and sales', 'Incident reports for police and insurers'],
    services: ['security-guards', 'alarm-response', 'mobile-patrol'],
    faqs: [
      { q: 'Can guards detain shoplifters?', a: 'Guards can make a citizen’s arrest in limited situations under Canadian law. Our guards are trained on exactly when it is allowed and when to call police instead.' },
      { q: 'Do you do seasonal coverage?', a: 'Yes. Many stores add guards from November to January.' },
    ],
  },
  {
    slug: 'industrial-and-warehouse',
    name: 'Industrial & Warehouse',
    short: 'Gates, truck yards and loading docks that run 24 hours.',
    seoTitle: 'Warehouse & Industrial Security in Vaughan, Brampton & GTA | Secure Group',
    description: 'Security guards, gate control and camera monitoring for warehouses, truck yards and plants in Vaughan, Brampton, Mississauga and the GTA.',
    intro: [
      'Vaughan, Brampton and Mississauga are full of warehouses and truck yards. They are also where cargo theft happens.',
      'We put a guard at the gate, log every truck, patrol the yard and watch the cameras overnight.',
    ],
    risks: ['Cargo and trailer theft', 'Unlogged trucks at the gate', 'Employee theft from the dock', 'Fuel theft from the yard', 'Trespassers after hours'],
    howWeHelp: ['Gate guard with truck and driver log', 'Yard patrols on foot and by vehicle', 'Live camera monitoring overnight', 'Dock and shipping area checks', 'Photo reports for every shift'],
    services: ['security-guards', 'video-monitoring', 'mobile-patrol'],
    faqs: [
      { q: 'Can you log trucks in and out?', a: 'Yes. Our gate guards record plates, driver names, seal numbers and times.' },
      { q: 'Do you work 24/7 sites?', a: 'Yes. Round-the-clock posts are common in this sector.' },
    ],
  },
  {
    slug: 'government',
    name: 'Government Facilities',
    short: 'Access control and visitor screening for public buildings.',
    seoTitle: 'Security for Government & Public Facilities in the GTA | Secure Group',
    description: 'Licensed security guards and access control for government offices, community centres and public facilities across the GTA. Vendor-ready with full documentation.',
    intro: [
      'Public buildings need to be open to the public and still safe for staff. That takes trained people at the door.',
      'We provide screening, access control and a calm presence in offices, service counters and community buildings.',
    ],
    risks: ['Aggressive visitors at service counters', 'Unscreened access to staff areas', 'After-hours break-ins', 'Protests and crowd events', 'Lost or copied keys'],
    howWeHelp: ['Visitor screening and sign-in', 'Access control and key management', 'Guards trained in de-escalation', 'Event and crowd support', 'Full documentation for procurement'],
    services: ['security-guards', 'alarm-response', 'investigations'],
    faqs: [
      { q: 'Can you meet procurement requirements?', a: 'Yes. We provide licences, insurance certificates, references and reports in the format you need.' },
    ],
  },
  {
    slug: 'health-care',
    name: 'Health Care',
    short: 'Calm, trained guards for clinics, pharmacies and care homes.',
    seoTitle: 'Health Care Security Guards in Vaughan & the GTA | Secure Group',
    description: 'Security guards for clinics, pharmacies, long-term care homes and medical offices in Vaughan and the GTA. Trained in de-escalation and patient privacy.',
    intro: [
      'Clinics and care homes deal with people on their hardest days. Security here is about calm, not force.',
      'Our health care guards are trained in de-escalation, privacy rules and working alongside nurses and staff.',
    ],
    risks: ['Aggressive patients or visitors', 'Drug theft at pharmacies', 'Wandering residents in care homes', 'After-hours break-ins', 'Staff walking to cars at night'],
    howWeHelp: ['De-escalation trained guards', 'Entrance control and visitor logs', 'Escorts for staff after dark', 'Pharmacy and supply room patrols', 'Incident reports that respect privacy'],
    services: ['security-guards', 'alarm-response', 'video-monitoring'],
    faqs: [
      { q: 'Are guards trained on patient privacy?', a: 'Yes. Our health care guards get training on confidentiality before they start.' },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    short: 'Dealership lots and service bays, watched all night.',
    seoTitle: 'Car Dealership Security in Vaughan & the GTA | Secure Group',
    description: 'Security for car dealerships, body shops and auto lots in Vaughan and the GTA. Stop vehicle theft and catalytic converter theft with guards, patrols and monitored cameras.',
    intro: [
      'Car theft in the GTA is at record levels. Dealership lots and body shops are easy targets after dark.',
      'We combine a night guard or patrol with monitored cameras so a thief is seen and challenged before a car leaves the lot.',
    ],
    risks: ['Vehicle theft from the lot', 'Catalytic converter theft', 'Key box break-ins', 'Vandalism to inventory', 'Parts theft from service bays'],
    howWeHelp: ['Overnight lot guard or patrol', 'Monitored cameras with voice warning', 'Key control checks', 'Alarm response', 'Photo reports each morning'],
    services: ['mobile-patrol', 'video-monitoring', 'security-guards'],
    faqs: [
      { q: 'Is a guard or cameras better for a car lot?', a: 'Monitored cameras with a loudspeaker work well on open lots, with a patrol as backup. For high-value inventory, an overnight guard is the safest choice.' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    short: 'Hotels, banquet halls and events that stay welcoming and safe.',
    seoTitle: 'Hotel & Event Security in Vaughan & the GTA | Secure Group',
    description: 'Security guards for hotels, banquet halls, weddings and events in Vaughan and the GTA. Polite, well-dressed guards who keep guests safe without spoiling the mood.',
    intro: [
      'Hospitality security has to be invisible until it is needed. Guests should feel welcome, not watched.',
      'Our hospitality guards dress the part, speak politely and step in only when they must.',
    ],
    risks: ['Uninvited guests at events', 'Intoxicated guests', 'Theft from rooms and halls', 'Parking lot incidents', 'Overcrowding'],
    howWeHelp: ['Door and guest list control', 'Discreet floor presence', 'Parking lot patrols', 'Crowd and capacity management', 'Fast response to incidents'],
    services: ['security-guards', 'investigations', 'mobile-patrol'],
    faqs: [
      { q: 'Can you staff a wedding?', a: 'Yes. One or two guards for a wedding or banquet is one of our most common bookings.' },
    ],
  },
  {
    slug: 'law-firms',
    name: 'Law Firms',
    short: 'Discreet security and investigations for legal offices.',
    seoTitle: 'Security & Investigations for Law Firms in the GTA | Secure Group',
    description: 'Office security, client protection and licensed private investigations for law firms in Vaughan, Toronto and the GTA. Discreet and professional.',
    intro: [
      'Law firms handle disputes, money and sensitive files. Sometimes that brings risk to the office door.',
      'We provide office security, protection for clients during tense matters, and licensed investigators who deliver court-ready reports.',
    ],
    risks: ['Hostile parties visiting the office', 'Threats against lawyers or clients', 'Document theft', 'Process serving gone wrong', 'Need for surveillance evidence'],
    howWeHelp: ['Reception and office security', 'Protection during meetings and court dates', 'Licensed investigations and surveillance', 'Background checks', 'Discreet, written reports'],
    services: ['investigations', 'security-guards'],
    faqs: [
      { q: 'Do you sign confidentiality agreements?', a: 'Yes. We sign your NDA before any work begins.' },
    ],
  },
];

export const sectorBySlug = (slug: string) => sectors.find((s) => s.slug === slug);
