import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { whatsappLink } from '@/lib/whatsapp';
import { PreEnrollmentForm } from '@/components/forms/PreEnrollmentForm';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Sparkles, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preparatório TOEFL, Cambridge & Duolingo English Test | Snowfield',
  description: 'Treinamento intensivo para certificações internacionais de proficiência: TOEFL iBT, Cambridge B2/C1 e Duolingo English Test. Simulados e correção com professores.',
};

export default function PreparatoriosPage() {
  const exams = [
    {
      id: 'toefl',
      name: 'TOEFL iBT',
      tag: 'Mais aceito nos EUA & Pós-Graduação',
      description: 'Focado em ambiente acadêmico universitário americano e internacional. Avalia Listening, Reading, Speaking e Writing integrados sob rigorosa contagem de tempo.',
      features: [
        'Treino com tarefas integradas (ler, ouvir e falar)',
        'Modelos de redação dissertativa de alta pontuação',
        'Gestão de tempo por seção da prova',
        'Simulados com o formato oficial do ETS',
      ],
      scoreTarget: 'Metas comuns: 80+, 90+ ou 100+ pontos',
    },
    {
      id: 'cambridge',
      name: 'Exames Cambridge (B2 First & C1 Advanced)',
      tag: 'Certificado Vitalício & Europa',
      description: 'Reconhecimento global em universidades europeias, vistos de imigração e multinacionais. Certificados sem data de expiração que comprovam proficiência sólida.',
      features: [
        'Uso aprofundado da língua inglesa (Use of English)',
        'Treinamento em pares para a prova oral com examinador',
        'Análise estrutural de múltiplos gêneros textuais',
        'Banco de provas oficiais de anos anteriores',
      ],
      scoreTarget: 'Níveis B2 (FCE), C1 (CAE) e C2 (CPE)',
    },
    {
      id: 'duolingo',
      name: 'Duolingo English Test (DET)',
      tag: 'Rápido, Online & Acessível',
      description: 'Exame 100% digital feito de casa com resultado em 48 horas. Aceito por milhares de universidades e instituições no exterior pelo excelente custo-benefício.',
      features: [
        'Familiarização com o formato adaptativo por inteligência artificial',
        'Exercícios de áudio rápido e descrição de imagens em segundos',
        'Treino do Video Interview e Writing Sample',
        'Simulados cronometrados em tela',
      ],
      scoreTarget: 'Metas comuns: 105+, 120+ ou 130+ pontos',
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-primary-600" />
            <span>Certificações Internacionais de Proficiência</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Preparatório para TOEFL, Cambridge e Duolingo English Test
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Conquiste a pontuação necessária para seu intercâmbio, mestrado, doutorado ou visto de trabalho no exterior com acompanhamento focado e simulados.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink('Olá! Vim pela página de Preparatórios e gostaria de alinhar um plano de estudos para o meu exame de proficiência!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Falar sobre minha meta no WhatsApp</span>
            </a>
            <Link
              href="/teste-de-nivel"
              className="inline-flex items-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Avaliar meu nível atual primeiro</span>
            </Link>
          </div>
        </div>

        {/* Uma seção dedicada por exame */}
        <div className="space-y-12 mb-20">
          {exams.map((exam) => (
            <div
              key={exam.id}
              id={exam.id}
              className="p-8 sm:p-10 rounded-3xl bg-secondary-50/70 border border-secondary-200 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              <div className="lg:col-span-2 space-y-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-100 text-primary-800 uppercase tracking-wide">
                  {exam.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-secondary-900">
                  {exam.name}
                </h2>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {exam.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary-500 mb-3">
                    O que treinamos para este exame:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exam.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-secondary-800">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-secondary-200/80 shadow-sm flex flex-col justify-between text-center space-y-4">
                <div className="space-y-1">
                  <span className="text-xs text-secondary-400 font-semibold block">
                    Alvo de Desempenho
                  </span>
                  <div className="text-sm font-bold text-secondary-900">
                    {exam.scoreTarget}
                  </div>
                </div>
                <a
                  href={whatsappLink(`Olá! Tenho interesse no preparatório para o exame ${exam.name} pela Snowfield Languages!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Quero treinar para {exam.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Formulário de Interesse */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900">
              Planeje sua Preparação Conosco
            </h3>
            <p className="text-xs sm:text-sm text-secondary-600 mt-1">
              Informe a prova e a data prevista do exame para elaborarmos seu plano de estudos:
            </p>
          </div>
          <PreEnrollmentForm initialLanguage="Inglês" isCompact={false} />
        </div>
      </div>
    </div>
  );
}
