import { CefrResultRange } from '@/types';

export const cefrRanges: CefrResultRange[] = [
  {
    level: 'A1',
    title: 'A1 - Iniciante (Breakthrough / Starter)',
    scoreRange: [0, 6],
    practicalMeaning: 'Você compreende e utiliza expressões familiares cotidianas e frases muito básicas voltadas para necessidades imediatas. Consegue se apresentar e responder perguntas simples sobre dados pessoais, mas precisa que a outra pessoa fale devagar.',
    recommendedCourse: 'Inglês Regular - Módulo Starter (Zero Bloqueio)',
    courseSlug: 'ingles-regular',
  },
  {
    level: 'A2',
    title: 'A2 - Básico (Elementary / Waystage)',
    scoreRange: [7, 12],
    practicalMeaning: 'Você compreende frases e expressões isoladas relacionadas a áreas de relevância imediata (informações pessoais e familiares, compras, trabalho). Consegue se comunicar em tarefas simples e em rotinas que exigem troca direta de informações.',
    recommendedCourse: 'Inglês Regular - Módulo Fundamentos & Conversação',
    courseSlug: 'ingles-regular',
  },
  {
    level: 'B1',
    title: 'B1 - Intermediário (Threshold / Intermediate)',
    scoreRange: [13, 18],
    practicalMeaning: 'Você compreende os pontos principais de assuntos familiares e do dia a dia no trabalho, escola e lazer. Consegue lidar com a maior parte das situações que surgem em viagens no exterior e expressar experiências, acontecimentos, sonhos e ambições.',
    recommendedCourse: 'Inglês Intermediário - Foco em Fluência & Viagens',
    courseSlug: 'intensivo-para-viagens',
  },
  {
    level: 'B2',
    title: 'B2 - Independente (Vantage / Upper Intermediate)',
    scoreRange: [19, 23],
    practicalMeaning: 'Você compreende as ideias centrais de textos complexos e discussões técnicas em sua área de atuação. Consegue interagir com falantes nativos com suficiente fluência e espontaneidade, sem gerar tensão para nenhum dos lados.',
    recommendedCourse: 'Preparatório para Certificações Internacionais ou Business English',
    courseSlug: 'preparatorios',
  },
  {
    level: 'C1',
    title: 'C1 - Avançado (Effective Operational Proficiency)',
    scoreRange: [24, 28],
    practicalMeaning: 'Você compreende uma ampla variedade de textos longos e exigentes, reconhecendo significados implícitos. Expressa-se com fluência e espontaneidade quase nativa, utilizando a língua de modo flexível para fins sociais, acadêmicos e profissionais.',
    recommendedCourse: 'Preparatório C1 / C2 Advanced ou Aulas Corporativas Avançadas',
    courseSlug: 'aulas-corporativas',
  },
];

export function calculateCefrLevel(correctCount: number): CefrResultRange {
  const found = cefrRanges.find(
    (range) => correctCount >= range.scoreRange[0] && correctCount <= range.scoreRange[1]
  );
  return found || cefrRanges[0];
}
