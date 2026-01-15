import React from 'react';
import { ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import Button from './Button';

interface HeroSectionProps {
  onExploreClick: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, className = '' }) => {
  return (
    <section
      className={`relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>New Collection 2024</span>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Elevate Your Style with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Premium Pants
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our curated collection of elegant women's pants. From sophisticated workwear to chic casual styles, find the perfect fit for every occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                onClick={onExploreClick}
                className="group flex items-center justify-center gap-2"
                ariaLabel="Explore our collection of premium pants"
              >
                <span>Explore Collection</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="tertiary"
                onClick={() => console.log('View Lookbook clicked')}
                className="flex items-center justify-center gap-2"
                ariaLabel="View our latest lookbook"
              >
                <ShoppingBag size={18} />
                <span>View Lookbook</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-pink-100">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Premium Fabrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Perfect Fit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-pink-100 p-4 md:p-6 transform hover:scale-[1.02] transition-all duration-500 ease-out">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 aspect-[4/3] md:aspect-square">
                <img
                  src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  alt="Elegant woman wearing premium pink pants from Girly Pants Boutique"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="eager"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-pink-600">99%</span>
                    <span className="text-xs text-gray-600">Satisfaction</span>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-purple-600">50+</span>
                    <span className="text-xs text-gray-600">Styles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-4 w-20 h-20 bg-pink-200 rounded-2xl opacity-50 animate-bounce"></div>
            <div className="absolute -z-10 bottom-10 -left-4 w-16 h-16 bg-purple-200 rounded-2xl opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-500 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
export type { HeroSectionProps };