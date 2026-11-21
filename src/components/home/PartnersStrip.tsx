import React from 'react';
import { partnerCompanies, allLanguages } from '@/content/historia';
import { Snowflake } from 'lucide-react';

export const PartnersStrip: React.FC = () => {
  const items = [...partnerCompanies.map((c) => ({ text: c, kind: 'company' })), ...allLanguages.map((l) => ({ text: l, kind: 'lang' }))];
  const loop = [...items, ...items];

  return (
    <section className="bg-secondary-900 text-white py-5 overflow-hidden border-b border-secondary-800" aria-label="Empresas atendidas e idiomas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-primary-300">
          Já levamos idiomas para
        </span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max sf-marquee gap-8">
            {loop.map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className={item.kind === 'company' ? 'font-bold text-white text-base' : 'font-hand text-2xl text-primary-200'}>
                  {item.text}
                </span>
                <Snowflake className="w-3.5 h-3.5 text-primary-400/70" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
