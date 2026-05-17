import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Boxing in Dubai — Red Gym Barsha Heights',
  description:
    'Learn boxing in Dubai at Red Gym, Vista Tower, Barsha Heights. Beginners to fighters. Heavy bags, real coaches, daily classes. Free trial available.',
};

export default function BoxingPage() {
  return (
    <DisciplinePageTemplate
      slug="boxing"
      name="Boxing"
      schemaDescription="Boxing classes for all levels at Red Gym in Barsha Heights, Dubai. Heavy bag training, footwork drills, pad work, and sparring."
      eyebrow="Boxing"
      heroTitle={
        <>
          The sweet science.
          <br />
          <span className="text-[#E11D2A]">Inside Vista Tower.</span>
        </>
      }
      heroSubtitle="Train boxing in the heart of Barsha Heights — from your first jab to your first competition. Real coaches, professional heavy bags, daily classes for every level."
      heroImage={DISCIPLINES.boxing}
      intro={{
        eyebrow: 'About boxing at Red Gym',
        title: 'Footwork first. Then the punches.',
        paragraphs: [
          "Boxing is the oldest combat sport for a reason — strip away the rules, the weight classes, and the gloves, and you're left with two athletes solving each other through movement, timing, and the precise application of force. At Red Gym in Barsha Heights, we teach boxing the way it should be taught: from the ground up, footwork before fists, defense before offense.",
          "Whether you're a complete beginner who has never thrown a punch, a returning hobbyist looking to sharpen rusty fundamentals, or a competitive amateur chasing your first medal, our boxing program is built to meet you where you are. Daily classes run for all levels, with sessions for women, men, and mixed groups throughout the week.",
          "What makes our boxing program different in Dubai isn't a single coach or a famous gym name — it's the rhythm of the floor. We have professional heavy bags hanging in rows, a sprung competition-style elevated floor, full ring perimeter padding, and a coaching team that actually competes (or has competed) at amateur and professional levels.",
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Six fundamentals. Then everything else.',
        intro:
          "Boxing technique is deceptively deep. We layer the fundamentals slowly so they stick — none of the 'throw everything for an hour' cardio-class approach. Here's what your first 90 days inside Red Gym's boxing program will cover:",
        bullets: [
          {
            title: 'Stance & footwork',
            body: 'Your orthodox or southpaw base, distance control, pivoting in and out of range, lateral movement. Everything starts here.',
          },
          {
            title: 'The six punches',
            body: 'Jab, cross, lead hook, rear hook, lead uppercut, rear uppercut. Each punch broken down mechanically — hip rotation, shoulder placement, weight transfer.',
          },
          {
            title: 'Defense & head movement',
            body: "Slipping, rolling, parrying, blocking, and the high guard. You'll spend as much time on defense as offense — that's how good boxers are built.",
          },
          {
            title: 'Combinations & rhythm',
            body: 'Stringing two, three, and four-punch combos together. Reading and breaking rhythm. The musicality of boxing.',
          },
          {
            title: 'Heavy bag & pad work',
            body: 'Power application on the bag. Precision with the coach holding the pads. Different bags for different drills — heavy, double-end, speed.',
          },
          {
            title: 'Conditioning & sparring',
            body: 'Boxing-specific conditioning is unlike any other workout. Sparring (when ready) is technical first, hard later — and always with full protective gear.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train boxing here',
        title: 'A real gym in a city full of fitness boutiques.',
        paragraphs: [
          "Dubai has plenty of places to throw punches. Most are fitness boutiques where boxing is rebranded cardio — bag work for sweat, then a smoothie. There's nothing wrong with that, but it's not boxing.",
          "Red Gym is a real combat sports gym. The heavy bag area isn't a corner of a CrossFit floor — it's a dedicated zone with proper bags, real coaches, and members who actually compete. The vibe is serious without being intimidating. Beginners are welcomed; pros are respected.",
          "And Barsha Heights makes the logistics easy. We're inside Vista Tower on Al Thuraya Street — central enough that members come from Marina, JLT, Greens, Internet City, and Media City without epic commutes. Free parking is included with every membership (a real Dubai luxury given the Tecom parking situation).",
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Boxing runs daily.',
        body: 'Boxing classes at Red Gym run multiple times per day, seven days a week — morning sessions before work, lunchtime express classes, evening sessions for the post-office crowd, and weekend technical blocks. Beginner-friendly sessions are clearly labeled. Sparring sessions are coach-supervised and gear-mandatory.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Coaches who compete.',
        paragraphs: [
          "Our boxing coaches aren't personal trainers who took a weekend boxing certification. Several are active amateur and professional competitors with documented fight records. Others have transitioned from active competition into full-time coaching after lengthy careers in the ring.",
          'What this means for you: your jab gets corrected by someone who has thrown a million jabs in real fights. Your footwork gets shaped by someone who has had to use it under pressure. The difference is invisible on Instagram and obvious in the gym.',
        ],
      }}
      related={[
        {
          slug: 'kickboxing',
          name: 'Kickboxing',
          description: 'Western boxing fused with kicks — natural next step after boxing fundamentals.',
          image: DISCIPLINES.kickboxing,
        },
        {
          slug: 'mma',
          name: 'MMA',
          description: 'Striking + grappling + ground work. Where boxing meets everything else.',
          image: DISCIPLINES.mma,
        },
        {
          slug: 'muay-thai',
          name: 'Muay Thai',
          description: "The art of eight limbs — boxing's sister discipline from Thailand.",
          image: DISCIPLINES.muayThai,
        },
      ]}
      faqs={[
        {
          question: 'Do I need any experience to start boxing at Red Gym?',
          answer:
            "No. The majority of our boxing students start with zero experience. Our beginner sessions are specifically designed for first-timers — you'll learn proper stance, basic punches, and bag work from day one.",
        },
        {
          question: 'What should I bring to my first boxing class?',
          answer:
            "Just gym kit (shorts, t-shirt, gym shoes) and a water bottle. We provide hand wraps and gloves for trial sessions. Once you're a member, most students invest in their own hand wraps and gloves — we can recommend options.",
        },
        {
          question: 'Will I be sparring on day one?',
          answer:
            "No. Sparring is introduced gradually and only when you've developed enough technical foundation and defensive awareness. Most students spar for the first time 2-3 months in, and always with full protective gear (headgear, mouthguard, body protection).",
        },
        {
          question: 'Are there women-only boxing classes?',
          answer:
            'Yes. We run regular women-only boxing sessions throughout the week alongside our mixed classes. WhatsApp us for the current schedule — it shifts seasonally.',
        },
        {
          question: 'How is boxing different from kickboxing or Muay Thai?',
          answer:
            'Boxing uses only the hands (jab, cross, hooks, uppercuts). Kickboxing adds kicks. Muay Thai adds knees, elbows, and clinch work. Pure boxing is the most technical of the three because every problem must be solved with hands and footwork only.',
        },
        {
          question: "What's the age range of your boxing classes?",
          answer:
            'We have adult students from 18 to 60+. Boxing is one of the most age-friendly combat sports because intensity is fully adjustable — you can train technically without ever sparring or competing.',
        },
        {
          question: 'Can boxing help me lose weight?',
          answer:
            'Absolutely. Boxing is one of the most calorie-intensive workouts that exists — a 60-minute class can burn 600-900 calories depending on intensity. More importantly, the skill component keeps you coming back, which is what actually drives long-term fat loss.',
        },
        {
          question: 'How long until I can spar or compete?',
          answer:
            "Sparring readiness varies widely — typically 3-6 months of consistent training. Competition readiness (amateur smoker bouts) usually takes 12-18 months. We don't push anyone — competition is a personal decision.",
        },
        {
          question: 'Do you have a boxing ring on-site?',
          answer:
            'We have a dedicated boxing training area with heavy bags, double-end bags, pad work stations, and an elevated training floor. We use protected sparring zones for technical work.',
        },
        {
          question: 'Is boxing safe?',
          answer:
            'Yes, when taught properly. Technical training (bag work, pad work, drilling) has very low injury rates. Sparring, when introduced with control and proper gear, is safer than most contact sports. We prioritize technique and defense from day one.',
        },
      ]}
    />
  );
}
