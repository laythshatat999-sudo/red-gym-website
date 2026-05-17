import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ClosingCTAStrip from '@/components/ui/ClosingCTAStrip';
import FAQAccordion, { FAQGroup } from '@/components/ui/FAQAccordion';
import JsonLdScript from '@/components/ui/JsonLdScript';
import { buildFAQPageLD } from '@/lib/discipline-schemas';
import { HERO_IMAGES } from '@/lib/image-map';

export const metadata: Metadata = {
  title: 'FAQ — Red Gym Dubai. All your questions answered.',
  description:
    'Complete FAQ for Red Gym Dubai — memberships, classes, facilities, free day pass, pricing, location, and more. 50+ questions answered.',
};

const FAQ_GROUPS: FAQGroup[] = [
  {
    category: 'About Red Gym',
    items: [
      {
        question: 'What is Red Gym?',
        answer:
          'Red Gym is a 25,000 square foot combat sports and fitness facility in Vista Tower, Al Thuraya Street, Barsha Heights (Tecom), Dubai. We offer 11+ class types including boxing, MMA, BJJ, Muay Thai, kickboxing, karate, CrossFit, yoga, spinning, zumba, and HIIT — all under one roof.',
      },
      {
        question: 'Where is Red Gym located?',
        answer:
          'Red Gym is located in Vista Tower on Al Thuraya Street, in the heart of Barsha Heights (Tecom), Dubai. We are easily accessible from Dubai Marina, JLT, Greens, Internet City, Media City, and most of central Dubai — typically within 15 minutes.',
      },
      {
        question: 'What are your operating hours?',
        answer:
          'Red Gym is open every day from 6:00 AM to 11:00 PM. No exceptions, no holiday closures. Whether you train at 6 AM or 10 PM, we are open.',
      },
      {
        question: 'How do I contact Red Gym?',
        answer:
          'The fastest way to reach us is WhatsApp at +971 4 361 8131. You can also call the same number during gym hours or email info@redfit.ae for longer questions or partnerships. Our Instagram is @redgym.ae.',
      },
      {
        question: 'Is parking available?',
        answer:
          'Yes — free parking inside Vista Tower for all members. This is a major Dubai luxury given the parking pressure in Barsha Heights. Non-members can use the standard tower parking with normal rates.',
      },
      {
        question: 'What makes Red Gym different from other Dubai gyms?',
        answer:
          'Three things: First, we offer real combat sports training alongside full strength and fitness facilities — most gyms do one or the other. Second, our coaches are competitors or former competitors, not personal trainers with weekend certifications. Third, the building, equipment, and atmosphere were designed from the ground up — not retrofitted.',
      },
      {
        question: 'Is Red Gym suitable for beginners?',
        answer:
          'Absolutely. The majority of our members started as complete beginners in their chosen discipline. Every class has scaling options and most disciplines run dedicated beginner-friendly sessions. The culture is welcoming, not intimidating.',
      },
    ],
  },
  {
    category: 'Membership',
    items: [
      {
        question: 'What does a Red Gym membership include?',
        answer:
          'Every membership includes access to all 11+ class types, the full strength floor with Hammer Strength equipment, all combat zones, locker rooms and showers, the recovery area, and free Vista Tower parking. No tiers, no add-ons — everything is just included.',
      },
      {
        question: 'What membership plans are available?',
        answer:
          'We offer monthly, annual, couples, and group (3-5 members) plans. Annual plans offer significant savings over monthly. Couples and group plans offer discounted rates per person when enrolled together.',
      },
      {
        question: 'How much does a membership cost?',
        answer:
          'Rates change seasonally and we regularly run member offers that beat any static "listed price." The fastest way to know what you would actually pay is WhatsApp us with how you plan to use the gym — we will quote you the current rate plus any applicable offer. Every new member also receives a 500 AED voucher.',
      },
      {
        question: 'Can I freeze or pause my membership?',
        answer:
          'Yes. Membership freezes are available for travel, injury, or other reasons. Specific terms depend on your plan type — WhatsApp us with your situation and we will outline options.',
      },
      {
        question: 'Is there a cancellation policy?',
        answer:
          'Yes. Cancellation terms vary by plan type (monthly vs annual vs group). For specific details about your situation, message us on WhatsApp — we will walk you through the options without pressure.',
      },
      {
        question: 'Do you offer corporate or office plans?',
        answer:
          'Yes. Our group plan (3-5 members) is popular with offices, teams, and friend circles. For larger corporate wellness arrangements, message us with your headcount and we will work out a custom proposal.',
      },
      {
        question: 'Can I bring a guest?',
        answer:
          'Members can bring guests on certain days or under specific arrangements. For first-time guests, our free day pass is the easiest entry point — they can drop in independently. WhatsApp us for current guest policies.',
      },
    ],
  },
  {
    category: 'Classes & Disciplines',
    items: [
      {
        question: 'How many class types do you offer?',
        answer:
          'We offer 11+ class types: 6 combat sports (boxing, MMA, BJJ, Muay Thai, kickboxing, karate) and 5 fitness disciplines (CrossFit, yoga, spinning, zumba, HIIT). Every class type is included in your membership.',
      },
      {
        question: 'How do class schedules work?',
        answer:
          "Class schedules shift weekly based on demand, instructor availability, and special programming. We do not publish a static online schedule because it would be outdated within days. WhatsApp us for this week's full schedule.",
      },
      {
        question: 'Do I need to book classes in advance?',
        answer:
          'Most classes are drop-in for members. For very popular sessions or limited-capacity workshops, we may use signup lists — these are communicated via Instagram and WhatsApp ahead of time.',
      },
      {
        question: 'Are there women-only classes?',
        answer:
          'Yes. We run women-only sessions across multiple disciplines — boxing, Muay Thai, kickboxing, yoga, and others. The schedule varies by demand. WhatsApp us for the current women-only class schedule.',
      },
      {
        question: 'What time do morning classes start?',
        answer:
          'Morning classes start at 6:00 AM. Popular early sessions include boxing technique, yoga flows, strength work, and spinning. Many members use these to train before work.',
      },
      {
        question: 'Do you have classes for kids or teenagers?',
        answer:
          'Our standard adult classes are 18+. We are evaluating dedicated youth programming for select disciplines (boxing and BJJ in particular). WhatsApp us about current youth options.',
      },
      {
        question: 'Can I just use the gym without taking classes?',
        answer:
          'Yes. Members have full access to all equipment during open hours for self-guided training. Classes are an option, not a requirement.',
      },
      {
        question: 'How do I know which discipline to start with?',
        answer:
          'Start with whatever interests you most. Try a free day pass and drop into a class that sounds appealing. Most members find their primary discipline within their first 2-3 visits. You can always switch or add disciplines later — they are all included.',
      },
    ],
  },
  {
    category: 'Free Day Pass & First Visit',
    items: [
      {
        question: 'How do I claim a free day pass?',
        answer:
          'Send us a WhatsApp message at +971 4 361 8131 with "free day pass" and your preferred date. We will confirm within minutes during gym hours.',
      },
      {
        question: 'What does the free day pass include?',
        answer:
          'Full access to everything: combat zones, strength floor, any class running that day, locker rooms, showers, recovery area, and Vista Tower parking. No restrictions, no pressure tour.',
      },
      {
        question: 'Do I need to bring anything for my free trial?',
        answer:
          'Just gym kit (workout clothes, athletic shoes), a water bottle, and a positive attitude. We provide hand wraps and gloves for combat trials. Everything else is on-site.',
      },
      {
        question: 'How long is the free day pass valid for?',
        answer:
          'It is valid for a single full day — you can spend as much or as little time at the gym as you want during normal operating hours (6 AM - 11 PM). Drop into multiple classes if you have time.',
      },
      {
        question: 'Will someone give me a tour?',
        answer:
          'A quick tour is offered when you arrive — typically 5-10 minutes to show you the main zones. After that, you explore at your own pace. We do not do high-pressure sales tours.',
      },
      {
        question: 'Can I bring a friend on my free day pass?',
        answer:
          'Each free day pass is for one person, but your friend can claim their own free day pass independently — just have them WhatsApp us. Many members and prospective members come in pairs.',
      },
      {
        question: 'What if I am completely new to working out?',
        answer:
          'You are welcome. Our coaches and reception team will help you find a beginner-friendly class. Most disciplines have specific beginner sessions, and modifications are offered freely in mixed classes. There is no expectation of any prior fitness level.',
      },
    ],
  },
  {
    category: 'Facilities & Equipment',
    items: [
      {
        question: 'How big is Red Gym?',
        answer:
          'Red Gym is 25,000 square feet across the gym floor — making us one of the largest single-floor fitness facilities in Barsha Heights, Dubai. The space is divided into combat zones, strength floor, group studios, and recovery area.',
      },
      {
        question: 'What strength equipment do you have?',
        answer:
          'We have Hammer Strength machines (the gold standard of selectorized equipment), free weights including dumbbells up to 50kg+, multiple Olympic platforms, squat racks, full bench setups, and a complete cardio area. The strength floor is built for serious lifters.',
      },
      {
        question: 'Do you have group fitness studios?',
        answer:
          'Yes — multiple studio spaces with sprung wood flooring, mirror walls, professional sound systems, and adjustable lighting. The studios host our 11+ class types and can be rented for private sessions.',
      },
      {
        question: 'Are there combat-specific zones?',
        answer:
          'Yes. Dedicated mat areas for BJJ, MMA, and grappling. Heavy bag zones with professional TITLE bags. Pad work stations. Functional training equipment. A serious combat sports facility, not a corner of a CrossFit floor.',
      },
      {
        question: 'Is there a recovery area?',
        answer:
          'Yes — a dedicated post-workout area for mobility work, stretching, and recovery, available to all members at no additional charge.',
      },
      {
        question: 'Do you have showers and lockers?',
        answer:
          'Yes. Full locker rooms with showers, included with every membership. We recommend bringing your own toiletries (or grabbing them from the front desk if needed).',
      },
      {
        question: 'Is the gym air-conditioned?',
        answer:
          'Of course. Climate control is calibrated for training intensity — comfortable for warm-ups, optimal for high-output classes, and well-ventilated throughout the day.',
      },
    ],
  },
  {
    category: 'Pricing & Offers',
    items: [
      {
        question: 'Why do you not list prices on the website?',
        answer:
          'Our rates change seasonally — sometimes monthly. We also run regular member offers that beat any listed price. Posting static prices would mislead visitors. WhatsApp us for the current rate that applies to your situation.',
      },
      {
        question: 'What is the 500 AED voucher?',
        answer:
          "Every new Red Gym member receives a 500 AED voucher applicable to your first month's membership, personal training sessions, or recovery services. It is automatically included in your enrollment — no separate claim needed.",
      },
      {
        question: 'What is the couples discount?',
        answer:
          'When you and your partner enroll on a shared couples plan, you both get a discounted rate compared to two individual memberships. WhatsApp us with both names to set this up.',
      },
      {
        question: 'What is the friends discount?',
        answer:
          'Similar to couples — two friends enrolling together get a discounted rate. Perfect for accountability partners and training buddies.',
      },
      {
        question: 'How does the group discount work?',
        answer:
          '3-5 members enrolling together get even larger discounts. Common groups: families, office teams, friend crews, sports clubs. The more members, the larger the savings per person.',
      },
      {
        question: 'Do you offer student or military discounts?',
        answer:
          'We have occasionally run student and military offers as part of broader campaigns. WhatsApp us — if there is a current applicable offer, we will let you know.',
      },
      {
        question: 'Can I pay annually for a discount?',
        answer:
          'Yes — annual plans offer significant savings over monthly billing. Specific savings depend on the current rates and any active offers. WhatsApp us for a quote.',
      },
    ],
  },
  {
    category: 'Studio Rental & Special Services',
    items: [
      {
        question: 'Can I rent a studio at Red Gym?',
        answer:
          'Yes. We rent fully-equipped studios by the hour for private training sessions, content shoots, group workshops, and special events. Sound-proofed space, mirror walls, professional lighting, AC, and free Vista Tower parking included.',
      },
      {
        question: 'What is studio rental priced at?',
        answer:
          'Rates vary by date, time, and purpose. Peak hours, weekends, and longer bookings are priced differently. WhatsApp us with your preferred date and use case for a current quote — usually within minutes.',
      },
      {
        question: 'Do you offer personal training?',
        answer:
          'Yes. Personal training is available with our certified coaches across all disciplines. You can use your 500 AED new member voucher toward PT sessions. WhatsApp us to discuss coaches and scheduling.',
      },
      {
        question: 'Do you have nutrition or recovery services?',
        answer:
          'We have recovery services available at the gym including massage and mobility work. Nutrition consulting can be arranged through our coaches. WhatsApp us for what is currently offered.',
      },
      {
        question: 'Can I host a private event at Red Gym?',
        answer:
          'Yes — we accommodate corporate wellness events, sports team training camps, private workshops, and similar. WhatsApp us with your event details and we will design something appropriate.',
      },
    ],
  },
];

// Flatten all items into a single array for FAQPage schema
const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

export default function FAQPage() {
  const faqLD = buildFAQPageLD(ALL_FAQS);

  return (
    <>
      <JsonLdScript data={faqLD} />

      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Every question.
            <br />
            <span className="text-[#E11D2A]">Honestly answered.</span>
          </>
        }
        subtitle={`${ALL_FAQS.length}+ common questions about Red Gym — memberships, classes, facilities, pricing, location. All in one place.`}
        backgroundImage={HERO_IMAGES.desktop}
      />

      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FAQAccordion groups={FAQ_GROUPS} />
        </div>
      </section>

      <ClosingCTAStrip
        eyebrow="Still have questions?"
        title="WhatsApp us. We respond in minutes."
        description="If your question is not on the list, message us directly. The reception team handles every inquiry personally."
        primaryCtaLabel="Message Us"
      />
    </>
  );
}
