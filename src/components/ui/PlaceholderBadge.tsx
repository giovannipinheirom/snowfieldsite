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
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
      {text}
    </span>
  );
};
