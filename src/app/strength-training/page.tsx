import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';
import JsonLdScript from '@/components/ui/JsonLdScript';
import { buildSportActivityLD, buildFAQPageLD } from '@/lib/discipline-schemas';
import { FACILITY } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Strength Training in Dubai — Hammer Strength Floor at Red Gym',
  description:
    'Serious strength training in Dubai at Red Gym Barsha Heights. Hammer Strength machines, Olympic platforms, free weights, real lifters. Vista Tower.',
};

const FAQS: FAQItem[] = [
  {
    question: 'What strength equipment does Red Gym have?',
    answer:
      'We have a full Hammer Strength selectorized line, free weights including dumbbells up to 50kg+, multiple Olympic platforms with bumper plates, squat racks, bench press setups, cable systems, and a complete supporting cardio area. The strength floor is built for serious training.',
  },
  {
    question: 'What is Hammer Strength and why does it matter?',
    answer:
      'Hammer Strength is considered the gold standard of selectorized strength equipment — used by elite athletic programs, university gyms, and serious lifters worldwide. The machines use plate-loaded resistance with iso-lateral movement patterns that more closely mimic free-weight biomechanics than typical commercial gym machines.',
  },
  {
    question: 'Can I do Olympic lifting at Red Gym?',
    answer:
      'Yes. We have dedicated Olympic platforms with bumper plates, proper Eleiko or competition-grade bars, and the space to drop loads safely. Whether you are competing in weightlifting or just incorporating snatches and cleans into your training, you have what you need.',
  },
  {
    question: 'Is the gym crowded during peak hours?',
    answer:
      'The strength floor handles peak hours well due to the equipment volume — multiple racks, multiple platforms, full dumbbell range. Peak times (6-8 PM weekdays) are busier than off-peak, but rarely does any equipment have a serious wait.',
  },
  {
    question: 'Do you have coaches who specialize in strength training?',
    answer:
      'Yes. Several of our coaches have backgrounds in powerlifting, Olympic lifting, or strength conditioning. They are available for personal training sessions, programming consultation, or technique cleanup. WhatsApp us about specific coach matches for your goals.',
  },
  {
    question: 'Can I train powerlifting at Red Gym?',
    answer:
      'Absolutely. We have proper competition-style squat racks, bench setups with adjustable spotter arms, and deadlift platforms. The atmosphere supports heavy training without ego or intimidation. Many competitive powerlifters train here.',
  },
  {
    question: 'What about bodybuilding-style training?',
    answer:
      "The Hammer Strength line is bodybuilder favorite — designed specifically for hypertrophy-focused training. Combined with our free weights and cable systems, you have everything needed for serious bodybuilding programming.",
  },
  {
    question: 'Is the strength floor good for beginners?',
    answer:
      'Yes — particularly because the Hammer Strength machines provide a safer learning curve for fundamental movements (chest press, row, leg press) than barbell equivalents. Beginners can build strength and confidence on machines while progressing to free weights as they develop.',
  },
  {
    question: 'Can I get a personalized strength program?',
    answer:
      'Yes — through personal training with one of our strength-specialized coaches. Programs are built around your goals, experience level, and schedule. You can apply your 500 AED new member voucher toward initial PT sessions.',
  },
  {
    question: 'What equipment does Red Gym NOT have?',
    answer:
      'We focus on high-quality core equipment rather than every gimmick on the market. We do not have specialty machines like reverse hyper or glute-ham developer, sleds for outdoor pulling, or competition-only powerlifting setups. For most lifters, this is irrelevant — but worth knowing.',
  },
];

export default function StrengthTrainingPage() {
  const sportLD = buildSportActivityLD({
    name: 'Strength Training',
    description:
      'Serious strength training facility at Red Gym in Barsha Heights, Dubai. Hammer Strength machines, Olympic platforms, free weights, and dedicated coaches.',
    url: 'https://redfit.ae/strength-training',
    slug: 'strength-training',
  });
  const faqLD = buildFAQPageLD(FAQS);

  return (
    <>
      <JsonLdScript data={[sportLD, faqLD]} />

      <PageHero
        eyebrow="Strength training"
        title={
          <>
            The serious lifter&apos;s
            <br />
            <span className="text-[#E11D2A]">playground.</span>
          </>
        }
        subtitle="Hammer Strength machines, Olympic platforms, free weights, and the atmosphere serious training demands. The strength floor at Red Gym is built for results, not aesthetics."
        backgroundImage={FACILITY.strengthZone.desktop}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Tour the Strength Floor
        </a>
      </PageHero>

      <IntroSection />
      <EquipmentSection />
      <ProgramsSection />
      <PhilosophySection />
      <CoachesSection />

      <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">FAQ</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
            Strength training<br />
            <span className="text-white/40">questions answered.</span>
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <ClosingCTAStrip
        eyebrow="Want to lift here?"
        title="Drop in. Test the floor."
        description="Use your free day pass to test the strength equipment, squat racks, and platforms before committing. WhatsApp us to set it up."
        primaryCtaLabel="Book Free Visit"
      />
    </>
  );
}

function IntroSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">
          Why strength training matters
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          The most underrated<br />
          <span className="text-white/40">decision you can make.</span>
        </h2>
        <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
          <p>
            Of all the fitness investments you can make in your 30s, 40s, 50s, and beyond, strength training is the one with the highest long-term return. Resistance training preserves muscle mass, maintains bone density, improves insulin sensitivity, boosts mental health markers, and protects you against the metabolic decline that accelerates with age. Cardio is good. Strength is essential.
          </p>
          <p>
            And yet most Dubai gyms treat strength training as an afterthought — a few machines tucked into the corner of a CrossFit floor, or worse, a row of pristine equipment never touched because the gym is positioned for cardio classes and Instagram aesthetics. Serious lifters end up frustrated, scattered across multiple gyms, or training at home with limited equipment.
          </p>
          <p>
            Red Gym is different. The strength floor is the soul of our building — a dedicated, equipment-rich, intelligently designed space that respects the practice of getting stronger. Whether your goal is hypertrophy, powerlifting, Olympic lifting, general health, or athletic performance, you have what you need under one roof.
          </p>
        </div>
      </div>
    </section>
  );
}

function EquipmentSection() {
  const categories = [
    {
      title: 'Hammer Strength',
      body:
        'The full Hammer Strength selectorized line — chest press, incline press, shoulder press, row, lat pulldown, leg press, and supporting accessories. The gold standard of plate-loaded machines, used by elite athletic programs worldwide. Built for serious hypertrophy work.',
    },
    {
      title: 'Free Weights',
      body:
        "Dumbbells from 2.5kg up to 50kg+ in proper increments. Olympic bars (men's 20kg and women's 15kg). Specialty bars: trap bar, EZ curl bar, safety squat bar. Bumper plates and iron plates in full range. Built for any rep range and any goal.",
    },
    {
      title: 'Olympic Platforms',
      body:
        'Multiple dedicated Olympic lifting platforms with proper shock absorption, bumper plates, and supporting jerk blocks. Drop weight safely. Lift heavy with confidence. Whether you compete in weightlifting or simply use Olympic lifts in your training, the platforms accommodate both.',
    },
    {
      title: 'Power Racks & Benches',
      body:
        'Multiple squat racks with adjustable safety arms — perfect for heavy squats, presses, and pulls without spotters. Competition-style bench setups with adjustable arms. Smith machines for specific applications. Everything required for serious barbell training.',
    },
    {
      title: 'Cable Systems',
      body:
        'Full cable crossover stations, single-tower cable machines, and specialized pulley systems. The accessory work that completes a hypertrophy program — face pulls, cable curls, tricep extensions, and dozens of other essential variations.',
    },
    {
      title: 'Cardio Integration',
      body:
        'A full cardio area alongside the strength floor — treadmills, assault bikes, rowing machines, stairmasters. Useful for warm-ups, conditioning between sets, and active recovery. Located so you can easily transition between strength work and conditioning.',
    },
  ];

  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Equipment</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
            Built for serious training.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((c, idx) => (
            <div key={c.title} className="border-l-2 border-[#E11D2A] pl-6">
              <div className="font-display text-2xl text-[#E11D2A] mb-2">0{idx + 1}</div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-3 tracking-tight">{c.title}</h3>
              <p className="text-white/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Who trains here</p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          Six lifter profiles.<br />
          <span className="text-white/40">One facility.</span>
        </h2>

        <div className="space-y-8 text-white/70 leading-relaxed text-base md:text-lg">
          <div>
            <h3 className="font-display text-xl text-white mb-2 tracking-tight">Powerlifters</h3>
            <p>
              Squat, bench, deadlift — the big three under heavy load. We have competition-style racks, proper benches with adjustable safeties, and platforms that can absorb max-effort deadlifts. Several members compete in UAE and international powerlifting events.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-white mb-2 tracking-tight">Bodybuilders &amp; physique athletes</h3>
            <p>
              Hammer Strength is the bodybuilder&apos;s preferred equipment for a reason — efficient hypertrophy stimulus with minimal joint stress. Combined with our full dumbbell range and cable systems, you can run any popular bodybuilding split (PPL, upper-lower, bro split) without compromise.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-white mb-2 tracking-tight">Olympic weightlifters</h3>
            <p>
              Snatch and clean &amp; jerk demand proper platforms, bumper plates, and the freedom to drop loads. We have all of it. Whether you train recreationally or compete in weightlifting, you have a real space to work.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-white mb-2 tracking-tight">Combat sports athletes</h3>
            <p>
              Boxers, MMA fighters, and BJJ competitors training here use the strength floor for sport-specific power, conditioning, and injury prevention. The integration with combat sports facilities under the same roof saves enormous time vs splitting between gyms.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-white mb-2 tracking-tight">General health and longevity</h3>
            <p>
              The fastest-growing demographic in strength training: adults in their 30s, 40s, 50s+ who recognize that strength is the foundation of healthy aging. Our facility serves this perfectly — Hammer Strength machines are particularly forgiving on joints while still building real muscle.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-white mb-2 tracking-tight">Beginners</h3>
            <p>
              Yes — beginners. The strength floor is not intimidating once you understand the equipment. Hammer Strength machines provide a safer learning curve than free weights for fundamental movement patterns. With one or two intro PT sessions, beginners can train independently and effectively from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Training philosophy</p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-10">
          Three principles.<br />
          <span className="text-white/40">Lived daily.</span>
        </h2>

        <div className="space-y-10 text-white/70 leading-relaxed text-base md:text-lg">
          <div>
            <div className="font-display text-3xl text-[#E11D2A] mb-3">01</div>
            <h3 className="font-display text-2xl text-white mb-3 tracking-tight">Progressive overload, every session</h3>
            <p>
              The single most important principle in strength training. You add weight, reps, or quality over time. We support this with proper progression tracking, intelligent programming, and the equipment volume that lets you actually execute heavier and heavier sessions.
            </p>
          </div>
          <div>
            <div className="font-display text-3xl text-[#E11D2A] mb-3">02</div>
            <h3 className="font-display text-2xl text-white mb-3 tracking-tight">Form before load</h3>
            <p>
              Heavy weights with broken form are an injury timeline, not a training program. We coach proper technique from day one — the squat that descends correctly, the deadlift that hinges properly, the press that moves smoothly. Loads scale once form is locked in.
            </p>
          </div>
          <div>
            <div className="font-display text-3xl text-[#E11D2A] mb-3">03</div>
            <h3 className="font-display text-2xl text-white mb-3 tracking-tight">Recovery matters as much as training</h3>
            <p>
              The body adapts during rest, not during the session. Our recovery zone, mobility tools, and emphasis on sleep and nutrition education reflect this. Long-term strength is built through smart training plus smart recovery, not heroic intensity alone.
            </p>
          </div>
        </div>

        <Link
          href="/disciplines"
          className="group inline-flex items-center gap-2 mt-12 text-white text-sm uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors"
        >
          See all training disciplines
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function CoachesSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Strength coaches</p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[0.95] mb-8">
              Coaches who lift.<br />
              <span className="text-white/40">And compete.</span>
            </h2>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                Our strength coaches hold legitimate credentials in powerlifting, Olympic lifting, and strength conditioning. Several actively compete; all have spent years under the bar developing the technical knowledge they teach.
              </p>
              <p>
                Personal training, programming consultation, technique cleanup, and competition prep are all available. You can apply your 500 AED new member voucher toward initial sessions to see if a coach is the right fit before committing further.
              </p>
            </div>
            <a
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-10 text-white text-sm uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              Match with a coach
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
            <Image
              src={FACILITY.strengthZone.desktop}
              alt="Red Gym strength training floor"
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
