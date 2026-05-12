'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Car, Tag } from 'lucide-react';
import { DISCIPLINES, FACILITY, CLASSES, VIDEO_POSTERS } from '@/lib/image-map';

interface Pillar {
  number: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: 'parking' | 'offer';
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Combat Sports',
    description: 'Boxing, MMA, BJJ, Muay Thai, Kickboxing, Karate. Train with elite coaches in our 25,000 sqft facility.',
    href: '/disciplines',
    image: DISCIPLINES.mma,
  },
  {
    number: '02',
    title: 'Strength Training',
    description: 'Premium Hammer Strength equipment. The serious lifter\'s playground in Barsha Heights.',
    href: '/strength-training',
    image: FACILITY.strengthZone.desktop,
  },
  {
    number: '03',
    title: 'Studio Rental',
    description: 'Professional studios for trainers, choreographers, and creators. Hourly or recurring bookings.',
    href: '/studio-rental',
    image: VIDEO_POSTERS.studioRental,
  },
  {
    number: '04',
    title: 'Classes',
    description: '11+ class types: Yoga, Spinning, Zumba, CrossFit, HIIT, and more. Daily schedule from 6AM to 11PM.',
    href: '/classes',
    image: CLASSES.muayThai,
  },
  {
    number: '05',
    title: 'Free Parking',
    description: 'Members-only complimentary parking in Vista Tower. A real advantage in Barsha Heights, Dubai.',
    href: '/parking',
    icon: 'parking',
  },
  {
    number: '06',
    title: 'Member Offers',
    description: '500 AED voucher for new members. Couples, friends, and groups discounts available.',
    href: '/offers',
    icon: 'offer',
  },
];

export default function SixPillarsSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            Six Pillars
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
            Everything you need.
            <br />
            <span className="text-white/40">All under one roof.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={pillar.href}
                className="group relative block overflow-hidden bg-[#141414] aspect-[4/5] hover:cursor-pointer"
              >
                {/* Image or icon background */}
                {pillar.image ? (
                  <div className="absolute inset-0">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#141414] to-[#0A0A0A] flex items-center justify-center">
                    {pillar.icon === 'parking' && (
                      <Car className="w-32 h-32 text-[#E11D2A]/20 group-hover:text-[#E11D2A]/40 transition-colors duration-500" strokeWidth={1} />
                    )}
                    {pillar.icon === 'offer' && (
                      <Tag className="w-32 h-32 text-[#E11D2A]/20 group-hover:text-[#E11D2A]/40 transition-colors duration-500" strokeWidth={1} />
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-xl text-[#E11D2A]">{pillar.number}</span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl mb-3 tracking-tight">{pillar.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xs">{pillar.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
