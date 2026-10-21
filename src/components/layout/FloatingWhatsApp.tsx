'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const pathname = usePathname();

  // Mensagem pré-preenchida contextual de acordo com a página
  const getContextMessage = (): string => {
    if (pathname.includes('/aulas-corporativas')) {
      return 'Olá! Vim pelo site e quero saber sobre aulas corporativas de idiomas para minha empresa.';
    }
    if (pathname.includes('/aulas-em-condominios')) {
      return 'Olá! Vim pelo site e gostaria de informações sobre aulas de idiomas em condomínios para meu filho(a).';
    }
    if (pathname.includes('/intensivo-para-viagens')) {
      return 'Olá! Vim pelo site e quero saber mais sobre o curso intensivo para viagens.';
    }
    if (pathname.includes('/preparatorios')) {
      return 'Olá! Vim pelo site e gostaria de informações sobre os preparatórios para exames de proficiência.';
    }
    if (pathname.includes('/ingles-regular')) {
      return 'Olá! Vim pelo site e quero saber mais sobre as turmas de inglês regular.';
    }
    if (pathname.includes('/idiomas/')) {
      const idioma = pathname.split('/idiomas/')[1];
      return `Olá! Vim pelo site e quero saber mais sobre as aulas de ${idioma.toUpperCase()}.`;
    }
    if (pathname.includes('/teste-de-nivel')) {
      return 'Olá! Estava navegando na página do teste de nível e gostaria de falar com um professor.';
    }
    return 'Olá! Vim pelo site da Snowfield Languages e gostaria de agendar uma aula experimental.';
  };

  const message = getContextMessage();
  const url = whatsappLink(message);

  const handleClick = () => {
    trackEvent({
      name: 'whatsapp_click',
      properties: { page: pathname, context: 'floating_button' },
    });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Falar com a Snowfield Languages no WhatsApp"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-8 h-8 fill-white/20" />
        {/* Ponto indicador de online */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full animate-ping" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-200 border-2 border-white rounded-full" />
      </a>
      
      {/* Tooltip no desktop */}
      <span className="hidden md:group-hover:block absolute right-20 bg-secondary-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150">
        Fale conosco no WhatsApp
      </span>
    </div>
  );
};
