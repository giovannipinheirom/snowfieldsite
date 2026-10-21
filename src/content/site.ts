import { SiteContactInfo } from '@/types';

/**
 * FONTE ÚNICA DA VERDADE - SNOWFIELD LANGUAGES
 * Nenhum dado de contato deve ser escrito hardcoded nos componentes.
 */
export const siteConfig: SiteContactInfo = {
  name: 'Snowfield Languages',
  sinceYear: 2019,
  audienceRange: 'De 4 a 90 anos, de qualquer escolaridade',
  differentials: [
    'Aulas divertidas e altamente personalizadas',
    'Sem fórmulas engessadas: você aprende com o que gosta',
    'Acompanhamento individual de ritmo e evolução',
    'Professores atenciosos e metodologia comunicativa ativa',
  ],
  modalities: {
    presential: 'Presenciais em São Bernardo do Campo (SP), em condomínios e empresas',
    condos: 'Aulas em condomínios residenciais em São Bernardo do Campo',
    corporate: 'Aulas corporativas in-company e online para equipes',
    online: 'Aulas online ao vivo para alunos em vários estados do Brasil e no exterior',
  },
  locationDescription: 'Aulas online para todo o Brasil e o mundo, e presenciais em São Bernardo do Campo (sem sede física aberta ao público).',
  whatsapp: {
    number: '+55 (11) 97394-8388',
    cleanNumber: '5511973948388',
    display: '(11) 97394-8388',
    defaultMessage: 'Olá! Vim pelo site da Snowfield Languages e gostaria de agendar uma aula experimental.',
  },
  email: 'pedagogico@snowfieldlanguages.com.br',
  instagram: {
    handle: '@snowfield_languages',
    url: 'https://instagram.com/snowfield_languages',
  },
  officeHours: {
    time: '8h às 22h',
    daysPlaceholder: '[DIAS DA SEMANA]',
  },
  languagesPlaceholder: '[LISTAR IDIOMAS]',
  services: [
    'Inglês regular para crianças, adolescentes e adultos',
    'Aulas de idiomas em condomínios residenciais',
    'Aulas corporativas para empresas e profissionais',
    'Intensivo preparatório para viagens',
    'Preparatórios para exames internacionais (TOEFL, Cambridge, Duolingo English Test e outros)',
  ],
  peakEnrollmentMonths: ['Fevereiro', 'Agosto'],
  seasonalBanner: {
    enabled: true,
    text: 'Matrículas abertas para o semestre! Vagas limitadas para turmas presenciais e horários online.',
    linkUrl: '/contato',
    linkText: 'Garantir minha vaga',
    startDate: '2026-01-10',
    endDate: '2026-08-31',
  },
};

export const targetAudiencesConfig = {
  filho: {
    id: 'filho',
    title: 'Meu filho(a)',
    subtitle: 'Crianças e adolescentes (de 4 a 17 anos)',
    description: 'Aulas lúdicas, dinâmicas e seguras, no seu condomínio ou online. Acompanhamento próximo para pais com relatórios de evolução.',
    ctaText: 'Agendar uma aula para meu filho',
    whatsappMessage: 'Olá! Gostaria de informações sobre aulas lúdicas para meu filho(a).',
    route: '/aulas-em-condominios',
  },
  mim: {
    id: 'mim',
    title: 'Para mim',
    subtitle: 'Adultos e jovens (carreira, viagens, exames ou hobby)',
    description: 'Aulas personalizadas para seus objetivos reais. Fale desde a primeira aula no seu próprio ritmo, com horários flexíveis online.',
    ctaText: 'Fazer teste de nível online',
    whatsappMessage: 'Olá! Quero começar aulas de idiomas para mim e gostaria de agendar uma aula experimental.',
    route: '/teste-de-nivel',
  },
  empresa: {
    id: 'empresa',
    title: 'Minha empresa',
    subtitle: 'Equipes corporativas e executivos',
    description: 'Treinamento in-company em São Bernardo do Campo ou online ao vivo. Foco em reuniões, e-mails, negociação e apresentações globais.',
    ctaText: 'Solicitar proposta corporativa',
    whatsappMessage: 'Olá! Tenho interesse em aulas corporativas de idiomas para minha empresa.',
    route: '/aulas-corporativas',
  },
} as const;
