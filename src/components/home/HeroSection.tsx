'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_VIDEO } from '@/lib/image-map';
import { WHATSAPP_CTA, BRAND } from '@/lib/brand';
import { useEngagement, useGesturePlay } from '@/lib/useEngagement';

export default function HeroSection() {
  // Two-layer autoplay flow (see useEngagement.ts comment for the full story).
  // Render the poster image immediately. After ~400ms the auto-engagement
  // timer mounts the <video> underneath. When the browser fires `playing`
  // (i.e. the video has actually started rendering frames), we unmount the
  // poster — clean swap. If iOS refused the timer-triggered autoplay, the
  // useGesturePlay hook retries video.play() inside the next user gesture
  // handler, which iOS allows.
  const engaged = useEngagement();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useGesturePlay(videoRef);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video / poster background.
          Source order = paint order (children all absolute, no z-index):
            video (base) → poster (covers video until onPlaying) → gradients on top. */}
      <div className="absolute inset-0 z-0">
        {engaged && (
          <video
            ref={videoRef}
            src={HERO_VIDEO.mp4}
            poster={HERO_VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            onPlaying={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {!playing && (
          <Image
            src={HERO_VIDEO.poster}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Overlay gradients — darken bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-5 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#E11D2A] text-xs md:text-sm uppercase tracking-[0.4em] mb-4 md:mb-6 font-medium">
            Barsha Heights · Dubai
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tight mb-6"
        >
          TRAIN HARDER.
          <br />
          <span className="text-[#E11D2A]">TRAIN HERE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8 md:mb-10"
        >
          {BRAND.size} of combat sports, premium strength, and {BRAND.classTypes} fitness classes. One gym. One family. One community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
          >
            Join Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            href="/free-day-pass"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 hover:border-white text-white text-sm uppercase tracking-widest font-medium transition-colors"
          >
            Free Day Pass
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
