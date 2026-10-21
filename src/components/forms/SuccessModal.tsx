'use client';

import React from 'react';
import { whatsappLink } from '@/lib/whatsapp';
import { CheckCircle2, MessageCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappMessage: string;
  title?: string;
  description?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  whatsappMessage,
  title = 'Recebemos seus dados com sucesso!',
  description = 'Nossa equipe pedagógica já foi notificada. Para um atendimento ainda mais rápido, continue a conversa diretamente pelo nosso WhatsApp!',
}) => {
  if (!isOpen) return null;

  const url = whatsappLink(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-secondary-100 text-center space-y-6 animate-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-secondary-400 hover:text-secondary-600 rounded-lg focus:outline-none"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary-900">
            {title}
          </h3>
          <p className="text-sm text-secondary-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Continuar no WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 text-sm font-semibold text-secondary-600 hover:text-secondary-800 rounded-xl hover:bg-secondary-100 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
