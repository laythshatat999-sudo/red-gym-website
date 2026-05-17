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

export function buildOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Red Gym',
    alternateName: 'RedFit GYM',
    url: 'https://redfit.ae',
    logo: 'https://redfit.ae/images/og/logo-full-600.png',
    description:
      'Red Gym is a 25,000 sqft combat sports and fitness facility in Barsha Heights, Dubai. 11+ class types including boxing, MMA, BJJ, Muay Thai, yoga, CrossFit, and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BRAND.location.building}, ${BRAND.location.street}`,
      addressLocality: BRAND.location.area,
      addressRegion: BRAND.location.city,
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.contact.phone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [BRAND.contact.instagram, BRAND.contact.facebook].filter(Boolean),
  };
}

export function buildLocalBusinessLD() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness', 'SportsActivityLocation'],
    '@id': 'https://redfit.ae/#organization',
    name: 'Red Gym',
    image: [
      'https://redfit.ae/images/og/og-image.jpg',
      'https://redfit.ae/images/hero/red%20%20ggffdd-Cover.webp',
    ],
    url: 'https://redfit.ae',
    telephone: BRAND.contact.phone,
    email: BRAND.contact.email,
    priceRange: 'AED',
    description:
      'Combat sports and fitness facility in Barsha Heights, Dubai. 25,000 sqft. 11+ class types. Real coaches. Open 6 AM to 11 PM daily.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BRAND.location.building}, ${BRAND.location.street}`,
      addressLocality: BRAND.location.area,
      addressRegion: BRAND.location.city,
      postalCode: '',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND.location.coordinates.lat,
      longitude: BRAND.location.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '23:00',
    },
    sameAs: [BRAND.contact.instagram, BRAND.contact.facebook].filter(Boolean),
    sport: [
      'Boxing',
      'MMA',
      'BJJ',
      'Muay Thai',
      'Kickboxing',
      'Karate',
      'CrossFit',
      'Yoga',
      'Spinning',
      'Zumba',
      'HIIT',
      'Strength Training',
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Locker Rooms', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Showers', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Group Studios', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Combat Zones', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Recovery Area', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Hammer Strength Equipment', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Olympic Lifting Platforms', value: true },
    ],
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
