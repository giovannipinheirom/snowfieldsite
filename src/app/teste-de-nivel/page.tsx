import React from 'react';
import type { Metadata } from 'next';
import { LevelTestWizard } from '@/components/test/LevelTestWizard';
import { Sparkles, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teste de Nível de Inglês Online Gratuito (CEFR) | Snowfield Languages',
  description: 'Avalie seu nível de inglês gratuitamente de A1 a C1. Teste rápido de gramática, vocabulário e leitura, com resultado imediato no Quadro Europeu.',
};

export default function TesteDeNivelPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-primary-600" />
            <span>Avaliação de Proficiência Online Gratuita</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary-900 tracking-tight">
            Descubra Seu Nível Real de Inglês
          </h1>
          <p className="text-sm sm:text-base text-secondary-600 max-w-xl mx-auto">
            28 questões progressivas de múltipla escolha calibradas do nível A1 ao C1. Leva cerca de 10 minutos e seu progresso fica salvo automaticamente.
          </p>
        </div>

        {/* Wizard Interativo */}
        <LevelTestWizard />
      </div>
    </div>
  );
}
