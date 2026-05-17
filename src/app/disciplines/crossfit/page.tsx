import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'CrossFit in Dubai — Red Gym Barsha Heights',
  description:
    'CrossFit-style training in Dubai at Red Gym, Vista Tower, Barsha Heights. Olympic lifts, gymnastics, metabolic conditioning. All fitness levels welcome.',
};

export default function CrossFitPage() {
  return (
    <DisciplinePageTemplate
      slug="crossfit"
      name="CrossFit"
      schemaDescription="CrossFit-style functional training at Red Gym in Barsha Heights, Dubai. Olympic lifts, gymnastics movements, metabolic conditioning, and varied workouts."
      eyebrow="CrossFit"
      heroTitle={
        <>
          Constantly varied.
          <br />
          <span className="text-[#E11D2A]">High intensity.</span>
        </>
      }
      heroSubtitle="CrossFit-style functional training at Red Gym — Olympic lifts, gymnastics, and metabolic conditioning. Built for general physical preparedness, not specialization."
      heroImage={DISCIPLINES.crossfit}
      intro={{
        eyebrow: 'About CrossFit at Red Gym',
        title: 'Functional fitness, taken seriously.',
        paragraphs: [
          'CrossFit-style training combines elements of weightlifting, gymnastics, and high-intensity cardio into varied workouts that build general physical preparedness — the ability to perform well across many domains, rather than specializing in one. It is one of the most effective fitness methodologies ever popularized, and one of the most demanding.',
          'At Red Gym in Barsha Heights, Dubai, we offer CrossFit-inspired functional training with daily workouts of the day (WODs), open gym slots for self-guided programming, and structured classes for beginners through advanced athletes. Our dedicated functional zone includes Olympic platforms, climbing rope, plyometric boxes, kettlebells, and the full range of equipment needed for proper programming.',
          'Whether you are completely new to fitness, a former athlete trying to regain conditioning, or a competitive CrossFit athlete training for events, our program scales to where you are. Workouts can be modified for any level — that is the entire point of functional fitness done right.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'The ten domains of fitness.',
        intro:
          "CrossFit's stated goal is proficiency across ten domains of physical capacity. You will develop all of them through varied programming. Here are the core competencies:",
        bullets: [
          {
            title: 'Olympic lifting',
            body: 'The snatch and clean & jerk — the most technical and athletic movements in strength training. Slowly built with proper coaching.',
          },
          {
            title: 'Powerlifting basics',
            body: 'Squat, deadlift, bench press, overhead press. The foundational strength movements every athlete needs.',
          },
          {
            title: 'Gymnastics',
            body: 'Pull-ups, dips, handstands, ring work, muscle-ups. Bodyweight strength that translates everywhere.',
          },
          {
            title: 'Conditioning',
            body: 'Rowing, biking, running, jumping rope, burpees. Cardiovascular work scaled across short, medium, and long durations.',
          },
          {
            title: 'Kettlebell training',
            body: 'Swings, snatches, Turkish get-ups, goblet squats. The most versatile strength-conditioning tool ever invented.',
          },
          {
            title: 'Metabolic conditioning (MetCon)',
            body: 'The signature high-intensity workouts that combine all of the above into time-pressed challenges. The hardest 15-30 minutes of your week.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why train CrossFit here',
        title: 'Real equipment. Real coaches. Real community.',
        paragraphs: [
          'Most Dubai gyms that offer functional training have a few kettlebells in the corner and call it a CrossFit class. The reality is that proper functional training requires significant dedicated space, specific equipment, and coaches who actually understand programming.',
          'Red Gym dedicates serious square footage to our functional zone — Olympic platforms, climbing ropes, gymnastics rings, full kettlebell and dumbbell ranges, plyometric boxes, and the cardio equipment needed for proper MetCons. The space is built for serious training, not for Instagram backgrounds.',
          "Our location in Vista Tower, Al Thuraya Street, makes us accessible from Dubai Marina, JLT, Greens, Internet City, and Media City — all within 15 minutes. Free Vista Tower parking removes the typical Dubai gym friction. Members can drop in for the day's WOD or train independently across the full 25,000-square-foot facility.",
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'CrossFit-style classes run daily.',
        body: 'Daily CrossFit-style classes covering Olympic lifting, gymnastics, strength, and metabolic conditioning. Morning, lunchtime, and evening slots. Open gym hours for self-guided programming. Skill sessions for specific movements (handstands, double-unders, muscle-ups).',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Coaches with serious credentials.',
        paragraphs: [
          'Our functional training coaches hold recognized certifications (CrossFit Level 1/2, USAW Olympic lifting, NASM, or equivalents) and have years of personal training and competition experience. Some are former competitive CrossFitters; others come from Olympic lifting, gymnastics, or endurance sport backgrounds.',
          'What matters most is coaching depth — the ability to scale movements for absolute beginners while challenging experienced athletes in the same class. Programming is intentional, progressions are clear, and form gets corrected in real time. You will leave each session stronger and more skilled.',
        ],
      }}
      related={[
        {
          slug: 'hiit',
          name: 'HIIT',
          description: 'Shorter, more cardio-focused workouts — natural companion to CrossFit.',
          image: DISCIPLINES.crossfit,
        },
        {
          slug: 'mma',
          name: 'MMA',
          description: 'Combat conditioning that pairs perfectly with CrossFit strength.',
          image: DISCIPLINES.mma,
        },
        {
          slug: 'yoga',
          name: 'Yoga',
          description: 'The recovery and mobility work CrossFit athletes need.',
          image: DISCIPLINES.yoga,
        },
      ]}
      faqs={[
        {
          question: 'Do I need to be fit to start CrossFit?',
          answer:
            'No. Every workout is scalable — coaches modify weights, repetitions, and movement complexity to your current ability. We have members who started CrossFit deconditioned and watched dramatic improvements in 8-12 weeks.',
        },
        {
          question: 'Is CrossFit dangerous?',
          answer:
            'CrossFit injuries are well-publicized but actually rare in well-coached environments. The injury rate is comparable to recreational running and lower than most contact sports. Proper warm-ups, scaled loads, and competent coaching keep injury risk minimal.',
        },
        {
          question: 'How is CrossFit different from regular gym training?',
          answer:
            'Traditional gym training tends to be isolation-focused (one muscle group per day). CrossFit is full-body, time-pressed, and constantly varied. The mental challenge of completing a hard MetCon is fundamentally different from doing 4 sets of bicep curls.',
        },
        {
          question: 'Will CrossFit make me bulky?',
          answer:
            'No. CrossFit-style training builds functional strength and lean muscle, not bodybuilder-style mass. Most CrossFit athletes have athletic, balanced physiques. Real bulk requires specific bodybuilding programming and significant caloric surplus.',
        },
        {
          question: 'Can CrossFit help with weight loss?',
          answer:
            'Yes, significantly. The high-intensity nature burns substantial calories during the workout, and the strength component builds muscle that elevates resting metabolic rate. Most members see body composition changes within 6-12 weeks.',
        },
        {
          question: 'What should I wear and bring?',
          answer:
            'Athletic shoes (cross-trainers or weightlifting shoes ideal), comfortable workout clothes, and water. Some members bring wrist wraps, knee sleeves, or lifting belts as they progress. Nothing special needed to start.',
        },
        {
          question: 'How often should I do CrossFit?',
          answer:
            '3-5 sessions per week works for most people. Rest days are crucial — the body adapts and repairs during recovery, not during training. Listen to your body and take additional rest as needed.',
        },
        {
          question: 'Is CrossFit good for older adults?',
          answer:
            'Absolutely. CrossFit is one of the most beneficial activities for older adults precisely because it preserves function — strength, balance, mobility, cardiovascular health. Loads scale to ability. Many of our most consistent members are in their 50s and 60s.',
        },
        {
          question: 'Will I be doing Olympic lifts on day one?',
          answer:
            'No. Olympic lifts (snatch, clean & jerk) are taught through structured progressions over weeks and months. Day one will be foundational movements (squats, presses, basic conditioning) — proper progression matters.',
        },
        {
          question: 'Can I just use the equipment without taking a class?',
          answer:
            'Yes. Members have full access during open gym hours for self-guided training. The classes are valuable for programming and coaching feedback, but they are not required.',
        },
      ]}
    />
  );
}
