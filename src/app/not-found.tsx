import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  GraduationCap, 
  Sparkles, 
  Phone, 
  Search, 
  ArrowRight 
} from 'lucide-react';

export default function NotFound() {
  const quickLinks = [
    { label: 'Página Inicial (Home)', href: '/', icon: <Home className="w-4 h-4 text-primary-600" /> },
    { label: 'Fazer Teste de Nível', href: '/teste-de-nivel', icon: <Sparkles className="w-4 h-4 text-primary-600" /> },
    { label: 'Cursos & Idiomas', href: '/cursos', icon: <GraduationCap className="w-4 h-4 text-primary-600" /> },
    { label: 'Aulas em Condomínios', href: '/aulas-em-condominios', icon: <Home className="w-4 h-4 text-primary-600" /> },
    { label: 'Aulas Corporativas', href: '/aulas-corporativas', icon: <GraduationCap className="w-4 h-4 text-primary-600" /> },
    { label: 'Fale Conosco', href: '/contato', icon: <Phone className="w-4 h-4 text-primary-600" /> },
  ];

  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-cyan-50 border border-cyan-200 text-primary-600 shadow-inner">
          <span className="text-3xl font-black">404</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
            Página não encontrada
          </h1>
          <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
            O link que você tentou acessar pode ter sido alterado ou não existe mais. Use os atalhos abaixo para continuar sua navegação:
          </p>
        </div>

        <div className="bg-secondary-50 p-6 rounded-3xl border border-secondary-200/80 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-400 block mb-3">
            Atalhos para as páginas principais:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-secondary-200/70 hover:border-primary-400 hover:text-primary-700 text-sm font-medium text-secondary-800 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-secondary-400" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para o início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
