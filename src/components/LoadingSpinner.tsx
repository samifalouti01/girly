import React from 'react';

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  variant?: 'primary' | 'secondary';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  className = '',
  variant = 'primary'
}) => {
  // Size configuration mapping
  const sizeClasses: Record<string, string> = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4'
  };

  // Variant color configuration
  const variantClasses: Record<string, string> = {
    primary: 'border-indigo-600 border-t-transparent',
    secondary: 'border-slate-600 border-t-transparent'
  };

  const combinedClasses = [
    'animate-spin rounded-full',
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={combinedClasses}
      role="status"
      aria-label="Loading"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;