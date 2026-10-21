import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { 
  Laptop, 
  Building, 
  Briefcase, 
  ArrowRight, 
  Check 
} from 'lucide-react';

export const ModalitiesSection: React.FC = () => {
  const modalities = [
    {
      icon: <Laptop className="w-8 h-8 text-primary-500" />,
      title: 'Aulas Online ao Vivo',
      tag: 'Brasil & Exterior',
      description: 'Aulas particulares ou em duplas/grupos pequenos por videoconferência com lousa interativa e materiais compartilhados.',
      features: [
        'Sem deslocamento nem perda de tempo no trânsito',
        'Horários flexíveis de manhã à noite',
        'Alunos em diversos estados e países',
      ],
      link: '/cursos',
      linkText: 'Ver cursos online',
      primaryBg: 'bg-white',
    },
    {
      icon: <Building className="w-8 h-8 text-cyan-600" />,
      title: 'Aulas em Condomínios',
      tag: 'São Bernardo do Campo',
      description: 'O professor vai até as áreas comuns do seu condomínio residencial. Segurança e comodidade máxima para famílias e crianças.',
      features: [
        'Crianças aprendem sem sair do próprio prédio',
        'Turmas separadas rigidamente por faixa etária',
        'Metodologia lúdica e comunicativa',
      ],
      link: '/aulas-em-condominios',
      linkText: 'Quero no meu condomínio',
      primaryBg: 'bg-cyan-50/50',
      isPopular: true,
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary-800" />,
      title: 'Aulas Corporativas (In-Company)',
      tag: 'Empresas & Equipes',
      description: 'Capacitação in-company em São Bernardo do Campo ou online ao vivo para filiais com foco direto nos objetivos do negócio.',
      features: [
        'Treinamento para reuniões, e-mails e apresentações',
        'Alinhamento com o setor da empresa',
        'Relatórios de evolução para a gestão / RH',
      ],
      link: '/aulas-corporativas',
      linkText: 'Solicitar proposta corporativa',
      primaryBg: 'bg-white',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary-50/60 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Formatos de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Três modalidades pensadas para a sua rotina
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            A Snowfield Languages não possui sede física fixa: levamos o aprendizado até você onde for mais prático.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modalities.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 border border-secondary-200/80 shadow-md flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${item.primaryBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-secondary-100">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary-100 text-secondary-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-secondary-700">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-secondary-200/60">
                <Link
                  href={item.link}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-white hover:bg-secondary-900 text-secondary-900 hover:text-white border border-secondary-300 transition-colors shadow-sm"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
