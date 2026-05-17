import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Kickboxing in Dubai — Red Gym Barsha Heights',
  description:
    'Kickboxing classes in Dubai at Red Gym, Vista Tower, Barsha Heights. Punches plus kicks — high-intensity, beginner-friendly, daily classes. Free trial.',
};

export default function KickboxingPage() {
  return (
    <DisciplinePageTemplate
      slug="kickboxing"
      name="Kickboxing"
      schemaDescription="Kickboxing classes for all levels at Red Gym in Barsha Heights, Dubai. Boxing punches combined with kicks. High-intensity, beginner-friendly training."
      eyebrow="Kickboxing"
      heroTitle={
        <>
          Boxing.
          <br />
          <span className="text-[#E11D2A]">Plus kicks.</span>
        </>
      }
      heroSubtitle="Kickboxing is the most beginner-friendly striking art — Western boxing punches combined with kicks, taught at a pace anyone can scale. Sweat, technique, and zero pretense."
      heroImage={DISCIPLINES.kickboxing}
      intro={{
        eyebrow: 'About kickboxing at Red Gym',
        title: 'The accessible striking art.',
        paragraphs: [
          "Kickboxing emerged in the 1960s and 1970s as a fusion of Western boxing and Asian kicking arts. Unlike Muay Thai, it doesn't use elbows, knees, or clinch work — which makes it simpler to learn, lighter on the body, and significantly more beginner-friendly while still delivering an elite cardio workout.",
          'At Red Gym in Barsha Heights, Dubai, kickboxing is one of our most popular classes — particularly for first-time combat sports students who want to learn real striking without the steeper learning curve of Muay Thai or the technical depth of boxing alone. Daily classes accommodate all skill levels and intensities.',
          "Kickboxing is also one of the best workouts you can do, period. A 45-minute class typically burns 600-900 calories, builds genuine athletic conditioning, and engages every major muscle group. The skill element keeps it interesting — unlike steady-state cardio, you don't get bored, because there's always something to improve.",
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Four kicks. Six punches. Endless combos.',
        intro:
          "Kickboxing has a smaller technical vocabulary than Muay Thai, which is its biggest strength for newcomers. You can learn the entire toolkit in a few months and spend years refining it. Here's what beginner-to-intermediate training covers:",
        bullets: [
          {
            title: 'Boxing fundamentals',
            body: 'Stance, jab, cross, hooks, uppercuts, and head movement — adapted for kickboxing range and stance.',
          },
          {
            title: 'Front kick',
            body: 'A push-style or snap kick to the midsection, used for distance management and pace control.',
          },
          {
            title: 'Roundhouse kick',
            body: 'The classic horizontal kick targeting the legs, body, or head. Power generated through hip rotation.',
          },
          {
            title: 'Side kick',
            body: 'A thrusting kick using the heel — common in karate-influenced kickboxing styles.',
          },
          {
            title: 'Back kick & spinning techniques',
            body: 'Advanced techniques: spinning back kicks, spinning hook kicks, the choreographed flair of kickboxing.',
          },
          {
            title: 'Combinations',
            body: 'Stringing punches and kicks together: 1-2-low kick, jab-roundhouse, the classic 4-piece punch-kick combo, and 6-8 punch flurries.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train kickboxing here',
        title: 'Real coaching at scale.',
        paragraphs: [
          'Kickboxing is the most over-marketed combat sport in Dubai. Every fitness boutique offers a "kickboxing" class that\'s really aerobic bag-punching with a few sloppy kicks. There\'s nothing wrong with that for fitness, but it\'s not kickboxing.',
          "Red Gym's kickboxing program is taught by coaches with real fighting backgrounds. The technique you learn is the technique used in actual competition. Your roundhouse will have hip rotation, your stance will be correct, your combinations will flow.",
          "At the same time, our classes scale to your fitness and goals. If you're here for the workout, train like a fitness student. If you want to compete or progress technically, you'll find a clear pathway forward. We don't force every student into the same intensity.",
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Kickboxing runs daily.',
        body: 'Daily kickboxing classes across morning, lunchtime, and evening slots. Beginner-friendly sessions clearly labeled. Mixed-level classes for general training. Light technical sparring on selected sessions for committed students with appropriate gear.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Coaches who fought.',
        paragraphs: [
          'Our kickboxing coaches come from competitive backgrounds across multiple striking disciplines — kickboxing, Muay Thai, boxing, and karate. Several have amateur or professional records in K-1, Glory, or regional kickboxing circuits.',
          'Crucially, our kickboxing coaches teach for real technical retention — not just bag-punching for hour-long sweat sessions. You will leave each class with a specific technical skill, not just a tired body.',
        ],
      }}
      related={[
        {
          slug: 'muay-thai',
          name: 'Muay Thai',
          description: 'The next step up — kickboxing plus elbows, knees, and clinch.',
          image: DISCIPLINES.muayThai,
        },
        {
          slug: 'boxing',
          name: 'Boxing',
          description: 'Sharpen the punching component of kickboxing.',
          image: DISCIPLINES.boxing,
        },
        {
          slug: 'mma',
          name: 'MMA',
          description: 'Layer grappling on top of kickboxing for the full art.',
          image: DISCIPLINES.mma,
        },
      ]}
      faqs={[
        {
          question: 'Is kickboxing good for beginners?',
          answer:
            'Yes — kickboxing is arguably the most beginner-friendly combat sport. The technique is simpler than boxing or Muay Thai, the pace is highly adjustable, and the workout delivers immediate fitness benefits.',
        },
        {
          question: "What's the difference between kickboxing and Muay Thai?",
          answer:
            'Kickboxing uses punches and kicks only. Muay Thai adds elbows, knees, and clinch work. Both are excellent striking arts — kickboxing is faster to learn, Muay Thai is more comprehensive.',
        },
        {
          question: 'Will kickboxing help me lose weight?',
          answer:
            'Absolutely. Kickboxing is one of the most efficient calorie-burning workouts — 600-900 calories per 45-60 minute class. The combination of cardio, strength, and skill engagement makes it ideal for long-term body composition change.',
        },
        {
          question: 'Do I need to be in shape to start?',
          answer:
            'No. Kickboxing will get you in shape. Most students start with low cardiovascular base and watch it improve dramatically in 4-8 weeks. Scale intensity to where you are — the coaches will guide you.',
        },
        {
          question: 'What gear do I need?',
          answer:
            'For trials, just gym clothes. As you progress: hand wraps, boxing gloves (12-16oz), and eventually shin guards if you progress to light sparring. Total starter gear runs around 300-500 AED.',
        },
        {
          question: 'Are there women-only kickboxing classes?',
          answer:
            'Yes. We run dedicated women-only kickboxing sessions plus mixed classes. WhatsApp us for the current schedule — it shifts seasonally with demand.',
        },
        {
          question: 'Do I have to spar?',
          answer:
            "No. Sparring is completely opt-in. Most kickboxing students at Red Gym never spar and still progress technically and physically. If you want to spar later, we'll prepare you properly and require appropriate protective gear.",
        },
        {
          question: 'How is kickboxing different from cardio kickboxing classes at typical gyms?',
          answer:
            'Cardio kickboxing classes use the movements without the technical foundation — sloppy form, no real coaching feedback, and zero progression. Real kickboxing classes (like ours) teach correct mechanics, build genuine skill, and produce measurable improvement over time.',
        },
        {
          question: 'Can kickboxing help with self-defense?',
          answer:
            'Practical striking is a meaningful self-defense asset — you learn to throw effective punches and kicks, manage distance, and stay calm under pressure. Kickboxing pairs well with grappling (like BJJ) for the most complete self-defense skillset.',
        },
        {
          question: "What's the age range of your kickboxing students?",
          answer:
            'Our kickboxing students range from 18 to 65+. The intensity is so scalable that virtually any healthy adult can train. Older students often appreciate kickboxing for the joint-friendly nature compared to running or heavy lifting.',
        },
      ]}
    />
  );
}
