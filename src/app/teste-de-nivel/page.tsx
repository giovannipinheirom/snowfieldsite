import React from 'react';
import type { Metadata } from 'next';
import { LevelTestWizard } from '@/components/test/LevelTestWizard';
import { Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teste de nível de Inglês Online gratuito (CEFR) | Snowfield Languages',
  description: 'Avalie seu nível de inglês gratuitamente de A1 a C1. Teste rápido de gramática, vocabulário e leitura, com resultado imediato no Quadro Europeu.',
};

export default function TesteDeNivelPage() {
  return (
    <div className="bg-secondary-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary-900 tracking-tight">
            Teste de nível de inglês
          </h1>
          <p className="text-sm sm:text-base text-secondary-600 max-w-xl mx-auto">
            São 28 questões de múltipla escolha, do nível A1 ao C1. Leva uns 10 minutos e o progresso fica salvo.
          </p>
        </div>

        {/* Wizard Interativo */}
        <LevelTestWizard />
      </div>
    </div>
  );
}
