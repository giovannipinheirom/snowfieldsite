import React from 'react';
import { partnerCompanies } from '@/content/historia';

export const PartnersStrip: React.FC = () => {
  return (
    <section className="bg-secondary-900 text-white py-6 border-b border-secondary-800" aria-label="Empresas onde já demos aula">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-center gap-x-8 gap-y-3 text-center">
        <span className="text-sm text-secondary-300">Já demos aula para equipes da</span>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {partnerCompanies.map((c) => (
            <li key={c} className="font-bold text-lg text-white">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
