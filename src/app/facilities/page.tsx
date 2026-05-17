import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { HERO_IMAGES, FACILITY } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Facilities — Red Gym 25,000 sqft in Barsha Heights, Dubai',
  description:
    'Inside Red Gym: combat zones, Hammer Strength floor, group studios, recovery area, and member parking. 25,000 sqft in Vista Tower, Dubai.',
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title={
          <>
            25,000 sqft.
            <br />
            <span className="text-[#E11D2A]">Built right.</span>
          </>
        }
        subtitle="Red Gym was designed from the ground up — not retrofitted. Every zone serves a purpose. Every floor handles serious use."
        backgroundImage={HERO_IMAGES.desktop}
      />

      <ZoneSection
        eyebrow="01 — Combat"
        title="Combat Zones"
        description="Three full-size mat areas with TITLE heavy bags, kicking pads, and elevated platforms. Built for boxing, MMA, BJJ, Muay Thai, kickboxing, and karate. The red-and-black mat tiles you've seen in the photos — they're as serious as they look."
        image={FACILITY.combatZone.desktop}
        imagePosition="right"
      />

      <ZoneSection
        eyebrow="02 — Strength"
        title="Strength Floor"
        description="Hammer Strength selectorized machines, full free-weight area, dumbbells up to 50kg+, Olympic platforms, squat racks. The room for serious lifters — quiet during off-peak, focused during prime time."
        image={FACILITY.strengthZone.desktop}
        imagePosition="left"
      />

      <ZoneSection
        eyebrow="03 — Studios"
        title="Group & Class Studios"
        description="Multiple studio spaces with mirror walls, cushioned flooring, sound systems, and adjustable cinematic lighting. Home base for our 11+ class types — yoga, spinning, zumba, HIIT, dance, CrossFit, and more."
        image={FACILITY.studioPink.desktop}
        imagePosition="right"
      />

      <ZoneSection
        eyebrow="04 — Recovery"
        title="Recovery & Lounge"
        description="A dedicated post-workout area for mobility, stretching, and recovery. Walk straight from the training floor into the recovery zone — no membership upgrade required, all included."
        image={FACILITY.combatZone.desktop}
        imagePosition="left"
      />

      <ClosingCTAStrip
        eyebrow="Want to see it?"
        title="Book a tour."
        description="WhatsApp us and pick a time. A 15-minute walkthrough is the fastest way to understand how Red Gym actually works."
        primaryCtaLabel="Book Tour on WhatsApp"
      />
    </>
  );
}

interface ZoneSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

function ZoneSection({ eyebrow, title, description, image, imagePosition }: ZoneSectionProps) {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            imagePosition === 'left' ? 'lg:[&>:first-child]:order-2' : ''
          }`}
        >
          <div>
            <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              {eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95] mb-6">
              {title}
            </h2>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
            <Image
              src={image}
              alt={title}
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
