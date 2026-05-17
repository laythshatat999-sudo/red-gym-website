import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Zumba in Dubai — Dance Fitness at Red Gym Barsha Heights',
  description:
    'Zumba and dance fitness classes in Dubai at Red Gym, Vista Tower, Barsha Heights. Latin rhythms, cardio, and pure fun. Beginners welcome.',
};

export default function ZumbaPage() {
  return (
    <DisciplinePageTemplate
      slug="zumba"
      name="Zumba"
      schemaDescription="Zumba and dance fitness classes for all levels at Red Gym in Barsha Heights, Dubai. Latin and world rhythms with cardio choreography."
      eyebrow="Zumba"
      heroTitle={
        <>
          Dance fitness.
          <br />
          <span className="text-[#E11D2A]">Real cardio.</span>
        </>
      }
      heroSubtitle="Zumba in Barsha Heights — Latin rhythms, cardio choreography, and the kind of class that makes 60 minutes feel like 20. No dance experience required."
      heroImage={DISCIPLINES.zumba}
      intro={{
        eyebrow: 'About Zumba at Red Gym',
        title: 'Cardio that does not feel like cardio.',
        paragraphs: [
          'Zumba was invented by accident in the mid-1990s when a Colombian fitness instructor forgot his music tape and improvised with Latin dance songs. The class went viral, became a global brand, and is now taught in 180+ countries by certified instructors. It is one of the most popular group fitness formats ever created.',
          'At Red Gym in Dubai, we run Zumba and broader dance fitness classes that combine Latin rhythms (salsa, merengue, reggaeton, cumbia) with cardio choreography. Each song teaches a different dance pattern, and you follow along — no prior experience needed. By the end of class you have danced for an hour, burned 500-700 calories, and had genuine fun doing it.',
          'Zumba attracts a different crowd than most of our other classes. The vibe is light, social, and celebratory. Members come for the workout but stay for the community. It is one of the few classes where laughing during a workout is part of the experience.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Rhythm, choreography, and cardio.',
        intro:
          'Zumba is more accessible than traditional dance because the choreography is repeated and signaled. You do not need to memorize sequences — you follow the instructor, who calls out moves and demonstrates throughout. Here is what you build over time:',
        bullets: [
          {
            title: 'Basic dance footwork',
            body: 'Salsa, merengue, cumbia, and reggaeton steps. Simple at first, layered over weeks. Your feet learn before your brain catches up.',
          },
          {
            title: 'Hip and core movement',
            body: 'Latin dance is hip-driven. Most non-dancers have never moved their hips this way. You will feel it in your core within days.',
          },
          {
            title: 'Rhythm and timing',
            body: 'Counting music. Hitting beats. Anticipating transitions. The musical literacy that makes choreography feel natural rather than forced.',
          },
          {
            title: 'Cardio scaling',
            body: 'Zumba intensity scales naturally with effort — you control how much you move and how big. New students often stay smaller; experienced dancers go full-out.',
          },
          {
            title: 'Coordination',
            body: 'Arms and feet doing different things simultaneously. Most beginners feel uncoordinated for the first 4-6 weeks. Then it clicks, and you forget you ever struggled.',
          },
          {
            title: 'Confidence and expression',
            body: 'Zumba is one of the few workouts that asks you to be expressive, not just efficient. The mental confidence this builds carries outside the gym.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why dance here',
        title: 'A studio designed for movement.',
        paragraphs: [
          'Dance classes need specific facilities — sprung wood flooring (concrete destroys joints), mirrors for self-correction, professional sound systems for proper music quality, and air conditioning calibrated for high-output movement. Most Dubai gyms have one or two of these. We have all of them.',
          'Our studio space at Red Gym in Vista Tower was designed for dance, yoga, and group fitness specifically. The acoustics are right. The lighting can shift from bright (for technique work) to atmospheric (for energy and immersion). The floor protects your joints over years of repeated impact.',
          'And our location in Barsha Heights makes us accessible from Marina, JLT, Greens, Internet City, and Media City — most members travel under 15 minutes. Free Vista Tower parking removes the typical commute friction. Daily class schedules let you actually build the consistency dance rewards.',
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Zumba and dance run multiple times weekly.',
        body: 'Zumba and broader dance fitness classes run multiple times per week — morning sessions, evening classes after work, and weekend energy blocks. Different instructors bring different style emphases (some lean salsa, others reggaeton, others mix in Bollywood and African rhythms).',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Certified instructors who can move.',
        paragraphs: [
          'Our Zumba instructors hold official Zumba Network certifications (the global licensing body) plus additional dance and fitness credentials. Most have backgrounds in actual Latin dance or other movement disciplines before they certified in Zumba — which shows in the quality of their cuing and demonstration.',
          'Beyond credentials, our instructors can actually lead a room. Zumba teaching is a real skill — half choreography, half music programming, half energy management. The difference between a great Zumba class and a mediocre one is almost entirely instructor.',
        ],
      }}
      related={[
        {
          slug: 'spinning',
          name: 'Spinning',
          description: 'Different cardio modality — both build similar conditioning.',
          image: DISCIPLINES.spinning,
        },
        {
          slug: 'hiit',
          name: 'HIIT',
          description: 'Short, intense intervals as a complement to longer Zumba sessions.',
          image: DISCIPLINES.crossfit,
        },
        {
          slug: 'yoga',
          name: 'Yoga',
          description: 'Mobility and recovery work for the hard-moving Zumba body.',
          image: DISCIPLINES.yoga,
        },
      ]}
      faqs={[
        {
          question: 'Do I need any dance experience to start Zumba?',
          answer:
            'No. Zumba is specifically designed for non-dancers. The instructor calls out moves and demonstrates throughout — you follow along. Most new students feel uncoordinated for 2-4 weeks, then it clicks.',
        },
        {
          question: 'Will I look stupid in class?',
          answer:
            'Everyone feels self-conscious in their first few Zumba classes. The reality: everyone in the room is focused on themselves, not you. Within a month or two, the self-consciousness disappears — and many members say Zumba boosts confidence outside the gym.',
        },
        {
          question: 'Is Zumba a real workout?',
          answer:
            'Absolutely. A standard Zumba class burns 500-700 calories per hour and keeps your heart rate in cardio zones for most of the session. It is comparable to running, with the bonus of being significantly more enjoyable for most people.',
        },
        {
          question: 'What do I wear?',
          answer:
            'Comfortable workout clothes you can move freely in — leggings or shorts, a supportive top, and athletic shoes with low traction (high-traction running shoes can grab the floor and tweak your knees during pivots). Cross-trainers or dance fitness shoes are ideal.',
        },
        {
          question: 'Can men do Zumba?',
          answer:
            'Yes. Zumba is predominantly female globally, but men are absolutely welcome and we have male regulars. The workout is great, the music is fun, and the cultural taboo around men dancing is mostly self-imposed.',
        },
        {
          question: 'How is Zumba different from other dance classes?',
          answer:
            'Zumba is specifically licensed and structured — there is a global standard for what makes a Zumba class. Other dance fitness brands (Bokwa, U-Jam, generic dance cardio) follow different choreography systems but similar concepts. Most are equally enjoyable.',
        },
        {
          question: 'Will Zumba help me lose weight?',
          answer:
            'Yes — significantly. The combination of high calorie burn and the consistency that Zumba fosters (most students genuinely enjoy it and keep coming back) makes it highly effective for body composition change.',
        },
        {
          question: 'Can older adults do Zumba?',
          answer:
            'Yes. Zumba Gold is a slower variant specifically designed for older adults and beginners. Even standard Zumba classes can be scaled by simply moving smaller — you control your intensity. We have members in their 60s who attend regularly.',
        },
        {
          question: 'Will I learn proper dance technique?',
          answer:
            'You will pick up basic Latin dance movements (salsa, merengue, cumbia) authentically. For deeper dance training (technique, partner work, performance), traditional dance classes are better. Zumba is fitness with a dance overlay, not dance with a fitness overlay.',
        },
        {
          question: 'How often should I do Zumba?',
          answer:
            '2-4 sessions per week is a great cardio rhythm. The classes are joint-friendly enough that daily Zumba is possible if you scale intensity. Mix with strength training and mobility for balanced fitness.',
        },
      ]}
    />
  );
}
