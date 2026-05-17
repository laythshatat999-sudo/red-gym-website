import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'MMA Training in Dubai — Red Gym Barsha Heights',
  description:
    'Mixed martial arts training in Dubai at Red Gym, Vista Tower, Barsha Heights. Striking, grappling, ground work. Real coaches, real cage, daily classes.',
};

export default function MMAPage() {
  return (
    <DisciplinePageTemplate
      slug="mma"
      name="MMA"
      schemaDescription="Mixed martial arts (MMA) classes for all levels at Red Gym in Barsha Heights, Dubai. Boxing, kickboxing, BJJ, wrestling, and ground game training."
      eyebrow="Mixed Martial Arts"
      heroTitle={
        <>
          The full art.
          <br />
          <span className="text-[#E11D2A]">Every range.</span>
        </>
      }
      heroSubtitle="MMA training the way it's meant to be — boxing, kickboxing, BJJ, and wrestling under one roof. Build a complete fighter, or just a complete you."
      heroImage={DISCIPLINES.mma}
      intro={{
        eyebrow: 'About MMA at Red Gym',
        title: 'Strikes. Grapples. Submissions. All in one program.',
        paragraphs: [
          'Mixed Martial Arts is the most complete combat sport in the world. A genuine MMA fighter must be proficient in striking (boxing, kickboxing, Muay Thai), takedowns (wrestling, judo), and ground work (BJJ, submissions). Most gyms teach one or two of these well — Red Gym, in Barsha Heights, Dubai, was designed to teach all of them in the same building.',
          "Our MMA program isn't a glorified bootcamp. It's a real training pathway — you can drop in for a single class to try it, train recreationally without sparring, or commit to a competition track that includes pad work, drilling, live rolling, and supervised sparring.",
          'MMA at Red Gym attracts a wide spectrum of people: hobbyists who watched UFC and got curious, ex-athletes from other sports looking for a new challenge, women interested in self-defense with real application, fighters with amateur records, and the occasional pro tuning up before fight camps.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Three ranges. Smooth transitions.',
        intro:
          'MMA technique sits at the intersection of multiple disciplines. We teach you to function fluently across all three combat ranges: striking distance, clinch, and the ground.',
        bullets: [
          {
            title: 'Striking fundamentals',
            body: 'Boxing footwork, kickboxing kicks, Muay Thai knees and elbows — adapted for MMA gloves and the threat of takedowns.',
          },
          {
            title: 'Takedowns & sprawl',
            body: 'Wrestling-based takedowns (double leg, single leg, body lock) plus defensive sprawls and takedown defense.',
          },
          {
            title: 'Clinch work',
            body: 'The Muay Thai clinch, the dirty boxing tie-up, and how to use the cage. Often the most underrated range in MMA.',
          },
          {
            title: 'Ground game & BJJ',
            body: 'Positional hierarchy (mount, side control, guard, back), submissions, sweeps, and ground-and-pound concepts.',
          },
          {
            title: 'Transitions & scrambles',
            body: 'The thing that separates real MMA fighters from specialists: moving smoothly between standing, clinch, and ground.',
          },
          {
            title: 'Live sparring (when ready)',
            body: 'Boxing sparring, kickboxing sparring, BJJ rolling, MMA-specific sparring. All gear-mandatory, all coach-supervised.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train MMA here',
        title: 'One building. Every range.',
        paragraphs: [
          "The reason most MMA fighters travel to different gyms across a city is because no single gym is good at everything. You'll find a boxing gym, drive to a BJJ academy, drive again to a wrestling club. The schedule fragments. The progress slows.",
          'Red Gym solved this by putting everything in 25,000 square feet on Al Thuraya Street. Same building, same coaches, same training partners. Your boxing coach knows what your BJJ coach is working on. Your training stays integrated.',
          "We also draw a real training crowd. Sparring sessions need partners who actually train — people who understand control, who know technique, who can give you a useful round without trying to take your head off. That's rare in Dubai. We have it.",
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'MMA runs daily.',
        body: 'Daily MMA classes with weekly cycles covering striking, grappling, transitions, and live work. Open-mat slots for additional rolling and sparring. Specific beginner sessions clearly labeled. Competition team training for committed athletes (separate track).',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: "Coaches who've been in the cage.",
        paragraphs: [
          'Our MMA coaches have backgrounds across the constituent disciplines — boxing, BJJ (purple to black belt level), wrestling (collegiate or international), and Muay Thai. Several have professional MMA records. All of them have spent time training under credentialed coaches in their specialties.',
          "Crucially, our MMA program is built around technical integrity, not Instagram aesthetic. You'll learn moves that actually work against resisting opponents. Drills are pressure-tested. The coach is correcting you, not filming you.",
        ],
      }}
      related={[
        {
          slug: 'bjj',
          name: 'BJJ',
          description: 'The ground component of MMA — also worth training as its own art.',
          image: DISCIPLINES.bjj,
        },
        {
          slug: 'boxing',
          name: 'Boxing',
          description: 'The cleanest striking technique you can bring into MMA.',
          image: DISCIPLINES.boxing,
        },
        {
          slug: 'muay-thai',
          name: 'Muay Thai',
          description: 'Knees, elbows, and clinch work — high-percentage in modern MMA.',
          image: DISCIPLINES.muayThai,
        },
      ]}
      faqs={[
        {
          question: 'Can I start MMA with no martial arts background?',
          answer:
            "Yes. About half of our MMA students start with zero background. You'll spend the first few months learning fundamentals from one range at a time before any sparring or integrated work.",
        },
        {
          question: 'Is MMA dangerous?',
          answer:
            "Training MMA in a real gym is safer than recreational rugby, football, or even skiing — assuming you train at a reputable place. We use protective gear, controlled drilling, and supervised sparring. Injuries happen, but they're less common than people think.",
        },
        {
          question: 'What gear do I need for MMA classes?',
          answer:
            "For trials and early classes, just gym clothes. As you progress: MMA gloves, shin guards, a mouthguard, and eventually headgear for sparring. We can recommend specific gear once you're training regularly.",
        },
        {
          question: 'How is MMA different from boxing or BJJ alone?',
          answer:
            "Boxing teaches only striking with hands. BJJ teaches only ground work. MMA combines striking, takedowns, clinch, and ground — and the transitions between them. It's broader but deeper specialists tend to be sharper in their narrow domain.",
        },
        {
          question: 'Are there women in your MMA classes?',
          answer:
            "Yes. We have a growing women's MMA contingent and run mixed classes plus women-focused sessions. WhatsApp us for the current schedule.",
        },
        {
          question: 'Do you have a fight team?',
          answer:
            "We have members who compete in amateur and professional MMA bouts, both in the UAE and internationally. Competition is by invitation and coach assessment — we don't push anyone into fighting who isn't ready or doesn't want it.",
        },
        {
          question: 'How often should I train MMA per week?',
          answer:
            'For recreational fitness, 2-3 sessions a week is enough to learn and stay sharp. For competition prep, 5-6 sessions plus strength work. Listen to your body — MMA is high-impact and rest is part of the program.',
        },
        {
          question: 'Can MMA help me lose weight?',
          answer:
            'Significantly. MMA training burns more calories per minute than almost any other activity, and the skill engagement keeps you consistent. Most members see body composition changes within the first 8-12 weeks.',
        },
        {
          question: 'Do I need to be in shape to start MMA?',
          answer:
            "No. The training will get you in shape. Show up at whatever fitness level you have, and you'll improve naturally. The coaches scale intensity to your conditioning.",
        },
        {
          question: "What's the youngest age to start?",
          answer:
            'Our adult MMA classes are 18+. Younger athletes can train BJJ or boxing fundamentals — message us about youth options.',
        },
      ]}
    />
  );
}
