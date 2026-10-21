import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coursesData } from '@/content/cursos';
import { whatsappLink } from '@/lib/whatsapp';
import { 
  GraduationCap, 
  Clock, 
  Laptop, 
  Users, 
  CheckCircle2, 
  ArrowLeft, 
  CreditCard, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';

interface CoursePageProps {
  params: Promise<{ curso: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((c) => ({
    curso: c.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { curso } = await params;
  const course = coursesData.find((c) => c.slug === curso);
  if (!course) return { title: 'Curso não encontrado' };

  return {
    title: `${course.title} | Snowfield Languages`,
    description: `Aulas de ${course.language}: ${course.audience}. Formato ${course.format}, duração de ${course.duration}.`,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { curso } = await params;
  const course = coursesData.find((c) => c.slug === curso);

  if (!course) {
    notFound();
  }

  const hasCheckout = Boolean(course.checkoutUrl);
  const waMsg = `Olá! Quero me matricular no curso ${course.title} da Snowfield Languages. Como posso prosseguir?`;
  const waUrl = whatsappLink(waMsg);

  // Schema.org Course JSON-LD
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: `Curso de ${course.language} voltado para ${course.audience}.`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Snowfield Languages',
      sameAs: 'https://www.snowfieldlanguages.com.br',
    },
    educationalLevel: course.audience,
    courseMode: course.format === 'Online' ? 'online' : 'blended',
  };

  return (
    <div className="bg-white py-14 sm:py-20">
      {/* Schema.org Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/cursos"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary-500 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao catálogo de cursos</span>
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-100 text-primary-800">
              {course.language}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-100 text-secondary-700">
              {course.format}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight leading-tight">
            {course.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-secondary-600 bg-secondary-50 p-6 rounded-2xl border border-secondary-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-600 shrink-0" />
              <span><strong>Público:</strong> {course.audience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-600 shrink-0" />
              <span><strong>Carga Horária:</strong> {course.workload}</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-primary-600 shrink-0" />
              <span><strong>Duração:</strong> {course.duration}</span>
            </div>
            {course.price && (
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary-600 shrink-0" />
                <span><strong>Investimento:</strong> {course.price}</span>
              </div>
            )}
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-secondary-900">
              O que está incluso neste programa:
            </h3>
            <div className="space-y-3">
              {course.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-50/40 border border-cyan-100 text-sm text-secondary-800">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco de Compra / Inscrição */}
          <div className="mt-10 p-8 rounded-3xl bg-secondary-900 text-white shadow-xl text-center space-y-6">
            <div>
              {course.price ? (
                <div className="space-y-1">
                  <span className="text-xs text-secondary-400 uppercase tracking-wider block">
                    Valor do curso
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-cyan-300">
                    {course.price}
                  </div>
                </div>
              ) : (
                <div className="text-xl font-bold text-cyan-200">
                  Condições especiais sob consulta
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {hasCheckout ? (
                <a
                  href={course.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors text-base"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Comprar agora</span>
                </a>
              ) : (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Quero este curso</span>
                </a>
              )}

              <a
                href={whatsappLink(`Olá! Tenho dúvidas sobre o curso ${course.title} da Snowfield Languages.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-6 rounded-xl transition-colors text-sm"
              >
                <span>Tirar dúvidas com o coordenador</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
