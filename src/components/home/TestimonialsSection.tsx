import React from 'react';
import { testimonialsData } from '@/content/depoimentos';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { Quote, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Experiências Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            O que dizem os nossos alunos e responsáveis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            Transparência total: valorizamos o feedback sincero de quem vive a rotina das nossas aulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-secondary-50/70 rounded-3xl p-7 sm:p-8 border border-secondary-200/80 shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5" />
                </div>

                <div className="text-sm text-secondary-700 leading-relaxed mb-6 italic">
                  {item.isPlaceholder ? (
                    <div className="space-y-2">
                      <PlaceholderBadge text={item.content} />
                      <p className="text-xs text-secondary-400 not-italic">
                        Espaço reservado para inclusão do depoimento real do aluno/responsável.
                      </p>
                    </div>
                  ) : (
                    `"${item.content}"`
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-secondary-200/70">
                <div className="font-bold text-sm text-secondary-900 flex items-center gap-1.5 flex-wrap">
                  {item.isPlaceholder ? (
                    <PlaceholderBadge text={item.authorName} />
                  ) : (
                    item.authorName
                  )}
                </div>
                <div className="text-xs text-secondary-500 mt-0.5">
                  {item.roleOrProfile} • <span className="text-primary-600 font-medium">{item.languageOrCourse}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
