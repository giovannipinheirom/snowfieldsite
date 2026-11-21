import React from 'react';
import Link from 'next/link';
import { languagesData } from '@/content/idiomas';
import { ArrowRight } from 'lucide-react';

export const LanguageCards: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary-50 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Os idiomas
          </h2>
          <p className="mt-2 text-base text-secondary-600">
            Também damos aulas de japonês e de português para estrangeiros. É só chamar no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {languagesData.map((lang) => (
            <Link
              key={lang.slug}
              href={`/idiomas/${lang.slug}`}
              className="group bg-white rounded-2xl p-6 border border-secondary-200 hover:border-primary-400 transition-colors flex flex-col"
            >
              <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors mb-2 flex items-center justify-between">
                {lang.name}
                <ArrowRight className="w-5 h-5 text-secondary-300 group-hover:text-primary-500 transition-colors" />
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">{lang.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
