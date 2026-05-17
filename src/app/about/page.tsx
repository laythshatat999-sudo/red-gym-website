import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { HERO_IMAGES, FACILITY } from '@/lib/image-map';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'About Red Gym — One Gym. One Family. One Community.',
  description:
    'Red Gym is Dubai\'s premier combat sports and fitness destination in Barsha Heights. 25,000 sqft. 11+ class types. Real coaches, real community.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Red Gym"
        title={
          <>
            One Gym.
            <br />
            One Family.
            <br />
            <span className="text-[#E11D2A]">One Community.</span>
          </>
        }
        subtitle="Red Gym is more than 25,000 square feet of training equipment. We're a home for fighters, lifters, dancers, yogis, and everyone in between — built in the heart of Barsha Heights, Dubai."
        backgroundImage={HERO_IMAGES.desktop}
        imageAlt="Inside Red Gym"
      />

      <BrandStorySection />
      <PhilosophySection />
      <FacilitySection />

      <ClosingCTAStrip
        eyebrow="Come visit"
        title="Train with us. Today."
        description={`We're open ${BRAND.hours.display.toLowerCase()}. Walk in, message us on WhatsApp, or grab a free day pass.`}
      />
    </>
  );
}

function BrandStorySection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          A combat-credible home<br />for every kind of athlete.
        </h2>
        <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed max-w-3xl">
          <p>
            Red Gym was built on a simple idea: serious training shouldn&apos;t feel intimidating, and an inviting space shouldn&apos;t sacrifice intensity. Both can live in the same building. Both can live in 25,000 square feet of red, black, and neon.
          </p>
          <p>
            We sit on Al Thuraya Street in Vista Tower, right in the middle of Barsha Heights (Tecom) — Dubai&apos;s most connected business and residential district. Our doors open at 6 AM for the early risers, close at 11 PM for the after-work crowd, and stay that way every single day of the year.
          </p>
          <p>
            Whether you&apos;re stepping onto a mat for the first time, working a heavy bag during your lunch break, lifting 200 kilos at sunset, or unwinding in a candlelit yoga studio — Red Gym is built to hold all of it without compromise.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const pillars = [
    {
      title: 'Real Coaches',
      body: 'Professional, certified, often current or former competitors. They teach because they love the craft, not because they read about it.',
    },
    {
      title: 'No Pretension',
      body: 'Black tank top, red shorts, or full gym kit — wear what you like, train how you train. We care about effort, not aesthetic.',
    },
    {
      title: 'Equipment that Endures',
      body: 'Hammer Strength machines, Olympic platforms, professional heavy bags. Built for serious use, not Instagram backdrops.',
    },
    {
      title: 'Community Over Competition',
      body: 'Fighters help yogis. Lifters cheer on first-timers. Everyone shares the same room. That\'s the family in "One Gym. One Family. One Community."',
    },
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            How We Train
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
            Four principles. Every day.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {pillars.map((p, idx) => (
            <div key={p.title} className="border-l-2 border-[#E11D2A] pl-6">
              <div className="font-display text-2xl text-[#E11D2A] mb-2">0{idx + 1}</div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-white/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitySection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              The Space
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-8">
              25,000 sqft.<br />
              <span className="text-white/40">Zero compromise.</span>
            </h2>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>Three full-size combat zones with heavy bags, mats, and elevated platforms.</p>
              <p>A dedicated strength floor stocked with Hammer Strength, free weights, and Olympic platforms.</p>
              <p>Neon-lit studio rooms for spinning, yoga, dance, and group training.</p>
              <p>Member-only complimentary parking inside Vista Tower — a Dubai luxury most gyms can&apos;t offer.</p>
            </div>
            <Link
              href="/facilities"
              className="group inline-flex items-center gap-2 mt-10 text-white text-sm uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              See the full facility
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
            <Image
              src={FACILITY.strengthZone.desktop}
              alt="Red Gym strength zone with Hammer Strength equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
