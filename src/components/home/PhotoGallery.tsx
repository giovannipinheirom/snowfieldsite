import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

const photos = [
  { src: '/fotos/kids-lego.jpg', alt: 'Crianças aprendendo inglês brincando com blocos de montar', caption: 'aprender brincando', span: 'col-span-2 row-span-2', rot: '-1deg' },
  { src: '/fotos/corporativo-reuniao-online.jpg', alt: 'Aula corporativa com participante remoto', caption: 'inglês para reuniões reais', span: '', rot: '1.5deg' },
  { src: '/fotos/kids-jogo-tabuleiro.jpg', alt: 'Crianças jogando jogo de tabuleiro em inglês', caption: 'game time!', span: '', rot: '-2deg' },
  { src: '/fotos/online-escritorio.jpg', alt: 'Aluno em aula online no escritório', caption: 'online, de onde você estiver', span: '', rot: '2deg' },
  { src: '/fotos/kids-mesa-condominio.jpg', alt: 'Crianças em atividade de leitura com a professora', caption: 'storytelling', span: '', rot: '1deg' },
  { src: '/fotos/kids-turma-acenando.jpg', alt: 'Turma de crianças com a professora no condomínio', caption: 'turma do condomínio 👋', span: 'col-span-2', rot: '-1deg' },
  { src: '/fotos/kids-turma-professoras.jpg', alt: 'Turma de crianças com duas professoras', caption: 'kids & teens', span: 'col-span-2', rot: '1.5deg' },
];

export const PhotoGallery: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50/50 border-b border-secondary-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-600 mb-2">
              <Camera className="w-4 h-4" /> Um dia na Snowfield
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
              Sala de aula é onde o aluno está
            </h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600">
              No salão de festas do condomínio, na sala de reunião da empresa ou na mesa da sua casa. O que muda é o cenário — a leveza é a mesma.
            </p>
          </div>
          <span className="font-hand text-2xl text-primary-500 -rotate-2 md:pb-2">
            sem livro engessado, prometemos ✌
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-4 sm:gap-5">
          {photos.map((p) => (
            <figure
              key={p.src}
              className={`group relative rounded-3xl overflow-hidden shadow-lg shadow-secondary-900/10 ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent" />
              <figcaption
                className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-0.5 font-hand text-lg sm:text-xl text-secondary-800 shadow"
                style={{ transform: `rotate(${p.rot})` }}
              >
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
