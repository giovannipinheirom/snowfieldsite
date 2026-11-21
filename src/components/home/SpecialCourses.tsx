import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Intensivo para viagens',
    text: 'De 4 a 8 semanas treinando o que você vai precisar na viagem: aeroporto, imigração, hotel, restaurante, compras e imprevistos.',
    href: '/intensivo-para-viagens',
    linkText: 'Ver o intensivo',
  },
  {
    title: 'Preparatório para exames',
    text: 'TOEFL, Cambridge (B2 First, C1 Advanced) e Duolingo English Test, com simulados no formato de cada prova e correção individual.',
    href: '/preparatorios',
    linkText: 'Ver os preparatórios',
  },
];

export const SpecialCourses: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight mb-3">
          Tem uma data marcada?
        </h2>
        <p className="text-base text-secondary-600 mb-10 max-w-2xl">
          Para quem tem viagem ou prova chegando, montamos cursos mais curtos e focados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="rounded-2xl p-7 sm:p-8 bg-secondary-900 text-white flex flex-col">
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="text-secondary-200 leading-relaxed mb-6 flex-1">{c.text}</p>
              <Link
                href={c.href}
                className="inline-flex items-center gap-2 font-bold text-primary-300 hover:text-white underline underline-offset-4 decoration-primary-400/50 self-start"
              >
                {c.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
