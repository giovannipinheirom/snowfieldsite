import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { 
  History, 
  Target, 
  Users, 
  MapPinOff, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  GraduationCap 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a Snowfield Languages | Nossa História desde 2019',
  description: 'Conheça a história da Snowfield Languages, nossa proposta de ensino leve e personalizado para alunos de 4 a 90 anos, e nossa equipe de professores.',
};

export default function SobrePage() {
  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Topo Institucional */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <History className="w-3.5 h-3.5 text-primary-600" />
            <span>Nossa História e Valores</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Ensinando idiomas com afeto, técnica e leveza desde {siteConfig.sinceYear}
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            A Snowfield Languages nasceu para provar que qualquer pessoa — de 4 a 90 anos — pode aprender a se comunicar em outro idioma sem medo do julgamento.
          </p>
        </div>

        {/* Bloco História & Proposta */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-900">
              Uma escola construída ao redor da vida real do aluno
            </h2>
            <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
              Em atividade contínua desde {siteConfig.sinceYear}, a Snowfield Languages surgiu da percepção clara de que os métodos tradicionais de ensino focavam demais em decoreba de gramática e de menos na capacidade comunicativa real.
            </p>
            <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
              Optamos conscientemente por <strong>não manter uma sede física aberta</strong>: nosso compromisso é estar onde o aluno mais precisa. Levamos as aulas até as áreas de convivência de condomínios residenciais e sedes de empresas em São Bernardo do Campo (SP), e conectamos alunos de diversos estados e países através de aulas online ao vivo.
            </p>
            <div className="p-4 rounded-2xl bg-secondary-50 border border-secondary-200 text-xs sm:text-sm text-secondary-700 space-y-2">
              <div className="font-bold text-secondary-900 flex items-center gap-2">
                <MapPinOff className="w-4 h-4 text-primary-600" />
                <span>Estrutura Descentralizada e Flexível:</span>
              </div>
              <p>
                {siteConfig.locationDescription}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-900 to-primary-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-cyan-300">
              Histórico & Proposta da Escola
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-secondary-200 leading-relaxed">
              <p>
                Nossa proposta se consolida nos pilares da empatia pedagógica, personalização dos planos de aula e no acompanhamento minucioso de cada fase do desenvolvimento verbal.
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                  Informações complementares do histórico:
                </span>
                <p className="text-xs text-white/90">
                  <PlaceholderBadge text="[HISTÓRICO DETALHADO DO CV DA ESCOLA - TRAJETÓRIA COMPLETA DE 2019 A 2026]" />
                </p>
                <p className="text-xs text-secondary-300">
                  Aguardando envio do arquivo complementar do CV institucional para preenchimento biográfico completo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quem dá as aulas */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-secondary-200 p-8 sm:p-12 shadow-sm mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-900">
                Quem dá as aulas na Snowfield Languages?
              </h2>
              <span className="text-xs text-secondary-500 font-medium">
                Professores apaixonados por educação e desenvolvimento humano
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
            Nosso corpo docente é composto por profissionais dedicados, com sólida fluência, formação pedagógica e experiência em ensino comunicativo e lúdico. Cada professor é treinado para acolher alunos tímidos, engajar crianças pequenas e conduzir adultos e executivos em suas demandas de negócios.
          </p>

          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 space-y-2">
            <span className="font-bold flex items-center gap-1.5 text-amber-950">
              <Users className="w-4 h-4 text-amber-700" />
              <span>Apresentação dos Professores e Coordenadores:</span>
            </span>
            <p>
              Em conformidade com as diretrizes de transparência, a lista nominal e mini-currículo da equipe pedagógica está reservada:
            </p>
            <div className="pt-1">
              <PlaceholderBadge text="[NOMES DOS PROFESSORES E MINIBIOS OFICIAIS DA EQUIPE PEDAGÓGICA]" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary-900">
            Venha fazer parte da nossa história
          </h3>
          <p className="text-sm text-secondary-600">
            Converse com nossa coordenação e descubra qual turma é ideal para você ou sua família.
          </p>
          <a
            href={whatsappLink('Olá! Li a página Sobre da Snowfield Languages e gostaria de conversar com vocês!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Falar no WhatsApp com a coordenação</span>
          </a>
        </div>
      </div>
    </div>
  );
}
