import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BRAND, WHATSAPP_CTA } from '@/lib/brand';
import { LOGO } from '@/lib/image-map';

// Inline brand SVGs — lucide-react 1.x drops trademarked brand icons.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src={LOGO.icon}
              alt="Red Gym"
              width={96}
              height={96}
              className="mb-4 w-20 h-20 md:w-24 md:h-24"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {BRAND.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={BRAND.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#E11D2A] hover:text-[#E11D2A] text-white/60 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={BRAND.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#E11D2A] hover:text-[#E11D2A] text-white/60 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Train */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-5">
              Train
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/disciplines" className="text-white/60 hover:text-white transition-colors">Combat Disciplines</Link></li>
              <li><Link href="/strength-training" className="text-white/60 hover:text-white transition-colors">Strength Training</Link></li>
              <li><Link href="/classes" className="text-white/60 hover:text-white transition-colors">Group Classes</Link></li>
              <li><Link href="/studio-rental" className="text-white/60 hover:text-white transition-colors">Studio Rental</Link></li>
              <li><Link href="/free-day-pass" className="text-white/60 hover:text-white transition-colors">Free Day Pass</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/memberships" className="text-white/60 hover:text-white transition-colors">Memberships</Link></li>
              <li><Link href="/offers" className="text-white/60 hover:text-white transition-colors">Offers</Link></li>
              <li><Link href="/facilities" className="text-white/60 hover:text-white transition-colors">Facilities</Link></li>
              <li><Link href="/parking" className="text-white/60 hover:text-white transition-colors">Free Parking</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-5">
              Visit
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#E11D2A] flex-shrink-0 mt-0.5" />
                <span>{BRAND.location.building}, {BRAND.location.street},<br />{BRAND.location.area}, {BRAND.location.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E11D2A] flex-shrink-0" />
                <span className="text-white/60">{BRAND.hours.display}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E11D2A] flex-shrink-0" />
                <a href={`tel:${BRAND.contact.phone}`} className="text-white/60 hover:text-white transition-colors">
                  {BRAND.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E11D2A] flex-shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="text-white/60 hover:text-white transition-colors">
                  {BRAND.contact.email}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2.5 bg-[#E11D2A] hover:bg-[#B8141F] transition-colors text-white text-xs uppercase tracking-widest font-medium"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {BRAND.name} ({BRAND.legalName}). All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Premium Combat Sports & Fitness · {BRAND.location.area}, Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
