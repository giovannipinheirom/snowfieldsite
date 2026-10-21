import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { 
  Smile, 
  Target, 
  Sparkles, 
  Compass, 
  LineChart, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Metodologia | Aulas Divertidas e Personalizadas',
  description: 'Descubra como funcionam as aulas de idiomas da Snowfield Languages: método ativo, diagnóstico inicial, sem decoreba e acompanhamento individual.',
};

export default function MetodologiaPage() {
  const pillars = [
    {
      title: 'Aulas Divertidas sem Fórmulas Engessadas',
      description: 'Acreditamos que a retenção neurológica de um novo idioma é exponencialmente maior quando o aprendizado é agradável e sem estresse. Em vez de regras isoladas, usamos diálogos de interesse do aluno, storytelling, podcasts e jogos comunicativos.',
      icon: <Smile className="w-7 h-7 text-primary-600" />,
    },
    {
      title: 'Personalização Extrema para Cada Aluno',
      description: 'Nenhum ser humano aprende no mesmo ritmo nem pelos mesmos motivos. Se você precisa de inglês para viagens em 2 meses, seu curso não será igual ao de quem está se preparando para o TOEFL ou de uma criança em fase de alfabetização bilíngue.',
      icon: <Target className="w-7 h-7 text-primary-600" />,
    },
    {
      title: 'A Primeira Aula Diagnóstica',
      description: 'Na primeira sessão, não aplicamos uma prova intimidadora. Realizamos um alinhamento interativo para entender seus bloqueios, rotina, preferências de aprendizado e seu nível real de comunicação espontânea.',
      icon: <Compass className="w-7 h-7 text-primary-600" />,
    },
    {
      title: 'Acompanhamento Contínuo e Feedback Transparente',
      description: 'Você não espera o final do semestre para saber se evoluiu. A cada ciclo de encontros, o professor avalia expansão de vocabulário, clareza fonética e fluência, compartilhando relatórios periódicos de progresso.',
      icon: <LineChart className="w-7 h-7 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>Abordagem Pedagógica Snowfield</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Como funcionam as nossas aulas divertidas e personalizadas
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Eliminamos o medo de falar desde o primeiro dia. Nossa metodologia ativa coloca você no centro do processo, seja em São Bernardo do Campo ou online no mundo inteiro.
          </p>
        </div>

        {/* 4 Pilares Centrais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-secondary-50/70 border border-secondary-200/80 hover:border-primary-300 transition-all shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-secondary-100">
                {item.icon}
              </div>
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
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-950 via-secondary-900 to-primary-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              A Jornada Passo a Passo na Snowfield
            </h2>
            <p className="text-xs sm:text-sm text-cyan-200 mt-2">
              Da primeira conversa à conquista da fluência espontânea
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-cyan-500/30">
            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-cyan-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-cyan-300">1. Alinhamento Inicial e Teste de Nível</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                Você faz nosso teste online gratuito ou agenda uma conversa rápida para mapearmos seus objetivos prioritários.
              </p>
            </div>

            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-cyan-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-cyan-300">2. Planejamento Sob Medida</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                O professor desenha a trilha pedagógica: escolha do formato (online ou presencial em SBC), temas de interesse e frequência ideal.
              </p>
            </div>

            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-cyan-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-cyan-300">3. Aulas Comunicativas e Imersão Prática</h4>
              <p className="text-xs sm:text-sm text-secondary-200 mt-1 leading-relaxed">
                Conversação ativa desde o primeiro encontro. Prática constante com situações do cotidiano e simulações do mundo real.
              </p>
            </div>

            <div className="relative pl-12">
              <span className="absolute left-3 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-cyan-400 border-4 border-secondary-900" />
              <h4 className="text-lg font-bold text-cyan-300">4. Avaliação Contínua e Celebração de Resultados</h4>
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
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Fazer teste de nível online</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
