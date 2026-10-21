import React from 'react';
import Link from 'next/link';
import { languagesData } from '@/content/idiomas';
import { ArrowRight, Globe } from 'lucide-react';

export const LanguageCards: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary-50/50 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
              Grade Curricular
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
              Idiomas Oferecidos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-secondary-600 max-w-xl">
              Cursos desenvolvidos para conversação prática, superação de bloqueios e autonomia comunicativa.
            </p>
          </div>
          <Link
            href="/ingles-regular"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 underline underline-offset-4"
          >
            <span>Conhecer o programa de Inglês Regular</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languagesData.map((lang) => (
            <Link
              key={lang.slug}
              href={`/idiomas/${lang.slug}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-secondary-200/80 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-primary-700 border border-cyan-100">
                    {lang.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary-100 group-hover:bg-primary-500 group-hover:text-white text-secondary-500 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors mb-2">
                  {lang.name}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed mb-6">
                  {lang.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-secondary-100 flex items-center justify-between text-xs font-semibold text-primary-600">
                <span>Ver teaser e atividades</span>
                <span className="text-secondary-400 font-normal group-hover:text-primary-600">
                  {lang.levels.length} níveis CEFR
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
