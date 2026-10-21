'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatPhoneNumber } from '@/lib/phone';
import { SuccessModal } from './SuccessModal';
import { trackEvent } from '@/lib/analytics';
import { Send, Loader2, Building, ShieldCheck } from 'lucide-react';

export const CondominiumForm: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condoName: '',
    neighborhood: '',
    approximateInterestedCount: '1 a 3 alunos',
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

    if (!formData.name.trim() || !formData.phone.trim() || !formData.condoName.trim() || !formData.neighborhood.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!formData.lgpdConsent) {
      setErrorMessage('É necessário aceitar os termos da Política de Privacidade para prosseguir.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        audience: 'filho',
        language: 'Inglês (Condomínio)',
        condoName: formData.condoName,
        neighborhood: formData.neighborhood,
        approximateInterestedCount: formData.approximateInterestedCount,
        lgpdConsent: formData.lgpdConsent,
        pageSource: '/aulas-em-condominios',
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

      const waMsg = `Olá! Quero levar as aulas da Snowfield Languages para o meu condomínio (${formData.condoName}, bairro ${formData.neighborhood}, em São Bernardo do Campo). Estimamos cerca de ${formData.approximateInterestedCount}. Como podemos organizar?`;
      
      setWhatsappSummaryMessage(waMsg);
      setSuccessModalOpen(true);

      trackEvent({
        name: 'form_submit',
        properties: { formType: 'condominium', audience: 'filho', language: 'Inglês' },
      });

      setFormData({
        name: '',
        phone: '',
        condoName: '',
        neighborhood: '',
        approximateInterestedCount: '1 a 3 alunos',
        lgpdConsent: false,
        _gotcha: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Erro ao enviar. Tente pelo WhatsApp.');
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
              <label htmlFor="condo-name-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Seu nome completo <span className="text-rose-500">*</span>
              </label>
              <input
                id="condo-name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Carlos Eduardo"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>

            <div>
              <label htmlFor="condo-phone-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Seu WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                id="condo-phone-input"
                type="tel"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(11) 97394-8388"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="condo-building-name-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Nome do Condomínio / Edifício <span className="text-rose-500">*</span>
              </label>
              <input
                id="condo-building-name-input"
                type="text"
                required
                value={formData.condoName}
                onChange={(e) => setFormData({ ...formData, condoName: e.target.value })}
                placeholder="Ex: Condomínio Jardim dos Pássaros"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>

            <div>
              <label htmlFor="condo-neighborhood-input" className="block text-sm font-bold text-secondary-800 mb-1.5">
                Bairro em São Bernardo do Campo <span className="text-rose-500">*</span>
              </label>
              <input
                id="condo-neighborhood-input"
                type="text"
                required
                value={formData.neighborhood}
                onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                placeholder="Ex: Rudge Ramos / Baeta Neves"
                className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
              />
            </div>
          </div>

          <div>
            <label htmlFor="condo-count-select" className="block text-sm font-bold text-secondary-800 mb-1.5">
              Número aproximado de interessados
            </label>
            <select
              id="condo-count-select"
              value={formData.approximateInterestedCount}
              onChange={(e) => setFormData({ ...formData, approximateInterestedCount: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900 bg-white"
            >
              <option value="1 a 3 alunos">1 a 3 alunos (meu filho e amigos próximos)</option>
              <option value="4 a 6 alunos">4 a 6 alunos (pequeno grupo)</option>
              <option value="7 a 10 alunos">7 a 10 alunos (turma do prédio)</option>
              <option value="Mais de 10 alunos">Mais de 10 alunos (múltiplas faixas etárias)</option>
            </select>
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
                Concordo com o contato da equipe da Snowfield Languages de acordo com a{' '}
                <Link href="/politica-de-privacidade" target="_blank" className="text-primary-600 underline font-semibold">
                  Política de Privacidade
                </Link>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-primary-600/25 transition-all text-base disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Enviando proposta...</span>
              </>
            ) : (
              <>
                <Building className="w-5 h-5" />
                <span>Quero aulas no meu condomínio</span>
              </>
            )}
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        whatsappMessage={whatsappSummaryMessage}
        title="Solicitação para Condomínio Enviada!"
        description="Recebemos seu pedido com sucesso. Nossa coordenação entrará em contato para agendar uma apresentação com os moradores e a administração do condomínio."
      />
    </>
  );
};
