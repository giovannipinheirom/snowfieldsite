import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PreEnrollmentForm } from '@/components/forms/PreEnrollmentForm';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPinOff, 
  MessageCircle, 
  Send 
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export const metadata: Metadata = {
  title: 'Contato & Matrícula | Snowfield Languages',
  description: 'Fale com a Snowfield Languages via WhatsApp, e-mail ou Instagram. Agende sua aula experimental ou tire dúvidas sobre nossas turmas.',
};

export default function ContatoPage() {
  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block">
            Canais de Atendimento
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Fale com a Snowfield Languages
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Estamos prontos para atender você, tirar dúvidas e encontrar o formato de aula perfeito para sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Informações de Contato (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-secondary-50 rounded-3xl p-6 sm:p-8 border border-secondary-200/80 space-y-6">
              <h2 className="text-xl font-bold text-secondary-900">
                Canais Oficiais
              </h2>

              <div className="space-y-4 text-sm text-secondary-700">
                {/* WhatsApp */}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-secondary-200/80 hover:border-emerald-400 transition-colors group shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-secondary-400 font-bold uppercase block">
                      WhatsApp Principal
                    </span>
                    <span className="font-bold text-secondary-900 group-hover:text-emerald-700 transition-colors">
                      {siteConfig.whatsapp.display}
                    </span>
                    <p className="text-xs text-secondary-500 mt-0.5">
                      Resposta rápida em horário comercial
                    </p>
                  </div>
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-secondary-200/80 hover:border-primary-400 transition-colors group shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-secondary-400 font-bold uppercase block">
                      E-mail Pedagógico
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-secondary-900 group-hover:text-primary-700 transition-colors break-words">
                      {siteConfig.email}
                    </span>
                    <p className="text-xs text-secondary-500 mt-0.5">
                      Para envio de dúvidas, propostas e documentos
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-secondary-200/80 hover:border-pink-400 transition-colors group shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-pink-100 text-pink-700 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-secondary-400 font-bold uppercase block">
                      Instagram
                    </span>
                    <span className="font-bold text-secondary-900 group-hover:text-pink-700 transition-colors">
                      {siteConfig.instagram.handle}
                    </span>
                    <p className="text-xs text-secondary-500 mt-0.5">
                      Dicas diárias, vídeos e novidades
                    </p>
                  </div>
                </a>

                {/* Horário de Atendimento */}
                <div className="p-4 rounded-2xl bg-white border border-secondary-200/80 space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-secondary-400">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span>Horário de Atendimento</span>
                  </div>
                  <div className="text-sm font-bold text-secondary-900 pt-1">
                    {siteConfig.officeHours.time},{' '}
                    <PlaceholderBadge text={siteConfig.officeHours.daysPlaceholder} />
                  </div>
                </div>

                {/* Aviso sem sede física */}
                <div className="p-4 rounded-2xl bg-secondary-100/70 border border-secondary-200 text-xs text-secondary-600 space-y-1">
                  <div className="font-bold text-secondary-800 flex items-center gap-1.5">
                    <MapPinOff className="w-4 h-4 text-primary-600" />
                    <span>Atendimento Descentralizado:</span>
                  </div>
                  <p>
                    {siteConfig.locationDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Completo (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary-900">
                Formulário de Pré-Matrícula e Contato
              </h2>
              <p className="text-xs sm:text-sm text-secondary-600 mt-1">
                Preencha os dados abaixo e nossa equipe entrará em contato com você:
              </p>
            </div>
            <PreEnrollmentForm isCompact={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
