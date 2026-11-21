import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { 
  Smile, 
  Target, 
  Compass, 
  LineChart, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Metodologia | aulas divertidas e personalizadas',
  description: 'Descubra como funcionam as aulas de idiomas da Snowfield Languages: método ativo, diagnóstico inicial, sem decoreba e acompanhamento individual.',
};

export default function MetodologiaPage() {
  const pillars = [
    {
      title: 'Aula boa é aula leve',
      description: 'A gente aprende melhor quando está à vontade. Em vez de regra solta, usamos conversas sobre o que interessa ao aluno, histórias, podcasts, música e jogos.',
      icon: <Smile className="w-7 h-7 text-primary-600" />,
    },
    {
      title: 'Cada aluno tem a sua aula',
      description: 'Ninguém aprende no mesmo ritmo nem pelos mesmos motivos. Quem viaja em dois meses não tem a mesma aula de quem vai prestar TOEFL ou de uma criança de seis anos.',
      icon: <Target className="w-7 h-7 text-primary-600" />,
    },
    {
      title: 'A primeira aula é uma conversa',
      description: 'Nada de prova no primeiro dia. A gente conversa para entender sua rotina, o que te trava e até onde você já consegue se comunicar.',
      icon: <Compass className="w-7 h-7 text-primary-600" />,
    },
    {
      title: 'Você sabe como está indo',
      description: 'Não precisa esperar o fim do semestre. A professora vai te contando o que melhorou e no que ainda vale insistir.',
      icon: <LineChart className="w-7 h-7 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Como a gente ensina
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Depois de anos coordenando escolas de idiomas, percebemos que o livro e a gramática decorada não funcionam para todo mundo. Aqui a aula começa pela sua história.
          </p>
        </div>

        {/* 4 Pilares Centrais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-secondary-50/70 border border-secondary-200/80 hover:border-primary-300 transition-all shadow-sm"
            >
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Linha do Tempo: A Jornada do Aluno */}
        <div className="max-w-4xl mx-auto bg-secondary-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Do primeiro contato até a fluência
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-primary-500/30">
            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-primary-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-primary-300">1. Alinhamento inicial e teste de nível</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                Você faz nosso teste online gratuito ou agenda uma conversa rápida para mapearmos seus objetivos prioritários.
              </p>
            </div>

            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-primary-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-primary-300">2. Planejamento sob medida</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                O professor desenha a trilha pedagógica: escolha do formato (online ou presencial em SBC), temas de interesse e frequência ideal.
              </p>
            </div>

            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-primary-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-primary-300">3. Aulas comunicativas e imersão prática</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                Conversação ativa desde o primeiro encontro. Prática constante com situações do cotidiano e simulações do mundo real.
              </p>
            </div>

            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-primary-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-primary-300">4. Avaliação contínua e celebração de resultados</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                Acompanhamento periódico de segurança verbal, com relatórios detalhados para o aluno (e para os pais ou empresas).
              </p>
            </div>
          </div>
        </div>

        {/* CTA para Agendamento */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-secondary-900">
            Quer experimentar nossa metodologia na prática?
          </h3>
          <p className="text-sm text-secondary-600">
            Fale diretamente com nossa coordenação e agende um bate-papo sem compromisso.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink('Olá! Li sobre a metodologia da Snowfield Languages e gostaria de agendar uma aula experimental!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar aula pelo WhatsApp</span>
            </a>
            <Link
              href="/teste-de-nivel"
              className="inline-flex items-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
            >
              <span>Fazer teste de nível online</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
