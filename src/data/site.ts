/* ============================================================
   Single source of truth for NAP + business constants.
   NAP is used VERBATIM and identically everywhere (Section 1).
   ============================================================ */

export const site = {
  name: 'The Boyz Rentals & Towing',
  legalName: 'The Boyz Rentals & Towing, LLC',
  // alternateName values for WebSite schema (Section 8 of build spec / site-name docs)
  shortNames: ['TBZ Rentals', 'The Boyz Rentals', 'tbzrentals.com'],

  url: 'https://www.tbzrentals.com', // must match astro.config `site`

  phone: '(303) 900-8228',
  phoneHref: 'tel:+13039008228',
  phoneE164: '+13039008228',
  email: 'info@tbzrentals.com',
  // Where contact-form + seasonal-email submissions are delivered. Public NAP
  // email stays info@ (above); this is the internal lead inbox. NOTE: forms are
  // wired but won't deliver until a host/endpoint is set (Netlify or Formspree).
  formDeliveryEmail: 'morgan@tbzrentals.com',

  // External POS — every reserve action links out here. Never book on-site.
  booking: 'https://rent.tbzrentals.com/',

  address: {
    street: '4380 Pierson St',
    city: 'Wheat Ridge',
    region: 'CO',
    postal: '80033',
    country: 'US',
  },

  // TODO(owner, Section 13 #10): confirm exact lat/long for the Wheat Ridge
  // address. These are approximate for Wheat Ridge, CO and used in
  // LocalBusiness geo. Verify against Google Business Profile before launch.
  geo: { lat: '39.7762', lng: '-105.1086' },

  hoursText: 'Open 7 days · 6:00 AM – 8:00 PM',
  // structured-data hours: every day 06:00–20:00
  opens: '06:00',
  closes: '20:00',

  // Real numbers per Section 10 — 86 five-star Google reviews, 5.0 average.
  // Do NOT inflate. TODO(owner): keep in sync with live Google count (ideally
  // render live via the Elfsight widget once installed).
  reviews: { rating: '5.0', count: 86, best: '5' },

  tagline: 'You call, we haul.',
  priceRange: '$$',
} as const;

// Differentiators woven through copy + trust blocks (Section 1).
export const differentiators = [
  {
    title: 'Firefighter Owned & Operated',
    body: 'Founded, owned, and run by a firefighter. The same standards we hold on the job — show up, do it right, treat people straight — carry into every rental.',
  },
  {
    title: 'We Deliver',
    body: 'Moving heavy gear is half the battle. We bring the trailer or equipment straight to your job site across Denver and the Front Range, and we pick it back up.',
  },
  {
    title: 'Honest, Up-Front Pricing',
    body: 'No games and no fake urgency. Rates depend on how long you need it and how far we deliver — ask and you get a straight answer.',
  },
  {
    title: 'Fast & Same-Day Availability',
    body: 'Need it today? Call us. We keep a real fleet ready and turn around same-day reservations whenever the gear is on the yard.',
  },
  {
    title: 'First Responder · Military · Business Discounts',
    body: 'Real discounts for first responders, military, and business accounts. Ask when you book — these are not gimmicks.',
  },
];

// Primary metro (homepage targets Denver). Used for default geo copy.
export const metro = { name: 'Denver', region: 'CO' };

// Primary nav (real <a> links, all crawlable). Phase-1 routes that don't
// exist yet point to '#' and are wired up as later phases land.
export const primaryNav = [
  { label: 'Trailers', href: '/trailer-rental/' },
  { label: 'Equipment', href: '/equipment-rental/' },
  { label: 'Hauling', href: '/hauling-and-delivery/' },
  { label: 'About', href: '/about/' },
  { label: 'Service Area', href: '/#service-area' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

// Footer column: company links
export const footerCompany = [
  { label: 'About / Our Story', href: '/about/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Service Area', href: '/#service-area' },
  { label: 'Blog & Resources', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

// Footer "Rentals" column. Per owner: Trailer + Equipment go STRAIGHT to the
// booking POS (drive humans to live inventory), not the marketing hub pages.
export const footerRentals = [
  { label: 'Trailer Rental', href: site.booking },
  { label: 'Equipment Rental', href: site.booking },
  { label: 'Hauling & Delivery', href: '/hauling-and-delivery/' },
  { label: 'Browse the Fleet', href: site.booking },
  { label: 'Book Online', href: site.booking },
];

// Absolute-URL helper (canonicals, schema, og). Always build off site.url.
export function abs(path: string): string {
  if (path.startsWith('http')) return path;
  return site.url.replace(/\/$/, '') + path;
}
