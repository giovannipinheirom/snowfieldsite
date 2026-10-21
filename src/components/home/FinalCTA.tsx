import React from 'react';
import { PreEnrollmentForm } from '@/components/forms/PreEnrollmentForm';
import { siteConfig } from '@/content/site';
import { Sparkles, MessageCircle } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-cyan-50/40 to-cyan-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>Dê o primeiro passo rumo à fluência</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary-900 tracking-tight">
              Agende sua conversa inicial com a Snowfield
            </h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600 max-w-xl mx-auto">
              Preencha o formulário rápido abaixo. Em poucos minutos nossa coordenação entrará em contato para entender seus objetivos e indicar a melhor turma.
            </p>
          </div>

          <PreEnrollmentForm isCompact={true} className="shadow-2xl" />
        </div>
      </div>
    </section>
  );
};
