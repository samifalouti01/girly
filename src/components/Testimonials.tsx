import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  rating: number;
  avatarSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Static testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 'test-001',
      name: 'Sarah Mitchell',
      title: 'Marketing Director',
      content: "I've never felt more confident in my workwear. The tailored fit and premium fabric of the 'Rose Garden Slim Fit' pants are absolutely exceptional. They've become my go-to piece for every important meeting.",
      rating: 5,
      avatarSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Sarah wearing Rose Garden Slim Fit pants in office setting',
    },
    {
      id: 'test-002',
      name: 'Emily Chen',
      title: 'Fashion Blogger',
      content: "Girly Pants Boutique completely transformed my wardrobe! The 'Summer Breeze Wide Leg' pants are incredibly comfortable and stylish. I've recommended this collection to all my followers.",
      rating: 5,
      avatarSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Emily in Summer Breeze pants at beach resort',
    },
    {
      id: 'test-003',
      name: 'Jessica Rodriguez',
      title: 'Executive Assistant',
      content: "Finding pants that fit perfectly has always been a challenge until I discovered Girly Pants. The 'Midnight Elegance Trousers' hug my curves in all the right places. Quality is unmatched.",
      rating: 5,
      avatarSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Jessica wearing Midnight Elegance trousers at dinner event',
    },
    {
      id: 'test-004',
      name: 'Amanda Foster',
      title: 'Yoga Instructor',
      content: "The 'Active Flex Yoga Pants' are a game-changer for my practice. They offer incredible stretch without losing shape, and the moisture-wicking fabric keeps me comfortable during intense sessions.",
      rating: 5,
      avatarSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Amanda in Active Flex pants during yoga session',
    },
    {
      id: 'test-005',
      name: 'Nicole Thompson',
      title: 'Small Business Owner',
      content: "I purchased the 'Blossom Casual Chinos' for weekend outings and they're perfect. Comfortable enough for all-day wear but chic enough for spontaneous meetings. Love the fit and color!",
      rating: 5,
      avatarSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Nicole wearing Blossom Casual Chinos on weekend trip',
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      } else if (e.key === 'ArrowRight') {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section
      className={`py-16 md:py-24 bg-gray-50 ${className}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Real stories from women who found their perfect fit and confidence with our premium collection.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={containerRef}
          className="relative"
          aria-live="polite"
          aria-roledescription="carousel"
        >
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Image */}
              {activeTestimonial.imageSrc && (
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                    <img
                      src={activeTestimonial.imageSrc}
                      alt={activeTestimonial.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-pink-100">
                    <div className="flex items-center gap-1">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Right: Content */}
              <div className="flex flex-col">
                {/* Quote Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 flex-shrink-0">
                    <Quote size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">{activeTestimonial.title}</p>
                  </div>
                </div>

                {/* Content */}
                <blockquote className="relative mb-6 p-4 bg-rose-50 border-l-4 border-pink-500 rounded-r-lg">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed italic">
                    "{activeTestimonial.content}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  {activeTestimonial.avatarSrc && (
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-200 bg-gray-100 flex-shrink-0">
                      <img
                        src={activeTestimonial.avatarSrc}
                        alt={`${activeTestimonial.name}'s avatar`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {!activeTestimonial.avatarSrc && (
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-200 bg-pink-100 flex-shrink-0 flex items-center justify-center text-pink-500">
                      <User size={24} />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{activeTestimonial.name}</p>
                    <p className="text-xs text-gray-500">{activeTestimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 ${
                    index === currentIndex
                      ? 'bg-pink-500 w-8 shadow-md'
                      : 'bg-gray-300 hover:bg-pink-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Auto-play toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="text-sm text-gray-500 hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded px-2 py-1"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoPlaying ? 'Auto-playing (click to pause)' : 'Paused (click to play)'}
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>500+ Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
export type { TestimonialsProps, Testimonial };