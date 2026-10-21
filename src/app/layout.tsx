import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SeasonalBanner } from '@/components/layout/SeasonalBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { siteConfig } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
});

export const viewport: Viewport = {
  themeColor: '#0891b2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.snowfieldlanguages.com.br'),
  title: {
    default: 'Snowfield Languages | Aulas Divertidas e Personalizadas de Idiomas',
    template: '%s | Snowfield Languages',
  },
  description: 'Escola de idiomas com aulas divertidas e personalizadas de 4 a 90 anos. Presencial em condomínios e empresas em São Bernardo do Campo (SP) e online para todo o Brasil.',
  keywords: [
    'escola de inglês em São Bernardo do Campo',
    'aulas de inglês online',
    'aulas de inglês em condomínio',
    'inglês para empresas',
    'preparatório TOEFL',
    'preparatório Cambridge',
    'preparatório Duolingo English Test',
    'aulas de idiomas personalizadas',
    'escola de idiomas em São Bernardo do Campo',
  ],
  authors: [{ name: 'Snowfield Languages' }],
  creator: 'Snowfield Languages',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.snowfieldlanguages.com.br',
    siteName: 'Snowfield Languages',
    title: 'Snowfield Languages | Aulas Divertidas e Personalizadas',
    description: 'Aulas online para todo o Brasil e o mundo, e presenciais em condomínios e empresas em São Bernardo do Campo. De 4 a 90 anos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snowfield Languages',
    description: 'Aulas divertidas e personalizadas de idiomas de 4 a 90 anos.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <SeasonalBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
