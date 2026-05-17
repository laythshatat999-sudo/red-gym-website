import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { HERO_IMAGES, DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Disciplines — Combat Sports & Fitness Classes in Dubai',
  description:
    '11+ disciplines under one roof at Red Gym, Barsha Heights. Boxing, MMA, BJJ, Muay Thai, Kickboxing, Karate, CrossFit, Yoga, Spinning, Zumba, HIIT.',
};

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Disciplines"
        title={
          <>
            11+ disciplines.
            <br />
            <span className="text-[#E11D2A]">One membership.</span>
          </>
        }
        subtitle="Combat sports, strength conditioning, dance, yoga, and high-intensity classes — all run under one roof at Red Gym in Barsha Heights, Dubai. Pick one. Pick all."
        backgroundImage={HERO_IMAGES.desktop}
      />

      <CombatSection />
      <FitnessSection />

      <ClosingCTAStrip
        eyebrow="Not sure where to start?"
        title="Try a free class."
        description="Walk in. Pick any class. Train. Decide. WhatsApp us to claim your free trial."
        primaryCtaLabel="Claim Free Class"
      />
    </>
  );
}

const COMBAT_DISCIPLINES = [
  {
    slug: 'boxing',
    name: 'Boxing',
    tagline: 'The sweet science.',
    description: 'Footwork, defense, and clean punching technique. From beginner to ring-ready.',
    image: DISCIPLINES.boxing,
  },
  {
    slug: 'mma',
    name: 'MMA',
    tagline: 'Mixed martial arts.',
    description: 'Striking, grappling, and ground work blended into one discipline.',
    image: DISCIPLINES.mma,
  },
  {
    slug: 'bjj',
    name: 'BJJ',
    tagline: 'Brazilian Jiu-Jitsu.',
    description: 'Submissions, sweeps, and the gentle art of leverage on the mat.',
    image: DISCIPLINES.bjj,
  },
  {
    slug: 'muay-thai',
    name: 'Muay Thai',
    tagline: 'The art of eight limbs.',
    description: "Thailand's national sport. Elbows, knees, fists, shins.",
    image: DISCIPLINES.muayThai,
  },
  {
    slug: 'kickboxing',
    name: 'Kickboxing',
    tagline: 'Power and precision.',
    description: 'Western boxing fused with kicks. High-intensity. Beginner-friendly.',
    image: DISCIPLINES.kickboxing,
  },
  {
    slug: 'karate',
    name: 'Karate',
    tagline: 'The empty hand.',
    description: 'Disciplined strikes, kata, and the philosophy of the dojo.',
    image: DISCIPLINES.boxing, // fallback — no dedicated karate image yet
  },
];

const FITNESS_DISCIPLINES = [
  {
    slug: 'crossfit',
    name: 'CrossFit',
    tagline: 'Constantly varied. High intensity.',
    description: 'Olympic lifts, gymnastics, and metabolic conditioning.',
    image: DISCIPLINES.crossfit,
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    tagline: 'Strength. Stillness. Mobility.',
    description: 'Vinyasa, hatha, restorative — all under candlelit neon studios.',
    image: DISCIPLINES.yoga,
  },
  {
    slug: 'spinning',
    name: 'Spinning',
    tagline: 'Sweat. Music. Power.',
    description: 'High-energy indoor cycling with cinematic lighting.',
    image: DISCIPLINES.spinning,
  },
  {
    slug: 'zumba',
    name: 'Zumba',
    tagline: 'Dance fitness.',
    description: 'Latin rhythms meet cardio. Burn calories. Have fun.',
    image: DISCIPLINES.zumba,
  },
  {
    slug: 'hiit',
    name: 'HIIT',
    tagline: 'High-intensity intervals.',
    description: 'Maximum effort, minimum time. The 30-minute body transformation.',
    image: DISCIPLINES.crossfit, // fallback — no dedicated HIIT image yet
  },
];

function CombatSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          Combat sports
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          Real fighters.<br />
          <span className="text-white/40">Real training.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {COMBAT_DISCIPLINES.map((d) => (
            <DisciplineCard key={d.slug} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FitnessSection() {
  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          Fitness & classes
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          Every workout.<br />
          <span className="text-white/40">Every vibe.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FITNESS_DISCIPLINES.map((d) => (
            <DisciplineCard key={d.slug} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DisciplineCard({
  slug,
  name,
  tagline,
  description,
  image,
}: {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      href={`/disciplines/${slug}`}
      className="group relative block overflow-hidden bg-[#141414] aspect-[4/5]"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <span className="text-[#E11D2A] text-xs uppercase tracking-widest font-medium">
            {tagline}
          </span>
          <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl mb-3 tracking-tight">{name}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}
