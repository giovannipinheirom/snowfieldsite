import React from 'react';
import Link from 'next/link';
import { Plane, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SpecialCourses: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
            Programas Focados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Cursos Especiais & Imersões
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary-600">
            Treinamentos direcionados para quem tem uma meta urgente com data marcada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Intensivo para Viagens */}
          <div className="bg-gradient-to-br from-cyan-900 to-secondary-950 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-cyan-300">
                <Plane className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                Sobrevivência & Autonomia
              </span>
              <h3 className="text-2xl font-black text-white mb-3">
                Intensivo para Viagens
              </h3>
              <p className="text-sm text-cyan-100/80 leading-relaxed mb-6">
                Módulos rápidos de 4 a 8 semanas focados nas situações reais que você enfrentará: aeroporto, imigração, alfândega, hotel, compras e resolução de imprevistos.
              </p>

              <ul className="space-y-2 mb-8 text-xs sm:text-sm text-cyan-50">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Simulações de imigração sem medo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Guia de bolso prático em PDF incluso</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 relative z-10">
              <Link
                href="/intensivo-para-viagens"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-secondary-950 font-bold py-3 px-6 rounded-xl transition-colors text-sm shadow-md"
              >
                <span>Conhecer o intensivo de viagens</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Preparatórios para Exames */}
          <div className="bg-gradient-to-br from-primary-950 to-secondary-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-primary-300">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-300 block mb-1">
                Certificações Internacionais
              </span>
              <h3 className="text-2xl font-black text-white mb-3">
                Preparatórios para Exames
              </h3>
              <p className="text-sm text-primary-100/80 leading-relaxed mb-6">
                Treinamento estratégico de pontuação para TOEFL, exames Cambridge (B2 First, C1 Advanced) e Duolingo English Test, com simulados e correção minuciosa.
              </p>

              <ul className="space-y-2 mb-8 text-xs sm:text-sm text-primary-50">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>Estratégias de tempo e gabarito</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>Simulados com o modelo oficial de cada prova</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 relative z-10">
              <Link
                href="/preparatorios"
                className="inline-flex items-center gap-2 bg-white hover:bg-secondary-100 text-secondary-950 font-bold py-3 px-6 rounded-xl transition-colors text-sm shadow-md"
              >
                <span>Ver opções de exames</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
