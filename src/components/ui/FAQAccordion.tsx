'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-lg md:text-xl tracking-tight leading-tight transition-colors ${
                  isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                }`}
              >
                {item.question}
              </span>
              <span className="flex-shrink-0 mt-1">
                {isOpen ? (
                  <Minus className="w-5 h-5 text-[#E11D2A]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#E11D2A]" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 md:pb-7 pr-8 text-white/70 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
