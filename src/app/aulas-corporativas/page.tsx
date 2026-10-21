import React from 'react';
import type { Metadata } from 'next';
import { CorporateForm } from '@/components/forms/CorporateForm';
import { whatsappLink } from '@/lib/whatsapp';
import { 
  Briefcase, 
  Building2, 
  Presentation, 
  Mail, 
  Plane, 
  BarChart3, 
  CheckCircle2, 
  MessageCircle,
  ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inglês para Empresas & Aulas Corporativas em SBC e Online | Snowfield',
  description: 'Treinamento de idiomas in-company em São Bernardo do Campo e online ao vivo para executivos e equipes corporativas. Foco em negócios, reuniões e e-mails.',
};

export default function AulasCorporativasPage() {
  const corporateGoals = [
    {
      title: 'Reuniões & Conferências Internacionais',
      desc: 'Segurança verbal para expor argumentos, debater estratégias e interagir com parceiros estrangeiros sem hesitação.',
      icon: <Presentation className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Redação de E-mails & Propostas Comerciais',
      desc: 'Domínio do tom formal adequado (business etiquette), clareza na escrita e vocabulário técnico corporativo.',
      icon: <Mail className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Apresentações & Pitches Globais',
      desc: 'Treinamento de retórica e resposta a perguntas difíceis durante apresentações de resultados e lançamentos.',
      icon: <BarChart3 className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Viagens Corporativas & Negociações',
      desc: 'Autonomia para feiras internacionais, visitas a fábricas e matrizes no exterior e jantares de relacionamento.',
      icon: <Plane className="w-6 h-6 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-slate-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Topo Sóbrio B2B */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-primary-700" />
            <span>Soluções Corporativas • In-Company & Online</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Treinamento de Idiomas para Empresas e Equipes de Alto Desempenho
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Formatos in-company presenciais em São Bernardo do Campo (SP) e online ao vivo para filiais em todo o Brasil. Alinhamento estratégico com os objetivos do seu negócio.
          </p>

          <div className="pt-2">
            <a
              href={whatsappLink('Olá! Vim pelo site e quero saber sobre aulas corporativas para minha empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Falar com o consultor corporativo</span>
            </a>
          </div>
        </div>

        {/* Formatos de Atendimento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 uppercase">
              Presencial em SBC
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              In-Company na sua Empresa
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              O instrutor vai até a sede da sua empresa em São Bernardo do Campo nos horários mais convenientes para o expediente (antes do início, almoço ou final da tarde).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-100 text-primary-900 uppercase">
              Nacional & Remoto
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Online ao Vivo para Filiais
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equipes distribuídas geograficamente em salas virtuais interativas com relatórios de assiduidade e evolução compartilhados mensalmente com o RH.
            </p>
          </div>
        </div>

        {/* 4 Objetivos Principais */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Foco nos Desafios Reais do Ambiente Corporativo
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Não perdemos tempo com jargões ultrapassados: treinamos as situações reais da rotina corporativa:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateGoals.map((g, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
                    {g.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {g.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário Corporativo Dedicado */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Solicitar proposta corporativa
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Envie as informações da sua organização para desenharmos uma proposta customizada:
            </p>
          </div>
          <CorporateForm />
        </div>
      </div>
    </div>
  );
}
