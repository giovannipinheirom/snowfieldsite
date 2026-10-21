import { LanguageItem } from '@/types';

export const languagesData: LanguageItem[] = [
  {
    id: 'ingles',
    slug: 'ingles',
    name: 'Inglês',
    badge: 'Mais procurado',
    shortDescription: 'Do básico ao avançado com fluência prática para o dia a dia, viagens, carreira e certificações.',
    longDescription: 'O programa de Inglês da Snowfield Languages foi concebido para eliminar o bloqueio na fala. Em vez de listas infinitas de gramática descontextualizada, cada encontro coloca você em situações comunicativas reais desde o primeiro dia.',
    targetAudience: 'Crianças a partir de 4 anos, adolescentes em idade escolar, vestibulandos, adultos com foco em carreira ou viagens, e profissionais seniores até 90 anos.',
    typicalActivities: [
      'Role-play de situações reais (aeroporto, reuniões de trabalho, pedidos em restaurantes)',
      'Discussão de podcasts, séries e notícias atuais sem depender de legendas',
      'Jogos interativos e storytelling lúdico nas turmas infantis',
      'Treinamento prático de pronúncia e redução de vícios de linguagem',
    ],
    levels: [
      {
        level: 'A1',
        title: 'Iniciante (Starter)',
        whatYouLearn: 'Cumprimentos, apresentações pessoais, números, rotinas simples e vocabulário imediato para sobrevivência.',
      },
      {
        level: 'A2',
        title: 'Básico (Elementary)',
        whatYouLearn: 'Falar sobre passado e planos futuros, fazer compras, dar direções e descrever experiências simples.',
      },
      {
        level: 'B1',
        title: 'Intermediário (Intermediate)',
        whatYouLearn: 'Expressar opiniões fundamentadas, lidar com viagens no exterior e participar de reuniões de trabalho cotidianas.',
      },
      {
        level: 'B2',
        title: 'Independente (Upper Intermediate)',
        whatYouLearn: 'Debater temas complexos, defender pontos de vista com nuances e produzir textos claros e detalhados.',
      },
      {
        level: 'C1',
        title: 'Avançado (Proficient)',
        whatYouLearn: 'Comunicação fluida e espontânea em ambientes acadêmicos e executivos de alto nível, com vocabulário idiomático refinado.',
      },
    ],
    usefulPhrases: [
      {
        phrase: 'Could you please repeat that more slowly?',
        hint: 'Para quando alguém falar rápido demais',
        translation: 'Você poderia, por favor, repetir um pouco mais devagar?',
      },
      {
        phrase: "I'd like to book a table for two, please.",
        hint: 'Situação de restaurante em viagens',
        translation: 'Gostaria de reservar uma mesa para dois, por favor.',
      },
      {
        phrase: "What do you mean by that?",
        hint: 'Para esclarecer um ponto em uma conversa',
        translation: 'O que você quer dizer com isso?',
      },
      {
        phrase: 'Sounds like a plan! Let’s catch up tomorrow.',
        hint: 'Expressão informal muito comum no dia a dia',
        translation: 'Parece ótimo! Vamos nos falar amanhã.',
      },
    ],
    highlights: [
      'Foco total na conversação aplicada',
      'Material moderno e dinâmico',
      'Opções de turmas em condomínios, online e corporativas',
    ],
  },
  {
    id: 'espanhol',
    slug: 'espanhol',
    name: 'Espanhol',
    badge: 'Comunicação Ibero-Americana',
    shortDescription: 'Supere o "portunhol" e desenvolva fluência verdadeira para conexões latinas, negócios e lazer.',
    longDescription: 'A proximidade entre o português e o espanhol pode ser uma armadilha. Nosso curso foca justamente em diferenciar falsos amigos (falsos cognatos), dominar a pronúncia autêntica e permitir que você se expresse com naturalidade.',
    targetAudience: 'Profissionais em empresas com atuação na América Latina ou Espanha, viajantes que querem explorar o continente e amantes da cultura hispânica.',
    typicalActivities: [
      'Simulações de negociação e apresentações corporativas em espanhol',
      'Desafios de falsos cognatos (embarazada, acordar, propina, etc.)',
      'Imersão musical e análise de expressões idiomáticas de diferentes países (Argentina, México, Espanha, Colômbia)',
      'Diálogos cotidianos com ênfase na entonação e ritmo nativo',
    ],
    levels: [
      {
        level: 'A1',
        title: 'Acceso (Iniciante)',
        whatYouLearn: 'Saudações, dados pessoais, pedir informações na rua e fazer pedidos em cafeterias.',
      },
      {
        level: 'A2',
        title: 'Plataforma (Básico)',
        whatYouLearn: 'Falar de acontecimentos recentes, descrever hábitos do passado e fazer reservas.',
      },
      {
        level: 'B1',
        title: 'Umbral (Intermediário)',
        whatYouLearn: 'Contar histórias, expressar sentimentos, desejos e argumentar sobre assuntos de interesse.',
      },
      {
        level: 'B2',
        title: 'Avanzado (Independente)',
        whatYouLearn: 'Conversar com fluência com nativos, entender jornais e redigir propostas com vocabulário preciso.',
      },
    ],
    usefulPhrases: [
      {
        phrase: '¿Me podría indicar cómo llegar a la estación?',
        hint: 'Perguntando por caminhos na rua',
        translation: 'Você poderia me indicar como chegar à estação?',
      },
      {
        phrase: 'La comida estuvo exquisita, ¡muchas gracias!',
        hint: 'Cuidado: "exquisita" significa deliciosa!',
        translation: 'A comida estava deliciosa, muito obrigado(a)!',
      },
      {
        phrase: 'Me alegro mucho de verte de nuevo.',
        hint: 'Ao reencontrar um amigo ou colega',
        translation: 'Fico muito feliz em ver você novamente.',
      },
      {
        phrase: '¿A qué hora empieza la reunión?',
        hint: 'Para o ambiente corporativo',
        translation: 'A que horas começa a reunião?',
      },
    ],
    highlights: [
      'Fim definitivo do portunhol',
      'Foco em pronúncia e vocabulário regional',
      'Formatos flexíveis online e presenciais em SBC',
    ],
  },
  {
    id: 'frances',
    slug: 'frances',
    name: 'Francês',
    badge: 'Elegância e Carreira Global',
    shortDescription: 'Descubra a musicalidade da língua francesa com método leve, prático e sem intimidação.',
    longDescription: 'O francês é uma das línguas oficiais de dezenas de organizações internacionais e porta de entrada para uma rica cultura artística, gastronômica e científica. Na Snowfield, você aprende a sonoridade francesa de forma intuitiva e divertida.',
    targetAudience: 'Estudantes interessados em intercâmbio (França, Canadá, Suíça), viajantes e entusiastas de gastronomia, moda e literatura.',
    typicalActivities: [
      'Exercícios guiados de fonética para destravar os sons nasais e o "R" francês',
      'Simulação de visitas a museus, bistrôs e compras em feiras de bairro',
      'Interpretação de crônicas culturais e músicas contemporâneas',
      'Prática de escrita de e-mails formais e informais',
    ],
    levels: [
      {
        level: 'A1',
        title: 'Découverte (Iniciante)',
        whatYouLearn: 'Pronúncia básica, saudações, pedir um café, dizer de onde você é e sua profissão.',
      },
      {
        level: 'A2',
        title: 'Survie (Básico)',
        whatYouLearn: 'Descrever viagens passadas, pedir orientações e manter diálogos curtos sobre a rotina.',
      },
      {
        level: 'B1',
        title: 'Seuil (Intermediário)',
        whatYouLearn: 'Dar conselhos, justificar pontos de vista e viajar pela França com autonomia completa.',
      },
      {
        level: 'B2',
        title: 'Indépendant (Avançado)',
        whatYouLearn: 'Compreender conferências, palestras e defender projetos profissionais em francês.',
      },
    ],
    usefulPhrases: [
      {
        phrase: "Je voudrais un croissant et un café au lait, s'il vous plaît.",
        hint: 'O clássico pedido na padaria francesa',
        translation: 'Eu gostaria de um croissant e um café com leite, por favor.',
      },
      {
        phrase: "Pouvez-vous m'aider, s'il vous plaît ?",
        hint: 'Pedindo ajuda educadamente',
        translation: 'Você pode me ajudar, por favor?',
      },
      {
        phrase: "C'est une excellente idée !",
        hint: 'Concordando com entusiasmo',
        translation: 'É uma excelente ideia!',
      },
      {
        phrase: 'Enchanté de faire votre connaissance.',
        hint: 'Ao ser apresentado a alguém',
        translation: 'Muito prazer em conhecê-lo(a).',
      },
    ],
    highlights: [
      'Aulas com foco em destravar a fala',
      'Acompanhamento fonético passo a passo',
      'Personalização de acordo com sua viagem ou meta acadêmica',
    ],
  },
  {
    id: 'alemao',
    slug: 'alemao',
    name: 'Alemão',
    badge: 'Tecnologia e Engenharia',
    shortDescription: 'Desmistifique a gramática alemã com um método visual, direto e focado no uso prático.',
    longDescription: 'Muito se fala sobre a complexidade do alemão, mas a lógica germânica é estruturada e incrivelmente coerente. Nosso curso desmistifica as declinações e palavras compostas através de exemplos práticos do cotidiano e do ambiente de negócios.',
    targetAudience: 'Engenheiros, profissionais de TI e da indústria automobilística do ABC Paulista, estudantes que buscam pós-graduação na Alemanha, Áustria ou Suíça.',
    typicalActivities: [
      'Construção de blocos lógicos de frases e vocabulário temático',
      'Role-play de entrevistas de emprego e rotina de escritório em empresas alemãs',
      'Atividades com mapas, meios de transporte e compras no supermercado',
      'Prática de áudio com diálogos do dia a dia',
    ],
    levels: [
      {
        level: 'A1',
        title: 'Start Deutsch 1',
        whatYouLearn: 'Apresentar-se, fazer compras no mercado, horas, preços e preenchimento de formulários simples.',
      },
      {
        level: 'A2',
        title: 'Start Deutsch 2',
        whatYouLearn: 'Descrever ambiente de trabalho, falar sobre o passado, marcar compromissos e saúde.',
      },
      {
        level: 'B1',
        title: 'Zertifikat Deutsch (Intermediário)',
        whatYouLearn: 'Compreensão de informações sobre trabalho, escola e lazer. Autonomia total em viagens.',
      },
    ],
    usefulPhrases: [
      {
        phrase: 'Entschuldigung, wie viel kostet das?',
        hint: 'Perguntando o valor de um item',
        translation: 'Com licença, quanto custa isso?',
      },
      {
        phrase: 'Ich hätte gerne ein Glas Wasser.',
        hint: 'Pedindo uma bebida educadamente',
        translation: 'Eu gostaria de um copo de água.',
      },
      {
        phrase: 'Ich lerne Deutsch bei Snowfield Languages!',
        hint: 'Compartilhando seu aprendizado',
        translation: 'Eu aprendo alemão na Snowfield Languages!',
      },
      {
        phrase: 'Alles klar, vielen Dank!',
        hint: 'Expressão clássica de confirmação e agradecimento',
        translation: 'Tudo certo, muito obrigado!',
      },
    ],
    highlights: [
      'Método focado na superação do medo da gramática',
      'Excelente para profissionais de tecnologia e engenharia',
      'Aulas online para todo o país e presenciais em SBC',
    ],
  },
  {
    id: 'italiano',
    slug: 'italiano',
    name: 'Italiano',
    badge: 'Cultura, Gastronomia e Cidadania',
    shortDescription: 'Mergulhe no ritmo e expressividade da língua italiana com aulas acolhedoras e divertidas.',
    longDescription: 'Aprender italiano é um verdadeiro prazer sensorial. Seja para obter a cidadania italiana, viajar pelas regiões da Itália ou se conectar com a história dos seus antepassados, nossas aulas combinam vivência cultural com conversação desde a primeira sessão.',
    targetAudience: 'Pessoas em processo de cidadania italiana, viajantes apaixonados por arte e gastronomia, e jovens e adultos que buscam um idioma afetuoso e acolhedor.',
    typicalActivities: [
      'Exploração de dialetos, gestos e particularidades regionais da Itália',
      'Leitura de receitas típicas e vocabulário culinário prático',
      'Simulação de viagens por Roma, Florença, Milão e costa amalfitana',
      'Diálogos espontâneos sobre família, arte, história e cotidiano',
    ],
    levels: [
      {
        level: 'A1',
        title: 'Elementare (Iniciante)',
        whatYouLearn: 'Saudações, números, pedir comida em trattorias, dizer a origem e hábitos diários.',
      },
      {
        level: 'A2',
        title: 'Pre-intermedio (Básico)',
        whatYouLearn: 'Expressar preferências, falar sobre férias passadas e descrever memórias de família.',
      },
      {
        level: 'B1',
        title: 'Intermedio (Intermediário)',
        whatYouLearn: 'Fluência conversacional para lidar com situações de imigração, entrevistas de cidadania e debates culturais.',
      },
    ],
    usefulPhrases: [
      {
        phrase: 'Un caffè e un cornetto, per favore.',
        hint: 'O café da manhã clássico na Itália',
        translation: 'Um café e um croissant (cornetto), por favor.',
      },
      {
        phrase: 'È un piacere conoscerti!',
        hint: 'Para criar amigos e conexões',
        translation: 'É um prazer conhecer você!',
      },
      {
        phrase: 'Dov’è la fermata dell’autobus più vicina?',
        hint: 'Procurando transporte na cidade',
        translation: 'Onde fica o ponto de ônibus mais próximo?',
      },
      {
        phrase: 'Mamma mia, che bello!',
        hint: 'Expressão de surpresa e admiração',
        translation: 'Nossa, que lindo!',
      },
    ],
    highlights: [
      'Aulas descontraídas e cheias de cultura',
      'Preparação para processo de cidadania italiana',
      'Metodologia comunicativa sem decoreba',
    ],
  },
];
