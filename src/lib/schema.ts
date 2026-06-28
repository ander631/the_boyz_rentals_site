/* ============================================================
   JSON-LD builders. Returned plain objects are rendered by
   <JsonLd>. All schema must MATCH VISIBLE PAGE CONTENT
   (Section 8 / Google structured-data rules). Nothing here invents
   data — values come from src/data.
   ============================================================ */
import { site, abs } from '../data/site';
import { cityBySlug } from '../data/cities';

const BUSINESS_ID = abs('/#business');

// Resolve FAQ answer tokens to PLAIN TEXT for schema (must match the
// visible answer text). {{LINK:/path|anchor}} -> "anchor", {{LINK:BOOKING|anchor}} -> "anchor".
export function faqAnswerText(a: string): string {
  return a
    .replace(/\{\{LINK:BOOKING\|([^}]+)\}\}/g, '$1')
    .replace(/\{\{LINK:[^|]+\|([^}]+)\}\}/g, '$1');
}

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    legalName: site.legalName,
    '@id': BUSINESS_ID,
    url: abs('/'),
    // TODO(owner): replace with a real raster logo/photo for best rich-result
    // support. SVG referenced so nothing 404s at launch.
    image: abs('/assets/og-default.jpg'),
    logo: abs('/assets/tbz-logo.webp'),
    telephone: site.phoneE164,
    email: site.email,
    priceRange: site.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: site.opens,
        closes: site.closes,
      },
    ],
    areaServed: Object.values(cityBySlug).map((c) => ({
      '@type': 'City',
      name: c.name,
      addressRegion: c.region,
    })),
    // Real numbers only (Section 10). Do not inflate.
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.reviews.rating,
      reviewCount: String(site.reviews.count),
      bestRating: site.reviews.best,
    },
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    alternateName: site.shortNames,
    url: abs('/'),
  };
}

// Service schema for category / equipment / city / matrix pages.
export function service(opts: { serviceType: string; url: string; areaCitySlug?: string }) {
  const obj: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType,
    provider: { '@id': BUSINESS_ID },
    url: abs(opts.url),
  };
  if (opts.areaCitySlug && cityBySlug[opts.areaCitySlug]) {
    const c = cityBySlug[opts.areaCitySlug];
    obj.areaServed = { '@type': 'City', name: c.name, addressRegion: c.region };
  } else {
    obj.areaServed = { '@type': 'City', name: 'Denver', addressRegion: 'CO' };
  }
  return obj;
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: faqAnswerText(f.a) },
    })),
  };
}
