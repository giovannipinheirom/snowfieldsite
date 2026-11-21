import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const modalities = [
  {
    photo: '/fotos/online-escritorio.jpg',
    alt: 'Aluno em aula online pelo notebook',
    title: 'Online, ao vivo',
    where: 'De qualquer lugar',
    description:
      'Aulas por videochamada, individuais ou em grupos pequenos. Foi assim que atendemos profissionais de TI do Brasil inteiro quando o home-office chegou, e funciona muito bem até hoje.',
    link: '/cursos',
    linkText: 'Ver os cursos',
  },
  {
    photo: '/fotos/kids-turma-janela.jpg',
    alt: 'Turma de crianças com a professora no condomínio',
    title: 'No seu condomínio',
    where: 'São Bernardo do Campo',
    description:
      'A professora vai até o espaço comum do prédio e as crianças estudam sem sair de casa. Começamos em 2022 e hoje são mais de cinco condomínios parceiros.',
    link: '/aulas-em-condominios',
    linkText: 'Levar para o meu condomínio',
  },
  {
    photo: '/fotos/corporativo-reuniao-online.jpg',
    alt: 'Aula de inglês corporativo em sala de reunião',
    title: 'Na sua empresa',
    where: 'Presencial ou online',
    description:
      'Foi assim que a escola começou, em 2019, dentro de empresas como Serasa Experian e Banco Volkswagen. Reuniões simuladas, case studies e o vocabulário do seu setor.',
    link: '/aulas-corporativas',
    linkText: 'Pedir uma proposta',
  },
];

export const ModalitiesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary-50 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Onde acontecem as aulas
          </h2>
          <p className="mt-3 text-base text-secondary-600">
            Não temos sede física. Preferimos ir até onde o aluno está.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modalities.map((item) => (
            <article key={item.title} className="flex flex-col">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <Image src={item.photo} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <span className="text-sm text-secondary-500">{item.where}</span>
              <h3 className="text-2xl font-bold text-secondary-900 mt-1 mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed mb-5 flex-1">{item.description}</p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-800 underline underline-offset-4 decoration-primary-300 self-start"
              >
                {item.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
