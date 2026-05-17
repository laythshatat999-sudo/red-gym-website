import type { Metadata } from 'next';
import DisciplinePageTemplate from '@/components/disciplines/DisciplinePageTemplate';
import { DISCIPLINES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'Spinning in Dubai — Indoor Cycling at Red Gym Barsha Heights',
  description:
    'Indoor cycling classes in Dubai at Red Gym, Vista Tower, Barsha Heights. High-energy spinning with cinematic lighting and curated music. All levels.',
};

export default function SpinningPage() {
  return (
    <DisciplinePageTemplate
      slug="spinning"
      name="Spinning"
      schemaDescription="Indoor cycling (spinning) classes for all levels at Red Gym in Barsha Heights, Dubai. High-intensity cardio with curated music and cinematic studio lighting."
      eyebrow="Spinning"
      heroTitle={
        <>
          Sweat.
          <br />
          <span className="text-[#E11D2A]">Music. Power.</span>
        </>
      }
      heroSubtitle="Indoor cycling at Red Gym — high-energy classes with cinematic lighting, curated music, and instructors who know how to push you. Cardio that doesn't feel like cardio."
      heroImage={DISCIPLINES.spinning}
      intro={{
        eyebrow: 'About spinning at Red Gym',
        title: 'The most efficient cardio you can do.',
        paragraphs: [
          'Indoor cycling (spinning) is one of the most efficient cardiovascular workouts in fitness — high calorie burn, low joint impact, and a metabolic challenge that scales infinitely with effort. A 45-minute spinning class typically burns 500-800 calories while strengthening the legs, core, and cardiovascular system.',
          'At Red Gym in Barsha Heights, Dubai, our spinning classes run in a dedicated studio with high-end stationary bikes, cinematic lighting (we go dark, lit only by red and blue neon), and powerful sound systems that move with the music. The atmosphere transforms a normally tedious workout into something genuinely fun.',
          'Spinning attracts a broad spectrum of members: beginners building cardiovascular base, lifters using it as low-impact conditioning, busy professionals who want maximum results in 45 minutes, and dedicated cyclists training off-season. Classes are scaled by intensity — you control your effort through resistance, not pace.',
        ],
      }}
      whatYouLearn={{
        eyebrow: "What you'll learn",
        title: 'Resistance, cadence, and effort.',
        intro:
          'Spinning is simpler technically than other disciplines, but there is real skill in efficient riding. Here is what good instructors teach beyond just turning the pedals:',
        bullets: [
          {
            title: 'Bike setup',
            body: 'Seat height, handlebar position, foot placement. Wrong setup ruins your back and knees in 6 weeks. Right setup makes everything sustainable.',
          },
          {
            title: 'Cadence (RPM)',
            body: 'How fast you spin the pedals. Different cadences hit different physiological systems. Most workouts mix 60-110 RPM ranges intentionally.',
          },
          {
            title: 'Resistance control',
            body: 'How heavy or light you turn the pedals. The control variable in a class — the instructor calls out resistance changes, you respond by feel.',
          },
          {
            title: 'Interval structures',
            body: 'Sprints, climbs, steady state, recovery. Different interval patterns build different aspects of conditioning. Most classes use mixed intervals.',
          },
          {
            title: 'Effort scaling',
            body: 'How to push hard without losing form. The mental skill of self-managing intensity inside a group class.',
          },
          {
            title: 'Recovery and breath',
            body: 'Active recovery between intervals. Breathing rhythm under load. The often-overlooked technical side of cardio.',
          },
        ],
      }}
      whyRedGym={{
        eyebrow: 'Why spin here',
        title: 'A studio designed for the experience.',
        paragraphs: [
          'Spinning at most Dubai gyms means a few bikes in a windowless room with overhead lighting and bad music. That works for the workout, but it is not enjoyable. Red Gym built our spinning studio to be an experience — dark lighting, neon accents, curated music, and instructors who can genuinely lead a room.',
          'The bikes themselves are professional-grade with proper magnetic resistance, accurate cadence display, and ergonomic adjustment. Setup matters; we spend the first minutes of new-student sessions ensuring the bike fits your body correctly. Wrong setup is the #1 cause of spinning-related injuries.',
          "Location-wise, our spot inside Vista Tower on Al Thuraya Street is central to most of Dubai's residential and business districts. Free parking inside the building. Multiple classes daily so you can fit spinning into any schedule. And your spinning membership is your full gym membership — you can lift, do yoga, or train combat alongside your cycling.",
        ],
      }}
      schedule={{
        eyebrow: 'Class schedule',
        title: 'Spinning runs daily.',
        body: 'Daily spinning classes covering 30-minute express, 45-minute standard, and occasional 60-minute long-form sessions. Themed rides (hill climbs, sprint days, endurance flows) rotate through the week. Beginner-friendly classes are clearly labeled with appropriate intensity scaling.',
      }}
      coaches={{
        eyebrow: 'Who teaches',
        title: 'Instructors who can actually lead a room.',
        paragraphs: [
          'Spinning instruction is a real skill — it is half exercise science, half group leadership, half music programming. Bad spinning instructors talk too much and play the wrong music. Great ones know exactly when to push, when to recover, and how to use the soundtrack to drive intensity.',
          'Our spinning instructors hold internationally recognized indoor cycling certifications (Schwinn, Mad Dogg Athletics, or equivalents) plus years of teaching experience. They each have a signature style — some are pure athletic coaches, others lean theatrical with elaborate music programming. You will find an instructor whose vibe matches yours.',
        ],
      }}
      related={[
        {
          slug: 'hiit',
          name: 'HIIT',
          description: "Short-form intense workouts that complement spinning's longer cardio.",
          image: DISCIPLINES.crossfit,
        },
        {
          slug: 'yoga',
          name: 'Yoga',
          description: 'Recovery and mobility — what your tight cyclist muscles need.',
          image: DISCIPLINES.yoga,
        },
        {
          slug: 'zumba',
          name: 'Zumba',
          description: 'Different cardio style — dance fitness for cross-training.',
          image: DISCIPLINES.zumba,
        },
      ]}
      faqs={[
        {
          question: 'Do I need to know how to ride a bike?',
          answer:
            'Yes, basic comfort on a bicycle helps — but you do not need cycling experience. Indoor cycling is much more forgiving than outdoor riding (no balance required, no traffic, no fear of falling).',
        },
        {
          question: 'Is spinning hard on the knees?',
          answer:
            'Indoor cycling is one of the lowest-impact cardio options available. Knee issues during spinning almost always trace back to incorrect bike setup — once your seat height and forward/back position are correct, knee problems disappear.',
        },
        {
          question: 'How many calories does spinning burn?',
          answer:
            'A 45-minute spinning class typically burns 500-800 calories, depending on intensity and body composition. Some high-intensity sessions push past 900. This is among the highest calorie burns of any group fitness class.',
        },
        {
          question: 'What do I wear and bring?',
          answer:
            'Form-fitting workout clothes (loose pants can get caught), athletic shoes with stable soles (or cycling shoes with SPD cleats if you have them — our bikes are dual-compatible), and a large water bottle. A small towel is helpful.',
        },
        {
          question: 'Will spinning give me big legs?',
          answer:
            'No. Spinning builds lean, defined leg muscles, not bulky ones. Bulk requires specific hypertrophy programming and caloric surplus — not high-rep cardio. Most spinning enthusiasts develop the legs of a cyclist: muscular, defined, lean.',
        },
        {
          question: 'How often should I spin?',
          answer:
            '3-4 sessions per week is a sustainable cardio base for most people. Daily spinning is possible but you should mix in other training (strength, mobility) to avoid overuse and one-dimensional fitness.',
        },
        {
          question: 'Can spinning help with weight loss?',
          answer:
            'Significantly. The high calorie burn combined with the consistency that spinning fosters (it is genuinely enjoyable, so people stick with it) makes it one of the most effective cardio options for body composition change.',
        },
        {
          question: 'Is the music too loud?',
          answer:
            'Our music is energetic and rhythm-driven, but we keep volume in the safe range. Studio acoustics are calibrated for clarity, not chest-thumping volume. If you are noise-sensitive, the standard expectation is 75-80 dB.',
        },
        {
          question: 'Can I take a class if I am completely new to fitness?',
          answer:
            "Yes — spinning is highly scalable. You control your resistance and effort. New students often start by ignoring most of the instructor's intensity cues and simply pedaling at a comfortable pace for the full class. Build up from there.",
        },
        {
          question: 'How is spinning different from outdoor cycling?',
          answer:
            'Outdoor cycling involves balance, terrain, traffic, weather, and gear shifts. Indoor cycling removes all of that and lets you focus purely on cardiovascular effort. Both are excellent — indoor is more efficient for pure workout; outdoor is more enjoyable for recreation.',
        },
      ]}
    />
  );
}
