'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_CTA } from '@/lib/brand';
import { LOGO } from '@/lib/image-map';

const NAV_LINKS = [
  { href: '/disciplines', label: 'Disciplines' },
  { href: '/strength-training', label: 'Strength' },
  { href: '/classes', label: 'Classes' },
  { href: '/studio-rental', label: 'Studio Rental' },
  { href: '/memberships', label: 'Memberships' },
  { href: '/offers', label: 'Offers' },
  { href: '/free-day-pass', label: 'Free Pass' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              aria-label="Red Gym home"
              className="flex items-center"
            >
              <Image
                src={LOGO.icon}
                alt="Red Gym"
                width={56}
                height={56}
                priority
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_CTA}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block px-5 py-2.5 bg-[#E11D2A] hover:bg-[#B8141F] transition-colors text-white text-xs uppercase tracking-widest font-medium"
              >
                Join Today
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-white/5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label="Red Gym home"
                className="flex items-center"
              >
                <Image
                  src={LOGO.icon}
                  alt="Red Gym"
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: {},
              }}
              className="flex flex-col px-5 py-8 gap-1"
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-3xl uppercase tracking-wide text-white hover:text-[#E11D2A] transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
                href={WHATSAPP_CTA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-8 block px-6 py-4 bg-[#E11D2A] text-white text-center text-sm uppercase tracking-widest font-medium"
              >
                Chat on WhatsApp
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
