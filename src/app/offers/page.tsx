import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Member Offers — Red Gym Dubai',
  description:
    '500 AED voucher for new members. Couples, friends, and group discounts. Red Gym Vista Tower, Barsha Heights, Dubai.',
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Offers"
        title={
          <>
            Train more.
            <br />
            <span className="text-[#E11D2A]">Pay less.</span>
          </>
        }
        subtitle="Every new Red Gym member gets a 500 AED voucher. Bring a partner, friend, or group — and your rate drops further."
        backgroundImage={DISCIPLINES.offers}
      />

      <OffersGridSection />

      <ClosingCTAStrip
        title="Which one suits you?"
        description="WhatsApp us — tell us how you want to join. We'll match you with the best current offer."
        primaryCtaLabel="Get My Offer"
      />
    </>
  );
}

function OffersGridSection() {
  const offers = [
    {
      title: '500 AED Voucher',
      description:
        'Every new member receives a 500 AED voucher applicable toward your first month, personal training, or recovery service.',
      href: '/offers/voucher',
      image: DISCIPLINES.offers,
      label: 'New members',
    },
    {
      title: 'Couples Discount',
      description:
        'Train with your partner or spouse on a shared plan. Discounted rate when you enroll together.',
      href: '/offers/couples',
      image: DISCIPLINES.yoga,
      label: 'Two members',
    },
    {
      title: 'Friends Discount',
      description:
        'Join Red Gym with a friend and both of you save. Perfect for accountability partners and training buddies.',
      href: '/offers/friends',
      image: DISCIPLINES.crossfit,
      label: 'Two members',
    },
    {
      title: 'Groups Discount',
      description:
        '3-5 members from the same family, office, or friend circle. Larger groups, larger savings.',
      href: '/offers/groups',
      image: DISCIPLINES.boxing,
      label: '3+ members',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {offers.map((o) => (
            <Link
              key={o.title}
              href={o.href}
              className="group relative block overflow-hidden bg-[#141414] aspect-[4/3]"
            >
              <div className="absolute inset-0">
                <Image
                  src={o.image}
                  alt={o.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between">
                  <span className="text-[#E11D2A] text-xs uppercase tracking-widest font-medium">
                    {o.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl mb-3 tracking-tight">{o.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-md">{o.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
