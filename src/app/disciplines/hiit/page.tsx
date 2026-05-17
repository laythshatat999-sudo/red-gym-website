import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'HIIT Training in Dubai — Red Gym Barsha Heights',
  description:
    'HIIT classes in Dubai at Red Gym, Vista Tower, Barsha Heights. High-intensity interval training. Maximum results in minimum time. All levels welcome.',
};

export default function HIITPage() {
  return (
    <DisciplinePageTemplate
      slug="hiit"
      name="HIIT"
      schemaDescription="High-Intensity Interval Training (HIIT) classes for all levels at Red Gym in Barsha Heights, Dubai. Short, time-efficient workouts combining cardio and strength."
      eyebrow="HIIT"
      heroTitle={
        <>
          Maximum effort.
          <br />
          <span className="text-[#E11D2A]">Minimum time.</span>
        </>
      }
      heroSubtitle="High-intensity interval training in Barsha Heights — the most time-efficient workout in fitness. 30 minutes. Full-body conditioning. Real results."
      heroImage={DISCIPLINES.crossfit}
      intro={{
        eyebrow: 'About HIIT at Red Gym',
        title: 'The science of short and hard.',
        paragraphs: [
          'High-Intensity Interval Training (HIIT) is the most research-validated time-efficient workout method in modern exercise science. Multiple studies have shown that 20-30 minute HIIT sessions can produce cardiovascular and metabolic adaptations equal to or greater than 60+ minute steady-state cardio sessions. The catch: those 20-30 minutes are genuinely hard.',
          'At Red Gym in Barsha Heights, Dubai, our HIIT classes alternate short bursts of all-out effort with brief recovery periods, repeated for the full session. The exercises vary class-to-class — sprints, bodyweight movements, kettlebell work, plyometrics, battle ropes, and combinations thereof. Every workout is different; every workout is challenging.',
          'HIIT attracts busy professionals who want maximum results from minimum time, athletes from other disciplines using HIIT as supplementary conditioning, and members who simply enjoy the intensity. Classes scale through movement modifications and intensity self-regulation — beginners can absolutely do HIIT, they just go slightly slower and rest slightly longer.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Effort modulation and recovery.',
        intro:
          'HIIT looks chaotic from outside, but it is highly structured underneath. Real HIIT is precise: specific work durations, specific rest durations, specific intensity targets. Here is what good HIIT classes build:',
        bullets: [
          {
            title: 'Interval structures',
            body: 'Tabata (20s work, 10s rest), 30-30 (30 on, 30 off), Pyramid intervals, EMOM (Every Minute On the Minute). Different structures hit different physiological systems.',
          },
          {
            title: 'Bodyweight movements',
            body: 'Burpees, mountain climbers, jumping lunges, squat thrusts. The classic HIIT vocabulary that needs no equipment.',
          },
          {
            title: 'Kettlebell conditioning',
            body: 'Swings, snatches, goblet squats, clean-and-press. Maximum cardio with simultaneous strength loading.',
          },
          {
            title: 'Plyometric explosiveness',
            body: 'Box jumps, broad jumps, jumping squats. Builds power output and athletic acceleration.',
          },
          {
            title: 'Battle rope work',
            body: 'High-output upper body conditioning. The thing that looks easy until you have done 30 seconds of it.',
          },
          {
            title: 'Self-regulated intensity',
            body: 'The mental skill of pushing yourself to true near-maximum within the work intervals. Most beginners do not push hard enough. Coaches teach you how.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why HIIT here',
        title: 'Real equipment. Real coaching.',
        paragraphs: [
          "Most Dubai HIIT classes are essentially bootcamp-style sessions in any open space, with no real equipment beyond a few mats and dumbbells. That works, but it caps the variety and challenge. Red Gym's functional zone includes everything proper HIIT needs — kettlebells, plyometric boxes, battle ropes, rowing machines, assault bikes, and the cardio equipment for varied programming.",
          'Coaching quality matters enormously in HIIT. Bad HIIT coaches just yell at you to go harder. Good HIIT coaches understand the work-to-rest physiology, scale movements to your ability, watch your form even at high intensity, and program intelligent variety from class to class. We hire the latter.',
          'Our Barsha Heights location in Vista Tower keeps you close to home or work — most members are 10-15 minutes from us. Free parking included. Daily class times let you build consistency. And your HIIT membership doubles as full gym access for strength, combat, and recovery work alongside intensity training.',
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'HIIT runs daily.',
        body: 'HIIT classes run daily in 30-45 minute formats. Morning express sessions, lunchtime quick burns, and evening conditioning blocks. Different programming themes rotate through the week (bodyweight focus, kettlebell-heavy, conditioning, strength-HIIT hybrids).',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Coaches who program intelligently.',
        paragraphs: [
          'Our HIIT coaches hold credentials in functional training (NASM, ACE, CrossFit Level 1+, or equivalents) plus practical coaching experience. They understand that real HIIT is structured science, not random hard work — and they program accordingly.',
          'Class energy is intense without being macho. Modifications are offered freely. Form gets corrected even when the music is loud and the clock is running. You will leave each class genuinely depleted, but also genuinely better — not just sore.',
        ],
      }}
      related={[
        {
          slug: 'crossfit',
          name: 'CrossFit',
          description: 'Longer-form functional training with similar principles.',
          image: DISCIPLINES.crossfit,
        },
        {
          slug: 'spinning',
          name: 'Spinning',
          description: 'Lower-impact cardio for active recovery between HIIT sessions.',
          image: DISCIPLINES.spinning,
        },
        {
          slug: 'mma',
          name: 'MMA',
          description: 'Combat athletes use HIIT for fight-specific conditioning.',
          image: DISCIPLINES.mma,
        },
      ]}
      faqs={[
        {
          question: 'Do I need to be in shape to start HIIT?',
          answer:
            'No — but you should be honest about your starting point and willing to scale movements and intensity. Beginners often modify burpees to step-back versions, slow down sprint intervals, or take longer rest periods. The coach guides scaling in real time.',
        },
        {
          question: 'How long are HIIT classes?',
          answer:
            'Most of our HIIT classes are 30 or 45 minutes total, including warm-up and cool-down. The actual high-intensity work is usually 15-25 minutes. The whole point of HIIT is time efficiency.',
        },
        {
          question: 'Is HIIT safe?',
          answer:
            'Yes, when programmed and coached properly. The injury rate is comparable to other group fitness formats. The biggest risk factor is going too hard before your conditioning supports it — which is why scaling matters and why coaches watch form even at intensity.',
        },
        {
          question: 'How often should I do HIIT?',
          answer:
            '2-4 sessions per week is the sweet spot for most people. HIIT is metabolically demanding — daily HIIT is possible but you should mix it with strength training, mobility, and lower-intensity work to avoid burnout and overtraining.',
        },
        {
          question: 'Can HIIT help me lose weight?',
          answer:
            'Significantly. The high calorie burn during the session combined with the metabolic afterburn (EPOC — excess post-exercise oxygen consumption) makes HIIT one of the most efficient fat-loss workout formats. Most members see body composition changes within 6-8 weeks.',
        },
        {
          question: 'What is the difference between HIIT and CrossFit?',
          answer:
            'HIIT is a methodology (short bursts of high intensity with rest). CrossFit is a broader programming system that includes HIIT but also Olympic lifting, gymnastics, and longer-form workouts. CrossFit classes are typically 60 minutes; HIIT classes are 30-45.',
        },
        {
          question: 'What should I bring to HIIT?',
          answer:
            'Athletic shoes with stable soles (cross-trainers ideal — avoid pure running shoes for plyometric work), comfortable workout clothes, a water bottle, and a small towel. The gym provides all training equipment.',
        },
        {
          question: 'Will HIIT build muscle?',
          answer:
            'HIIT builds athletic, conditioned muscle — lean strength rather than bodybuilder bulk. For pure hypertrophy (size), you need dedicated strength training. Many members do both: lift heavy on some days, HIIT on others.',
        },
        {
          question: 'Can older adults do HIIT?',
          answer:
            'Yes, with proper scaling. Older adults benefit enormously from short, high-intensity work — it preserves muscle mass, cardiovascular function, and metabolic health better than steady-state cardio. We scale movements and intensity appropriately for any age.',
        },
        {
          question: 'How is HIIT different from a regular cardio class?',
          answer:
            'A regular cardio class typically keeps your heart rate in a steady moderate zone for 45-60 minutes. HIIT spikes your heart rate to near-maximum repeatedly, then lets it recover, then spikes again. The metabolic stimulus is different, and the time-to-result ratio is much higher for HIIT.',
        },
      ]}
    />
  );
}
