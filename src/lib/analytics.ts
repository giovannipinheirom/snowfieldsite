/**
 * Utilitário para rastreamento de eventos com respeito à LGPD e consentimento de cookies
 */

export const COOKIE_CONSENT_KEY = 'snowfield_cookie_consent';

export function hasCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
  } catch {
    return false;
  }
}

export function setCookieConsent(accepted: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? 'accepted' : 'declined');
  } catch (err) {
    console.error('Falha ao salvar consentimento de cookies:', err);
  }
}

export type AnalyticsEvent = 
  | { name: 'whatsapp_click'; properties?: { page: string; context?: string } }
  | { name: 'form_submit'; properties?: { formType: string; audience: string; language: string } }
  | { name: 'test_start'; properties?: { language: string } }
  | { name: 'test_complete'; properties?: { language: string; level: string; score: number } }
  | { name: 'buy_click'; properties?: { course: string; price?: string; hasCheckoutUrl: boolean } };

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  // Só dispara se o usuário tiver aceitado os cookies ou se estiver em dev
  const consented = hasCookieConsent();

  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 [ANALYTICS EVENT: ${event.name}]`, {
      consented,
      properties: event.properties,
    });
  }

  if (!consented) return;

  // Google Analytics 4
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event.name, event.properties);
  }

  // Meta Pixel
  if (typeof (window as any).fbq === 'function') {
    (window as any).fbq('trackCustom', event.name, event.properties);
  }
}
