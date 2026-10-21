import { siteConfig } from '@/content/site';

/**
 * Função utilitária centralizada para montar links do WhatsApp
 * @param message Mensagem pré-formatada para o chat
 * @returns URL completa wa.me
 */
export function whatsappLink(message?: string): string {
  const cleanNumber = siteConfig.whatsapp.cleanNumber;
  const text = message && message.trim().length > 0 
    ? message.trim() 
    : siteConfig.whatsapp.defaultMessage;
    
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
