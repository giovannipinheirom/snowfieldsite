import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { whatsappLink } from '@/lib/whatsapp';
import { PreEnrollmentForm } from '@/components/forms/PreEnrollmentForm';
import { 
  Plane, 
  Luggage, 
  UtensilsCrossed, 
  Hotel, 
  MapPin, 
  AlertTriangle, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Intensivo de Inglês para Viagens | Destrave seu Embarque',
  description: 'Curso intensivo e prático de inglês e espanhol para viagens. Aprenda a se comunicar em aeroportos, hotéis, restaurantes e emergências.',
};

export default function IntensivoViagensPage() {
  const modules = [
    {
      title: '1. No Aeroporto & Imigração',
      desc: 'Check-in, despacho de bagagem, perguntas frequentes do agente de alfândega/imigração e como responder com tranquilidade.',
      icon: <Luggage className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: '2. Hotel & Hospedagem',
      desc: 'Como fazer check-in/out, pedir toalhas extras, relatar problemas no quarto, perguntar sobre café da manhã e passeios.',
      icon: <Hotel className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: '3. Restaurantes & Cafeterias',
      desc: 'Como ler o cardápio com segurança, pedir água sem gás, solicitar a conta (the check, please) e informar restrições alimentares.',
      icon: <UtensilsCrossed className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: '4. Como se Locomover',
      desc: 'Comprar bilhetes de metrô e trem, pedir táxi ou Uber, pedir orientações na rua e não se perder em grandes cidades.',
      icon: <MapPin className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: '5. Compras & Lojas',
      desc: 'Tamanhos de roupas, pedir para experimentar no provador, perguntar preços, pedir descontos e efetuar pagamentos.',
      icon: <Sparkles className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: '6. Farmácia & Emergências',
      desc: 'Como descrever sintomas simples (dor de cabeça, febre, mal-estar), comprar remédios e solicitar auxílio médico ou consular.',
      icon: <AlertTriangle className="w-6 h-6 text-cyan-600" />,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Plane className="w-3.5 h-3.5 text-primary-600" />
            <span>Imersão Prática em 4 a 8 Semanas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Intensivo de Sobrevivência para Viagens
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Sua viagem internacional está marcada? Aprenda exatamente o que você vai precisar falar, sem perder tempo com regras gramaticais teóricas.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink('Olá! Vim pela página do Intensivo para Viagens e gostaria de informações sobre turmas e horários!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Garantir vaga rápida no WhatsApp</span>
            </a>
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors"
            >
              <span>Ver catálogo de cursos</span>
            </Link>
          </div>
        </div>

        {/* Módulos Práticos de Situação Real */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-900">
              O que você aprende no curso intensivo?
            </h2>
            <p className="text-sm text-secondary-600 mt-2">
              Seis módulos desenhados para dar autonomia imediata a qualquer viajante:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-secondary-50 border border-secondary-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-secondary-100 flex items-center justify-center mb-5">
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário de Interesse */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900">
              Solicitar Informações do Intensivo para Viagens
            </h3>
            <p className="text-xs sm:text-sm text-secondary-600 mt-1">
              Diga quando é sua viagem para alinharmos a carga horária perfeita:
            </p>
          </div>
          <PreEnrollmentForm initialLanguage="Inglês" isCompact={false} />
        </div>
      </div>
    </div>
  );
}
