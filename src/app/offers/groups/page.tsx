import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Groups Discount — Red Gym Dubai',
  description:
    'Bring 3-5 friends or colleagues and unlock the best Red Gym rate. Corporate, family, and friend group memberships in Barsha Heights, Dubai.',
};

export default function GroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Groups offer"
        title={
          <>
            The bigger the group,
            <br />
            <span className="text-[#E11D2A]">the bigger the saving.</span>
          </>
        }
        subtitle="3 to 5 members from the same friend circle, family, or office. Larger groups get larger discounts — the more of you, the lower your individual rate."
        backgroundImage={DISCIPLINES.boxing}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Get Group Pricing
        </a>
      </PageHero>

      <PerfectForSection />

      <ClosingCTAStrip
        eyebrow="Got a group?"
        title="Send us your headcount."
        description="WhatsApp us how many you are and how you want to train. We'll quote the best group rate available."
        primaryCtaLabel="Get Quote"
      />
    </>
  );
}

function PerfectForSection() {
  const groups = [
    {
      title: 'Office Wellness',
      body: 'Corporate teams that want a gym they can actually use. Convenient Barsha Heights location, free parking, premium spaces.',
    },
    {
      title: 'Family Plans',
      body: '3-5 family members — parents, kids over 16, siblings. Healthier home. Lower combined rate.',
    },
    {
      title: 'Friend Crews',
      body: 'Training crew, run club, fight team buddies, weekend warriors. Whoever your people are, bring them.',
    },
    {
      title: 'Sports Teams',
      body: 'Football clubs, MMA teams, weekend leagues. Train as a unit. Build the bond outside the field.',
    },
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            Who joins as a group
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
            Four ways<br />to bring your crew.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {groups.map((g) => (
            <div key={g.title} className="border-l-2 border-[#E11D2A] pl-6">
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">{g.title}</h3>
              <p className="text-white/70 leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
