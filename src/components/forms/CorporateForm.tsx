'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatPhoneNumber } from '@/lib/phone';
import { SuccessModal } from './SuccessModal';
import { trackEvent } from '@/lib/analytics';
import { Send, Loader2, Briefcase } from 'lucide-react';

export const CorporateForm: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    jobTitle: '',
    phone: '',
    email: '',
    employeeCount: '4 a 10',
    language: 'Inglês',
    goal: 'Reuniões e Apresentações Globais',
    lgpdConsent: false,
    _gotcha: '',
  });

  const [renderedAt, setRenderedAt] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [whatsappSummaryMessage, setWhatsappSummaryMessage] = useState('');

  useEffect(() => {
    setRenderedAt(Date.now());
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(e.target.value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.companyName.trim() || !formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios corporativos.');
      return;
    }
    if (!formData.lgpdConsent) {
      setErrorMessage('É necessário aceitar os termos da Política de Privacidade para prosseguir.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        companyName: formData.companyName,
        name: formData.name,
        jobTitle: formData.jobTitle,
        phone: formData.phone,
        email: formData.email,
        employeeCount: formData.employeeCount,
        language: formData.language,
        goal: formData.goal,
        audience: 'empresa',
        lgpdConsent: formData.lgpdConsent,
        pageSource: '/aulas-corporativas',
        _gotcha: formData._gotcha,
        _renderedAt: renderedAt,
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Erro ao registrar solicitação');
      }

      const waMsg = `Olá! Gostaria de receber uma proposta corporativa da Snowfield Languages para a empresa ${formData.companyName}. Sou ${formData.name} (${formData.jobTitle || 'Contato Corporativo'}), com previsão de ${formData.employeeCount} colaboradores em aulas de ${formData.language} para ${formData.goal}.`;

      setWhatsappSummaryMessage(waMsg);
      setSuccessModalOpen(true);

      trackEvent({
        name: 'form_submit',
        properties: { formType: 'corporate', audience: 'empresa', language: formData.language },
      });

      setFormData({
        companyName: '',
        name: '',
        jobTitle: '',
        phone: '',
        email: '',
        employeeCount: '4 a 10',
        language: 'Inglês',
        goal: 'Reuniões e Apresentações Globais',
        lgpdConsent: false,
        _gotcha: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Erro ao processar envio corporativo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-secondary-200 ${className}`}>
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

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="corp-company-name-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Nome da Empresa <span className="text-rose-500">*</span>
              </label>
              <input
                id="corp-company-name-input"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Ex: Grupo Automotivo ABC"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>

            <div>
              <label htmlFor="corp-name-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Seu Nome Completo <span className="text-rose-500">*</span>
              </label>
              <input
                id="corp-name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Roberto Mendes"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="corp-job-title-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Cargo / Função
              </label>
              <input
                id="corp-job-title-input"
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                placeholder="Ex: Gerente de RH / Engenheiro"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>

            <div>
              <label htmlFor="corp-phone-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                WhatsApp Comercial <span className="text-rose-500">*</span>
              </label>
              <input
                id="corp-phone-input"
                type="tel"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(11) 97394-8388"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>

            <div>
              <label htmlFor="corp-email-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                E-mail Corporativo <span className="text-rose-500">*</span>
              </label>
              <input
                id="corp-email-input"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu.nome@empresa.com.br"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="corp-employee-count-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Nº de Colaboradores
              </label>
              <select
                id="corp-employee-count-select"
                value={formData.employeeCount}
                onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
              >
                <option value="1 a 3">1 a 3 colaboradores</option>
                <option value="4 a 10">4 a 10 colaboradores</option>
                <option value="11 a 30">11 a 30 colaboradores</option>
                <option value="Mais de 30">Mais de 30 colaboradores</option>
              </select>
            </div>

            <div>
              <label htmlFor="corp-language-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Idioma de Interesse
              </label>
              <select
                id="corp-language-select"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
              >
                <option value="Inglês">Inglês Corporativo</option>
                <option value="Espanhol">Espanhol de Negócios</option>
                <option value="Alemão">Alemão Técnico</option>
                <option value="Francês">Francês</option>
                <option value="Múltiplos">Múltiplos Idiomas</option>
              </select>
            </div>

            <div>
              <label htmlFor="corp-goal-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Principal Objetivo
              </label>
              <select
                id="corp-goal-select"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
              >
                <option value="Reuniões e Apresentações Globais">Reuniões e Apresentações Globais</option>
                <option value="Redação de E-mails e Propostas">Redação de E-mails e Propostas</option>
                <option value="Viagens Executivas e Negociações">Viagens Executivas e Negociações</option>
                <option value="Fluência Geral para Equipe">Fluência Geral para Equipe</option>
              </select>
            </div>
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={formData.lgpdConsent}
                onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-primary-600 border-secondary-300 focus:ring-primary-500 cursor-pointer"
              />
              <span className="text-xs text-secondary-600 leading-snug">
                Autorizo o contato da Snowfield Languages para envio da proposta e aceito a{' '}
                <Link href="/politica-de-privacidade" target="_blank" className="text-primary-600 underline font-semibold">
                  Política de Privacidade
                </Link>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-base disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Gerando solicitação...</span>
              </>
            ) : (
              <>
                <Briefcase className="w-5 h-5 text-primary-400" />
                <span>Solicitar proposta corporativa</span>
              </>
            )}
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        whatsappMessage={whatsappSummaryMessage}
        title="Solicitação Corporativa Recebida!"
        description="Nossa equipe de parcerias corporativas entrará em contato para agendar o alinhamento de diagnóstico e apresentar a proposta customizada."
      />
    </>
  );
};
