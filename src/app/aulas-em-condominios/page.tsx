import React from 'react';
import type { Metadata } from 'next';
import { CondominiumForm } from '@/components/forms/CondominiumForm';
import { whatsappLink } from '@/lib/whatsapp';
import { 
  Building, 
  ShieldCheck, 
  Heart, 
  Smile, 
  Clock, 
  Users, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aulas de Inglês em condomínio em São Bernardo do Campo | Kids & Teens',
  description: 'Aulas de idiomas lúdicas e divertidas para crianças e adolescentes dentro do seu condomínio residencial em SBC. Sem precisar sair do prédio.',
};

export default function CondominiosPage() {
  const advantages = [
    {
      title: 'Sem sair do prédio',
      desc: 'As crianças não precisam atravessar a rua nem pegar van. Descem pelo elevador e estudam com os amigos do prédio.',
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Menos trânsito para os pais',
      desc: 'Um leva e traz a menos na semana.',
      icon: <Clock className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Aprender brincando',
      desc: 'Jogos, teatro, artes e música. A criança fala inglês sem perceber que está estudando.',
      icon: <Smile className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Turmas por idade',
      desc: 'Kids (4 a 8 anos) e Teens (9 a 14 anos) em turmas separadas, com atividades para cada fase.',
      icon: <Users className="w-6 h-6 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Aula de inglês no seu condomínio
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            A professora vai até o espaço comum do prédio e as crianças descem para a aula. Começamos em 2022 e hoje atendemos mais de cinco condomínios em São Bernardo do Campo.
          </p>

          <div className="pt-2">
            <a
              href={whatsappLink('Olá! Vim pela página de aulas em condomínios e quero saber como levar a Snowfield Languages para o meu prédio!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Tirar dúvidas pelo WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4 Vantagens para Famílias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-primary-50/40 border border-primary-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Como Funciona na Prática */}
        <div className="max-w-4xl mx-auto bg-secondary-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-20">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 text-center text-primary-300">
            Como levamos as aulas até o seu condomínio?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-full bg-primary-400 text-secondary-950 font-black inline-flex items-center justify-center text-sm">
                1
              </span>
              <h4 className="font-bold text-base text-white">Mapeamento</h4>
              <p className="text-xs text-secondary-300 leading-relaxed">
                Você conversa com vizinhos e amigos do prédio para saber quem tem interesse em aulas de idiomas.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-full bg-primary-400 text-secondary-950 font-black inline-flex items-center justify-center text-sm">
                2
              </span>
              <h4 className="font-bold text-base text-white">Apresentação</h4>
              <p className="text-xs text-secondary-300 leading-relaxed">
                Nossa coordenação pedagógica apresenta o projeto aos pais e alinha o uso do espaço comunitário com o síndico.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-full bg-primary-400 text-secondary-950 font-black inline-flex items-center justify-center text-sm">
                3
              </span>
              <h4 className="font-bold text-base text-white">Início das aulas</h4>
              <p className="text-xs text-secondary-300 leading-relaxed">
                O professor comparece nos dias e horários marcados com todo o material pedagógico e lúdico.
              </p>
            </div>
          </div>
        </div>

        {/* Formulário com CTA Obrigatório */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-secondary-900">
              Quero aulas no meu condomínio
            </h2>
            <p className="text-xs sm:text-sm text-secondary-600 mt-1">
              Preencha o formulário abaixo para recebermos os dados do seu edifício e organizarmos a turma:
            </p>
          </div>
          <CondominiumForm />
        </div>
      </div>
    </div>
  );
}
