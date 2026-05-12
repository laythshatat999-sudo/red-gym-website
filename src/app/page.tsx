export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center pt-20">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.3em] mb-6">
          Phase 1B Layout Test
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-white tracking-tight mb-6">
          TRAIN HARDER.<br />TRAIN HERE.
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
          25,000 sqft of combat sports, premium strength, and elite fitness in Barsha Heights, Dubai.
          Home page coming in Phase 2.
        </p>
        <div className="mt-32 mb-32 grid gap-32">
          {/* Scroll-test sections so we can verify the floating button & navigation behavior */}
          <div className="h-screen flex items-center justify-center border-y border-white/5">
            <p className="text-white/30 font-display text-4xl">Scroll Section 1</p>
          </div>
          <div className="h-screen flex items-center justify-center border-y border-white/5">
            <p className="text-white/30 font-display text-4xl">Scroll Section 2</p>
          </div>
          <div className="h-screen flex items-center justify-center border-y border-white/5">
            <p className="text-white/30 font-display text-4xl">Scroll Section 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
