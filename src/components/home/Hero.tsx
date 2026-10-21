'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const handleAgendarClick = () => {
    trackEvent({
      name: 'whatsapp_click',
      properties: { page: '/', context: 'hero_cta_whatsapp' },
    });
  };

  const handleTestClick = () => {
    trackEvent({
      name: 'test_start',
      properties: { language: 'Inglês' },
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/60 via-white to-white py-16 sm:py-24 lg:py-28 border-b border-secondary-100">
      {/* Elementos geométricos de fundo sutis (tema Snowfield) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge de Credibilidade */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm text-xs sm:text-sm font-semibold text-primary-700 animate-in fade-in duration-300">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span>Em atividade desde {siteConfig.sinceYear} • Sem fórmulas engessadas</span>
          </div>

          {/* Promessa Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary-900 tracking-tight leading-[1.12]">
            Aulas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500">divertidas</span> e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">personalizadas</span>.
          </h1>

          {/* Subtítulo Obrigatório */}
          <p className="text-lg sm:text-xl text-secondary-600 font-medium leading-relaxed max-w-2xl mx-auto">
            De 4 a 90 anos, online ou presencial em São Bernardo do Campo.
          </p>

          {/* Botões de Ação Principais (CTAs 1 e 2 da prioridade de conversão) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAgendarClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar uma aula</span>
            </a>

            <Link
              href="/teste-de-nivel"
              onClick={handleTestClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary-50 text-secondary-800 hover:text-primary-600 font-bold py-4 px-8 rounded-2xl border border-secondary-200 shadow-md transition-all text-base sm:text-lg"
            >
              <Sparkles className="w-5 h-5 text-primary-500" />
              <span>Fazer teste de nível</span>
            </Link>
          </div>

          {/* Destaques rápidos de segurança e praticidade */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-secondary-600 border-t border-secondary-200/60 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
              <span>Metodologia 100% ativa</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
              <span>Aulas em condomínios em SBC</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
              <span>Online para o Brasil e mundo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
