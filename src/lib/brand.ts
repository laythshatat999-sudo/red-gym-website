// Single source of truth for Red Gym brand info.

export const BRAND = {
  name: 'Red Gym',
  legalName: 'RedFit GYM',
  tagline: 'One Gym. One Family. One Community.',
  heroHook: 'Train Harder. Train Here.',
  size: '25,000 sqft',
  classTypes: '11+',

  location: {
    building: 'Vista Tower',
    street: 'Al Thuraya Street',
    area: 'Barsha Heights (Tecom)',
    city: 'Dubai',
    country: 'UAE',
    coordinates: { lat: 25.0966, lng: 55.1758 },
    region: 'AE-DU',
  },

  hours: {
    open: '06:00',
    close: '23:00',
    display: '6:00 AM – 11:00 PM daily',
  },

  contact: {
    phone: '+97143618131',
    phoneDisplay: '+971 4 361 8131',
    whatsapp: 'https://wa.me/97143618131',
    email: 'info@redfit.ae',
    instagram: 'https://instagram.com/redgym.ae',
    instagramHandle: '@redgym.ae',
    facebook: 'https://facebook.com/redfitgym.ae',
    snapchat: 'https://snapchat.com/t/RJsjjR6uSize',
  },

  offers: {
    voucher: '500 AED Voucher for Every New Member',
    couples: 'Couples Discount Available',
    friends: 'Friends Discount Available',
    groups: 'Groups Discount Available',
  },

  pillars: [
    'Combat Sports',
    'Strength Training',
    'Studio Rental',
    'Classes',
    'Free Parking',
    'Member Offers',
  ],

  disciplines: {
    combat: ['Boxing', 'MMA', 'BJJ', 'Muay Thai', 'Kickboxing', 'Karate'],
    strength: ['CrossFit', 'HIIT', 'Functional Training', 'Strength Training'],
    wellness: ['Yoga', 'Spinning', 'Zumba', 'Recovery Sessions'],
  },
} as const;

export const WHATSAPP_CTA = BRAND.contact.whatsapp;
