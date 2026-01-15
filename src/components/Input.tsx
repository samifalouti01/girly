import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  required = false,
  className = '',
  value,
  onChange,
  ...props
}) => {
  const baseInputClasses = `
    w-full 
    bg-slate-900 
    border 
    rounded-lg 
    px-4 
    py-3 
    text-white 
    placeholder:text-slate-500 
    transition-all 
    duration-200 
    focus:border-indigo-500 
    focus:ring-1 
    focus:ring-indigo-500
    disabled:opacity-50 
    disabled:cursor-not-allowed
  `;

  const errorClasses = error ? 'border-rose-600 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-700 hover:border-slate-600';

  const combinedClasses = `${baseInputClasses} ${errorClasses} ${className}`;

  return (
    <div className="space-y-1">
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-slate-300"
        >
          {label}
          {required && <span className="text-indigo-400 ml-0.5">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={combinedClasses}
        aria-required={required}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-1 text-xs text-rose-400 mt-1" role="alert">
          <span className="font-bold">!</span>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;