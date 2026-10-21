'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { COOKIE_CONSENT_KEY, setCookieConsent } from '@/lib/analytics';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        setShowBanner(true);
      } else if (consent === 'accepted') {
        setHasConsented(true);
      }
    } catch {
      // Ignora erro se localStorage indisponível
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    setHasConsented(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookieConsent(false);
    setHasConsented(false);
    setShowBanner(false);
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* Scripts condicionais pós-consentimento */}
      {hasConsented && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {hasConsented && metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Banner visual */}
      {showBanner && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-secondary-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                Utilizamos cookies essenciais e tecnologias de medição para aprimorar sua experiência e avaliar o desempenho do site, em conformidade com a LGPD. Saiba mais em nossa{' '}
                <Link href="/politica-de-privacidade" className="text-primary-600 underline font-medium hover:text-primary-700">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
              <button
                type="button"
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-semibold text-secondary-600 hover:text-secondary-800 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors"
              >
                Apenas necessários
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="px-5 py-2 text-xs font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
