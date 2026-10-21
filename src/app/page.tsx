import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { AudienceSelector } from '@/components/home/AudienceSelector';
import { LanguageCards } from '@/components/home/LanguageCards';
import { MethodologyPreview } from '@/components/home/MethodologyPreview';
import { ModalitiesSection } from '@/components/home/ModalitiesSection';
import { SpecialCourses } from '@/components/home/SpecialCourses';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CredibilityBar } from '@/components/home/CredibilityBar';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Snowfield Languages | Aulas Divertidas e Personalizadas de Idiomas',
  description: 'Aulas de inglês e idiomas para alunos de 4 a 90 anos. Modalidades online para todo o Brasil e presenciais em condomínios e empresas em São Bernardo do Campo.',
  alternates: {
    canonical: 'https://www.snowfieldlanguages.com.br',
  },
};

export default function HomePage() {
  // Schema.org EducationalOrganization (sem endereço físico, com areaServed SBC e Brasil)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    description: 'Escola de idiomas com aulas divertidas e personalizadas para alunos de 4 a 90 anos.',
    url: 'https://www.snowfieldlanguages.com.br',
    logo: 'https://www.snowfieldlanguages.com.br/logo.svg',
    email: siteConfig.email,
    telephone: siteConfig.whatsapp.number,
    foundingDate: `${siteConfig.sinceYear}-01-01`,
    sameAs: [siteConfig.instagram.url],
    areaServed: [
      {
        '@type': 'City',
        name: 'São Bernardo do Campo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      {
        '@type': 'Country',
        name: 'Brasil',
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org EducationalOrganization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Hero />
      <AudienceSelector />
      <LanguageCards />
      <MethodologyPreview />
      <ModalitiesSection />
      <SpecialCourses />
      <CredibilityBar />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
