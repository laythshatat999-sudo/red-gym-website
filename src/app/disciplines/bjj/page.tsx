import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'BJJ in Dubai — Brazilian Jiu-Jitsu at Red Gym Barsha Heights',
  description:
    'Brazilian Jiu-Jitsu classes in Dubai at Red Gym, Vista Tower, Barsha Heights. Gi & no-gi, beginners welcome, real mat space. WhatsApp for free trial.',
};

export default function BJJPage() {
  return (
    <DisciplinePageTemplate
      slug="bjj"
      name="Brazilian Jiu-Jitsu"
      schemaDescription="Brazilian Jiu-Jitsu (BJJ) classes for all levels at Red Gym in Barsha Heights, Dubai. Gi and no-gi training, fundamentals to advanced, daily classes."
      eyebrow="Brazilian Jiu-Jitsu"
      heroTitle={
        <>
          The gentle art.
          <br />
          <span className="text-[#E11D2A]">On the mat.</span>
        </>
      }
      heroSubtitle="BJJ training in Barsha Heights — both gi and no-gi, from white belt to brown. Real mats. Real rolling. Real progression."
      heroImage={DISCIPLINES.bjj}
      intro={{
        eyebrow: 'About BJJ at Red Gym',
        title: 'A martial art for the long game.',
        paragraphs: [
          "Brazilian Jiu-Jitsu is often called 'the gentle art' — not because it's soft, but because a smaller, weaker person can subdue a larger, stronger opponent through leverage and technique. It's the most chess-like of the combat sports, and one of the most addictive once you understand it.",
          'Our BJJ program at Red Gym in Dubai serves everyone from absolute beginners (most members start as adult white belts with zero grappling experience) to competitive purple and brown belts training for IBJJF and ADCC events. Classes run both in the gi (the traditional uniform) and in no-gi (rashguards and shorts).',
          'BJJ is the discipline most likely to become a lifelong practice. We have members in their 50s still rolling. We have members who started in their 30s and earned black belts in their 40s. The barrier to entry is low; the depth is essentially infinite.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Position before submission.',
        intro:
          'BJJ has a structured technical hierarchy. You learn positions first (where to be on the mat), then transitions (how to move between positions), then submissions. The wrong order produces white belts who chase submissions and lose every roll — we teach the right order.',
        bullets: [
          {
            title: 'Positional hierarchy',
            body: 'Mount, side control, back, guard. Why some positions are dominant. How to escape inferior ones.',
          },
          {
            title: 'Guard play',
            body: 'Closed guard, open guard, half guard, spider, De La Riva. The most uniquely BJJ aspect of the art — fighting effectively off your back.',
          },
          {
            title: 'Submissions',
            body: 'Chokes (rear-naked, triangle, guillotine, arm triangle) and joint locks (armbar, kimura, americana, omoplata, kneebar).',
          },
          {
            title: 'Sweeps & reversals',
            body: 'Turning bad positions into good ones. The art of going from defense to offense without losing tempo.',
          },
          {
            title: 'Drilling & flow rolling',
            body: 'Technical repetition until movement becomes reflex. Then flow rolling at 30-50% intensity to integrate.',
          },
          {
            title: 'Live rolling',
            body: 'Free-form sparring at adjustable intensity. The crucible where technique gets tested. Always gi-appropriate or rashguard-appropriate, never reckless.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train BJJ here',
        title: 'Mat space, mat partners, mat culture.',
        paragraphs: [
          "BJJ is unique among combat sports in that the gym's social culture matters as much as the coaching. You can't train BJJ alone — you need partners. The quality of your training partners determines the quality of your improvement.",
          'Red Gym has dedicated BJJ mat space — not a shared CrossFit floor, not a corner of a boxing gym. Multiple classes run daily across both gi and no-gi formats. Open mat times let you roll outside of structured class. We attract a diverse, technical training crowd.',
          'And our location in Barsha Heights (Vista Tower, Al Thuraya Street) is genuinely central. Members travel from Marina, JLT, Greens, Internet City — all within 15 minutes. Free Vista Tower parking removes the usual Dubai gym friction.',
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'BJJ runs daily — gi and no-gi.',
        body: 'Multiple classes per day covering fundamentals (white-to-blue belt), advanced (blue-to-purple+), and dedicated no-gi sessions. Open mat slots for additional rolling. Beginner-friendly sessions clearly labeled. Competition prep blocks before major tournaments.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Coaches under recognized lineages.',
        paragraphs: [
          'Our BJJ instructors hold legitimate purple, brown, and black belt ranks under recognized lineages traceable to the founding Gracie and Machado families. In BJJ, lineage matters — it tells you who taught the teacher.',
          "Beyond credentials, our coaches actively compete or have competed at high amateur and professional levels. They give technically correct instruction in a culture that values curiosity, patience, and respect for the art's traditions.",
        ],
      }}
      related={[
        {
          slug: 'mma',
          name: 'MMA',
          description: "BJJ's ground game is the foundation of modern MMA grappling.",
          image: DISCIPLINES.mma,
        },
        {
          slug: 'boxing',
          name: 'Boxing',
          description: 'The complement to grappling — striking when standing.',
          image: DISCIPLINES.boxing,
        },
        {
          slug: 'muay-thai',
          name: 'Muay Thai',
          description: 'Standing striking with clinch — pairs beautifully with BJJ.',
          image: DISCIPLINES.muayThai,
        },
      ]}
      faqs={[
        {
          question: 'Do I need to be flexible or fit to start BJJ?',
          answer:
            'No. Flexibility and conditioning develop naturally with consistent training. We have plenty of stiff, out-of-shape adults who became proficient grapplers in their first year. Start where you are.',
        },
        {
          question: "What's the difference between gi and no-gi BJJ?",
          answer:
            'Gi BJJ is trained in the traditional uniform (the gi/kimono); you can grip the gi for control and submissions. No-gi is trained in rashguards and shorts; the grips are different and the pace is faster. Most serious BJJ students train both.',
        },
        {
          question: 'How long does it take to earn a blue belt?',
          answer:
            "Adult blue belts typically take 1-2 years of consistent training (2-3 sessions per week). Promotions are based on technical competence, not time alone. We don't rush belts.",
        },
        {
          question: 'Is BJJ safe for older adults?',
          answer:
            'Yes. BJJ is one of the most age-friendly combat sports. You can train at any intensity — flow rolling at 30% intensity is technically beneficial without injury risk. Many members start BJJ in their 40s and 50s.',
        },
        {
          question: 'Will I get hurt rolling?',
          answer:
            "Serious injuries are rare in a well-run BJJ gym. Minor stuff (mat burn, jammed fingers, the occasional bruise) is normal. Hard rolling is opt-in — you control your intensity, and so do your partners.",
        },
        {
          question: 'Are women welcome in BJJ classes?',
          answer:
            'Absolutely. We have a strong female BJJ contingent and run regular women-only sessions in addition to mixed classes. The BJJ community at Red Gym is genuinely welcoming.',
        },
        {
          question: 'Can BJJ help with self-defense?',
          answer:
            "BJJ is widely considered one of the most practical self-defense arts because most real fights end up on the ground, and most untrained people have no idea how to function once they're grappled. Even basic BJJ gives you significant survival advantages.",
        },
        {
          question: 'Do I need to buy a gi to start?',
          answer:
            "For trials, we have loaner gis. Once you commit, you'll want your own — we can recommend brands and where to buy. A starter gi runs around 250-400 AED.",
        },
        {
          question: 'Is BJJ a good complement to other martial arts?',
          answer:
            'Yes. BJJ pairs naturally with striking arts (boxing, Muay Thai, kickboxing) for a complete combat skillset. Many of our members train both a striking art and BJJ.',
        },
        {
          question: 'How often should I train BJJ?',
          answer:
            '2-3 times per week is a healthy minimum to actually retain what you learn. 4-5 times per week is competition-track. Listen to your body — BJJ rewards consistency, not heroics.',
        },
      ]}
    />
  );
}
