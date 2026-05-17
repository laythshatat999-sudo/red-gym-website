import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Muay Thai in Dubai — Red Gym Barsha Heights',
  description:
    'Muay Thai training in Dubai at Red Gym, Vista Tower, Barsha Heights. The art of eight limbs — strikes, elbows, knees, clinch. Beginner to fighter level.',
};

export default function MuayThaiPage() {
  return (
    <DisciplinePageTemplate
      slug="muay-thai"
      name="Muay Thai"
      schemaDescription="Muay Thai (Thai boxing) classes for all levels at Red Gym in Barsha Heights, Dubai. Punches, kicks, knees, elbows, and clinch training."
      eyebrow="Muay Thai"
      heroTitle={
        <>
          The art of
          <br />
          <span className="text-[#E11D2A]">eight limbs.</span>
        </>
      }
      heroSubtitle="Thailand's national sport, trained in Barsha Heights. Punches, kicks, knees, elbows, and clinch — the most complete striking art on the planet."
      heroImage={DISCIPLINES.muayThai}
      intro={{
        eyebrow: 'About Muay Thai at Red Gym',
        title: "Thailand's most exported martial art.",
        paragraphs: [
          "Muay Thai is called the art of eight limbs because it uses fists, elbows, knees, and shins as offensive weapons — eight contact points compared to boxing's two. It is Thailand's national sport, deeply tied to the country's cultural identity, and over the last 30 years it has become the dominant striking art in modern combat sports including MMA, kickboxing, and self-defense.",
          'At Red Gym in Dubai, we run a serious Muay Thai program with daily classes for all levels. Beginners start with stance, the teep (push kick), and basic combinations. Intermediate students develop their roundhouse kicks, clinch entries, and elbow techniques. Competitive fighters refine timing, ring craft, and conditioning for amateur and professional bouts.',
          "What sets Muay Thai apart from other striking arts is the clinch — the upright grappling position where fighters control each other's posture and exchange knees and elbows. The Muay Thai clinch is one of the most technically deep aspects of the sport, and it's a major reason Muay Thai dominates standup grappling exchanges in MMA.",
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Eight weapons. Slowly mastered.',
        intro:
          "Muay Thai technique is built in layers. Beginners spend their first few months on stance, basic kicks, and conditioning. Intermediate students develop combinations and clinch work. Advanced students refine timing, set-ups, and ring craft. Here's the breakdown:",
        bullets: [
          {
            title: 'Stance & footwork',
            body: 'The Muay Thai stance is squarer than boxing — designed for kicking. Footwork is more measured, with deliberate steps and angle changes.',
          },
          {
            title: 'Punches (Mahd)',
            body: 'Boxing-style punches adapted for Muay Thai range — jab, cross, hooks, uppercuts, plus the spinning back fist used at higher levels.',
          },
          {
            title: 'Kicks (Te)',
            body: 'The roundhouse (te tat), teep/push kick (te trong), question-mark kick, axe kick, and the brutal low kick that targets the thigh.',
          },
          {
            title: 'Knees (Khao)',
            body: 'Straight knees, diagonal knees, jumping knees, flying knees. Used at long range, in the clinch, and as fight-finishers.',
          },
          {
            title: 'Elbows (Sok)',
            body: 'Horizontal, diagonal, uppercut, slashing, and spinning elbows. Deadly at close range — the reason cuts are common in Muay Thai bouts.',
          },
          {
            title: 'Clinch (Chap Kho)',
            body: 'Upright neck-and-head wrestling. The technical heart of high-level Muay Thai — controlling posture to deliver knees and short elbows.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train Muay Thai here',
        title: 'Real bags. Real pads. Real coaches.',
        paragraphs: [
          "Most Dubai gyms that offer Muay Thai are really running boxing-cardio classes with a few kicks thrown in. The pads are wrong, the coaches haven't trained in Thailand, and the kicks taught are anatomically improper — leading to shin injuries within weeks.",
          'Red Gym takes Muay Thai seriously. We have proper Thai pads (the long curved ones, not boxing focus mitts), Thai-style heavy bags, and coaches who teach the authentic technique used in Thailand. The roundhouse you learn here is the one a Lumpinee Stadium fighter would recognize.',
          'Our location in Vista Tower, Al Thuraya Street, Barsha Heights makes us accessible from Marina, JLT, Greens, Internet City, and Media City. Free Vista Tower parking removes the typical Dubai gym friction. Daily classes mean you can train consistently — and consistency is what produces real Muay Thai.',
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Muay Thai runs daily.',
        body: 'Daily Muay Thai classes covering beginner fundamentals, intermediate combinations, advanced technique, and clinch sessions. Pad work blocks and bag work blocks alternate through the week. Sparring is invite-only and coach-supervised, with mandatory protective gear.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Coaches with Thailand training time.',
        paragraphs: [
          'Several of our Muay Thai coaches have spent significant time training in Thailand — weeks to months at Lumpinee-tier gyms in Bangkok, Phuket, or Chiang Mai. The technical differences between Thailand-trained coaches and self-taught Muay Thai instructors are night-and-day.',
          "Beyond Thailand exposure, our coaches have amateur and professional fight records. They teach because they've competed, not because they watched fights on YouTube. The result: students learn proper mechanics, real timing, and the cultural respect that comes with the art.",
        ],
      }}
      related={[
        {
          slug: 'kickboxing',
          name: 'Kickboxing',
          description: "Muay Thai's sister striking art — kicks and punches without the elbows and knees.",
          image: DISCIPLINES.kickboxing,
        },
        {
          slug: 'boxing',
          name: 'Boxing',
          description: 'Sharper hands work makes Muay Thai dangerous — boxing complements perfectly.',
          image: DISCIPLINES.boxing,
        },
        {
          slug: 'mma',
          name: 'MMA',
          description: 'Muay Thai is the dominant standup style in modern MMA.',
          image: DISCIPLINES.mma,
        },
      ]}
      faqs={[
        {
          question: 'How is Muay Thai different from kickboxing?',
          answer:
            'Kickboxing uses punches and kicks. Muay Thai adds elbows, knees, and clinch work — making it more comprehensive but also more punishing. Muay Thai fighters typically dominate when matched against pure kickboxers in mixed rule sets.',
        },
        {
          question: 'Will my shins hurt when I start kicking?',
          answer:
            'Yes, for the first few weeks. Shin conditioning is a gradual process — your nerves desensitize and your bones mineralize from consistent impact. Within 2-3 months of regular kicking, the discomfort is minimal. We teach proper kicking form to minimize unnecessary pain.',
        },
        {
          question: 'Do I need to be flexible for Muay Thai?',
          answer:
            'No. The roundhouse kick uses hip rotation, not vertical flexibility, so even stiff beginners can learn it properly. Mobility improves naturally with consistent training. We work mobility into warm-ups and cool-downs.',
        },
        {
          question: 'What gear do I need for Muay Thai?',
          answer:
            'For trials, just gym kit. As you progress: hand wraps, boxing gloves (14-16oz for training), shin guards, a mouthguard, and eventually elbow pads for sparring. Total starter gear runs around 400-700 AED depending on quality.',
        },
        {
          question: 'Are women welcome in Muay Thai classes?',
          answer:
            'Absolutely. Muay Thai has a growing female training population worldwide, and our gym reflects that. We run regular women-only sessions plus mixed classes. WhatsApp us for the current schedule.',
        },
        {
          question: 'Can Muay Thai help me lose weight?',
          answer:
            'Significantly. Muay Thai is one of the most calorie-intensive workouts — a 60-minute class can burn 800-1,200 calories depending on intensity. The skill engagement keeps you coming back, which is what drives long-term body composition change.',
        },
        {
          question: 'How long until I can spar?',
          answer:
            'Sparring readiness typically takes 3-6 months of consistent training. We never push anyone into sparring — it is opt-in, gear-mandatory, and coach-supervised. Many students train Muay Thai for years without ever sparring, and they still get stronger, fitter, and more skilled.',
        },
        {
          question: 'Is Muay Thai safe for beginners?',
          answer:
            'Yes, when taught properly. Technical training (bag work, pad work, drilling) has very low injury rates. The vast majority of Muay Thai injuries happen in sparring and competition, both of which are opt-in at Red Gym.',
        },
        {
          question: 'How does the clinch work?',
          answer:
            "The Muay Thai clinch is an upright grappling position where fighters control each other's necks and posture. Knees and short elbows are delivered from the clinch. It is one of the most technical aspects of the art and takes years to master.",
        },
        {
          question: 'Should I train Muay Thai or boxing first?',
          answer:
            'It depends on your goals. Boxing builds elite hand work and footwork — useful in everything. Muay Thai is more comprehensive but has a steeper early learning curve. Many students train both. If you only want striking, start with the one whose class schedule fits your week better.',
        },
      ]}
    />
  );
}
