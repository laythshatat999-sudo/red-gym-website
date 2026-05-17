import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Couples Membership Discount — Red Gym Dubai',
  description:
    'Train together, save together. Discounted Red Gym membership for couples and partners enrolled on a shared plan.',
};

export default function CouplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Couples offer"
        title={
          <>
            Two members.
            <br />
            <span className="text-[#E11D2A]">One discounted rate.</span>
          </>
        }
        subtitle="When you and your partner join Red Gym on a shared plan, you both get a discounted rate. Train together. Spot each other. Save together."
        backgroundImage={DISCIPLINES.yoga}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Get Couples Pricing
        </a>
      </PageHero>

      <WhyTogetherSection />

      <ClosingCTAStrip
        eyebrow="Join together"
        title="Tell us about your partner."
        description="WhatsApp us with both names — we'll set you up on a shared couples plan and apply the discount immediately."
        primaryCtaLabel="Message Us"
      />
    </>
  );
}

function WhyTogetherSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          Why train as a couple
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          Accountability is<br />
          <span className="text-white/40">the best partner.</span>
        </h2>
        <div className="space-y-5 text-white/70 leading-relaxed">
          <p>Studies show couples who train together stick to their fitness goals significantly longer than those who go solo.</p>
          <p>Beyond the discount, training together turns the gym into shared time — workout dates, post-session smoothies, and watching each other progress.</p>
          <p>And if one of you prefers strength while the other loves yoga? Both options are inside the same building, the same membership. No compromise.</p>
        </div>
      </div>
    </section>
  );
}
