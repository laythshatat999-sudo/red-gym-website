'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CTA } from '@/lib/brand';

interface ClosingCTAStripProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCtaLabel?: string;
}

export default function ClosingCTAStrip({
  eyebrow = 'Ready to start?',
  title,
  description,
  primaryCtaLabel = 'Message on WhatsApp',
}: ClosingCTAStripProps) {
  return (
    <section className="bg-[#0A0A0A] border-t border-white/5 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-5 font-medium"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-6"
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          {primaryCtaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
