import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PreEnrollmentForm } from '@/components/forms/PreEnrollmentForm';
import { 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Clock, 
  Laptop, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Curso de Inglês Regular | Aulas Online e Presenciais em SBC',
  description: 'Aulas de inglês personalizadas para crianças, adolescentes e adultos de 4 a 90 anos. Fale desde a primeira aula com professores dedicados.',
};

export default function InglesRegularPage() {
  const benefits = [
    'Conversação ativa desde o primeiro encontro',
    'Material didático atualizado e interativo incluso',
    'Acompanhamento individual de pronúncia e vocabulário',
    'Turmas em condomínios (SBC) ou online ao vivo para todo o país',
    'Plantão de dúvidas direto com os professores',
    'Sem taxas ocultas ou contratos abusivos',
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>Curso Principal da Snowfield</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Inglês Regular: Fluência Sem Bloqueios
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Seja para destravar a fala no trabalho, viajar sem aperto ou dar uma base bilíngue sólida para o seu filho, nossas aulas de inglês em São Bernardo do Campo e online foram feitas para você.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink('Olá! Vim pela página de Inglês Regular e gostaria de agendar uma aula experimental!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar aula experimental no WhatsApp</span>
            </a>
            <Link
              href="/teste-de-nivel"
              className="inline-flex items-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Testar meu nível de inglês</span>
            </Link>
          </div>
        </div>

        {/* Informações Estruturadas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-200">
            <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Público Atendido</h3>
            <p className="text-sm text-secondary-600 leading-relaxed mb-4">
              Atendemos alunos de <strong>4 a 90 anos</strong>, com divisão pedagógica em turmas Kids (4-8 anos), Teens (9-14 anos), Jovens e Adultos.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-200">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Carga Horária & Ritmo</h3>
            <p className="text-sm text-secondary-600 leading-relaxed mb-4">
              Encontros de 1h a 1h30 (duas vezes por semana ou formato intensivo), com horários que respeitam sua rotina profissional e familiar.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Formatos Flexíveis</h3>
            <p className="text-sm text-secondary-600 leading-relaxed mb-4">
              Aulas online interativas para todo o Brasil ou aulas presenciais em condomínios de São Bernardo do Campo com máxima segurança.
            </p>
          </div>
        </div>

        {/* Benefícios */}
        <div className="max-w-4xl mx-auto mb-20 bg-cyan-50/50 rounded-3xl p-8 sm:p-12 border border-cyan-200/80">
          <h2 className="text-2xl font-extrabold text-secondary-900 mb-6 text-center">
            O que você recebe no programa de Inglês Regular:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-cyan-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-secondary-800">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário de Pré-Matrícula Embutido */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900">
              Faça sua pré-matrícula para Inglês Regular
            </h3>
            <p className="text-xs sm:text-sm text-secondary-600 mt-1">
              Garanta sua vaga para o semestre em poucos minutos:
            </p>
          </div>
          <PreEnrollmentForm initialLanguage="Inglês" isCompact={false} />
        </div>
      </div>
    </div>
  );
}
