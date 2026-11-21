import React from 'react';
import { PreEnrollmentForm } from '@/components/forms/PreEnrollmentForm';
import { siteConfig } from '@/content/site';
import { MessageCircle } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-primary-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-900 tracking-tight">
              Vamos conversar?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600 max-w-xl mx-auto">
              Deixe seu contato e a gente te chama para entender o que você procura e indicar a turma certa.
            </p>
          </div>

          <PreEnrollmentForm isCompact={true} className="shadow-sm" />
        </div>
      </div>
    </section>
  );
};
