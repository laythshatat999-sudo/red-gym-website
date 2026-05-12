'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CTA, BRAND } from '@/lib/brand';
import { HERO_IMAGES } from '@/lib/image-map';

export default function ClosingCTASection() {
  return (
    <section className="relative bg-[#0A0A0A] py-32 md:py-48 overflow-hidden border-t border-white/5">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGES.desktop}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#E11D2A] text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Ready to start?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-8xl text-white tracking-tight leading-[0.9] mb-8"
        >
          ONE GYM.
          <br />
          ONE FAMILY.
          <br />
          <span className="text-[#E11D2A]">ONE COMMUNITY.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Open every day, 6 AM to 11 PM. Send us a message on WhatsApp and we&apos;ll get back to you within minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Message on WhatsApp
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            href="/free-day-pass"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-white text-white text-sm uppercase tracking-widest font-medium transition-colors"
          >
            Free Day Pass
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/40 text-xs uppercase tracking-widest mt-12"
        >
          {BRAND.location.building} · {BRAND.location.area} · {BRAND.location.city}
        </motion.p>
      </div>
    </section>
  );
}
