/**
 * Real company photos. Older ones come from Instagram (@securegroup, saved 2020) and are 640x640.
 * Newer ones (2023-2026) come from the Social Media folder and the owner's "website photos" zip (2026-11-19).
 * All newer photos are resized and saved without location data. Camera screens were cropped out and a plate blurred.
 * Never use Instagram posts that advertise camera/CCTV monitoring, show pay rates,
 * or show a client's logo or staff faces.
 */
export interface Photo { src: string; alt: string }

export const photos = {
  teamUniform: { src: '/images/team-uniform.jpg', alt: 'Six Secure Group guards in uniform and hard hats standing in front of a building' },
  teamPatrol: { src: '/images/team-patrol.jpg', alt: 'Secure Group guards in vests standing beside a patrol car' },
  constructionFence: { src: '/images/guard-construction-fence.jpg', alt: 'Secure Group guard in a safety vest at a construction site fence' },
  excavatorSite: { src: '/images/guard-excavator-site.jpg', alt: 'Secure Group guard in a high-visibility vest beside an excavator on a job site' },
  newHomesSite: { src: '/images/guard-new-homes-site.jpg', alt: 'Secure Group guard standing on a street of new homes under construction' },
  siteClipboard: { src: '/images/guard-site-clipboard.jpg', alt: 'Secure Group guard writing a site report on a clipboard' },
  trafficControl: { src: '/images/traffic-control.jpg', alt: 'Two Secure Group guards holding stop and slow signs at a site entrance' },
  frontDesk: { src: '/images/guard-front-desk.jpg', alt: 'Secure Group guard working at a site office desk' },
  condoLobby: { src: '/images/guard-condo-lobby.jpg', alt: 'Secure Group guard standing in a condo building lobby' },
  patrolCars: { src: '/images/patrol-cars.jpg', alt: 'Secure Group guard standing between two patrol cars' },
  subdivisionPatrol: { src: '/images/guard-subdivision-patrol.jpg', alt: 'Secure Group guard in a hard hat and vest checking a new-home subdivision' },
  patrolCarOpenLot: { src: '/images/patrol-car-open-lot.jpg', alt: 'Secure Group patrol car checking an open lot' },
  patrolCarField: { src: '/images/patrol-car-field.jpg', alt: 'Secure Group security patrol car parked at a rural property' },
  patrolCarNewHomes: { src: '/images/patrol-car-new-homes.jpg', alt: 'Secure Group patrol car in front of new townhomes' },
  signFence: { src: '/images/site-sign-fence.jpg', alt: 'Secure Group "No Trespassing, patrolled by security guards" sign on a construction fence' },
  signCondoTower: { src: '/images/site-sign-condo-tower.jpg', alt: 'Secure Group security sign on the gate of a condo tower construction site' },
  signCrane: { src: '/images/site-sign-crane.jpg', alt: 'Construction site with a tower crane, protected by Secure Group' },
  signBarricade: { src: '/images/site-sign-barricade.jpg', alt: 'Secure Group security sign above a barricade at a winter job site' },
  signGate: { src: '/images/site-sign-gate.jpg', alt: 'Secure Group security sign on a site gate downtown' },
  officeGear: { src: '/images/office-vests-hardhats.jpg', alt: 'Secure Group safety vests and hard hats ready at the office' },
  heroPatrolCar: { src: '/images/hero-patrol-car-sunset.jpg', alt: 'Secure Group security patrol car at sunrise' },
  teamBriefing: { src: '/images/team-briefing.jpg', alt: 'Secure Group guards in safety vests at a team briefing on a new-home site' },
  conciergeDesk: { src: '/images/concierge-desk.jpg', alt: 'Secure Group guard at the front desk of a building lobby' },
  supervisorPatrolCar: { src: '/images/supervisor-patrol-car.jpg', alt: 'Secure Group supervisor patrol car with lights on' },
  patrolSubdivisionStreet: { src: '/images/patrol-subdivision-street.jpg', alt: 'Secure Group patrol car on a street of new homes under construction' },
  nightGatePatrol: { src: '/images/night-gate-patrol.jpg', alt: 'Secure Group patrol car checking a construction gate at night' },
  nightSiteSign: { src: '/images/night-site-sign.jpg', alt: 'Secure Group security sign on a construction fence at night' },
  signTownhomes: { src: '/images/site-sign-townhomes.jpg', alt: 'Secure Group security sign on the fence of a townhome build' },
  signDowntown: { src: '/images/site-sign-downtown.jpg', alt: 'Secure Group security sign on a fenced lot near downtown towers in winter' },
  signCondoGate: { src: '/images/site-sign-condo-gate.jpg', alt: 'Secure Group security sign on the iron gate of a residential building' },
  signGateTownhomes: { src: '/images/site-sign-gate-townhomes.jpg', alt: 'Secure Group "No Trespassing" sign on the gate of a new townhome site' },
  signBrickHomes: { src: '/images/site-sign-brick-homes.jpg', alt: 'Secure Group security sign on a fence in front of new brick homes' },
  signNoTrespassing: { src: '/images/site-sign-no-trespassing.jpg', alt: 'Secure Group "No Trespassing" sign on a construction fence' },
  signSunset: { src: '/images/site-sign-sunset.jpg', alt: 'Secure Group security sign on a construction site at sunset' },
} satisfies Record<string, Photo>;

/** Home page "On the job" strip (8 photos, 2 rows of 4). */
export const onTheJob: Photo[] = [
  photos.teamBriefing,
  photos.signGateTownhomes,
  photos.conciergeDesk,
  photos.supervisorPatrolCar,
  photos.nightGatePatrol,
  photos.signCondoGate,
  photos.patrolSubdivisionStreet,
  photos.signNoTrespassing,
];

/** About page gallery: the best 18 (3 rows of 6). */
export const gallery: Photo[] = [
  photos.teamBriefing,
  photos.signGateTownhomes,
  photos.conciergeDesk,
  photos.supervisorPatrolCar,
  photos.nightGatePatrol,
  photos.signCondoGate,
  photos.patrolSubdivisionStreet,
  photos.signSunset,
  photos.signDowntown,
  photos.signBrickHomes,
  photos.nightSiteSign,
  photos.signTownhomes,
  photos.subdivisionPatrol,
  photos.signFence,
  photos.patrolCarField,
  photos.signCrane,
  photos.trafficControl,
  photos.signCondoTower,
];
