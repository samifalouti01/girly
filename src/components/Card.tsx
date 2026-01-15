import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  const baseClasses = 'bg-slate-800/50 border border-slate-700 rounded-xl shadow-sm overflow-hidden transition-all duration-300';
  
  const hoverClasses = hover 
    ? 'hover:shadow-lg hover:border-indigo-500/50 hover:-translate-y-1' 
    : '';

  const clickableClasses = onClick 
    ? 'cursor-pointer' 
    : 'cursor-default';

  const combinedClasses = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <div 
      className={combinedClasses}
      onClick={onClick}
      role={onClick ? 'button' : 'region'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
};

export default Card;