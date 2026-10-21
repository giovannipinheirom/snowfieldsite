import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { coursesData } from '@/content/cursos';
import { whatsappLink } from '@/lib/whatsapp';
import { 
  GraduationCap, 
  Clock, 
  Laptop, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  CreditCard,
  Sparkles 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Catálogo de Cursos de Idiomas | Snowfield Languages',
  description: 'Conheça nossos cursos de inglês regular, intensivo para viagens, preparatórios para exames internacionais e aulas corporativas.',
};

export default function CursosCatalogPage() {
  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-primary-600" />
            <span>Catálogo Acadêmico Completo</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Cursos Desenvolvidos para Seus Objetivos Reais
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Escolha o programa que mais combina com a sua rotina e comece a falar com confiança.
          </p>
        </div>

        {/* Grade de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => {
            const hasCheckout = Boolean(course.checkoutUrl);
            const waCourseMsg = `Olá! Tenho interesse no curso ${course.title} da Snowfield Languages e gostaria de mais informações.`;
            const waUrl = whatsappLink(waCourseMsg);

            return (
              <div
                key={course.id}
                className={`rounded-3xl p-7 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  course.highlight
                    ? 'bg-gradient-to-b from-cyan-50/50 to-white border-primary-300 shadow-md ring-1 ring-primary-300'
                    : 'bg-white border-secondary-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary-100 text-secondary-700">
                      {course.language}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-cyan-100 text-primary-800">
                      {course.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary-900 mb-2 leading-snug">
                    <Link href={`/cursos/${course.slug}`} className="hover:text-primary-600 transition-colors">
                      {course.title}
                    </Link>
                  </h3>

                  <div className="space-y-1.5 text-xs text-secondary-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                      <span>{course.audience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                      <span>{course.workload} • {course.duration}</span>
                    </div>
                  </div>

                  {/* Preço (Opcional: se não preenchido, não aparece) */}
                  {course.price && (
                    <div className="mb-5 p-3 rounded-xl bg-secondary-50 border border-secondary-200/70">
                      <span className="text-[11px] font-semibold text-secondary-400 block uppercase">
                        Investimento:
                      </span>
                      <span className="text-xl font-black text-secondary-900">
                        {course.price}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6 text-xs text-secondary-600">
                    {course.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-secondary-100 space-y-2">
                  {/* Com checkoutUrl: Comprar agora | Sem checkoutUrl: Quero este curso (WhatsApp) */}
                  {hasCheckout ? (
                    <a
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-xl shadow-md text-sm transition-all"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Comprar agora</span>
                    </a>
                  ) : (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-xl shadow-md text-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Quero este curso</span>
                    </a>
                  )}

                  <Link
                    href={`/cursos/${course.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <span>Ver detalhes completos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
