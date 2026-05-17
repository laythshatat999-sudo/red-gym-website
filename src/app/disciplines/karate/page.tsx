import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Karate in Dubai — Red Gym Barsha Heights',
  description:
    'Karate classes in Dubai at Red Gym, Vista Tower, Barsha Heights. Traditional technique, kata, kumite, and discipline. All belt levels welcome.',
};

export default function KaratePage() {
  return (
    <DisciplinePageTemplate
      slug="karate"
      name="Karate"
      schemaDescription="Karate classes for all levels at Red Gym in Barsha Heights, Dubai. Traditional kata, kumite, and karate fundamentals. Olympic-recognized martial art."
      eyebrow="Karate"
      heroTitle={
        <>
          The empty hand.
          <br />
          <span className="text-[#E11D2A]">Disciplined daily.</span>
        </>
      }
      heroSubtitle="Karate in the heart of Barsha Heights — traditional kata, controlled kumite, and the philosophy of the dojo. The original martial art of Okinawa, now an Olympic sport."
      heroImage={DISCIPLINES.boxing}
      intro={{
        eyebrow: 'About karate at Red Gym',
        title: 'A martial art with a 500-year history.',
        paragraphs: [
          'Karate (literally "empty hand") originated in Okinawa more than 500 years ago, was systematized in Japan in the early 1900s, and is now practiced by tens of millions of people worldwide. In 2021, karate made its Olympic debut at the Tokyo Games — confirming its evolution from cultural martial tradition to recognized international sport.',
          'At Red Gym in Dubai, our karate program respects this lineage. Classes are structured around the traditional pillars: kihon (basic technique), kata (prearranged forms), and kumite (controlled sparring). Students progress through belt ranks based on demonstrated skill and discipline — not just time spent at the dojo.',
          'Karate is a different texture of training compared to our boxing, kickboxing, and MMA programs. The atmosphere is more measured. Discipline is emphasized. Bowing, dojo etiquette, and the philosophical side of the art are taken seriously. Many parents bring their teenagers specifically for the structure and respect karate teaches.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Three pillars. Belt by belt.',
        intro:
          "Karate technique is taught in a structured progression. Each belt rank represents specific technical competencies, not just time at the dojo. Here's the framework:",
        bullets: [
          {
            title: 'Kihon (Basics)',
            body: 'Stances, strikes (punches, knife-hand, hammer-fist), kicks (front, side, roundhouse, back), and blocks. Drilled in repetition until reflexive.',
          },
          {
            title: 'Kata (Forms)',
            body: "Prearranged sequences of techniques that encode the art's knowledge. Each belt requires specific kata to be performed accurately, often in front of a panel.",
          },
          {
            title: 'Kumite (Sparring)',
            body: 'Controlled point-style or continuous sparring with appropriate protective gear. Strict rules separate karate kumite from full-contact striking arts.',
          },
          {
            title: 'Self-defense applications',
            body: 'Decoding kata for real-world application — how the forms translate to defending against grabs, holds, and untrained attackers.',
          },
          {
            title: 'Dojo etiquette',
            body: 'Bowing, uniform care, addressing instructors and seniors. The cultural and philosophical framework that makes karate more than just punching and kicking.',
          },
          {
            title: 'Belt progression',
            body: 'White, yellow, orange, green, blue, purple, brown, black. Each rank has specific technical requirements and is awarded through formal testing.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train karate here',
        title: 'Traditional dojo. Modern facility.',
        paragraphs: [
          "Most Dubai karate is taught in tiny rented studios or community centers. The technical instruction is often excellent — many of the city's karate instructors carry serious lineage — but the facilities are tired, and the broader gym experience is limited.",
          'Red Gym offers something unusual: traditional karate instruction inside a premium 25,000-square-foot facility. After your karate class, you can use the strength floor, take a yoga class, or train boxing. Your karate membership is your whole-gym membership.',
          'Our location in Vista Tower, Al Thuraya Street, Barsha Heights is genuinely central — accessible from Marina, JLT, Greens, Internet City, and Media City. Free parking inside Vista Tower removes the typical Dubai friction. And we run classes daily, so you can build the consistency karate demands.',
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Karate runs multiple times weekly.',
        body: 'Karate classes run multiple times per week — beginner sessions for white-to-yellow belts, intermediate sessions for green-to-purple, and advanced classes for brown belt and above. Belt grading tests are scheduled quarterly, with adequate notice and preparation blocks.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Black belts with international lineage.',
        paragraphs: [
          'Our karate instructors hold black belt ranks in recognized styles (Shotokan, Goju-ryu, or related lineages) under verifiable teaching authorities. Some have competed internationally; all have decades of training under multiple senseis.',
          'Lineage matters in traditional martial arts. We can trace our instructors\' teachers back to recognized masters — not just "I watched videos and got certified by a domestic federation." That difference shows in the quality of technique and the depth of explanation our students receive.',
        ],
      }}
      related={[
        {
          slug: 'boxing',
          name: 'Boxing',
          description: "Sharper hand work and footwork to complement karate's kicks.",
          image: DISCIPLINES.boxing,
        },
        {
          slug: 'kickboxing',
          name: 'Kickboxing',
          description: 'A more sport-oriented striking framework — useful for crossover athletes.',
          image: DISCIPLINES.kickboxing,
        },
        {
          slug: 'mma',
          name: 'MMA',
          description: "Layer grappling on top of karate's striking base.",
          image: DISCIPLINES.mma,
        },
      ]}
      faqs={[
        {
          question: 'Is karate good for adults or just kids?',
          answer:
            'Karate is excellent for adults. The discipline, technical depth, and structured progression are particularly valuable for adults seeking a serious long-term practice. Many of our adult karate students train alongside their teenagers, which creates wonderful family dynamics.',
        },
        {
          question: 'How long does it take to earn a black belt?',
          answer:
            "Adult black belts typically take 4-7 years of consistent training (2-3 sessions per week). Belt ranks are earned through demonstrated competence, not time alone — there's no shortcut.",
        },
        {
          question: 'What style of karate do you teach?',
          answer:
            'Our primary lineage is Shotokan-influenced karate with selective integration of other traditional Okinawan styles. The fundamentals (kihon, kata, kumite) translate across styles, so students with prior training in other karate traditions adapt easily.',
        },
        {
          question: 'Is karate practical for self-defense?',
          answer:
            'Real karate, taught properly, is highly practical for self-defense. Kata applications (called bunkai) translate directly to real-world scenarios. The discipline and situational awareness karate develops are arguably as valuable as the techniques themselves.',
        },
        {
          question: 'What do I wear to karate class?',
          answer:
            "For trials and your first few classes, gym clothes are fine. Once committed, you'll want a karate gi (uniform) — typically 200-400 AED for a starter gi. We can recommend reputable suppliers.",
        },
        {
          question: 'How is karate different from Taekwondo?',
          answer:
            'Both are striking arts with belt systems. Karate emphasizes a balanced mix of hand and foot techniques with strong stances. Taekwondo emphasizes high, fast kicks and is purely Korean in origin. The training cultures differ meaningfully.',
        },
        {
          question: 'Is karate safe?',
          answer:
            'Yes, when taught traditionally. Sparring (kumite) uses appropriate protective gear and clear rules. The injury rate in karate is significantly lower than in contact sports like MMA, Muay Thai, or full-contact kickboxing.',
        },
        {
          question: 'Can children train karate at Red Gym?',
          answer:
            "Currently our karate classes are primarily for adults (16+). WhatsApp us about youth options — we're evaluating dedicated kids' karate programming.",
        },
        {
          question: 'Do I need prior martial arts experience?',
          answer:
            "No. The majority of our adult karate students start as complete white-belt beginners. Karate's structured beginner curriculum is one of the most accessible entry points to traditional martial arts.",
        },
        {
          question: 'Is karate good for kids who lack discipline?',
          answer:
            'Karate is widely regarded as one of the most beneficial activities for children who need structure. The bowing, uniform care, listening to the sensei, and respect for senior students all reinforce discipline organically. Many parents see noticeable behavior improvements within months.',
        },
      ]}
    />
  );
}
