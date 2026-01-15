import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import Card from './Card';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface TestimonialsSectionProps {
  // No specific props needed for this component
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Tech Enthusiast',
    content: 'DarkCommerce completely revolutionized my shopping experience. The interface is stunning, and the checkout process was seamless. Highly recommended!',
    rating: 5,
    avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'UX Designer',
    content: 'As a designer, I appreciate the attention to detail. The dark mode implementation is perfect, and the animations are buttery smooth. A+ experience.',
    rating: 5,
    avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Early Adopter',
    content: 'The product quality exceeds expectations, and the support team is incredibly responsive. This is how e-commerce should be done in 2024.',
    rating: 5,
    avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Developer',
    content: 'Built with modern tech stack and it shows. Fast, accessible, and beautiful. The mobile experience is particularly impressive.',
    rating: 5,
    avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Product Manager',
    content: 'Finally, an e-commerce platform that understands user needs. The filtering and search capabilities are exactly what I was looking for.',
    rating: 5,
    avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  },
  {
    id: 6,
    name: 'James Miller',
    role: 'Photographer',
    content: 'The visual design is exceptional. It really showcases the products beautifully. Plus, the shipping was faster than advertised!',
    rating: 5,
    avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} 
      />
    ));
  };

  return (
    <section 
      id="testimonials-section"
      className="w-full py-20 bg-slate-900 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="testimonials-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real feedback from real users. Join thousands of satisfied customers who trust DarkCommerce.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((testimonial, index) => {
            const delay = index * 100;
            return (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 transform ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <Card className="h-full p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden">
                  
                  {/* Quote decoration */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-700 opacity-50" />
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center">
                        <ThumbsUp className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-slate-400 text-xs">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-slate-300 text-sm leading-relaxed flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Verified badge */}
                  <div className="mt-4 pt-3 border-t border-slate-700/50">
                    <span className="text-xs text-emerald-400 font-medium">✓ Verified Purchase</span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-400 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="text-center py-8 border-indigo-500/20">
            <div className="text-4xl font-bold text-indigo-400 mb-2">4.9/5</div>
            <div className="text-sm text-slate-400">Average Rating</div>
            <div className="flex justify-center mt-3 gap-0.5">
              {renderStars(5)}
            </div>
          </Card>
          
          <Card className="text-center py-8 border-emerald-500/20">
            <div className="text-4xl font-bold text-emerald-400 mb-2">10k+</div>
            <div className="text-sm text-slate-400">Happy Customers</div>
            <div className="text-xs text-slate-500 mt-2">And growing daily</div>
          </Card>
          
          <Card className="text-center py-8 border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
            <div className="text-sm text-slate-400">Return Rate</div>
            <div className="text-xs text-slate-500 mt-2">Customer loyalty</div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;