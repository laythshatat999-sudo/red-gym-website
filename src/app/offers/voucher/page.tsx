import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import { DISCIPLINES } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: '500 AED Voucher — Red Gym New Members',
  description:
    'Every new Red Gym member receives a 500 AED voucher applicable to membership, personal training, or recovery services.',
};

export default function VoucherPage() {
  return (
    <>
      <PageHero
        eyebrow="New member offer"
        title={
          <>
            500 AED.
            <br />
            <span className="text-[#E11D2A]">On us.</span>
          </>
        }
        subtitle="Every first-time Red Gym member receives a 500 AED voucher — applied to your first month, personal training sessions, or recovery treatments. No fine print."
        backgroundImage={DISCIPLINES.offers}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Claim 500 AED Voucher
        </a>
      </PageHero>

      <HowToUseSection />

      <ClosingCTAStrip
        eyebrow="Ready?"
        title="500 AED is waiting."
        description="Send us a quick WhatsApp message — we'll set up your account and apply the voucher in the same conversation."
        primaryCtaLabel="Claim Now"
      />
    </>
  );
}

function HowToUseSection() {
  const options = [
    {
      title: 'Toward your first month',
      body: 'Apply the full 500 AED to your initial membership payment. Pay less. Train more.',
    },
    {
      title: 'Personal training sessions',
      body: 'Use the voucher to book one-on-one or small group sessions with our certified coaches.',
    },
    {
      title: 'Recovery & wellness',
      body: 'Spend it on massage, mobility work, or other recovery services available at the gym.',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          How to use it
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          Three ways.<br />
          <span className="text-white/40">Your choice.</span>
        </h2>

        <div className="space-y-10">
          {options.map((o, idx) => (
            <div key={o.title} className="border-l-2 border-[#E11D2A] pl-6">
              <div className="font-display text-2xl text-[#E11D2A] mb-2">0{idx + 1}</div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-tight">{o.title}</h3>
              <p className="text-white/70 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
