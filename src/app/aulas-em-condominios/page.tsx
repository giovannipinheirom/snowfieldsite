import React from 'react';
import type { Metadata } from 'next';
import { CondominiumForm } from '@/components/forms/CondominiumForm';
import { whatsappLink } from '@/lib/whatsapp';
import { 
  Building, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Smile, 
  Clock, 
  Users, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aulas de Inglês em Condomínio em São Bernardo do Campo | Kids & Teens',
  description: 'Aulas de idiomas lúdicas e divertidas para crianças e adolescentes dentro do seu condomínio residencial em SBC. Segurança, comodidade e zero trânsito.',
};

export default function CondominiosPage() {
  const advantages = [
    {
      title: 'Segurança Máxima para seus Filhos',
      desc: 'Eles não precisam atravessar a rua nem pegar vans escolares: descem pelo elevador e aprendem com os amiguinhos do prédio.',
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Comodidade Total para os Pais',
      desc: 'Economize horas preciosas de trânsito em São Bernardo do Campo e reduza a sobrecarga de deslocamentos da sua semana.',
      icon: <Clock className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Metodologia Lúdica e Divertida',
      desc: 'Jogos, teatro, artes, música e desafios interativos que fazem a criança amar falar inglês naturalmente.',
      icon: <Smile className="w-6 h-6 text-primary-600" />,
    },
    {
      title: 'Turmas Homogêneas por Faixa Etária',
      desc: 'Kids (4 a 8 anos) e Teens (9 a 14 anos) separados com atividades pedagógicas desenhadas para cada fase cognitiva.',
      icon: <Users className="w-6 h-6 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-primary-600" />
            <span>São Bernardo do Campo • Aulas em Condomínios</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-secondary-900 tracking-tight">
            Inglês divertido e seguro dentro do seu condomínio
          </h1>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            Nossos professores vão até a área comum do seu edifício ou condomínio fechado. Praticidade absoluta para os pais e aprendizado encantador para as crianças.
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
              className="p-6 rounded-3xl bg-cyan-50/40 border border-cyan-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 border border-cyan-100">
                  {item.icon}
                </div>
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
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-950 via-secondary-900 to-primary-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-20">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 text-center text-cyan-300">
            Como levamos as aulas até o seu condomínio?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-full bg-cyan-400 text-secondary-950 font-black inline-flex items-center justify-center text-sm">
                1
              </span>
              <h4 className="font-bold text-base text-white">Mapeamento</h4>
              <p className="text-xs text-secondary-300 leading-relaxed">
                Você conversa com vizinhos e amigos do prédio para saber quem tem interesse em aulas de idiomas.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-full bg-cyan-400 text-secondary-950 font-black inline-flex items-center justify-center text-sm">
                2
              </span>
              <h4 className="font-bold text-base text-white">Apresentação</h4>
              <p className="text-xs text-secondary-300 leading-relaxed">
                Nossa coordenação pedagógica apresenta o projeto aos pais e alinha o uso do espaço comunitário com o síndico.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-full bg-cyan-400 text-secondary-950 font-black inline-flex items-center justify-center text-sm">
                3
              </span>
              <h4 className="font-bold text-base text-white">Início das Aulas</h4>
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
