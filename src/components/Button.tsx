import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Base styles
  const baseClasses = 'inline-flex items-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  // Variant styles
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/20',
    secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:-translate-y-0.5',
    tertiary: 'bg-transparent text-indigo-400 hover:text-indigo-300 hover:-translate-y-0.5 underline decoration-indigo-500/50 hover:decoration-indigo-400',
    success: 'bg-emerald-600 text-white hover:bg-emerald-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/20',
    error: 'bg-rose-600 text-white hover:bg-rose-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-600/20',
  };
  
  // Size styles
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-5 py-2.5 text-sm',
    large: 'px-7 py-3.5 text-base md:text-lg',
  };

  // Combine all classes
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;