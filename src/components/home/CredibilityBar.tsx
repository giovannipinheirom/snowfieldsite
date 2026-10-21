import React from 'react';
import { siteConfig } from '@/content/site';
import { Calendar, Globe2, Sparkles, HeartHandshake } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-900 via-secondary-900 to-primary-950 text-white py-12 border-y border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Item 1: Desde 2019 */}
          <div className="pt-6 md:pt-0 px-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white mb-1">
              Desde {siteConfig.sinceYear}
            </div>
            <p className="text-xs sm:text-sm text-secondary-300 max-w-xs">
              Anos de dedicação ao ensino humanizado e comunicativo de idiomas.
            </p>
          </div>

          {/* Item 2: Alunos em vários estados e exterior */}
          <div className="pt-6 md:pt-0 px-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center mb-3">
              <Globe2 className="w-6 h-6" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">
              Brasil & Exterior
            </div>
            <p className="text-xs sm:text-sm text-secondary-300 max-w-xs">
              Alunos conectados em vários estados do país e fora do Brasil nas aulas online ao vivo.
            </p>
          </div>

          {/* Item 3: Presencial SBC & Condomínios */}
          <div className="pt-6 md:pt-0 px-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center mb-3">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">
              Presencial em SBC
            </div>
            <p className="text-xs sm:text-sm text-secondary-300 max-w-xs">
              Aulas diretas em condomínios e empresas de São Bernardo do Campo com segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
