import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { languagesData } from '@/content/idiomas';
import { whatsappLink } from '@/lib/whatsapp';
import { FlashcardInteraction } from '@/components/ui/FlashcardInteraction';
import { 
  Sparkles, 
  Users, 
  CheckCircle2, 
  GraduationCap, 
  MessageCircle, 
  ArrowRight,
  BookOpen,
  Calendar
} from 'lucide-react';

interface LanguagePageProps {
  params: Promise<{ idioma: string }>;
}

export async function generateStaticParams() {
  return languagesData.map((lang) => ({
    idioma: lang.slug,
  }));
}

export async function generateMetadata({ params }: LanguagePageProps): Promise<Metadata> {
  const { idioma } = await params;
  const lang = languagesData.find((l) => l.slug === idioma);
  if (!lang) return { title: 'Idioma não encontrado' };

  return {
    title: `Curso de ${lang.name} | Aulas Divertidas e Personalizadas`,
    description: lang.shortDescription,
  };
}

export default async function LanguageDetailPage({ params }: LanguagePageProps) {
  const { idioma } = await params;
  const lang = languagesData.find((l) => l.slug === idioma);

  if (!lang) {
    notFound();
  }

  const waMsg = `Olá! Vim pelo site da Snowfield Languages e quero saber mais sobre as aulas de ${lang.name}.`;

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho do Idioma */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span>Curso de Idiomas • {lang.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Aulas de {lang.name} com Foco em Fluência Real
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed max-w-2xl mx-auto">
            {lang.longDescription}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar aula de {lang.name}</span>
            </a>
            <Link
              href="/teste-de-nivel"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Fazer teste de nível online</span>
            </Link>
          </div>
        </div>

        {/* 1. Para quem é & Destaques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary-100 text-primary-700">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900">
                Para quem é este curso?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-secondary-700 leading-relaxed mb-6">
              {lang.targetAudience}
            </p>
            <div className="space-y-2.5">
              {lang.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-secondary-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Exemplo de Atividades de uma Aula */}
          <div className="p-8 rounded-3xl bg-cyan-50/50 border border-cyan-200/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-200 text-cyan-900">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900">
                O que você faz em uma aula típica?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-secondary-600 mb-4">
              Cada encontro é dinâmico e 100% voltado para a prática ativa da fala:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-secondary-800">
              {lang.typicalActivities.map((act, i) => (
                <li key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-cyan-100 shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Mini-Interação de Frases Úteis */}
        <div className="mb-20">
          <FlashcardInteraction
            phrases={lang.usefulPhrases}
            languageName={lang.name}
          />
        </div>

        {/* 4. O que se aprende em cada nível */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-1">
              Quadro Europeu de Referência (CEFR)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-900">
              O que se aprende em cada nível de {lang.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lang.levels.map((lvl) => (
              <div
                key={lvl.level}
                className="p-6 rounded-2xl bg-white border border-secondary-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-primary-100 text-primary-800">
                      Nível {lvl.level}
                    </span>
                    <span className="text-xs text-secondary-400 font-semibold">CEFR</span>
                  </div>
                  <h4 className="text-base font-bold text-secondary-900 mb-2">
                    {lvl.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                    {lvl.whatYouLearn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs Finais */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-secondary-900 text-white text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black">
            Pronto para começar a falar {lang.name}?
          </h3>
          <p className="text-sm text-secondary-300 max-w-xl mx-auto">
            Aulas online para todo o país e exterior, ou presenciais em condomínios e empresas de São Bernardo do Campo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar aula de {lang.name} no WhatsApp</span>
            </a>
            <Link
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary-100 text-secondary-900 font-bold py-3.5 px-6 rounded-xl transition-colors"
            >
              <span>Preencher pré-matrícula</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
