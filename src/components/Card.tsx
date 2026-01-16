import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  price?: string;
  badge?: string;
  onClick?: () => void;
  variant?: 'product' | 'category' | 'testimonial' | 'info';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = '',
  price,
  badge,
  onClick,
  variant = 'product',
  className = '',
}) => {
  const baseCardStyles = 'bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1';
  
  // Variant-specific styling
  const variantStyles = {
    product: 'flex flex-col',
    category: 'flex flex-col items-center justify-center text-center p-8',
    testimonial: 'flex flex-col items-center text-center p-8 md:p-10',
    info: 'flex flex-col md:flex-row items-center gap-6 md:gap-8',
  };

  const cardWrapperClasses = `${baseCardStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <div className="w-full">
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider rounded-full">
          {badge}
        </span>
      )}
      
      {imageSrc && variant !== 'testimonial' && (
        <div className={`relative w-full ${variant === 'category' ? 'mb-4 h-48 md:h-56' : 'mb-6 h-64 md:h-72'} overflow-hidden rounded-xl bg-gray-100`}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {variant === 'testimonial' && imageSrc && (
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-pink-200 mb-4 bg-gray-100">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
          {title}
        </h3>
        
        <p className="text-base text-gray-700 leading-relaxed mb-4 text-center md:text-left">
          {description}
        </p>

        {price && (
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span className="text-2xl font-bold text-pink-600">{price}</span>
            {onClick && (
              <button
                onClick={onClick}
                className="flex items-center gap-1 text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 rounded"
                aria-label={`View details for ${title}`}
              >
                View
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return onClick ? (
    <button
      onClick={onClick}
      className={`${cardWrapperClasses} w-full cursor-pointer text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200`}
      aria-label={title}
      role="article"
    >
      {content}
    </button>
  ) : (
    <div className={cardWrapperClasses} role="article">
      {content}
    </div>
  );
};

export default Card;
export type { CardProps };