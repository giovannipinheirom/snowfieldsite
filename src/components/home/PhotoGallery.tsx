import React from 'react';
import Image from 'next/image';

const photos = [
  { src: '/fotos/kids-lego.jpg', alt: 'Crianças aprendendo inglês brincando com blocos de montar', caption: 'aprender brincando', span: 'col-span-2 row-span-2', rot: '-1deg' },
  { src: '/fotos/corporativo-reuniao-online.jpg', alt: 'Aula corporativa com participante remoto', caption: 'inglês para reunião', span: '', rot: '1.5deg' },
  { src: '/fotos/kids-jogo-tabuleiro.jpg', alt: 'Crianças jogando jogo de tabuleiro em inglês', caption: 'jogo de tabuleiro em inglês', span: '', rot: '-2deg' },
  { src: '/fotos/online-escritorio.jpg', alt: 'Aluno em aula online no escritório', caption: 'aula online', span: '', rot: '2deg' },
  { src: '/fotos/kids-mesa-condominio.jpg', alt: 'Crianças em atividade de leitura com a professora', caption: 'hora da história', span: '', rot: '1deg' },
  { src: '/fotos/kids-turma-acenando.jpg', alt: 'Turma de crianças com a professora no condomínio', caption: 'turma do condomínio', span: 'col-span-2', rot: '-1deg' },
  { src: '/fotos/kids-turma-professoras.jpg', alt: 'Turma de crianças com duas professoras', caption: 'kids & teens', span: 'col-span-2', rot: '1.5deg' },
];

export const PhotoGallery: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-secondary-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
              Como é uma aula
            </h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600">
              No salão de festas do condomínio, na sala de reunião da empresa ou na mesa da sua casa. Muda o lugar, a aula continua leve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-4 sm:gap-5">
          {photos.map((p) => (
            <figure
              key={p.src}
              className={`group relative rounded-2xl overflow-hidden shadow-lg ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
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
