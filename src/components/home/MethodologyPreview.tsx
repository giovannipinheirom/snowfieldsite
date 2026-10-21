import React from 'react';
import Link from 'next/link';
import { 
  Smile, 
  Target, 
  Compass, 
  TrendingUp, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export const MethodologyPreview: React.FC = () => {
  const steps = [
    {
      icon: <Smile className="w-6 h-6 text-primary-600" />,
      title: 'Aulas Divertidas e Leves',
      description: 'Aprender um idioma não pode ser sinônimo de ansiedade. Eliminamos a cobrança excessiva para você falar com prazer.',
    },
    {
      icon: <Target className="w-6 h-6 text-primary-600" />,
      title: '100% Personalizadas',
      description: 'O material e os exemplos conectam-se diretamente com seus hobbies, profissão, exames ou planos de viagem.',
    },
    {
      icon: <Compass className="w-6 h-6 text-primary-600" />,
      title: 'Primeira Aula Diagnóstica',
      description: 'Um bate-papo descontraído com o professor para mapear seus pontos fortes, travas comunicativas e metas reais.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: 'Acompanhamento Próximo',
      description: 'Feedback contínuo sobre seu vocabulário, precisão e autonomia, com relatórios claros de evolução.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Nossa Proposta Pedagógica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Como funcionam as nossas aulas?
          </h2>
          <p className="mt-3 text-base text-secondary-600 leading-relaxed">
            Criamos um ambiente onde errar faz parte do aprendizado e a conversação acontece desde o primeiro encontro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-secondary-50/70 border border-secondary-200/70 hover:border-primary-300 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 border border-secondary-100">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/metodologia"
            className="inline-flex items-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-7 rounded-xl shadow-md text-sm sm:text-base transition-colors"
          >
            <span>Conhecer a metodologia completa</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
