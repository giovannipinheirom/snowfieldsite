import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { whatsappLink } from '@/lib/whatsapp';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPinOff, 
  Globe2, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-300 pt-16 pb-12 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Coluna 1: Sobre & Proposta */}
          <div className="space-y-4">
            <div className="relative w-48 h-10">
              <Image 
                src="/logo.svg" 
                alt="Snowfield Languages" 
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-secondary-400 leading-relaxed">
              Aulas divertidas, leves e personalizadas para alunos de 4 a 90 anos. Em atividade desde {siteConfig.sinceYear}, transformando a confiança de quem quer falar com fluência de verdade.
            </p>
            <div className="flex items-start gap-2 text-xs text-secondary-400 bg-secondary-800/60 p-3 rounded-lg border border-secondary-700/50">
              <MapPinOff className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
              <span>
                <strong>Sem sede física:</strong> {siteConfig.locationDescription}
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação & Programas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Programas & Aulas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ingles-regular" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Inglês Regular</span>
                </Link>
              </li>
              <li>
                <Link href="/aulas-em-condominios" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Aulas em Condomínios (Kids & Teens)</span>
                </Link>
              </li>
              <li>
                <Link href="/aulas-corporativas" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Aulas Corporativas (In-Company)</span>
                </Link>
              </li>
              <li>
                <Link href="/intensivo-para-viagens" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Intensivo para Viagens</span>
                </Link>
              </li>
              <li>
                <Link href="/preparatorios" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Preparatórios (TOEFL, Cambridge, Duolingo)</span>
                </Link>
              </li>
              <li>
                <Link href="/teste-de-nivel" className="text-primary-400 hover:text-primary-300 font-semibold transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fazer Teste de Nível Gratuito</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Idiomas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Idiomas Oferecidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/idiomas/ingles" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Inglês</span>
                </Link>
              </li>
              <li>
                <Link href="/idiomas/espanhol" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Espanhol</span>
                </Link>
              </li>
              <li>
                <Link href="/idiomas/frances" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Francês</span>
                </Link>
              </li>
              <li>
                <Link href="/idiomas/alemao" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Alemão</span>
                </Link>
              </li>
              <li>
                <Link href="/idiomas/italiano" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                  <span>Italiano</span>
                </Link>
              </li>
              <li className="pt-1">
                <span className="text-xs text-secondary-400 flex items-center gap-1">
                  Outros: <PlaceholderBadge text={siteConfig.languagesPlaceholder} />
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contatos & Horário */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Atendimento & Contato
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>{siteConfig.whatsapp.display}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-400 transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>{siteConfig.instagram.handle}</span>
                </a>
              </li>
              <li className="pt-1 text-xs text-secondary-400 flex items-start gap-2 bg-secondary-800/40 p-2.5 rounded-lg border border-secondary-700/40">
                <Clock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-secondary-300 font-medium">Horário de atendimento:</span>
                  <div className="mt-0.5">
                    {siteConfig.officeHours.time},{' '}
                    <PlaceholderBadge text={siteConfig.officeHours.daysPlaceholder} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior com Direitos e LGPD */}
        <div className="border-t border-secondary-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-500">
          <p>
            © 2026 {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/politica-de-privacidade" 
              className="hover:text-primary-400 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Política de Privacidade (LGPD)</span>
            </Link>
            <Link 
              href="/contato" 
              className="hover:text-primary-400 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
