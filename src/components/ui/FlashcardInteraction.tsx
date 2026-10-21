'use client';

import React, { useState } from 'react';
import { UsefulPhrase } from '@/types';
import { Eye, EyeOff, Sparkles, Volume2 } from 'lucide-react';

interface FlashcardInteractionProps {
  phrases: UsefulPhrase[];
  languageName: string;
}

export const FlashcardInteraction: React.FC<FlashcardInteractionProps> = ({ phrases, languageName }) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (index: number) => {
    setRevealed((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-gradient-to-br from-primary-900 to-secondary-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-cyan-300" />
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Mini-Interação: Frases Úteis em {languageName}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-cyan-100/80 mb-6">
        Clique nos cards abaixo para testar sua compreensão e revelar a tradução em português:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {phrases.map((item, idx) => {
          const isRevealed = !!revealed[idx];
          return (
            <div
              key={idx}
              onClick={() => toggleReveal(idx)}
              className="group cursor-pointer bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 transition-all duration-200 select-none relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {item.hint && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300 block mb-1">
                    {item.hint}
                  </span>
                )}
                <p className="text-base sm:text-lg font-bold text-white mb-3">
                  "{item.phrase}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                {isRevealed ? (
                  <div className="text-sm font-semibold text-emerald-300 animate-in fade-in duration-150">
                    ➔ {item.translation}
                  </div>
                ) : (
                  <div className="text-xs text-white/60 flex items-center gap-1.5 group-hover:text-cyan-200">
                    <Eye className="w-4 h-4" />
                    <span>Toque para ver a tradução</span>
                  </div>
                )}

                <button
                  type="button"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70"
                  aria-label={isRevealed ? 'Ocultar tradução' : 'Revelar tradução'}
                >
                  {isRevealed ? <EyeOff className="w-4 h-4 text-emerald-300" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
