'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TargetAudience } from '@/types';
import { targetAudiencesConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { 
  Users, 
  User, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';

export const AudienceSelector: React.FC = () => {
  const [selected, setSelected] = useState<TargetAudience>('filho');
  const activeConfig = targetAudiencesConfig[selected];

  const icons = {
    filho: <Users className="w-6 h-6" />,
    mim: <User className="w-6 h-6" />,
    empresa: <Building2 className="w-6 h-6" />,
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Jornadas Personalizadas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Quero aulas de idiomas para:
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            Cada perfil tem uma necessidade diferente. Escolha o seu objetivo e veja o plano ideal:
          </p>
        </div>

        {/* Botões do Seletor */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8">
          {(['filho', 'mim', 'empresa'] as TargetAudience[]).map((key) => {
            const isCurrent = selected === key;
            const config = targetAudiencesConfig[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                  isCurrent
                    ? 'border-primary-500 bg-primary-50/70 text-primary-900 shadow-md ring-2 ring-primary-500/20'
                    : 'border-secondary-200 bg-white text-secondary-700 hover:border-primary-200 hover:bg-secondary-50/50'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isCurrent ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'}`}>
                  {icons[key]}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base leading-tight">
                    {config.title}
                  </div>
                  <div className="text-[11px] text-secondary-500 mt-0.5 line-clamp-1">
                    {key === 'filho' ? 'Crianças & Jovens' : key === 'mim' ? 'Carreira & Viagens' : 'Corporativo'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Card de Detalhes da Jornada Escolhida */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-secondary-50 to-cyan-50/40 rounded-3xl p-6 sm:p-10 border border-secondary-200/80 shadow-lg animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-secondary-200 pb-4">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Perfil Selecionado:
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-secondary-900">
                  {activeConfig.title}
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-800 self-start sm:self-auto">
                {activeConfig.subtitle}
              </span>
            </div>

            <p className="text-base text-secondary-700 leading-relaxed font-normal">
              {activeConfig.description}
            </p>

            {/* CTAs Direcionados */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href={activeConfig.route}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md text-sm sm:text-base transition-colors"
              >
                <span>{activeConfig.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappLink(activeConfig.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent({ name: 'whatsapp_click', properties: { page: '/', context: `audience_${selected}` } })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary-100 text-secondary-800 font-bold py-3.5 px-5 rounded-xl border border-secondary-300 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
