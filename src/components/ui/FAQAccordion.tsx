'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  category: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  items?: FAQItem[];
  groups?: FAQGroup[];
}

interface RowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQRow({ item, isOpen, onToggle }: RowProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
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
          {isOpen ? <Minus className="w-5 h-5 text-[#E11D2A]" /> : <Plus className="w-5 h-5 text-[#E11D2A]" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:pb-7 pr-8 text-white/70 leading-relaxed">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ items, groups }: FAQAccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>(groups ? '0-0' : 'flat-0');

  if (groups) {
    return (
      <div className="space-y-16">
        {groups.map((group, gIdx) => (
          <div key={group.category}>
            <h3 className="font-display text-2xl md:text-3xl text-[#E11D2A] mb-6 tracking-tight">
              {group.category}
            </h3>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {group.items.map((item, iIdx) => {
                const key = `${gIdx}-${iIdx}`;
                return (
                  <FAQRow
                    key={key}
                    item={item}
                    isOpen={openKey === key}
                    onToggle={() => setOpenKey(openKey === key ? null : key)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!items) return null;
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, idx) => {
        const key = `flat-${idx}`;
        return (
          <FAQRow
            key={key}
            item={item}
            isOpen={openKey === key}
            onToggle={() => setOpenKey(openKey === key ? null : key)}
          />
        );
      })}
    </div>
  );
}
