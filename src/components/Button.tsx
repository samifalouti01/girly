import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  type = 'button',
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out';
  
  const variantStyles = {
    primary: `bg-pink-500 text-white hover:bg-pink-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md`,
    secondary: `bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md`,
    tertiary: `bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-pink-500`,
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;