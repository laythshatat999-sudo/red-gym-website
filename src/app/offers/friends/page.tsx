import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Friends Discount — Red Gym Dubai',
  description:
    'Bring a friend, both save. Discounted Red Gym membership for two friends enrolled on a shared plan. Barsha Heights, Dubai.',
};

export default function FriendsPage() {
  return (
    <>
      <PageHero
        eyebrow="Friends offer"
        title={
          <>
            Better with
            <br />
            <span className="text-[#E11D2A]">a friend.</span>
          </>
        }
        subtitle="Join Red Gym with a friend on a shared plan and both of you get a discounted rate. The best accountability partner is the one waiting for you at 7 AM."
        backgroundImage={DISCIPLINES.crossfit}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Get Friends Pricing
        </a>
      </PageHero>

      <WhyTogetherSection />

      <ClosingCTAStrip
        eyebrow="Sign up together"
        title="Drag your friend in."
        description="WhatsApp us with both names — we'll get you both started on the same discounted plan."
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
          Why train with a friend
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          Showing up is<br />
          <span className="text-white/40">the hardest part.</span>
        </h2>
        <div className="space-y-5 text-white/70 leading-relaxed">
          <p>Most people miss workouts because nobody is waiting for them. With a friend in the lobby at 7 AM, that excuse evaporates.</p>
          <p>Spot each other on lifts. Push each other in HIIT class. Share PRs and bad days. It&apos;s the closest thing to a built-in training partner you can buy.</p>
          <p>And you both pay less — because joining together costs Red Gym less to onboard, and we pass the savings to you.</p>
        </div>
      </div>
    </section>
  );
}
