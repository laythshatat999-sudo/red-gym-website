'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_VIDEOS, VIDEO_POSTERS } from '@/lib/image-map';
import { useEngagement } from '@/lib/useEngagement';

const ZONES = [
  {
    title: 'Combat Zone',
    description: 'Heavy bags, training mats, professional coaches. Boxing, MMA, BJJ, Muay Thai — built for fighters.',
    video: SECTION_VIDEOS.combat,
  },
  {
    title: 'Strength Zone',
    description: "Hammer Strength machines, Olympic platforms, free weights. The serious lifter's playground in Dubai.",
    video: SECTION_VIDEOS.strength,
  },
  {
    title: 'Studio Floor',
    description: 'Cinematic spaces designed for movement. Boxing gloves, yoga mats, spin bikes — every discipline has its home.',
    video: SECTION_VIDEOS.studio,
  },
];

// iOS first-paint autoplay is unreliable (see HeroSection comment + Phase 7).
// These videos are below the fold, so by the time they enter the viewport the
// user has already scrolled — useEngagement() returns true and the <video>
// elements mount with autoplay working. On first paint they render as poster
// images (no overlay, no DOM <video> for iOS to refuse to play).
export default function InsideRedGymSection() {
  const engaged = useEngagement();
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            Inside Red Gym
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tight leading-[0.95]">
            25,000 sqft of
            <br />
            <span className="text-white/40">no compromise.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {ZONES.map((zone, idx) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden bg-[#141414] aspect-[9/16] mb-5">
                {engaged ? (
                  <video
                    src={zone.video}
                    poster={VIDEO_POSTERS.hero}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={VIDEO_POSTERS.hero}
                    alt={zone.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-3 tracking-tight">{zone.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">{zone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
