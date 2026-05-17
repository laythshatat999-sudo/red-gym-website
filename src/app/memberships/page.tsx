import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { HERO_IMAGES } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Memberships — Red Gym Dubai',
  description:
    'Red Gym memberships in Barsha Heights, Dubai. Monthly, annual, couples, and group plans. Free parking included. Message on WhatsApp for current rates.',
};

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title={
          <>
            One pass.
            <br />
            <span className="text-[#E11D2A]">Everything inside.</span>
          </>
        }
        subtitle="Every Red Gym membership unlocks all 25,000 square feet — combat zones, strength floor, all 11+ classes, recovery area, and free parking inside Vista Tower."
        backgroundImage={HERO_IMAGES.desktop}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Get Membership Pricing
        </a>
      </PageHero>

      <WhatsIncludedGrid />
      <PlanTypesSection />
      <PricingPolicySection />

      <ClosingCTAStrip
        eyebrow="Ready to join?"
        title="Message us. We'll do the rest."
        description="Pricing changes seasonally and we run regular member offers. WhatsApp us for current rates — it's the fastest way to get an answer."
        primaryCtaLabel="Get Pricing on WhatsApp"
      />
    </>
  );
}

function WhatsIncludedGrid() {
  const items = [
    'Unlimited access to all combat zones',
    'Full strength floor — Hammer Strength, free weights, platforms',
    'Every group class — yoga, spinning, zumba, HIIT, CrossFit, dance',
    'Locker rooms, showers, recovery area',
    'Member-only free parking inside Vista Tower',
    'Daily gym hours: 6 AM to 11 PM',
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          What every membership includes
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          No tiers. No add-ons.<br />
          <span className="text-white/40">Everything&apos;s just included.</span>
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/80 leading-relaxed">
              <Check className="w-5 h-5 text-[#E11D2A] flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PlanTypesSection() {
  const plans = [
    {
      title: 'Monthly',
      body: 'Pay as you go. Maximum flexibility. Cancel or pause anytime. Perfect for testing the waters or for residents on short stays in Dubai.',
    },
    {
      title: 'Annual',
      body: 'The best value tier — significant savings over monthly billing. For members who know they want to make Red Gym their long-term home.',
    },
    {
      title: 'Couples',
      body: 'Train together, save together. Discounted rate when two members enroll on a shared plan. Spouses, partners, or training buddies.',
    },
    {
      title: 'Friends & Groups',
      body: '3-5 members from the same friend circle, family, or office. Larger groups get larger discounts — message us for the breakdown.',
    },
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            Plan types
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
            Four ways to join.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {plans.map((p) => (
            <div key={p.title} className="border-l-2 border-[#E11D2A] pl-6">
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-white/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPolicySection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          On pricing
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[0.95] mb-8">
          Why we don&apos;t post numbers.
        </h2>
        <div className="space-y-4 text-white/70 leading-relaxed text-left">
          <p>
            Our rates change with the season — sometimes monthly. We also regularly run member offers that beat any &ldquo;listed price&rdquo; we could publish here.
          </p>
          <p>
            The fastest way to know what you&apos;d actually pay is to WhatsApp us with how you plan to use the gym. We&apos;ll give you a real number and the current offer, usually within minutes.
          </p>
          <p>
            And every new member gets a <strong className="text-white">500 AED voucher</strong> — applicable toward your first month, personal training session, or recovery service.
          </p>
        </div>
      </div>
    </section>
  );
}
