import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { FACILITY, SECTION_VIDEOS, VIDEO_POSTERS } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Studio Rental — Red Gym Dubai',
  description:
    'Premium studio rental at Red Gym Vista Tower, Barsha Heights. Private training, content shoots, group sessions. WhatsApp for availability and pricing.',
};

export default function StudioRentalPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio rental"
        title={
          <>
            Your studio.
            <br />
            <span className="text-[#E11D2A]">By the hour.</span>
          </>
        }
        subtitle="Rent a fully-equipped studio inside Red Gym for private training, content shoots, group sessions, or workshops. Premium space. Cinematic lighting. Zero compromises."
        backgroundImage={FACILITY.studioPink.desktop}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Check Availability
        </a>
      </PageHero>

      <FeatureVideoSection />
      <WhatsIncludedSection />
      <UseCasesSection />

      <ClosingCTAStrip
        eyebrow="Need a studio?"
        title="Tell us your date. We'll handle the rest."
        description="WhatsApp us with your preferred date, time, and purpose. We'll confirm availability and quote within minutes."
        primaryCtaLabel="Book on WhatsApp"
      />
    </>
  );
}

function FeatureVideoSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative aspect-[9/16] max-w-md mx-auto md:max-w-2xl md:aspect-video overflow-hidden bg-[#141414]">
          <video
            src={SECTION_VIDEOS.studioRental}
            poster={VIDEO_POSTERS.studioRental}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function WhatsIncludedSection() {
  const items = [
    'Fully soundproofed studio space',
    'Mirror walls and Pilates/yoga flooring',
    'Sound system with bluetooth + aux',
    'Adjustable studio lighting — cinematic to bright',
    'Air conditioning + ventilation',
    'Locker access for participants',
    'Free Vista Tower parking included',
    'On-site reception support',
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          What&apos;s included
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          Everything you need.<br />
          <span className="text-white/40">Nothing you don&apos;t.</span>
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/80 leading-relaxed">
              <span className="text-[#E11D2A] mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const cases = [
    {
      title: 'Private Training',
      body: 'Personal trainers and small group coaches running 1-on-1, 1-on-2, or boutique sessions. Quieter than the main floor. Total focus.',
    },
    {
      title: 'Content Shoots',
      body: 'Fitness creators, photographers, and brand teams needing premium space with cinematic lighting and authentic gym atmosphere.',
    },
    {
      title: 'Group Sessions',
      body: 'Yoga workshops, dance classes, women-only sessions, corporate wellness events. Bring up to 20 participants.',
    },
    {
      title: 'Workshops & Seminars',
      body: 'Movement workshops, recovery clinics, mobility courses, or hosted master classes. AV setup ready on request.',
    },
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            Who rents it
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
            Built for everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cases.map((c) => (
            <div key={c.title} className="border-l-2 border-[#E11D2A] pl-6">
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">{c.title}</h3>
              <p className="text-white/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
