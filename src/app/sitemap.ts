import type { MetadataRoute } from 'next';

const BASE_URL = 'https://redfit.ae';

// Route priority guide:
// 1.0 → Home
// 0.9 → Primary conversion pages (memberships, free-day-pass)
// 0.8 → Discipline pages, classes hub, FAQ
// 0.7 → Strength-training deep page, offers hub
// 0.6 → Supporting pages (about, contact, facilities, studio-rental, parking, voucher)
// 0.5 → Sub-offer pages (couples, friends, groups)

type ChangeFreq = 'daily' | 'weekly' | 'monthly';

const routes: { url: string; priority: number; changefreq: ChangeFreq }[] = [
  // Primary
  { url: '/', priority: 1.0, changefreq: 'weekly' },

  // Conversion pages
  { url: '/memberships', priority: 0.9, changefreq: 'weekly' },
  { url: '/free-day-pass', priority: 0.9, changefreq: 'weekly' },

  // Discipline + classes pages
  { url: '/classes', priority: 0.8, changefreq: 'weekly' },
  { url: '/disciplines', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/boxing', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/mma', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/bjj', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/muay-thai', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/kickboxing', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/karate', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/crossfit', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/yoga', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/spinning', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/zumba', priority: 0.8, changefreq: 'monthly' },
  { url: '/disciplines/hiit', priority: 0.8, changefreq: 'monthly' },

  // High-value reference
  { url: '/faq', priority: 0.8, changefreq: 'monthly' },
  { url: '/strength-training', priority: 0.7, changefreq: 'monthly' },

  // Hubs
  { url: '/offers', priority: 0.7, changefreq: 'weekly' },

  // Supporting pages
  { url: '/about', priority: 0.6, changefreq: 'monthly' },
  { url: '/contact', priority: 0.6, changefreq: 'monthly' },
  { url: '/facilities', priority: 0.6, changefreq: 'monthly' },
  { url: '/studio-rental', priority: 0.6, changefreq: 'monthly' },
  { url: '/parking', priority: 0.6, changefreq: 'monthly' },

  // Sub-offers
  { url: '/offers/voucher', priority: 0.6, changefreq: 'monthly' },
  { url: '/offers/couples', priority: 0.5, changefreq: 'monthly' },
  { url: '/offers/friends', priority: 0.5, changefreq: 'monthly' },
  { url: '/offers/groups', priority: 0.5, changefreq: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${BASE_URL}${r.url}`,
    lastModified: now,
    changeFrequency: r.changefreq,
    priority: r.priority,
  }));
}
