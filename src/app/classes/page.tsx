import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sunrise, Sun, Moon, Calendar } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import FAQAccordion from '@/components/ui/FAQAccordion';
import JsonLdScript from '@/components/ui/JsonLdScript';
import { buildFAQPageLD } from '@/lib/discipline-schemas';
import { HERO_IMAGES, DISCIPLINES } from '@/lib/image-map';
import { WHATSAPP_CTA } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Fitness Classes in Dubai — Daily Schedule at Red Gym Barsha Heights',
  description:
    'Daily fitness classes at Red Gym Vista Tower, Barsha Heights, Dubai. 11+ disciplines: boxing, MMA, BJJ, yoga, spinning, zumba, HIIT, CrossFit. Open 6 AM-11 PM.',
};

const ALL_CLASSES = [
  { slug: 'boxing', name: 'Boxing', category: 'combat', description: 'The sweet science. Footwork and clean punches.' },
  { slug: 'mma', name: 'MMA', category: 'combat', description: 'Striking, grappling, ground work — all integrated.' },
  { slug: 'bjj', name: 'BJJ', category: 'combat', description: 'Brazilian Jiu-Jitsu. The gentle art on the mat.' },
  { slug: 'muay-thai', name: 'Muay Thai', category: 'combat', description: 'The art of eight limbs from Thailand.' },
  { slug: 'kickboxing', name: 'Kickboxing', category: 'combat', description: 'Western boxing meets powerful kicks.' },
  { slug: 'karate', name: 'Karate', category: 'combat', description: 'Traditional martial art. Discipline meets technique.' },
  { slug: 'crossfit', name: 'CrossFit', category: 'fitness', description: 'Functional fitness, taken seriously.' },
  { slug: 'yoga', name: 'Yoga', category: 'fitness', description: 'Strength, stillness, mobility. Under neon studios.' },
  { slug: 'spinning', name: 'Spinning', category: 'fitness', description: 'High-energy indoor cycling with curated music.' },
  { slug: 'zumba', name: 'Zumba', category: 'fitness', description: 'Latin dance fitness. Pure cardio fun.' },
  { slug: 'hiit', name: 'HIIT', category: 'fitness', description: 'Maximum effort, minimum time intervals.' },
];

const FAQS = [
  {
    question: 'How many classes are at Red Gym?',
    answer:
      'Red Gym offers 11+ class types across combat sports and fitness disciplines: boxing, MMA, BJJ, Muay Thai, kickboxing, karate, CrossFit, yoga, spinning, zumba, and HIIT. Classes run daily from 6 AM to 11 PM.',
  },
  {
    question: 'Are classes included in my membership?',
    answer:
      'Yes. Every Red Gym membership includes access to all 11+ class types at no additional charge. No class packages to buy, no per-session fees. Show up to anything that fits your schedule.',
  },
  {
    question: 'How do I know what time classes run?',
    answer:
      "Class schedules shift weekly. WhatsApp us at +971 4 361 8131 for this week's schedule, or visit reception during your free day pass. We can also email you the schedule if you prefer.",
  },
  {
    question: 'Can I drop into any class?',
    answer:
      'Yes. As a member, you can drop into any class without booking ahead. We recommend arriving 5-10 minutes early to get set up — especially for first-time attendance at a particular class.',
  },
  {
    question: 'Are there beginner-friendly classes?',
    answer:
      'Absolutely. Most disciplines have beginner-specific sessions clearly labeled in the schedule. The instructors scale movements and intensity for all levels in mixed classes too.',
  },
  {
    question: 'What time do morning classes start?',
    answer:
      'Morning classes typically start at 6 AM. Early morning sessions are popular with members training before work — boxing, spinning, and yoga commonly run during the 6 AM - 9 AM window.',
  },
  {
    question: 'Are there lunch-time classes?',
    answer:
      'Yes. We run express 30-45 minute classes during the lunch window (12 PM - 2 PM) — typically HIIT, spinning, and shorter strength sessions. Designed for members on tight midday schedules.',
  },
  {
    question: 'When are weekend classes?',
    answer:
      'Weekend schedules run from 6 AM with longer-form sessions, open mat slots, technical workshops, and special programming. Some of our most popular classes run on Saturdays and Sundays.',
  },
  {
    question: 'Are women-only classes available?',
    answer:
      'Yes. We run women-only sessions across multiple disciplines — boxing, kickboxing, Muay Thai, yoga, and others. WhatsApp us for the current schedule of women-specific classes.',
  },
  {
    question: 'How do I try a class for free?',
    answer:
      "Every first-time visitor gets a free day pass — full access to any class running that day. Message us on WhatsApp with your preferred date and which class interests you. We'll confirm in minutes.",
  },
  {
    question: 'Do I need to book classes in advance?',
    answer:
      'Most classes are drop-in for members. For very popular classes or limited-capacity sessions (workshops, special events), we may run signup lists — these are communicated in advance via Instagram and WhatsApp.',
  },
  {
    question: 'What should I bring to my first class?',
    answer:
      "Workout clothes you can move in, athletic shoes appropriate to the class (cross-trainers for HIIT/CrossFit, low-traction for dance/spinning, training shoes for combat), and water. Equipment is provided for most disciplines — we'll guide you through any specifics.",
  },
];

export default function ClassesPage() {
  const faqLD = buildFAQPageLD(FAQS);

  return (
    <>
      <JsonLdScript data={faqLD} />

      <PageHero
        eyebrow="Classes"
        title={
          <>
            11+ classes.
            <br />
            <span className="text-[#E11D2A]">Every day.</span>
          </>
        }
        subtitle="From 6 AM yoga to 10 PM boxing. Red Gym runs every discipline daily under one roof at Vista Tower, Barsha Heights. One membership unlocks them all."
        backgroundImage={HERO_IMAGES.desktop}
      >
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
        >
          Get This Week&apos;s Schedule
        </a>
      </PageHero>

      <TimeBlocksSection />
      <AllClassesSection />
      <ScheduleNoteSection />

      <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">FAQ</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
            Common questions about<br />
            <span className="text-white/40">our classes.</span>
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <ClosingCTAStrip
        eyebrow="Ready to start?"
        title="Try any class. Free."
        description="Your first visit is a free day pass — drop into any class running that day. WhatsApp us to claim yours."
        primaryCtaLabel="Claim Free Class"
      />
    </>
  );
}

function TimeBlocksSection() {
  const blocks = [
    {
      icon: Sunrise,
      time: '6 AM — 11 AM',
      title: 'Morning',
      body: 'Early start crowd. Boxing technique, yoga flows, strength work, and spinning to power your day.',
    },
    {
      icon: Sun,
      time: '12 PM — 2 PM',
      title: 'Lunch Express',
      body: '30-45 minute classes for midday warriors. HIIT, express spinning, quick strength conditioning.',
    },
    {
      icon: Moon,
      time: '5 PM — 11 PM',
      title: 'Evening',
      body: 'The post-work prime time. Every discipline runs across these hours. Most popular classes are here.',
    },
    {
      icon: Calendar,
      time: 'Saturday & Sunday',
      title: 'Weekend',
      body: 'Longer-form sessions, open mat slots, workshops, and weekend-only classes. Build your weekly base.',
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Find your time</p>
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
          Classes for every<br />
          <span className="text-white/40">part of your day.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="bg-[#141414] p-7 md:p-8 border border-white/5">
              <b.icon className="w-7 h-7 text-[#E11D2A] mb-5" strokeWidth={1.5} />
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">{b.time}</p>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-3 tracking-tight">{b.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllClassesSection() {
  const combatClasses = ALL_CLASSES.filter((c) => c.category === 'combat');
  const fitnessClasses = ALL_CLASSES.filter((c) => c.category === 'fitness');

  return (
    <>
      <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Combat classes</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
            Six combat sports.<br />
            <span className="text-white/40">All disciplines, all levels.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {combatClasses.map((c) => (
              <ClassCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Fitness classes</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[0.95] mb-12">
            Five fitness formats.<br />
            <span className="text-white/40">From cardio to strength.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {fitnessClasses.map((c) => (
              <ClassCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ClassCard({ slug, name, description }: { slug: string; name: string; description: string }) {
  // Map slug to image key (handle camelCase muay-thai → muayThai, hiit fallback → crossfit)
  const imageKey = slug === 'muay-thai' ? 'muayThai' : slug === 'hiit' ? 'crossfit' : slug;
  const image = (DISCIPLINES as Record<string, string>)[imageKey] || DISCIPLINES.boxing;

  return (
    <Link href={`/disciplines/${slug}`} className="group relative block overflow-hidden bg-[#141414] aspect-[4/5]">
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
          <span className="text-[#E11D2A] text-xs uppercase tracking-widest font-medium">View class</span>
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

function ScheduleNoteSection() {
  return (
    <section className="bg-[#141414] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-4 font-medium">A note on the schedule</p>
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[0.95] mb-8">
          Schedules shift weekly.
        </h2>
        <div className="space-y-5 text-white/70 leading-relaxed text-left">
          <p>
            We don&apos;t publish a static class timetable on the website because it changes — sometimes weekly. Demand shifts, instructors travel, special events get programmed in. A static schedule would be outdated within days.
          </p>
          <p>
            The fastest way to know exactly what&apos;s running and when is to WhatsApp us. We&apos;ll send you this week&apos;s full schedule, plus highlight the classes that match what you&apos;re looking for. Usually under five minutes.
          </p>
          <p>
            Members get the updated schedule weekly via Instagram and WhatsApp. The reception team at the gym also has the current week&apos;s schedule printed and ready for walk-ins.
          </p>
        </div>
      </div>
    </section>
  );
}
