'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { teamData } from '@/content/equipe';
import { MessageCircle, Sparkles, Snowflake, Heart } from 'lucide-react';

const greetings = ['Hello!', '¡Hola!', 'Bonjour!', 'Ciao!', 'Hallo!', 'Olá!', 'こんにちは!'];

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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-b border-secondary-100">
      {/* Decoração de fundo */}
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-primary-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-primary-100/60 rounded-full blur-3xl pointer-events-none" />
      <Snowflake className="absolute top-10 left-[8%] w-10 h-10 text-primary-300/60 sf-spin-slow pointer-events-none" aria-hidden />
      <Snowflake className="absolute bottom-16 left-[45%] w-6 h-6 text-primary-300/70 sf-spin-slow pointer-events-none hidden lg:block" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
          {/* Texto */}
          <div className="space-y-7 text-center lg:text-left">
            {/* Saudações em vários idiomas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {greetings.map((g, i) => (
                <span
                  key={g}
                  className={`font-hand text-lg sm:text-xl px-3 py-0.5 rounded-full border ${
                    i === 0
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'bg-white/80 text-secondary-600 border-secondary-200'
                  }`}
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
                >
                  {g}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary-900 tracking-tight leading-[1.08]">
              Aulas{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-500">divertidas</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-200" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 9 Q 50 2 100 7 T 198 5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              e personalizadas.
            </h1>

            <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              De 4 a 90 anos, online ou presencial em São Bernardo do Campo. A gente estuda a sua história e monta a aula ao redor do que você gosta — sem livro engessado.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAgendarClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-0.5 text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Agendar uma aula</span>
              </a>
              <Link
                href="/teste-de-nivel"
                onClick={handleTestClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary-50 text-secondary-800 hover:text-primary-600 font-bold py-4 px-8 rounded-2xl border border-secondary-200 shadow-md transition-all text-base sm:text-lg"
              >
                <Sparkles className="w-5 h-5 text-primary-500" />
                <span>Fazer teste de nível</span>
              </Link>
            </div>

            {/* Quem vai te ensinar */}
            <Link
              href="/sobre#equipe"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white/70 border border-secondary-200/70 pl-2 pr-4 py-2 shadow-sm hover:shadow-md hover:border-primary-300 transition-all"
            >
              <div className="flex -space-x-3">
                {teachers.map((t) => (
                  <Image
                    key={t.slug}
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              <div className="text-left leading-tight">
                <div className="text-sm font-bold text-secondary-900">
                  {teachers.map((t) => t.name).slice(0, 3).join(', ')} e cia.
                </div>
                <div className="text-xs text-secondary-500 group-hover:text-primary-600 transition-colors">
                  Conheça quem vai te ensinar →
                </div>
              </div>
            </Link>
          </div>

          {/* Colagem de fotos */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none h-[420px] sm:h-[500px] lg:h-[540px]">
            {/* Foto principal */}
            <div
              className="absolute top-6 right-0 w-[82%] h-[62%] rounded-[2rem] overflow-hidden shadow-2xl shadow-secondary-900/20 ring-8 ring-white sf-float"
              style={{ ['--sf-rot' as string]: '2deg' }}
            >
              <Image
                src="/fotos/kids-lousa-animals.jpg"
                alt="Professora ensinando nomes de animais em inglês para crianças"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Polaroid corporativo */}
            <div
              className="absolute bottom-4 left-0 w-[52%] bg-white p-2.5 pb-10 rounded-md shadow-xl shadow-secondary-900/15 sf-float-delay"
              style={{ ['--sf-rot' as string]: '-5deg' }}
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/fotos/corporativo-sala-vista.jpg"
                  alt="Aula corporativa de conversação em inglês"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-2 left-0 right-0 text-center font-hand text-xl text-secondary-700">
                meeting in English ✔
              </span>
            </div>

            {/* Polaroid online */}
            <div
              className="absolute bottom-0 right-[4%] w-[40%] bg-white p-2 pb-9 rounded-md shadow-xl shadow-secondary-900/15 sf-float"
              style={{ ['--sf-rot' as string]: '4deg' }}
            >
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/fotos/online-home-office.jpg"
                  alt="Aluno em aula online ao vivo"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover object-[30%_50%]"
                />
              </div>
              <span className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-lg text-secondary-700">
                aula de casa 🏠
              </span>
            </div>

            {/* Balão de fala */}
            <div className="absolute top-0 left-[2%] bg-white rounded-2xl rounded-bl-none px-4 py-2 shadow-lg border border-primary-100 -rotate-3">
              <span className="font-hand text-2xl text-primary-600">How are you today?</span>
            </div>

            {/* Selos */}
            <div className="absolute top-[26%] left-0 bg-secondary-900 text-white rounded-2xl px-4 py-3 shadow-xl rotate-[-4deg] hidden sm:block">
              <div className="text-2xl font-black leading-none">7</div>
              <div className="text-[11px] font-semibold text-primary-200 uppercase tracking-wider">idiomas</div>
            </div>
            <div className="absolute top-2 right-2 sm:-right-2 bg-primary-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl rotate-12 ring-4 ring-white">
              <Heart className="w-4 h-4 fill-white mb-0.5" />
              <span className="text-[11px] font-bold leading-tight">desde<br />2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
