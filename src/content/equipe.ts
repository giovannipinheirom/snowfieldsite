/**
 * EQUIPE SNOWFIELD LANGUAGES
 * Fonte: CV institucional Snowfield 2026 ("Quem faz a escola").
 */
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  languages: string[];
  bio: string;
  funFact: string;
  photo: string;
}

export const teamData: TeamMember[] = [
  {
    slug: 'nanda',
    name: 'Nanda',
    role: 'Professora',
    languages: ['Inglês', 'Alemão'],
    bio: 'Gosta de música lírica, fazer trilha e chás. Dá suas aulas on-line na companhia de Cheddar, seu gato.',
    funFact: 'dá aula com o gato por perto',
    photo: '/equipe/nanda.jpg',
  },
  {
    slug: 'barbara',
    name: 'Bárbara',
    role: 'Professora',
    languages: ['Português', 'Inglês', 'Espanhol', 'Italiano'],
    bio: 'Fã de MPB, gastronomia e cantar, Bárbara frequenta shows, bons restaurantes e ama um karaokê. Por isso em suas aulas sempre tem música.',
    funFact: 'sempre tem música na aula',
    photo: '/equipe/barbara.jpg',
  },
  {
    slug: 'bella',
    name: 'Bella',
    role: 'Professora',
    languages: ['Inglês'],
    bio: 'Bella é artista e ama crianças. Comunicativa e divertida, as crianças adoram a teacher Bella.',
    funFact: 'a teacher das crianças',
    photo: '/equipe/bella.jpg',
  },
  {
    slug: 'isadora',
    name: 'Isadora',
    role: 'Professora',
    languages: ['Inglês', 'Francês'],
    bio: 'Apaixonada por animais, Isadora adora viajar. Ela gosta de criar jogos para as aulas e brincar com os alunos.',
    funFact: 'cria os jogos das aulas',
    photo: '/equipe/isadora.jpg',
  },
  {
    slug: 'priscila',
    name: 'Priscila',
    role: 'Professora',
    languages: ['Inglês', 'Francês', 'Japonês'],
    bio: 'Priscila compartilha experiências contando histórias em suas aulas, deixando seus alunos sempre interessados no idioma.',
    funFact: 'ensina contando histórias',
    photo: '/equipe/priscila.jpg',
  },
  {
    slug: 'manoela',
    name: 'Manoela',
    role: 'Atendimento & Redes Sociais',
    languages: [],
    bio: 'Santista roxa, a Manu é quem vai responder suas mensagens e usar toda a sua criatividade em nossas redes sociais.',
    funFact: 'quem te atende no WhatsApp',
    photo: '/equipe/manoela.jpg',
  },
];
