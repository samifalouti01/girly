import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-20 right-4 md:bottom-8 md:right-8 
        z-50 
        w-12 h-12 
        bg-pink-500 text-white 
        rounded-full 
        shadow-lg 
        flex items-center justify-center 
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}
        hover:bg-pink-600 hover:shadow-xl hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-pink-300
        ${className}
      `}
      aria-label="Scroll to top of page"
      aria-label-hidden={!isVisible}
      role="button"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTop;
export type { ScrollToTopProps };