import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { ShieldCheck, ArrowLeft, Mail, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade & Proteção de Dados (LGPD) | Snowfield Languages',
  description: 'Saiba como a Snowfield Languages trata e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary-500 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </Link>

        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
            <span>LGPD Compliance (Lei nº 13.709/2018)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-secondary-900 tracking-tight">
            Política de Privacidade e Tratamento de Dados
          </h1>
          <p className="text-xs sm:text-sm text-secondary-500">
            Última atualização: Outubro de 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-secondary-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-secondary-900">1. Introdução e Compromisso</h2>
            <p>
              A <strong>Snowfield Languages</strong> preza pela transparência, privacidade e segurança dos dados de seus alunos, responsáveis legais e visitantes. Esta Política de Privacidade explica de forma clara como tratamos seus dados pessoais quando você navega em nosso site, preenche formulários de pré-matrícula ou realiza o teste de nível online.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-secondary-900">2. Quais dados nós coletamos?</h2>
            <p>Coletamos apenas os dados estritamente necessários para viabilizar o atendimento pedagógico e comercial:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Dados de identificação e contato:</strong> Nome completo, número de WhatsApp/telefone e endereço de e-mail.</li>
              <li><strong>Informações do perfil de aula:</strong> Se as aulas são para o próprio aluno, para filhos (incluindo idade aproximada) ou para equipes de empresas (nome da empresa, cargo e número aproximado de colaboradores).</li>
              <li><strong>Dados específicos de condomínios:</strong> Nome do edifício ou condomínio residencial e bairro em São Bernardo do Campo.</li>
              <li><strong>Desempenho no Teste de Nível:</strong> Respostas dadas, pontuação obtida e nível estimado CEFR.</li>
              <li><strong>Dados técnicos e de navegação:</strong> Endereço IP, parâmetros de campanha (UTM) e métricas anônimas de uso (apenas mediante aceite de cookies).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-secondary-900">3. Para qual finalidade usamos seus dados?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Entrar em contato via WhatsApp ou e-mail para agendamento de aulas experimentais, apresentação de propostas ou envio de materiais.</li>
              <li>Calcular e entregar o resultado e recomendações pedagógicas do teste de nível.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Melhorar continuamente a usabilidade e desempenho do nosso site.</li>
            </ul>
            <p className="font-semibold text-secondary-900">
              A Snowfield Languages não comercializa, não aluga e não compartilha seus dados pessoais com terceiros para fins de propaganda externa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-secondary-900">4. Por quanto tempo guardamos seus dados?</h2>
            <p>
              Os dados coletados para fins de contato e pré-matrícula são armazenados pelo período necessário para a conclusão do atendimento ou enquanto durar a relação contratual/pedagógica com o aluno. Caso não haja matrícula, os dados de contato são arquivados de forma segura e periodicamente revisados para descarte.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-secondary-900">5. Seus direitos como titular de dados</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem total direito a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar seus dados pessoais cadastrados;</li>
              <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
              <li><strong>Solicitar a eliminação completa</strong> dos seus dados de nossas bases de contato;</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-secondary-50 border border-secondary-200">
            <h2 className="text-lg font-bold text-secondary-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary-600" />
              <span>6. Como exercer seus direitos ou tirar dúvidas?</span>
            </h2>
            <p className="text-sm text-secondary-600">
              Para exercer qualquer direito de exclusão, alteração ou esclarecimento sobre seus dados pessoais, envie uma mensagem direta para o nosso canal do Encarregado de Dados (DPO):
            </p>
            <p className="text-sm font-bold text-secondary-900">
              E-mail:{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary-600 underline hover:text-primary-700">
                {siteConfig.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
