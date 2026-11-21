import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { historyIntro, historyMission, historyTimeline, allLanguages } from '@/content/historia';
import { TeamSection } from '@/components/home/TeamSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { History, MapPinOff, MessageCircle, Snowflake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a Snowfield Languages | Nossa História desde 2019',
  description:
    'Conheça a história da Snowfield Languages: das aulas de inglês para negócios em empresas como Serasa Experian e Banco Volkswagen às aulas em condomínios de São Bernardo do Campo. Conheça também nossa equipe.',
};

export default function SobrePage() {
  return (
    <div className="bg-white">
      {/* Topo */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-14 sm:py-20 border-b border-secondary-100">
        <Snowflake className="absolute top-8 right-[10%] w-12 h-12 text-primary-200 sf-spin-slow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5 text-primary-600" />
              <span>Nossa história</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight leading-tight">
              Nascemos para ser{' '}
              <span className="text-primary-500">menos engessados</span>.
            </h1>
            {historyIntro.map((p) => (
              <p key={p} className="text-base sm:text-lg text-secondary-600 leading-relaxed">
                {p}
              </p>
            ))}
            <p className="font-hand text-3xl text-primary-600 -rotate-1">{historyMission}</p>
          </div>

          <div className="relative h-[380px] sm:h-[440px]">
            <figure className="absolute top-0 left-0 w-[68%] bg-white p-3 pb-11 rounded-md shadow-2xl shadow-secondary-900/15 -rotate-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="/fotos/equipe-sorrisos.jpg" alt="Equipe da Snowfield Languages" fill sizes="(max-width: 1024px) 70vw, 35vw" className="object-cover" />
              </div>
              <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-2xl text-secondary-700">
                a equipe ♥
              </figcaption>
            </figure>
            <figure className="absolute bottom-0 right-0 w-[52%] bg-white p-3 pb-11 rounded-md shadow-2xl shadow-secondary-900/15 rotate-3">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/fotos/equipe-confraternizacao.jpg" alt="Professoras da Snowfield em confraternização" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-2xl text-secondary-700">
                confraternização 🥂
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
              De {siteConfig.sinceYear} até aqui
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
              Como a Snowfield cresceu
            </h2>
          </div>

          <ol className="relative border-l-2 border-dashed border-primary-200 ml-4 sm:ml-8 space-y-12">
            {historyTimeline.map((item) => (
              <li key={item.year} className="relative pl-8 sm:pl-12">
                <span className="absolute -left-[22px] top-0 w-10 h-10 rounded-full bg-primary-500 ring-4 ring-white flex items-center justify-center shadow">
                  <Snowflake className="w-5 h-5 text-white" aria-hidden />
                </span>
                <span className="font-hand text-3xl text-primary-600 leading-none">{item.year}</span>
                <h3 className="text-xl font-bold text-secondary-900 mt-1">{item.title}</h3>
                <p className="mt-2 text-secondary-600 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="relative rounded-3xl overflow-hidden shadow-lg aspect-[16/10]">
              <Image src="/fotos/aula-japones-online.jpg" alt="Alunos de japonês aprendendo a preparar comida japonesa" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-0.5 font-hand text-xl text-secondary-800 shadow -rotate-1">
                japonês com mão na massa 🍣
              </figcaption>
            </figure>
            <figure className="relative rounded-3xl overflow-hidden shadow-lg aspect-[16/10]">
              <Image src="/fotos/professoras-juntas.jpg" alt="Professoras da Snowfield Languages" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-0.5 font-hand text-xl text-secondary-800 shadow rotate-1">
                bastidores
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {allLanguages.map((l) => (
              <span key={l} className="px-4 py-1.5 rounded-full bg-secondary-50 border border-secondary-200 text-sm font-semibold text-secondary-700">
                {l}
              </span>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-secondary-50 border border-secondary-200 text-sm text-secondary-700 flex gap-3 max-w-3xl mx-auto">
            <MapPinOff className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
            <p>
              <strong className="text-secondary-900">Sem sede física, de propósito:</strong> {siteConfig.locationDescription}
            </p>
          </div>
        </div>
      </section>

      <TeamSection id="equipe" showLink={false} />
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50/70">
        <div className="text-center max-w-xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900">Venha fazer parte da nossa história</h2>
          <p className="text-sm sm:text-base text-secondary-600">
            Quem responde é a Manu 😉 Conte o que você quer aprender e a gente indica a turma ideal para você ou sua família.
          </p>
          <a
            href={whatsappLink('Olá! Li a página Sobre da Snowfield Languages e gostaria de conversar com vocês!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
