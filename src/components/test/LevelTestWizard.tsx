'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { englishQuestions } from '@/content/questoes/ingles';
import { calculateCefrLevel } from '@/lib/cefr';
import { formatPhoneNumber } from '@/lib/phone';
import { whatsappLink } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { CefrResultRange } from '@/types';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle, 
  Sparkles, 
  AlertCircle, 
  MessageCircle, 
  GraduationCap, 
  BookOpen, 
  HelpCircle,
  ShieldCheck,
  Send,
  Loader2
} from 'lucide-react';

const STORAGE_KEY = 'snowfield_english_level_test_progress';

export const LevelTestWizard: React.FC = () => {
  const questions = englishQuestions;
  const totalQuestions = questions.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showLeadGate, setShowLeadGate] = useState<boolean>(false);
  const [result, setResult] = useState<CefrResultRange | null>(null);
  const [scoreData, setScoreData] = useState<{ totalScore: number; scoresByLevel: Record<string, number> } | null>(null);

  // Dados do lead
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);

  // Carrega progresso salvo do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers && typeof parsed.answers === 'object') {
          setAnswers(parsed.answers);
        }
        if (typeof parsed.currentIndex === 'number' && parsed.currentIndex < totalQuestions) {
          setCurrentIndex(parsed.currentIndex);
        }
      }
    } catch (err) {
      console.warn('Não foi possível ler localStorage do teste:', err);
    }
  }, [totalQuestions]);

  // Salva progresso no localStorage a cada resposta
  const saveProgress = (newAnswers: Record<number, string>, nextIdx: number) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers: newAnswers,
          currentIndex: nextIdx,
          updatedAt: Date.now(),
        })
      );
    } catch (err) {
      console.warn('Não foi possível gravar no localStorage:', err);
    }
  };

  const handleSelectOption = (questionId: number, optionId: string) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);
    saveProgress(updated, currentIndex);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      saveProgress(answers, nextIdx);
    } else {
      // Chegou ao fim: abre o modal de lead antes do resultado
      trackEvent({ name: 'test_complete', properties: { language: 'Inglês', level: 'pre_result', score: Object.keys(answers).length } });
      setShowLeadGate(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      saveProgress(answers, prevIdx);
    }
  };

  const handleRestart = () => {
    if (confirm('Deseja reiniciar o teste? Suas respostas serão apagadas.')) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setAnswers({});
      setCurrentIndex(0);
      setIsFinished(false);
      setShowLeadGate(false);
      setResult(null);
      setScoreData(null);
    }
  };

  // Cálculo da pontuação e submissão do formulário de lead
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError(null);

    if (!leadName.trim()) {
      setLeadError('Por favor, informe seu nome.');
      return;
    }
    if (!leadPhone.trim() || leadPhone.length < 9) {
      setLeadError('Por favor, informe um WhatsApp válido.');
      return;
    }
    if (!leadEmail.trim() || !leadEmail.includes('@')) {
      setLeadError('Por favor, informe um e-mail válido.');
      return;
    }
    if (!lgpdConsent) {
      setLeadError('É necessário consentir com os termos para ver o resultado.');
      return;
    }

    setLeadSubmitting(true);

    // Calcula acertos
    let totalScore = 0;
    const scoresByLevel: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };

    questions.forEach((q) => {
      const userChoice = answers[q.id];
      if (userChoice === q.correctOptionId) {
        totalScore += 1;
        scoresByLevel[q.level] = (scoresByLevel[q.level] || 0) + 1;
      }
    });

    const calculatedLevel = calculateCefrLevel(totalScore);
    setResult(calculatedLevel);
    setScoreData({ totalScore, scoresByLevel });

    // Dispara API para salvar dados do aluno e resultado
    try {
      await fetch('/api/teste-resultado', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName,
          phone: leadPhone,
          email: leadEmail,
          lgpdConsent,
          language: 'Inglês',
          level: calculatedLevel.level,
          totalScore,
          totalQuestions,
          scoresByLevel,
          answers,
        }),
      });

      trackEvent({
        name: 'test_complete',
        properties: { language: 'Inglês', level: calculatedLevel.level, score: totalScore },
      });

      // Limpa armazenamento local
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}

      setShowLeadGate(false);
      setIsFinished(true);
    } catch (err: any) {
      console.error(err);
      // Mesmo com erro de rede na API, exibe o resultado para o aluno não se frustrar
      setShowLeadGate(false);
      setIsFinished(true);
    } finally {
      setLeadSubmitting(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const selectedAnswer = answers[currentQuestion?.id];

  // ==========================================
  // TELA DE RESULTADO
  // ==========================================
  if (isFinished && result && scoreData) {
    const waResultMsg = `Olá! Acabei de fazer o teste de nível de inglês no site da Snowfield Languages. Meu resultado foi ${result.level} (${scoreData.totalScore}/${totalQuestions} acertos). Gostaria de agendar uma aula experimental para este nível!`;
    const waUrl = whatsappLink(waResultMsg);

    return (
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-secondary-100 animate-in fade-in duration-300">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span>Resultado do Teste de Nível de Inglês</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-900">
            Parabéns, {leadName}! Aqui está sua avaliação:
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-950 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <span className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
                Seu Nível Estimado no Quadro Europeu (CEFR):
              </span>
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-100">
                {result.level}
              </div>
              <div className="text-lg font-bold text-secondary-200">
                {result.title}
              </div>
              <div className="text-xs text-cyan-200/80 pt-1">
                Pontuação: {scoreData.totalScore} de {totalQuestions} acertos ({Math.round((scoreData.totalScore / totalQuestions) * 100)}%)
              </div>
            </div>
          </div>
        </div>

        {/* O que esse nível significa na prática */}
        <div className="mt-8 space-y-6">
          <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-200">
            <h3 className="text-base font-bold text-secondary-900 flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-primary-600" />
              <span>O que esse nível significa na prática:</span>
            </h3>
            <p className="text-sm text-secondary-700 leading-relaxed">
              {result.practicalMeaning}
            </p>
          </div>

          {/* Curso Recomendado */}
          <div className="bg-primary-50 p-6 rounded-2xl border border-primary-200">
            <h3 className="text-base font-bold text-primary-950 flex items-center gap-2 mb-1">
              <GraduationCap className="w-5 h-5 text-primary-700" />
              <span>Curso mais recomendado para o seu perfil:</span>
            </h3>
            <div className="text-lg font-extrabold text-primary-900 mb-2">
              {result.recommendedCourse}
            </div>
            <p className="text-xs text-primary-800 leading-relaxed mb-4">
              Nossos professores adaptam o material para preencher lacunas de vocabulário e acelerar sua fala sem estresse.
            </p>
            {result.courseSlug && (
              <Link
                href={`/${result.courseSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 underline underline-offset-4"
              >
                <span>Ver detalhes da grade deste curso</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          {/* Desempenho por Nível */}
          <div className="p-4 rounded-xl bg-white border border-secondary-200">
            <h4 className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-3">
              Detalhamento de acertos por bloco CEFR:
            </h4>
            <div className="grid grid-cols-5 gap-2 text-center">
              {Object.entries(scoreData.scoresByLevel).map(([lvl, hits]) => (
                <div key={lvl} className="p-2.5 rounded-lg bg-secondary-50 border border-secondary-100">
                  <div className="text-xs font-bold text-secondary-600">{lvl}</div>
                  <div className="text-base font-extrabold text-primary-700">{hits}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs Finais */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-600/30 text-base transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Falar no WhatsApp com meu resultado</span>
            </a>

            <Link
              href="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors"
            >
              <span>Agendar aula experimental</span>
            </Link>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="text-xs text-secondary-400 hover:text-secondary-600 flex items-center justify-center gap-1.5 mx-auto transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer o teste de nível</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // WIZARD QUESTÃO POR QUESTÃO
  // ==========================================
  return (
    <div className="max-w-2xl mx-auto">
      {/* Aviso etário para crianças */}
      <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>Atenção:</strong> Este teste online é calibrado para pessoas a partir de <strong>12 anos</strong>. Para crianças de 4 a 11 anos, a avaliação é feita de forma lúdica em uma conversa ao vivo.{' '}
          <Link href="/contato" className="underline font-bold text-amber-800 hover:text-amber-950">
            Clique aqui para agendar uma aula infantil
          </Link>.
        </div>
      </div>

      {/* Card da Questão */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-secondary-200">
        {/* Barra de Progresso Superior */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-secondary-500 mb-2">
            <span>Questão {currentIndex + 1} de {totalQuestions}</span>
            <span className="text-primary-600 font-extrabold">{progressPercent}% Concluído</span>
          </div>
          <div className="w-full bg-secondary-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Nível Indicativo e Categoria */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary-100 text-secondary-600">
            Nível: {currentQuestion.level}
          </span>
          <span className="text-xs text-secondary-400 capitalize">
            {currentQuestion.category === 'grammar' ? 'Gramática' : currentQuestion.category === 'vocabulary' ? 'Vocabulário' : 'Leitura Curta'}
          </span>
        </div>

        {/* Texto de Leitura (se houver) */}
        {currentQuestion.readingPassage && (
          <div className="mb-5 p-4 rounded-xl bg-secondary-50 border-l-4 border-primary-500 text-sm text-secondary-700 italic leading-relaxed">
            "{currentQuestion.readingPassage}"
          </div>
        )}

        {/* Enunciado */}
        <h3 className="text-base sm:text-lg font-bold text-secondary-900 mb-6 leading-snug">
          {currentQuestion.question}
        </h3>

        {/* Opções de Resposta */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedAnswer === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left text-sm sm:text-base font-medium transition-all ${
                  isSelected
                    ? 'bg-primary-50 border-primary-500 text-primary-900 shadow-sm ring-1 ring-primary-500'
                    : 'bg-white border-secondary-200 text-secondary-800 hover:border-primary-300 hover:bg-secondary-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold uppercase ${
                    isSelected ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-600'
                  }`}>
                    {opt.id}
                  </span>
                  <span>{opt.text}</span>
                </div>
                {isSelected && <CheckCircle className="w-5 h-5 text-primary-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Botões de Ação Inferiores */}
        <div className="mt-8 pt-6 border-t border-secondary-100 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-secondary-200 text-xs sm:text-sm font-semibold text-secondary-600 hover:bg-secondary-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-primary-500/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>{currentIndex === totalQuestions - 1 ? 'Concluir Teste' : 'Próxima'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MODAL DE LEAD ANTES DO RESULTADO (GATE OBRIGATÓRIO) */}
      {showLeadGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-secondary-100 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900">
                Seu teste foi finalizado!
              </h3>
              <p className="text-xs sm:text-sm text-secondary-600">
                Informe seus dados para calcularmos seu nível oficial no Quadro Europeu (CEFR) e enviarmos seu relatório completo.
              </p>
            </div>

            {leadError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {leadError}
              </div>
            )}

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-secondary-800 mb-1">
                  Seu nome completo <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Ex: Carlos Santos"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-800 mb-1">
                  WhatsApp com DDD <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(formatPhoneNumber(e.target.value))}
                  placeholder="(11) 97394-8388"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary-800 mb-1">
                  E-mail para receber o resultado <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="carlos@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-primary-500 text-sm text-secondary-900"
                />
              </div>

              <div>
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={lgpdConsent}
                    onChange={(e) => setLgpdConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-primary-600 border-secondary-300 focus:ring-primary-500 cursor-pointer"
                  />
                  <span className="text-xs text-secondary-600 leading-snug">
                    Autorizo o envio do relatório pedagógico e concordo com a{' '}
                    <Link href="/politica-de-privacidade" target="_blank" className="text-primary-600 underline font-semibold">
                      Política de Privacidade
                    </Link>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={leadSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary-500/25 transition-all text-sm disabled:opacity-70"
              >
                {leadSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Calculando seu nível...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Ver meu nível agora</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
