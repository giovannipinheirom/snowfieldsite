import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '@/content/equipe';
import { ArrowRight } from 'lucide-react';

export const TeamSection: React.FC<{ showLink?: boolean; id?: string }> = ({ showLink = true, id }) => {
  const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '1deg'];

  return (
    <section id={id} className="py-16 sm:py-24 bg-white border-b border-secondary-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Quem faz a escola
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            Cada professora leva para a aula o que gosta fora dela.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {teamData.map((m, i) => (
            <article key={m.slug} className="group relative">
              <div
                className="bg-white p-3 pb-4 rounded-lg shadow-xl border border-secondary-100 transition-transform duration-300 group-hover:rotate-0 group-"
                style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
              >
                <div className="relative aspect-square rounded overflow-hidden bg-secondary-100">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role.toLowerCase()} da Snowfield Languages`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-4 px-1 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-hand text-3xl font-bold text-secondary-900 leading-none">{m.name}</h3>
                    <span className="font-hand text-lg text-primary-600 text-right">{m.funFact}</span>
                  </div>
                  {m.languages.length === 0 && <div className="text-sm font-semibold text-secondary-800">{m.role}</div>}
                  {m.languages.length > 0 && (
                    <div className="text-sm font-semibold text-secondary-800">
                      {m.role === 'Professora' ? 'Ensina ' : ''}{m.languages.join(', ').replace(/, ([^,]*)$/, ' e $1')}
                    </div>
                  )}
                  <p className="text-sm text-secondary-600 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showLink && (
          <div className="text-center mt-14">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700"
            >
              Conheça nossa história <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
