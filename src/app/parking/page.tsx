import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Free Parking — Red Gym Members in Barsha Heights, Dubai',
  description:
    'Red Gym members get complimentary parking inside Vista Tower, Al Thuraya Street. A real Dubai luxury — no validation, no time limit.',
};

export default function ParkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Free parking"
        title={
          <>
            Park inside.
            <br />
            <span className="text-[#E11D2A]">Walk straight in.</span>
          </>
        }
        subtitle="Every Red Gym member parks for free inside Vista Tower — directly below the gym. No validation. No time limit. No fighting Barsha Heights traffic for a street spot."
        backgroundImage={DISCIPLINES.parking}
      />

      <WhySection />
      <HowItWorksSection />

      <ClosingCTAStrip
        eyebrow="Members only"
        title="Want the parking too?"
        description="It's bundled with every Red Gym membership at no extra cost. Message us to get started."
        primaryCtaLabel="Become a Member"
      />
    </>
  );
}

function WhySection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          Why it matters
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          In Barsha Heights,<br />
          <span className="text-white/40">parking is the workout.</span>
        </h2>
        <div className="space-y-5 text-white/70 leading-relaxed">
          <p>
            Tecom is one of Dubai&apos;s most parking-starved districts. Street spots are rare during peak hours. Paid garages charge by the hour. Plenty of nearby gyms expect you to either pay or play parking lottery.
          </p>
          <p>
            Red Gym members skip all of that. You pull into Vista Tower, take the elevator up to the gym floor, and you&apos;re warming up before most members of other gyms have found a spot.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          How it works
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[0.95] mb-10">
          Simpler than the rest of your routine.
        </h2>
        <ul className="space-y-6 text-white/70 leading-relaxed">
          <li className="flex gap-5">
            <span className="font-display text-3xl text-[#E11D2A] leading-none">01</span>
            <span>Drive into the Vista Tower entrance on Al Thuraya Street.</span>
          </li>
          <li className="flex gap-5">
            <span className="font-display text-3xl text-[#E11D2A] leading-none">02</span>
            <span>Use the dedicated member entrance (we&apos;ll show you on tour).</span>
          </li>
          <li className="flex gap-5">
            <span className="font-display text-3xl text-[#E11D2A] leading-none">03</span>
            <span>Park, lock, and head straight up. No tickets, no validation.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
