import type { Metadata } from 'next';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { HERO_IMAGES } from '@/lib/image-map';
import { BRAND, WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Contact Red Gym — Barsha Heights, Dubai',
  description:
    'Visit Red Gym at Vista Tower, Al Thuraya Street, Barsha Heights, Dubai. Open daily 6 AM to 11 PM. WhatsApp +971 4 361 8131.',
};

// Inline brand SVG — lucide-react 1.x drops trademarked brand icons.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Drop in. Call in.
            <br />
            <span className="text-[#E11D2A]">Message in.</span>
          </>
        }
        subtitle={`We're open ${BRAND.hours.display.toLowerCase()}. Reach out however works for you — WhatsApp is fastest.`}
        backgroundImage={HERO_IMAGES.desktop}
      />

      <ContactGridSection />
    </>
  );
}

interface ContactItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
  cta?: string;
}

function ContactGridSection() {
  const items: ContactItem[] = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      lines: ['Fastest way to reach us', BRAND.contact.phoneDisplay],
      href: WHATSAPP_CTA,
      external: true,
      cta: 'Open WhatsApp',
    },
    {
      icon: Phone,
      title: 'Call us',
      lines: ['Reception is open during gym hours', BRAND.contact.phoneDisplay],
      href: `tel:${BRAND.contact.phone}`,
      cta: 'Call now',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['For partnerships and longer questions', BRAND.contact.email],
      href: `mailto:${BRAND.contact.email}`,
      cta: 'Send email',
    },
    {
      icon: MapPin,
      title: 'Visit',
      lines: [
        BRAND.location.building,
        BRAND.location.street,
        `${BRAND.location.area}, ${BRAND.location.city}`,
      ],
      href: `https://www.google.com/maps/search/?api=1&query=${BRAND.location.coordinates.lat},${BRAND.location.coordinates.lng}`,
      external: true,
      cta: 'Open in Maps',
    },
    {
      icon: Clock,
      title: 'Hours',
      lines: [BRAND.hours.display, 'Every day. No exceptions.'],
    },
    {
      icon: InstagramIcon,
      title: 'Follow',
      lines: [BRAND.contact.instagramHandle, 'Daily class clips & member moments'],
      href: BRAND.contact.instagram,
      external: true,
      cta: 'Open Instagram',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map(({ icon: Icon, title, lines, href, external, cta }) => {
            const linkProps = external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {};

            const inner = (
              <div className="h-full bg-[#141414] p-7 md:p-8 border border-white/5 hover:border-[#E11D2A]/40 transition-colors group">
                <Icon className="w-7 h-7 text-[#E11D2A] mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-2xl md:text-3xl text-white mb-3 tracking-tight">{title}</h3>
                {lines.map((line, idx) => (
                  <p
                    key={idx}
                    className={`text-sm leading-relaxed ${idx === 0 ? 'text-white/50 mb-1' : 'text-white/80'}`}
                  >
                    {line}
                  </p>
                ))}
                {cta && (
                  <span className="inline-block mt-5 text-xs uppercase tracking-widest text-[#E11D2A] group-hover:underline">
                    {cta} →
                  </span>
                )}
              </div>
            );

            return href ? (
              <a key={title} href={href} {...linkProps}>
                {inner}
              </a>
            ) : (
              <div key={title}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
