import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  name?: string;
  required?: boolean;
  className?: string;
  multiline?: boolean;
  rows?: number;
  id?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  name,
  required = false,
  className = '',
  multiline = false,
  rows = 4,
  id,
  disabled = false,
  ariaLabel,
}) => {
  const baseInputStyles = 'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  const inputProps = {
    id: inputId,
    name,
    value,
    onChange,
    required,
    disabled,
    className: `${baseInputStyles} ${className}`,
    placeholder,
    'aria-label': ariaLabel || (label ? label : placeholder),
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-pink-500 ml-1">*</span>}
        </label>
      )}
      
      {multiline ? (
        <textarea
          {...inputProps}
          rows={rows}
          aria-invalid="false"
        />
      ) : (
        <input
          type={type}
          {...inputProps}
          aria-invalid="false"
        />
      )}
    </div>
  );
};

export default Input;
export type { InputProps };