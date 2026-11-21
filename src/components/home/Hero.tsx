'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { teamData } from '@/content/equipe';
import { MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleAgendarClick = () => {
    trackEvent({
      name: 'whatsapp_click',
      properties: { page: '/', context: 'hero_cta_whatsapp' },
    });
  };

  const handleTestClick = () => {
    trackEvent({
      name: 'test_start',
      properties: { language: 'Inglês' },
    });
  };

  const teachers = teamData.filter((m) => m.languages.length > 0);

  return (
    <section className="bg-primary-50/60 border-b border-secondary-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-10 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <p className="font-hand text-2xl text-primary-600">Hello! ¡Hola! Bonjour! Ciao! Hallo!</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary-900 tracking-tight leading-[1.08]">
              Aulas divertidas e personalizadas.
            </h1>

            <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed max-w-xl">
              De 4 a 90 anos, online ou presencial em São Bernardo do Campo. A gente conhece a sua história e monta a aula a partir do que você gosta.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAgendarClick}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-7 rounded-xl transition-colors text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar uma aula
              </a>
              <Link
                href="/teste-de-nivel"
                onClick={handleTestClick}
                className="inline-flex items-center justify-center bg-white hover:bg-secondary-50 text-secondary-800 font-bold py-3.5 px-7 rounded-xl border border-secondary-300 transition-colors text-base"
              >
                Fazer o teste de nível
              </Link>
            </div>

            <Link href="/sobre#equipe" className="group inline-flex items-center gap-3 pt-2">
              <div className="flex -space-x-2.5">
                {teachers.map((t) => (
                  <Image
                    key={t.slug}
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-50"
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-600 group-hover:text-primary-700 underline-offset-4 group-hover:underline">
                Conheça as professoras
              </span>
            </Link>
          </div>

          {/* Colagem de fotos */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none h-[400px] sm:h-[480px] lg:h-[520px]">
            <div className="absolute top-0 right-0 w-[84%] h-[64%] rounded-2xl overflow-hidden rotate-2 border-[6px] border-white shadow-lg">
              <Image
                src="/fotos/kids-lousa-animals.jpg"
                alt="Professora ensinando nomes de animais em inglês para crianças"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            <figure className="absolute bottom-4 left-0 w-[52%] bg-white p-2.5 pb-10 rounded shadow-lg -rotate-[5deg]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/fotos/corporativo-sala-vista.jpg"
                  alt="Aula corporativa de conversação em inglês"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-xl text-secondary-700">
                reunião em inglês
              </figcaption>
            </figure>

            <figure className="absolute bottom-0 right-[4%] w-[40%] bg-white p-2 pb-9 rounded shadow-lg rotate-[4deg]">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/fotos/online-home-office.jpg"
                  alt="Aluno em aula online ao vivo"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover object-[30%_50%]"
                />
              </div>
              <figcaption className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-lg text-secondary-700">
                aula de casa
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
