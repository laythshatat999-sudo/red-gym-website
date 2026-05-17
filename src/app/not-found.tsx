import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { WHATSAPP_CTA } from '@/lib/brand';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-5 md:px-8 pt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#E11D2A] text-xs uppercase tracking-[0.4em] mb-6 font-medium">
          Page not found
        </p>
        <h1 className="font-display text-7xl md:text-9xl text-white tracking-tight leading-none mb-8">
          404
        </h1>
        <p className="font-display text-3xl md:text-5xl text-white tracking-tight leading-[0.95] mb-8">
          Lost the route.<br />
          <span className="text-white/40">Not the workout.</span>
        </p>
        <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-12">
          The page you&apos;re looking for might have moved, been renamed, or never existed. Let&apos;s get you back to training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E11D2A] hover:bg-[#B8141F] text-white text-sm uppercase tracking-widest font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-sm uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
