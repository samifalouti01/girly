import React from 'react';
import { ChevronRight, Shirt, Briefcase, Sun, Sparkles, Zap } from 'lucide-react';
import Card from './Card';

interface CategoriesSectionProps {
  onCategoryClick: (category: string) => void;
  className?: string;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onCategoryClick, className = '' }) => {
  const categories = [
    {
      title: 'Workwear',
      description: 'Sophisticated styles for the modern professional. Tailored fits and premium fabrics.',
      icon: Briefcase,
      badge: 'Formal',
      onClick: () => onCategoryClick('Workwear'),
    },
    {
      title: 'Casual',
      description: 'Relaxed and chic everyday pants. Perfect for brunch or casual outings.',
      icon: Shirt,
      badge: 'Everyday',
      onClick: () => onCategoryClick('Casual'),
    },
    {
      title: 'Summer',
      description: 'Light and breezy fabrics for warm days. Breathable and stylish.',
      icon: Sun,
      badge: 'Seasonal',
      onClick: () => onCategoryClick('Summer'),
    },
    {
      title: 'Active',
      description: 'Move with ease and style. Performance meets elegance.',
      icon: Zap,
      badge: 'Sporty',
      onClick: () => onCategoryClick('Active'),
    },
  ];

  return (
    <section
      id="categories"
      className={`py-16 md:py-24 bg-white ${className}`}
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Shop by Style</span>
          </div>
          <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect pair of pants for every occasion. From office-ready to weekend-chic, find your style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.title}
                onClick={category.onClick}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200 w-full"
                aria-label={`View ${category.title} collection`}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>

                {/* Badge */}
                <span className="inline-block mb-3 px-3 py-1 bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider rounded-full">
                  {category.badge}
                </span>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-pink-500 font-semibold text-sm group-hover:text-pink-600 transition-colors">
                    View Collection
                  </span>
                  <ChevronRight 
                    size={18} 
                    className="text-pink-500 group-hover:translate-x-1 group-hover:text-pink-600 transition-all duration-300" 
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Callout */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-pink-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-600">Don't Miss Out</h3>
                <p className="text-sm text-gray-700">Limited edition summer collection drops this Friday.</p>
              </div>
            </div>
            <button
              onClick={() => onCategoryClick('Featured')}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-pink-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 w-full md:w-auto"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
export type { CategoriesSectionProps };