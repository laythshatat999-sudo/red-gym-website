'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;       // can be string or JSX with line breaks
  subtitle?: string;
  backgroundImage: string;
  imageAlt?: string;
  children?: ReactNode;   // for CTAs
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  imageAlt = '',
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden bg-black flex items-end pb-16 md:pb-24 pt-32 md:pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#E11D2A] text-xs md:text-sm uppercase tracking-[0.4em] mb-4 md:mb-6 font-medium"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-6 max-w-4xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
