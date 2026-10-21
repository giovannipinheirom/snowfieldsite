'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { languagesData } from '@/content/idiomas';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  GraduationCap, 
  Building2, 
  Home, 
  BookOpen, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha menus ao trocar de rota
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Cursos', href: '/cursos' },
    { label: 'Condomínios', href: '/aulas-em-condominios' },
    { label: 'Empresas', href: '/aulas-corporativas' },
    { label: 'Metodologia', href: '/metodologia' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Teste de Nível', href: '/teste-de-nivel', isHighlight: true },
    { label: 'Contato', href: '/contato' },
  ];

  const handleAgendarClick = () => {
    trackEvent({
      name: 'whatsapp_click',
      properties: { page: pathname, context: 'header_button' },
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-secondary-200 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 py-2 focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md">
            <div className="relative w-48 sm:w-56 h-12">
              <Image 
                src="/logo.svg" 
                alt="Snowfield Languages - Escola de Idiomas" 
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {/* Dropdown Idiomas */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                  pathname.startsWith('/idiomas') 
                    ? 'text-primary-600' 
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Idiomas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div 
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-secondary-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary-400">
                    Idiomas Oferecidos
                  </div>
                  {languagesData.map((lang) => (
                    <Link
                      key={lang.slug}
                      href={`/idiomas/${lang.slug}`}
                      className="flex items-center justify-between px-3 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg mx-1 transition-colors"
                    >
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-[11px] bg-secondary-100 text-secondary-600 px-2 py-0.5 rounded-full">
                        {lang.badge}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-secondary-100 my-1"></div>
                  <Link
                    href="/ingles-regular"
                    className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-primary-600 hover:bg-primary-50 rounded-lg mx-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                    <span>Conhecer Inglês Regular</span>
                  </Link>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : link.isHighlight
                    ? 'text-primary-700 hover:text-primary-800'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botão de Destaque Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAgendarClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Agendar aula</span>
            </a>
          </div>

          {/* Botão Mobile Hambúrguer */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAgendarClick}
              aria-label="Agendar aula pelo WhatsApp"
              className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-secondary-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-1">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-secondary-400">
              Idiomas
            </div>
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {languagesData.map((lang) => (
                <Link
                  key={lang.slug}
                  href={`/idiomas/${lang.slug}`}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-secondary-700 bg-secondary-50 hover:bg-primary-50 hover:text-primary-700"
                >
                  <span>{lang.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-secondary-100 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === link.href
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-secondary-800 hover:bg-secondary-50 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-secondary-100">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAgendarClick}
              className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-xl shadow-md text-base transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar aula no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
