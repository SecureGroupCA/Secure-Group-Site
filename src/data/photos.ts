/**
 * Real photos from the company's own Instagram (@securegroup), saved 2020.
 * They are 640x640, so use them in cards and side images, not full-width banners.
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
} satisfies Record<string, Photo>;

/** Photos shown in the "On the job" strips. */
export const onTheJob: Photo[] = [
  photos.constructionFence,
  photos.condoLobby,
  photos.patrolCars,
  photos.trafficControl,
  photos.newHomesSite,
  photos.siteClipboard,
  photos.frontDesk,
  photos.excavatorSite,
];
