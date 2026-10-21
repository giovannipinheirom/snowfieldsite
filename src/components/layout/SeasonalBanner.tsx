'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SeasonalBanner: React.FC = () => {
  const { seasonalBanner } = siteConfig;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!seasonalBanner.enabled) return;
    const today = new Date().toISOString().split('T')[0];
    if (seasonalBanner.startDate && today < seasonalBanner.startDate) return;
    if (seasonalBanner.endDate && today > seasonalBanner.endDate) return;
    setIsVisible(true);
  }, [seasonalBanner]);

  if (!isVisible) return null;

  return (
    <aside aria-label="Aviso sazonal" className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-medium">
        <span className="inline-flex items-center gap-1.5 font-bold tracking-wide text-cyan-200">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Matrículas Abertas:</span>
        </span>
        <span className="opacity-95">{seasonalBanner.text}</span>
        {seasonalBanner.linkUrl && (
          <Link
            href={seasonalBanner.linkUrl}
            className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 hover:text-cyan-200 transition-colors ml-1"
          >
            <span>{seasonalBanner.linkText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </aside>
  );
};
