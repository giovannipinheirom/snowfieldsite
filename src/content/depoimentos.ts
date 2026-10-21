import { TestimonialItem } from '@/types';

/**
 * REGRAS DE CONTEÚDO:
 * NUNCA inventar depoimentos fictícios.
 * Onde faltar dado real da pasta /conteudo, deve-se usar placeholder visível entre colchetes.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    authorName: '[NOME DO ALUNO 1 - ADULTO]',
    roleOrProfile: 'Aluno de Inglês Online',
    languageOrCourse: 'Inglês Regular',
    content: '[DEPOIMENTO REAL DO ALUNO ADULTO: "A flexibilidade dos horários e a paciência do professor me fizeram perder a vergonha de falar nas reuniões globais." - AGUARDANDO DADOS DA PASTA /CONTEUDO]',
    isPlaceholder: true,
  },
  {
    id: 'depoimento-2',
    authorName: '[NOME DA MÃE/PAI 2 - CONDOMÍNIO]',
    roleOrProfile: 'Mãe de aluno em São Bernardo do Campo',
    languageOrCourse: 'Inglês Kids em Condomínio',
    content: '[DEPOIMENTO REAL DE PAI/MÃE: "A comodidade de ter aula no próprio condomínio com metodologia lúdica transformou a relação do meu filho com o inglês." - AGUARDANDO DADOS DA PASTA /CONTEUDO]',
    isPlaceholder: true,
  },
  {
    id: 'depoimento-3',
    authorName: '[GESTOR DE RH / ALUNO CORPORATIVO 3]',
    roleOrProfile: 'Gestor de Equipe',
    languageOrCourse: 'Aulas Corporativas In-Company',
    content: '[DEPOIMENTO REAL CORPORATIVO: "A equipe ganhou segurança prática para apresentações com clientes estrangeiros em poucos meses." - AGUARDANDO DADOS DA PASTA /CONTEUDO]',
    isPlaceholder: true,
  },
];
