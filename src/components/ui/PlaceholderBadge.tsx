import React from 'react';

interface PlaceholderBadgeProps {
  text: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({ text, className = '' }) => {
  return (
    <span 
      className={`inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-dashed border-amber-400 px-2 py-0.5 rounded text-xs font-mono font-medium ${className}`}
      title="Dado pendente de confirmação / material institucional real"
    >
      {text}
    </span>
  );
};
