export interface Service {
  slug: string;
  name: string;
  short: string;           // one line, grade-5 English
  icon: string;            // simple emoji-free SVG path key
  seoTitle: string;
  description: string;     // meta description
  intro: string[];         // 2-3 short paragraphs
  whatYouGet: string[];    // bullets
  goodFor: string[];       // who it is for
  howItWorks: { step: string; text: string }[];
  faqs: { q: string; a: string }[];
  priceNote: string;
}

export const services: Service[] = [
  {
    slug: 'security-guards',
    name: 'Security Guards',
    short: 'A trained, licensed guard at your door, lobby, gate or site. Any shift, any day.',
    icon: 'shield',
    seoTitle: 'Security Guard Services in Vaughan & the GTA | Secure Group',
    description:
      'Licensed, uniformed security guards in Vaughan and across the GTA. On site in as little as 2 hours. Hourly, daily or long-term. Call 416-751-1894 for a quote.',
    intro: [
      'A security guard is the simplest way to keep people and property safe. Someone is there, awake, watching, and ready to act.',
      'Every guard we send holds a valid Ontario security licence. They are trained, in uniform, and checked by a supervisor during each shift.',
      'You can book one guard for one night or a full team for years. Most new clients have a guard on site within 2 hours of calling.',
    ],
    whatYouGet: [
      'Licensed and uniformed guards',
      'Access control at doors, gates and lobbies',
      'Foot patrols with time-stamped reports',
      'Incident reports sent to you the same day',
      'A supervisor who checks on every shift',
      '24/7 dispatch desk you can reach any time',
    ],
    goodFor: ['Condo lobbies', 'Office buildings', 'Construction sites', 'Warehouses', 'Retail stores', 'Events'],
    howItWorks: [
      { step: 'Call or send a quote request', text: 'Tell us the address, the hours and what worries you.' },
      { step: 'We send a plan the same day', text: 'You get a clear price and a post order that says exactly what the guard will do.' },
      { step: 'Guard arrives in uniform', text: 'Often within 2 hours. A supervisor checks in during the first shift.' },
      { step: 'You get reports', text: 'Daily reports and instant alerts if anything happens.' },
    ],
    faqs: [
      { q: 'Are your guards licensed?', a: 'Yes. Every guard holds a valid Ontario security guard licence under the Private Security and Investigative Services Act. You can check any licence number on the ServiceOntario website.' },
      { q: 'How fast can a guard get to my site?', a: 'In the Vaughan and Toronto area, often within 2 hours. For planned work we can start the same day.' },
      { q: 'Is there a minimum booking?', a: 'Most shifts are 4 hours or more. Call us and we will find something that works.' },
      { q: 'Can the guard be armed?', a: 'No. Security guards in Ontario do not carry firearms. Our guards are trained to observe, report, de-escalate and call police when needed.' },
    ],
    priceNote: 'Security guard rates in the GTA usually run from $25 to $45 per hour depending on the site, the hours and the training needed. We give you one clear hourly price with no hidden fees.',
  },
  {
    slug: 'mobile-patrol',
    name: 'Mobile Patrol',
    short: 'A marked patrol vehicle visits your property at random times through the night.',
    icon: 'car',
    seoTitle: 'Mobile Security Patrol Services in Vaughan & GTA | Secure Group',
    description:
      'Marked mobile patrol checks for parking lots, plazas, truck yards and empty buildings across Vaughan and the GTA. A low-cost way to show a security presence. Call 416-751-1894.',
    intro: [
      'A mobile patrol is a guard in a marked vehicle who visits your property several times a night. Each visit is random, so nobody can predict it.',
      'It costs much less than a guard on site all night. It works well for parking lots, plazas, truck yards, and buildings that are empty after hours.',
      'Every visit is logged with GPS and time. You get a report each morning.',
    ],
    whatYouGet: [
      'Marked patrol vehicle and uniformed officer',
      'Random visit times so patterns cannot be learned',
      'Lock and unlock checks on doors and gates',
      'GPS-stamped report after every visit',
      'Alarm response on the same route',
      'Photos of anything out of place',
    ],
    goodFor: ['Plazas and parking lots', 'Truck and trailer yards', 'Vacant buildings', 'Car dealerships', 'Industrial parks', 'Townhouse complexes'],
    howItWorks: [
      { step: 'We walk your property with you', text: 'We note every door, gate, camera blind spot and problem area.' },
      { step: 'You pick how many visits', text: 'Two visits a night, six, or more. The price is per visit.' },
      { step: 'Patrols begin', text: 'Our officer checks the site and logs each stop with GPS.' },
      { step: 'Morning report', text: 'A short report lands in your inbox every day.' },
    ],
    faqs: [
      { q: 'How much does mobile patrol cost?', a: 'Most clients pay a flat fee per visit. It is usually a fraction of the cost of an overnight guard. We quote after a quick site walk.' },
      { q: 'Can patrol respond to my alarm?', a: 'Yes. We can be the first call when your alarm company reports a trigger. We check the site and call you or the police.' },
      { q: 'Do you patrol in winter?', a: 'Yes. We patrol every night of the year in every kind of weather.' },
    ],
    priceNote: 'Mobile patrol is priced per visit, so you only pay for the checks you need.',
  },
  {
    slug: 'construction-site-security',
    name: 'Construction Site Security',
    short: 'Guards and cameras that stop theft, trespassing and vandalism on your job site.',
    icon: 'crane',
    seoTitle: 'Construction Site Security in Vaughan & Toronto | Secure Group',
    description:
      'Construction site security guards, gate control and solar camera towers for high-rise and low-rise builds across Vaughan and the GTA. Stop tool theft and trespassing. Call 416-751-1894.',
    intro: [
      'Job sites are a top target for theft. Copper, tools, and equipment go missing at night and on weekends. Trespassers get hurt and the builder gets sued.',
      'We have protected construction sites across Vaughan and the GTA since 2014. We know how gates, trades, deliveries and inspections work.',
      'You get a guard who controls the gate by day and patrols by night, plus cameras that watch the whole site when nobody is there.',
    ],
    whatYouGet: [
      'Gate control and visitor sign-in',
      'Night and weekend patrols',
      'Solar camera towers with live monitoring',
      'Fire watch during hot work',
      'Daily site report with photos',
      'Guards trained on site safety rules',
    ],
    goodFor: ['High-rise builds', 'Low-rise subdivisions', 'Renovations', 'Infrastructure projects', 'Laydown yards', 'Vacant lots'],
    howItWorks: [
      { step: 'Site walk', text: 'We meet your superintendent and look at every entry point.' },
      { step: 'Simple plan', text: 'Guard hours, patrol routes and camera spots on one page.' },
      { step: 'Start within 48 hours', text: 'Guards and cameras are in place before the next weekend.' },
      { step: 'Weekly check-in', text: 'We adjust as the build changes.' },
    ],
    faqs: [
      { q: 'Do you offer fire watch?', a: 'Yes. Our guards can perform fire watch when sprinklers are down or during hot work, with a log that meets insurance needs.' },
      { q: 'Can you cover a site for just one weekend?', a: 'Yes. Short bookings are common on job sites. Call us and we will set it up.' },
      { q: 'Is a camera tower better than a guard?', a: 'Both have a place. Cameras cover a big area for less money. A guard can stop a person at the gate. Many sites use a guard by day and cameras by night.' },
    ],
    priceNote: 'Many builders combine a day guard with night cameras to lower the monthly cost.',
  },
  {
    slug: 'condo-security',
    name: 'Condo & Building Security',
    short: 'Friendly, professional guards for your lobby, parking garage and common areas.',
    icon: 'building',
    seoTitle: 'Condo Security Guards & Concierge in Vaughan & Toronto | Secure Group',
    description:
      'Condo security guards and concierge staff for lobbies, parking garages and common areas in Vaughan, Toronto and the GTA. Residents feel safe, boards get clear reports. Call 416-751-1894.',
    intro: [
      'Residents want to feel safe walking into their building at night. Boards want fewer complaints and clear reports.',
      'Our condo guards greet residents, check visitors, patrol the garage and respond to problems. They know the building rules and follow them every time.',
      'We work with property managers and boards across Vaughan, Toronto and the GTA.',
    ],
    whatYouGet: [
      'Front desk and concierge coverage',
      'Visitor and contractor sign-in',
      'Parking garage and stairwell patrols',
      'Package and key control',
      'Noise and rule complaint handling',
      'Monthly report for the board',
    ],
    goodFor: ['Condo towers', 'Rental apartments', 'Townhouse communities', 'Gated communities', 'Seniors residences', 'Student housing'],
    howItWorks: [
      { step: 'Meet the property manager', text: 'We learn the building, its rules and its trouble spots.' },
      { step: 'Match the right guard', text: 'Condo work needs people skills. We pick guards who are good with residents.' },
      { step: 'Start the post', text: 'A supervisor trains the guard on site for the first shifts.' },
      { step: 'Report to the board', text: 'A clear monthly summary with incident counts.' },
    ],
    faqs: [
      { q: 'What is the difference between a concierge and a security guard?', a: 'A concierge focuses on service: greeting, packages, bookings. A security guard focuses on safety: patrols, access control, incidents. Many buildings want one person who does both, and we train for that.' },
      { q: 'Can the same guard work every shift?', a: 'We try to keep the same small team on each building so residents see familiar faces.' },
      { q: 'Do you handle noise complaints?', a: 'Yes. Guards respond, document and follow the building’s rules. Police are called only when needed.' },
    ],
    priceNote: 'Condo posts are usually priced per hour for a set weekly schedule, which keeps the monthly cost steady.',
  },
  {
    slug: 'video-monitoring',
    name: 'Cameras & Live Video Monitoring',
    short: 'Cameras watched by a real person, 24 hours a day. They speak, they call, they act.',
    icon: 'camera',
    seoTitle: 'Live Video Monitoring & CCTV in Vaughan & GTA | Secure Group',
    description:
      'Camera installation and live video monitoring for businesses in Vaughan and the GTA. Trained operators watch your site 24/7, speak through loudspeakers and dispatch guards. Call 416-751-1894.',
    intro: [
      'Cameras that only record tell you what happened after it is too late. Cameras that are watched can stop it while it is happening.',
      'Our operators watch your cameras in real time. If someone enters after hours, the operator speaks through a loudspeaker, calls you, and sends a patrol or the police.',
      'We install the cameras, set up the monitoring, and keep it running.',
    ],
    whatYouGet: [
      'Camera design and installation',
      'Live monitoring by trained operators',
      'Two-way voice warnings through speakers',
      'Video analytics that spot people and vehicles',
      'Patrol or police dispatch when needed',
      'Video clips sent to you for every event',
    ],
    goodFor: ['Construction sites', 'Truck yards', 'Car lots', 'Warehouses', 'Retail plazas', 'Vacant properties'],
    howItWorks: [
      { step: 'Site review', text: 'We map blind spots and pick camera spots.' },
      { step: 'Install', text: 'Wired, wireless or solar towers. Usually done in a day.' },
      { step: 'Monitoring starts', text: 'Operators watch during the hours you choose.' },
      { step: 'Events handled', text: 'Voice warning, call to you, patrol dispatch. Every event recorded.' },
    ],
    faqs: [
      { q: 'Can video monitoring replace a guard?', a: 'Sometimes. For a large empty site at night, monitored cameras often cost less and cover more ground. For a busy lobby or a gate with people coming and going, a guard is still the best answer. We will tell you honestly which one fits.' },
      { q: 'Do you monitor cameras I already own?', a: 'Often yes. We check if your system can connect to our monitoring centre.' },
      { q: 'What happens when the operator sees someone?', a: 'They speak through the speaker, call your contact, and dispatch our patrol or the police based on the plan you set.' },
    ],
    priceNote: 'Monitoring is priced per month per site. Camera installation is quoted after a site review.',
  },
  {
    slug: 'alarm-response',
    name: 'Alarm Response',
    short: 'When your alarm goes off at 3 a.m., we go so you do not have to.',
    icon: 'bell',
    seoTitle: 'Alarm Response Services in Vaughan & GTA | Secure Group',
    description:
      'Fast alarm response in Vaughan and the GTA. A licensed officer checks your property after an alarm, secures it, and reports to you. Call 416-751-1894.',
    intro: [
      'Alarm companies call you when an alarm trips. Then it is your problem. You drive over in the dark, alone, not knowing what you will find.',
      'With alarm response, we go instead. A licensed officer checks the property, looks for damage or break-in, secures the site, and sends you a report with photos.',
      'If there is a real break-in, we wait for police and stay until the building is safe.',
    ],
    whatYouGet: [
      'Officer sent after any alarm trigger',
      'Full walk-around and interior check',
      'Reset of the alarm and lock-up',
      'Board-up and locksmith coordination',
      'Photo report within the hour',
      'Police liaison for real break-ins',
    ],
    goodFor: ['Retail stores', 'Offices', 'Warehouses', 'Restaurants', 'Clinics', 'Schools and churches'],
    howItWorks: [
      { step: 'Add us as your key holder', text: 'Your alarm company calls us first.' },
      { step: 'Officer dispatched', text: 'Our closest patrol is sent right away.' },
      { step: 'Site checked and secured', text: 'Inside and out. Alarm reset.' },
      { step: 'Report to you', text: 'Photos and a short note. You sleep.' },
    ],
    faqs: [
      { q: 'How fast do you respond?', a: 'It depends on where your site is and where our nearest patrol is. In Vaughan and nearby cities, most responses are well under an hour.' },
      { q: 'What if it is a false alarm?', a: 'Most are. We still check the full site, reset the alarm and send you a note.' },
      { q: 'Do you hold my keys?', a: 'Yes, in a locked key safe with a logged sign-out. You can also give us a code instead.' },
    ],
    priceNote: 'Alarm response is billed per call-out, with a small monthly key-holding fee.',
  },
  {
    slug: 'investigations',
    name: 'Investigations & Executive Protection',
    short: 'Private investigators and close protection for people and companies who need discretion.',
    icon: 'eye',
    seoTitle: 'Private Investigations & Executive Protection in the GTA | Secure Group',
    description:
      'Licensed private investigators and executive protection in Vaughan and the GTA. Workplace investigations, surveillance, and close protection for executives and families. Call 416-751-1894.',
    intro: [
      'Some problems need quiet, careful work. Theft inside a company. A threat against an executive. A claim that needs checking.',
      'Our licensed investigators gather facts and give you a clear written report you can act on. Our protection officers keep people safe at meetings, events and while travelling.',
      'Everything is handled with discretion.',
    ],
    whatYouGet: [
      'Licensed private investigators',
      'Workplace theft and fraud investigations',
      'Surveillance with court-ready reports',
      'Background and due-diligence checks',
      'Close protection for executives and families',
      'Event and travel security planning',
    ],
    goodFor: ['Business owners', 'Law firms', 'Insurance claims', 'Executives', 'High-profile families', 'Event hosts'],
    howItWorks: [
      { step: 'Private call', text: 'You tell us the problem. Nothing is written down until you say so.' },
      { step: 'Plan and quote', text: 'A clear scope, timeline and cost.' },
      { step: 'The work', text: 'Investigation or protection carried out by licensed professionals.' },
      { step: 'Report', text: 'Facts, photos and recommendations in plain language.' },
    ],
    faqs: [
      { q: 'Are your investigators licensed?', a: 'Yes. Private investigators in Ontario must be licensed under the Private Security and Investigative Services Act. Ours are.' },
      { q: 'Can your report be used in court?', a: 'Our reports are written to a standard that lawyers and insurers can use. Your lawyer decides how to use them.' },
      { q: 'Is executive protection only for celebrities?', a: 'No. Business owners, doctors, landlords and people going through a divorce or a dispute use it too. It is simply a trained person keeping you safe.' },
    ],
    priceNote: 'Investigations are quoted by the hour with a clear cap. Protection is quoted per day.',
  },
  {
    slug: 'clean-up',
    name: 'Clean-Up Services',
    short: 'After a break-in, a flood or a fire, we help you clean up and secure the site.',
    icon: 'broom',
    seoTitle: 'Property Clean-Up & Site Securing After Damage | Secure Group',
    description:
      'Clean-up and site securing after break-ins, vandalism, floods or fire in Vaughan and the GTA. Board-up, debris removal and a guard on site. Call 416-751-1894.',
    intro: [
      'After a break-in, a fire or a flood, a property is open and unsafe. Doors are broken, glass is everywhere, and more damage can happen that night.',
      'We board up, clean up, remove debris, and put a guard on site until the property is secure again.',
      'One call handles both the clean-up and the security.',
    ],
    whatYouGet: [
      'Emergency board-up of doors and windows',
      'Glass and debris removal',
      'Vandalism and graffiti clean-up',
      'Guard on site while repairs happen',
      'Photos for your insurance claim',
      'Coordination with your contractors',
    ],
    goodFor: ['Property managers', 'Landlords', 'Retail stores', 'Restaurants', 'Insurance adjusters', 'Builders'],
    howItWorks: [
      { step: 'Call any time', text: 'We answer 24 hours a day.' },
      { step: 'Secure first', text: 'A guard and a board-up crew arrive.' },
      { step: 'Clean up', text: 'Debris out, site made safe.' },
      { step: 'Hand back', text: 'Photos and a report for your insurer.' },
    ],
    faqs: [
      { q: 'How fast can you board up a store?', a: 'Usually within a few hours of your call, day or night.' },
      { q: 'Do you work with insurance companies?', a: 'Yes. We document everything with photos and keep receipts so your claim goes smoothly.' },
    ],
    priceNote: 'Clean-up is quoted per job. Guard time is billed hourly.',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
