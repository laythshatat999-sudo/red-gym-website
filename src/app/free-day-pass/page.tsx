import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';
import { BRAND, WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Free Day Pass — Try Red Gym Dubai Today',
  description:
    'Get a free day pass to Red Gym in Barsha Heights, Dubai. Try our combat zones, strength floor, and group classes. WhatsApp to claim yours.',
};

export default function FreeDayPassPage() {
  return (
    <>
      <PageHero
        eyebrow="Free day pass"
        title={
          <>
            Train for free.
            <br />
            <span className="text-[#E11D2A]">No catch.</span>
          </>
        }
        subtitle="Walk in. Train. Decide. We give every first-time visitor a free day inside Red Gym — full access to every floor, every class, every machine."
        backgroundImage={DISCIPLINES.mma}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Claim Yours on WhatsApp
        </a>
      </PageHero>

      <WhatsIncludedSection />
      <HowItWorksSection />

      <ClosingCTAStrip
        title="Your free day starts now."
        description="Send us a WhatsApp message with your preferred date. We'll confirm within minutes."
        primaryCtaLabel="Claim Free Day Pass"
      />
    </>
  );
}

function WhatsIncludedSection() {
  const included = [
    'Full access to all combat zones (boxing, MMA, BJJ, Muay Thai mats)',
    'Strength floor — Hammer Strength, free weights, Olympic platforms',
    'Any group class running that day (yoga, spinning, zumba, HIIT, CrossFit)',
    'Locker room, showers, and recovery area',
    'Member-only complimentary parking inside Vista Tower',
    'No pressure tour — explore at your own pace',
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          What&apos;s included
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          Every floor. Every class.<br />
          <span className="text-white/40">No fine print.</span>
        </h2>

        <ul className="space-y-4">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-4 text-white/80 text-base md:text-lg leading-relaxed">
              <Check className="w-6 h-6 text-[#E11D2A] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      n: '01',
      title: 'Message us on WhatsApp',
      body: `Send "free day pass" + your preferred date and time to ${BRAND.contact.phoneDisplay}. We respond within minutes during gym hours.`,
    },
    {
      n: '02',
      title: 'Bring your gym kit',
      body: 'Show up at reception 10 minutes early. We\'ll check you in, give you a quick tour, and point you toward whatever you came for.',
    },
    {
      n: '03',
      title: 'Train like a member',
      body: 'Spend as little or as much time as you want. Try the heavy bags, join a yoga class, lift heavy. No staff hovering, no pressure to commit.',
    },
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            How it works
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
            Three steps.<br />
            <span className="text-white/40">That&apos;s it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-display text-5xl text-[#E11D2A] mb-4">{s.n}</div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-3 tracking-tight">{s.title}</h3>
              <p className="text-white/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
