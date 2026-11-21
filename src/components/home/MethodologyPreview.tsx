import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Começamos pela sua história',
    description: 'Antes de qualquer material, queremos saber do que você gosta, onde usa o idioma e o que te trava. A aula é montada a partir disso.',
  },
  {
    title: 'O livro não manda na aula',
    description: 'Cada pessoa aprende de um jeito. Por isso entram música, jogos, histórias e situações da sua rotina.',
  },
  {
    title: 'Prática que vai para a vida real',
    description: 'No inglês para negócios, simulamos reuniões, discutimos case studies e montamos action plans que você leva para o trabalho.',
  },
  {
    title: 'Um idioma puxa o outro',
    description: 'Muitos alunos terminam um idioma com a gente e já começam o próximo. Temos sete para escolher.',
  },
];

export const MethodologyPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Como são as nossas aulas
          </h2>
          <p className="text-base text-secondary-600 leading-relaxed">
            Antes da Snowfield, passamos anos coordenando escolas de idiomas e vimos muita gente desistir de método engessado. Aqui errar faz parte, e a conversa começa no primeiro encontro.
          </p>
          <Link
            href="/metodologia"
            className="inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-800 underline underline-offset-4 decoration-primary-300"
          >
            Ler mais sobre a metodologia
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ol className="divide-y divide-secondary-200 border-y border-secondary-200">
          {steps.map((step, idx) => (
            <li key={step.title} className="flex gap-5 py-6">
              <span className="font-hand text-4xl text-primary-500 leading-none w-8 shrink-0">{idx + 1}</span>
              <div>
                <h3 className="text-lg font-bold text-secondary-900">{step.title}</h3>
                <p className="mt-1 text-sm sm:text-base text-secondary-600 leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
