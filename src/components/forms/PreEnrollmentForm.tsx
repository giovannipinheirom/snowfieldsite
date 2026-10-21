'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TargetAudience, LeadFormData } from '@/types';
import { formatPhoneNumber } from '@/lib/phone';
import { SuccessModal } from './SuccessModal';
import { trackEvent } from '@/lib/analytics';
import { Send, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

interface PreEnrollmentFormProps {
  initialAudience?: TargetAudience;
  initialLanguage?: string;
  isCompact?: boolean;
  className?: string;
}

export const PreEnrollmentForm: React.FC<PreEnrollmentFormProps> = ({
  initialAudience = 'mim',
  initialLanguage = 'Inglês',
  isCompact = false,
  className = '',
}) => {
  const pathname = usePathname();

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    audience: initialAudience,
    language: initialLanguage,
    studentAge: '',
    companyName: '',
    employeeCount: '',
    jobTitle: '',
    modality: 'Online',
    goal: '',
    bestTimeToContact: '',
    message: '',
    lgpdConsent: false,
    _gotcha: '',
  });

  const [renderedAt, setRenderedAt] = useState<number>(0);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [whatsappSummaryMessage, setWhatsappSummaryMessage] = useState('');

  useEffect(() => {
    setRenderedAt(Date.now());

    // Captura parâmetros UTM da URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utms: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const val = urlParams.get(key);
        if (val) utms[key] = val;
      });
      setUtmParams(utms);
    }
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validações básicas no cliente
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMessage('Por favor, informe um número de WhatsApp válido.');
      return;
    }
    if (!formData.lgpdConsent) {
      setErrorMessage('É necessário aceitar os termos da Política de Privacidade para prosseguir.');
      return;
    }

    setLoading(true);

    const payload: LeadFormData = {
      ...formData,
      pageSource: pathname,
      utmParams,
      _renderedAt: renderedAt,
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Erro ao processar dados');
      }

      // Monta mensagem de resumo para o WhatsApp
      const audienceNames = {
        filho: 'meu filho(a)',
        mim: 'mim',
        empresa: 'minha empresa',
      };
      const waMsg = `Olá! Acabei de enviar meu contato pelo site. Meu nome é ${formData.name}, quero aulas de ${formData.language} para ${audienceNames[formData.audience]}${formData.studentAge ? ` (idade: ${formData.studentAge} anos)` : ''}${formData.companyName ? ` na empresa ${formData.companyName}` : ''}. Podemos conversar?`;
      
      setWhatsappSummaryMessage(waMsg);
      setSuccessModalOpen(true);

      // Dispara analytics
      trackEvent({
        name: 'form_submit',
        properties: {
          formType: 'pre_enrollment',
          audience: formData.audience,
          language: formData.language,
        },
      });

      // Limpa formulário
      setFormData({
        name: '',
        phone: '',
        email: '',
        audience: initialAudience,
        language: initialLanguage,
        studentAge: '',
        companyName: '',
        employeeCount: '',
        jobTitle: '',
        modality: 'Online',
        goal: '',
        bestTimeToContact: '',
        message: '',
        lgpdConsent: false,
        _gotcha: '',
      });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Houve uma falha ao enviar. Tente novamente ou nos chame no WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-secondary-200/80 transition-all ${className}`}
      >
        {/* Campo Honeypot Oculto */}
        <input
          type="text"
          name="_gotcha"
          value={formData._gotcha}
          onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium">
            {errorMessage}
          </div>
        )}

        <div className="space-y-5">
          {/* 1. Para quem são as aulas */}
          <div>
            <label className="block text-sm font-bold text-secondary-800 mb-2">
              Para quem são as aulas? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: 'mim', label: 'Para mim' },
                { id: 'filho', label: 'Meu filho(a)' },
                { id: 'empresa', label: 'Minha empresa' },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setFormData({ ...formData, audience: opt.id as TargetAudience })}
                  className={`py-2.5 px-2 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-all ${
                    formData.audience === opt.id
                      ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/20'
                      : 'bg-secondary-50 text-secondary-700 border-secondary-200 hover:bg-secondary-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Nome e WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Seu nome completo <span className="text-rose-500">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Mariana Silva"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-secondary-900 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                WhatsApp / Telefone <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone-input"
                type="tel"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(11) 97394-8388 ou +55..."
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-secondary-900 transition-colors"
              />
            </div>
          </div>

          {/* 3. Idioma de Interesse & E-mail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="language-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Idioma de interesse <span className="text-rose-500">*</span>
              </label>
              <select
                id="language-select"
                required
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-secondary-900 transition-colors bg-white"
              >
                <option value="Inglês">Inglês</option>
                <option value="Espanhol">Espanhol</option>
                <option value="Francês">Francês</option>
                <option value="Alemão">Alemão</option>
                <option value="Italiano">Italiano</option>
                <option value="Outro">Outro idioma</option>
              </select>
            </div>

            <div>
              <label htmlFor="email-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                E-mail <span className="text-xs text-secondary-400 font-normal">(opcional)</span>
              </label>
              <input
                id="email-input"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu.email@exemplo.com"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-secondary-900 transition-colors"
              />
            </div>
          </div>

          {/* CAMPOS CONDICIONAIS */}
          {/* Condicional 1: Idade do aluno (Apenas se "filho") */}
          {formData.audience === 'filho' && (
            <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 animate-in fade-in duration-200">
              <label htmlFor="student-age-input" className="block text-sm font-bold text-cyan-900 mb-1.5">
                Idade do seu filho(a) <span className="text-rose-500">*</span>
              </label>
              <input
                id="student-age-input"
                type="text"
                value={formData.studentAge}
                onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                placeholder="Ex: 8 anos"
                className="w-full px-4 py-2 rounded-xl border border-cyan-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
              />
              <p className="mt-1 text-xs text-cyan-800">
                Aulas lúdicas adaptadas para crianças de 4 a 12 anos e metodologia ativa para adolescentes.
              </p>
            </div>
          )}

          {/* Condicional 2: Empresa e Colaboradores (Apenas se "empresa") */}
          {formData.audience === 'empresa' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-secondary-50 border border-secondary-200 animate-in fade-in duration-200">
              <div>
                <label htmlFor="company-name-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                  Nome da empresa <span className="text-rose-500">*</span>
                </label>
                <input
                  id="company-name-input"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Ex: Tech Solutions"
                  className="w-full px-4 py-2 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
                />
              </div>

              <div>
                <label htmlFor="employee-count-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                  Nº de colaboradores previstos
                </label>
                <select
                  id="employee-count-select"
                  value={formData.employeeCount}
                  onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
                >
                  <option value="">Selecione...</option>
                  <option value="1 a 3">1 a 3 colaboradores</option>
                  <option value="4 a 10">4 a 10 colaboradores</option>
                  <option value="11 a 30">11 a 30 colaboradores</option>
                  <option value="Mais de 30">Mais de 30 colaboradores</option>
                </select>
              </div>
            </div>
          )}

          {/* Campos Opcionais Adicionais (ocultos no modo compacto) */}
          {!isCompact && (
            <div className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modality-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                    Modalidade preferida
                  </label>
                  <select
                    id="modality-select"
                    value={formData.modality}
                    onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
                  >
                    <option value="Online">Online ao vivo (todo o Brasil e exterior)</option>
                    <option value="Presencial em Condomínio">Presencial em Condomínio (São Bernardo do Campo)</option>
                    <option value="In-Company">Presencial In-Company (Empresas em SBC)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goal-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                    Objetivo principal
                  </label>
                  <select
                    id="goal-select"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
                  >
                    <option value="">Selecione um objetivo...</option>
                    <option value="Carreira e Negócios">Carreira e Mercado de Trabalho</option>
                    <option value="Viagens e Turismo">Viagens e Turismo</option>
                    <option value="Escolar / Vestibulares">Acompanhamento Escolar / Vestibulares</option>
                    <option value="Exames de Proficiência (TOEFL/Cambridge)">Exames Internacionais (TOEFL/Cambridge/Duolingo)</option>
                    <option value="Hobby e Desenvolvimento Pessoal">Hobby e Desenvolvimento Pessoal</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message-textarea" className="block text-sm font-bold text-secondary-800 mb-1.5">
                  Mensagem ou observação <span className="text-xs text-secondary-400 font-normal">(opcional)</span>
                </label>
                <textarea
                  id="message-textarea"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte um pouco sobre sua rotina, melhor horário ou dúvidas..."
                  className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 resize-none"
                />
              </div>
            </div>
          )}

          {/* Consentimento LGPD (Checkbox desmarcado por padrão) */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={formData.lgpdConsent}
                onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-primary-600 border-secondary-300 focus:ring-primary-500 cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-secondary-600 leading-snug">
                Concordo em receber o contato da Snowfield Languages e declaro que li e aceito a{' '}
                <Link 
                  href="/politica-de-privacidade" 
                  target="_blank"
                  className="text-primary-600 underline font-semibold hover:text-primary-700"
                >
                  Política de Privacidade
                </Link> (LGPD). <span className="text-rose-500">*</span>
              </span>
            </label>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary-500/25 transition-all text-base disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Enviando dados...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Quero falar com a escola</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Modal de Sucesso */}
      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        whatsappMessage={whatsappSummaryMessage}
        title="Pré-matrícula recebida com sucesso!"
        description="Seus dados foram enviados para nossa coordenação pedagógica. Para agilizar o seu agendamento, clique abaixo para continuar no WhatsApp!"
      />
    </>
  );
};
