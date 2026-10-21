'use client';

import React, { useState } from 'react';
import { faqData } from '@/content/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-secondary-50/50 border-b border-secondary-100">
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            Respostas transparentes sobre modalidades, turmas, metodologia e atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-secondary-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-secondary-900 pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-secondary-50 text-secondary-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-primary-50 text-primary-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-secondary-600 leading-relaxed border-t border-secondary-100 pt-4 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
