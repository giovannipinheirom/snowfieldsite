import React from 'react';
import { testimonialsData } from '@/content/depoimentos';
import { siteConfig } from '@/content/site';
import { Quote } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export const TestimonialsSection: React.FC = () => {
  const tints = ['bg-primary-50 border-primary-100', 'bg-secondary-50 border-secondary-200', 'bg-white border-secondary-200'];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Os protagonistas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Quem estuda com a gente conta
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            Em português, inglês ou espanhol — do jeito que cada aluno quis escrever.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {testimonialsData.map((item, i) => {
            const initials = item.authorName.split(' ').map((n) => n[0]).slice(0, 2).join('');
            return (
              <figure
                key={item.id}
                className={`break-inside-avoid rounded-3xl p-7 border shadow-sm ${tints[i % tints.length]}`}
              >
                <Quote className="w-8 h-8 text-primary-400 mb-4" aria-hidden />
                <blockquote className="text-base text-secondary-800 leading-relaxed">
                  “{item.content}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 text-white font-bold flex items-center justify-center text-sm">
                    {initials}
                  </span>
                  <div>
                    <div className="font-bold text-sm text-secondary-900">{item.authorName}</div>
                    <div className="text-xs text-secondary-500">
                      {item.roleOrProfile} • <span className="text-primary-600 font-medium">{item.languageOrCourse}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-inside-avoid flex flex-col items-center justify-center text-center gap-2 rounded-3xl p-7 bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            <InstagramIcon className="w-8 h-8" />
            <span className="font-hand text-3xl">quer ver mais?</span>
            <span className="text-sm text-white/90">Acompanhe o dia a dia em {siteConfig.instagram.handle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
