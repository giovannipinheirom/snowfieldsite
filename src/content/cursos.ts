import { CourseItem } from '@/types';

export const coursesData: CourseItem[] = [
  {
    id: 'ingles-regular-anual',
    slug: 'ingles-regular',
    title: 'Inglês Regular Personalizado',
    language: 'Inglês',
    audience: 'Crianças, adolescentes e adultos (de 4 a 90 anos)',
    format: 'Online',
    duration: 'Módulos semestrais ou plano contínuo',
    workload: '2h a 3h semanais ao vivo + suporte',
    price: 'R$ [PREÇO SOB CONSULTA]', // Exemplo com placeholder ou sob consulta
    features: [
      'Turmas reduzidas ou aulas 1 a 1 (particulares)',
      'Plano pedagógico sob medida para seu objetivo',
      'Material didático digital e interativo incluso',
      'Relatórios periódicos de evolução comunicativa',
      'Plantão de dúvidas direto com o professor via WhatsApp',
    ],
    highlight: true,
    // Sem checkoutUrl -> botão vira "Quero este curso" e abre WhatsApp
  },
  {
    id: 'intensivo-viagens-express',
    slug: 'intensivo-para-viagens',
    title: 'Intensivo de Sobrevivência para Viagens',
    language: 'Inglês ou Espanhol',
    audience: 'Adultos e famílias com viagem agendada',
    format: 'Online',
    duration: '4 a 8 semanas (formato imersivo)',
    workload: '16h a 24h totais de imersão prática',
    price: 'R$ 690,00',
    checkoutUrl: 'https://pay.snowfieldlanguages.com.br/checkout/viagens-express', // Exemplo com checkoutUrl configurado para testar botão "Comprar agora"
    features: [
      'Check-in, imigração e alfândega sem suor frio',
      'Como pedir refeições, fazer compras e pedir descontos',
      'Como resolver imprevistos: mala perdida, atrasos e saúde',
      'Guia de bolso digital em PDF com áudios de pronúncia rápida',
      'Simulação de role-play gravada para você rever',
    ],
    highlight: true,
  },
  {
    id: 'preparatorio-toefl-cambridge-duolingo',
    slug: 'preparatorios',
    title: 'Preparatório para Exames Internacionais (TOEFL / Cambridge / Duolingo)',
    language: 'Inglês',
    audience: 'Estudantes para intercâmbio, pós-graduação e processos de imigração',
    format: 'Online',
    duration: '8 a 16 semanas focadas na prova escolhida',
    workload: '32h de treinamento direcionado + simulados',
    // Sem preço -> não é renderizado preço
    features: [
      'Diagnóstico inicial com base na pontuação necessária',
      'Treinamento intensivo das 4 habilidades (Speaking, Listening, Reading, Writing)',
      'Correções detalhadas de redações com feedback pedagógico',
      'Bateria de simulados cronometrados sob as regras oficiais',
      'Técnicas estratégicas de gerenciamento de tempo',
    ],
    highlight: false,
    // Sem checkoutUrl -> abre WhatsApp
  },
  {
    id: 'aulas-condominios-kids-teens',
    slug: 'aulas-em-condominios',
    title: 'Inglês Lúdico em Condomínios (Kids & Teens)',
    language: 'Inglês',
    audience: 'Crianças e adolescentes residentes em condomínios em SBC',
    format: 'Presencial (SBC)',
    duration: 'Acompanhamento semestral / anual',
    workload: '2h semanais no espaço compartilhado do condomínio',
    price: 'Valores especiais para turmas fechadas',
    features: [
      'O professor vai até as áreas comuns do seu prédio',
      'Segurança total: seus filhos aprendem sem sair do condomínio',
      'Turmas divididas rigidamente por faixa etária',
      'Metodologia lúdica baseada em jogos, artes e conversação',
      'Comunicação direta com os pais sobre o desenvolvimento',
    ],
    highlight: false,
    // Sem checkoutUrl -> abre WhatsApp
  },
  {
    id: 'corporativo-in-company',
    slug: 'aulas-corporativas',
    title: 'Business Languages & Aulas Corporativas In-Company',
    language: 'Inglês, Espanhol ou Francês',
    audience: 'Empresas, startups e executivos em São Bernardo do Campo e online',
    format: 'In-Company',
    duration: 'Contratos modulares corporativos',
    workload: 'Customizada de acordo com a escala da empresa',
    // Sem preço fixo
    features: [
      'Aulas presenciais em SBC ou online ao vivo para filiais',
      'Foco em e-mails executivos, negociação, reuniões e apresentações',
      'Indicadores de presença e progresso para o RH',
      'Flexibilidade de horários para a rotina corporativa',
      'Alinhamento com o vocabulário do setor de atuação da empresa',
    ],
    highlight: false,
    // Sem checkoutUrl -> abre formulário/WhatsApp
  },
];
