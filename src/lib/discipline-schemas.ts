import { BRAND } from './brand';

// addressRegion is the "state/province/emirate" field. brand.ts has city: 'Dubai'
// (Dubai is both the city and the emirate), so we reuse that for the region value.

export function buildSportActivityLD(opts: {
  name: string;
  description: string;
  url: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: `${opts.name} at Red Gym Dubai`,
    description: opts.description,
    url: opts.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BRAND.location.building}, ${BRAND.location.street}`,
      addressLocality: BRAND.location.area,
      addressRegion: BRAND.location.city,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND.location.coordinates.lat,
      longitude: BRAND.location.coordinates.lng,
    },
    telephone: BRAND.contact.phone,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '23:00',
    },
    sport: opts.name,
  };
}

export function buildFAQPageLD(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
