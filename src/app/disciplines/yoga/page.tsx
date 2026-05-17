import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Yoga in Dubai — Red Gym Barsha Heights',
  description:
    'Yoga classes in Dubai at Red Gym, Vista Tower, Barsha Heights. Vinyasa, Hatha, restorative. Cinematic neon-lit studios. All levels welcome.',
};

export default function YogaPage() {
  return (
    <DisciplinePageTemplate
      slug="yoga"
      name="Yoga"
      schemaDescription="Yoga classes for all levels at Red Gym in Barsha Heights, Dubai. Vinyasa, Hatha, restorative, and flow styles. Cinematic studio space."
      eyebrow="Yoga"
      heroTitle={
        <>
          Strength.
          <br />
          <span className="text-[#E11D2A]">Stillness. Mobility.</span>
        </>
      }
      heroSubtitle="Yoga in Barsha Heights — under candlelit neon studios. Vinyasa flows, Hatha fundamentals, restorative practice. The ancient art, made for modern bodies."
      heroImage={DISCIPLINES.yoga}
      intro={{
        eyebrow: 'About yoga at Red Gym',
        title: '5,000 years of practice. Inside Vista Tower.',
        paragraphs: [
          'Yoga is one of the oldest continuously practiced movement traditions in the world — over 5,000 years of refinement, originally developed in India and now practiced by hundreds of millions of people globally. Modern yoga is both a physical practice (asana) and a broader philosophical system, though most contemporary classes focus primarily on the physical side.',
          'At Red Gym in Dubai, our yoga program runs daily in dedicated studio spaces with cinematic neon lighting, professional sound systems, and proper sprung flooring. Class styles span vinyasa (flowing sequences), Hatha (traditional alignment-focused practice), and restorative (gentle, prop-supported holds). Classes are open to all levels — from absolute beginners to advanced practitioners.',
          'Many of our members train hard in combat sports or strength work, then use yoga to balance their bodies. Others come for the mental side — the meditation, breathwork, and stillness. Some simply want strength, mobility, and grace without the impact of heavy lifting or contact sports. Yoga serves all of these intentions.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Movement. Breath. Stillness.',
        intro:
          'Yoga is a layered practice — physical postures, breath control, and meditation woven together. Different class styles emphasize different layers. Here is what your first months will introduce:',
        bullets: [
          {
            title: 'Foundational postures (Asana)',
            body: "Mountain pose, downward dog, warrior series, triangle, child's pose. The vocabulary you build from.",
          },
          {
            title: 'Vinyasa flow',
            body: 'Sun salutations and dynamic sequences. Movement linked to breath. Builds heat, strength, and mobility together.',
          },
          {
            title: 'Alignment principles',
            body: 'How to enter and exit postures safely. Stacking joints. Engaging the right muscles. The technical depth that prevents injury.',
          },
          {
            title: 'Breathwork (Pranayama)',
            body: 'Ujjayi breathing, alternate nostril breathing, longer exhales for the nervous system. The often-underrated component of practice.',
          },
          {
            title: 'Restorative postures',
            body: 'Long-held supported postures using props (blocks, bolsters, blankets). Recovery, parasympathetic activation, deep release.',
          },
          {
            title: 'Meditation and stillness (Savasana)',
            body: 'The final resting pose. The mental component that distinguishes yoga from stretching.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why practice yoga here',
        title: 'Studios designed for the practice.',
        paragraphs: [
          'Most Dubai yoga studios are stand-alone boutiques with a single style and a higher price point. They are excellent — but they are also the only thing you can do at that membership. Red Gym offers serious yoga inside a 25,000-square-foot full-service facility, so your yoga membership doubles as access to strength, combat, classes, and recovery.',
          'Our studio spaces are designed for yoga specifically. Sprung wood flooring under neon ceiling installations. Bluetooth sound systems with curated music for different class energies. Soft lighting for restorative classes; brighter and more energetic for vinyasa. Mirror walls for alignment work. Air conditioning calibrated for movement.',
          'And the location in Vista Tower, Al Thuraya Street, Barsha Heights is genuinely central — five minutes from major Tecom businesses, fifteen minutes from Marina, JLT, and Greens. Free parking inside Vista Tower removes the typical commute friction. Daily class schedules let you build the consistency that yoga rewards.',
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Yoga runs daily — across styles.',
        body: 'Daily yoga classes spanning vinyasa, Hatha, and restorative styles. Morning sessions before work, midday classes for flexibility, and evening sessions for wind-down. Beginner-specific classes are clearly labeled. Weekend long-form sessions and occasional workshops with visiting teachers.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Teachers with serious training.',
        paragraphs: [
          'Our yoga teachers hold internationally recognized certifications — Yoga Alliance RYT-200 minimum, with many at RYT-500 and continuing education in specific styles. Some have studied in India directly under traditional lineages; others come from Western schools that focus on alignment and biomechanics.',
          'Class culture is unpretentious. We avoid the more performative side of yoga (spiritual posturing, exclusive language) and focus on accessible, skilled instruction. Modifications are offered freely. Adjustments are consent-based. The vibe is welcoming for first-timers and substantive for experienced students.',
        ],
      }}
      related={[
        {
          slug: 'spinning',
          name: 'Spinning',
          description: "Cardio that pairs beautifully with yoga's strength and mobility.",
          image: DISCIPLINES.spinning,
        },
        {
          slug: 'hiit',
          name: 'HIIT',
          description: 'High-intensity training balanced by restorative yoga days.',
          image: DISCIPLINES.crossfit,
        },
        {
          slug: 'crossfit',
          name: 'CrossFit',
          description: 'Strength athletes need yoga for joint health and recovery.',
          image: DISCIPLINES.crossfit,
        },
      ]}
      faqs={[
        {
          question: 'Do I need to be flexible to start yoga?',
          answer:
            "No — that's the most common misconception. You practice yoga to become flexible, not because you already are. Stiff beginners are welcome and very common. Flexibility develops gradually over weeks and months of consistent practice.",
        },
        {
          question: 'What style of yoga should I start with?',
          answer:
            'Beginners typically do best starting with Hatha (slower, alignment-focused) or beginner vinyasa. Once you have basic vocabulary, you can explore other styles. Our beginner classes are clearly labeled in the schedule.',
        },
        {
          question: 'What do I need to bring?',
          answer:
            'Comfortable workout clothes you can move in (leggings or shorts, fitted top), and water. Yoga mats are provided. As you commit, many students invest in their own mat — it personalizes the practice.',
        },
        {
          question: 'Is yoga a real workout?',
          answer:
            'Vinyasa and power yoga absolutely are — many practitioners build serious functional strength and cardiovascular fitness through yoga alone. Restorative yoga is more about recovery and nervous system regulation, not athletic conditioning.',
        },
        {
          question: 'Can yoga help with back pain?',
          answer:
            'For many people, yes — particularly for muscular tension and posture-related issues. We recommend speaking with your instructor about any specific issues so they can suggest appropriate modifications. For acute injuries, consult a physician first.',
        },
        {
          question: 'Are men welcome in yoga classes?',
          answer:
            'Absolutely. Yoga in Dubai still skews female, but our classes have a healthy male contingent — particularly combat sports and lifting members who use yoga for mobility and recovery. The teachers welcome everyone equally.',
        },
        {
          question: 'How often should I practice yoga?',
          answer:
            '2-3 sessions per week is enough to see meaningful flexibility and strength gains. Daily practice is even better but requires variety (mixing vinyasa, Hatha, and restorative) to avoid overtraining. Listen to your body.',
        },
        {
          question: 'Will I do headstands or crazy poses on day one?',
          answer:
            'No. Beginner classes focus on accessible postures and foundational sequences. Advanced postures (arm balances, inversions, deep backbends) are introduced when your body is ready — usually months in. There is no rush.',
        },
        {
          question: 'Is yoga religious or spiritual?',
          answer:
            'It originated in spiritual traditions, but modern Western yoga is generally taught as a physical and mental practice without religious requirement. Our classes are inclusive of all faiths and backgrounds — you take from the practice what serves you.',
        },
        {
          question: 'Can yoga help with sleep and stress?',
          answer:
            'Significantly. The breathwork, slow movement, and meditation components of yoga measurably activate the parasympathetic nervous system — improving sleep quality and reducing chronic stress markers. Restorative classes are particularly effective for this.',
        },
      ]}
    />
  );
}
