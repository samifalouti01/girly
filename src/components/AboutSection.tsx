import React from 'react';
import { Award, Users, Heart, Zap, ChevronRight, Sparkles } from 'lucide-react';
import Button from './Button';

interface AboutSectionProps {
  onCtaClick: () => void;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onCtaClick, className = '' }) => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award, color: 'text-pink-500' },
    { number: '500+', label: 'Happy Clients', icon: Users, color: 'text-purple-500' },
    { number: '100%', label: 'Quality Assurance', icon: Heart, color: 'text-pink-500' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'text-purple-500' },
  ];

  const features = [
    {
      title: 'Premium Materials',
      description: 'We source only the finest fabrics to ensure durability, comfort, and elegance in every piece.',
      icon: Award,
    },
    {
      title: 'Sustainable Fashion',
      description: 'Our commitment to the environment means eco-friendly production methods and ethical sourcing.',
      icon: Heart,
    },
    {
      title: 'Perfect Fit Guarantee',
      description: 'Every pair of pants is tailored to flatter your silhouette and provide unmatched comfort.',
      icon: Users,
    },
    {
      title: 'Fast Delivery',
      description: 'Get your favorite styles delivered quickly and safely to your doorstep anywhere in the world.',
      icon: Zap,
    },
  ];

  return (
    <section
      id="about"
      className={`py-16 md:py-24 bg-white ${className}`}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Our Story</span>
          </div>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            About Girly Pants Boutique
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We believe every woman deserves pants that make her feel confident, comfortable, and stylish.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image & Stats */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-4 shadow-xl">
                <img
                  src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  alt="Founder of Girly Pants Boutique standing with premium pant collection"
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-pink-100 max-w-xs hidden md:block">
                <p className="text-sm font-semibold text-gray-800 italic">
                  "Fashion is about dreaming until you become someone else."
                </p>
                <p className="text-xs text-gray-500 mt-1">— Coco Chanel</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <Icon className={`mx-auto mb-2 ${stat.color}`} size={24} />
                    <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content & Features */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-600">
                We Empower Women Through Style
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Founded in 2014, Girly Pants Boutique started with a simple mission: to create premium pants that combine style, comfort, and quality. We noticed that women often struggled to find pants that fit perfectly and made them feel confident.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Today, we're proud to offer a curated collection of pants for every occasion—from office-ready trousers to weekend-chic casuals and summer florals. Every piece is designed with the modern woman in mind.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl p-5 border border-rose-100 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white shadow-md">
                        <Icon size={18} />
                      </div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                variant="primary"
                onClick={onCtaClick}
                className="group flex items-center justify-center gap-2 w-full sm:w-auto"
                ariaLabel="Explore our collection and find your perfect pair"
              >
                <span>Find Your Perfect Pair</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
export type { AboutSectionProps };