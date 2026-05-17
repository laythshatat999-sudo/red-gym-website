import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';
import JsonLdScript from '@/components/ui/JsonLdScript';
import { buildSportActivityLD, buildFAQPageLD } from '@/lib/discipline-schemas';
import { WHATSAPP_CTA } from '@/lib/brand';

export interface DisciplinePageProps {
  slug: string;
  name: string;
  eyebrow: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroImage: string;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  whatYouLearn: {
    eyebrow: string;
    title: string;
    intro: string;
    bullets: { title: string; body: string }[];
  };
  whyRedGym: { eyebrow: string; title: string; paragraphs: string[] };
  schedule: { eyebrow: string; title: string; body: string };
  coaches: { eyebrow: string; title: string; paragraphs: string[] };
  related: { slug: string; name: string; description: string; image: string }[];
  faqs: FAQItem[];
  schemaDescription: string;
  siteOrigin?: string;
}

export default function DisciplinePageTemplate(props: DisciplinePageProps) {
  const origin = props.siteOrigin || 'https://redfit.ae';
  const pageUrl = `${origin}/disciplines/${props.slug}`;

  const sportLD = buildSportActivityLD({
    name: props.name,
    description: props.schemaDescription,
    url: pageUrl,
    slug: props.slug,
  });
  const faqLD = buildFAQPageLD(props.faqs);

  return (
    <>
      <JsonLdScript data={[sportLD, faqLD]} />

      <PageHero
        eyebrow={props.eyebrow}
        title={props.heroTitle}
        subtitle={props.heroSubtitle}
        backgroundImage={props.heroImage}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Try a Free Class
        </a>
      </PageHero>

      {/* Intro */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            {props.intro.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
            {props.intro.title}
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
            {props.intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What You Learn */}
      <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
              {props.whatYouLearn.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-6">
              {props.whatYouLearn.title}
            </h2>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {props.whatYouLearn.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {props.whatYouLearn.bullets.map((b, idx) => (
              <div key={b.title} className="border-l-2 border-[#E11D2A] pl-6">
                <div className="font-display text-2xl text-[#E11D2A] mb-2">0{idx + 1}</div>
                <h3 className="font-display text-2xl text-white mb-3 tracking-tight">{b.title}</h3>
                <p className="text-white/70 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Red Gym */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            {props.whyRedGym.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
            {props.whyRedGym.title}
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
            {props.whyRedGym.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            {props.schedule.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[0.95] mb-8">
            {props.schedule.title}
          </h2>
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            {props.schedule.body}
          </p>
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-10 text-white text-sm uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors"
          >
            Get this week&apos;s schedule
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Coaches */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            {props.coaches.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
            {props.coaches.title}
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
            {props.coaches.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            Related disciplines
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[0.95] mb-12">
            Train across the board.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {props.related.map((r) => (
              <Link
                key={r.slug}
                href={`/disciplines/${r.slug}`}
                className="group relative block overflow-hidden bg-[#0A0A0A] aspect-[4/5]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="font-display text-2xl md:text-3xl mb-2 tracking-tight">{r.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{r.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
            Common questions.
          </h2>
          <FAQAccordion items={props.faqs} />
        </div>
      </section>

      <ClosingCTAStrip
        eyebrow="Ready?"
        title={`Start ${props.name.toLowerCase()} today.`}
        description="Send us a WhatsApp message — we'll tell you when the next beginner-friendly class runs and set up your free trial."
        primaryCtaLabel="Message on WhatsApp"
      />
    </>
  );
}
