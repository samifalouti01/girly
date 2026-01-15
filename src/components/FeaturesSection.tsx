import React from 'react';
import { 
  Bolt, 
  ShieldCheck, 
  Brush, 
  Smartphone, 
  Zap, 
  Heart, 
  Gift,
  Clock,
  ArrowRight 
} from 'lucide-react';
import Card from './Card';
import Button from './Button';

export interface FeaturesSectionProps {
  onExploreProducts: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreProducts }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const mainFeatures = [
    {
      icon: Bolt,
      title: 'Blazing Fast Performance',
      description: 'Optimized for speed with instant page loads and smooth animations powered by modern web technologies.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-600/10',
      delay: 0
    },
    {
      icon: ShieldCheck,
      title: 'Military-Grade Security',
      description: 'Advanced encryption and secure payment processing ensure your data and transactions are always protected.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-600/10',
      delay: 100
    },
    {
      icon: Brush,
      title: 'Premium Dark Design',
      description: 'Eye-friendly dark mode interface with carefully crafted color palettes and smooth transitions.',
      color: 'text-purple-400',
      bg: 'bg-purple-600/10',
      delay: 200
    },
    {
      icon: Smartphone,
      title: 'Fully Responsive',
      description: 'Seamless experience across all devices, from mobile phones to large desktop displays.',
      color: 'text-pink-400',
      bg: 'bg-pink-600/10',
      delay: 300
    }
  ];

  const benefitFeatures = [
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Real-time inventory and pricing updates',
      color: 'text-yellow-400'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: '24/7 dedicated support team',
      color: 'text-rose-400'
    },
    {
      icon: Gift,
      title: 'Exclusive Rewards',
      description: 'Loyalty program with special perks',
      color: 'text-indigo-400'
    },
    {
      icon: Clock,
      title: 'Fast Shipping',
      description: 'Express delivery worldwide',
      color: 'text-emerald-400'
    }
  ];

  return (
    <section 
      id="features-section"
      className="w-full py-20 bg-slate-900 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-indigo-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="features-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Why Choose DarkCommerce
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Experience the pinnacle of e-commerce technology with features designed for the modern user.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`transition-all duration-700 transform ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <Card className="h-full p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Benefit Highlights */}
        <div className={`transition-all duration-700 delay-400 transform mb-16 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="p-8 bg-gradient-to-r from-slate-800/50 to-slate-800 border-indigo-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefitFeatures.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex flex-col items-center text-center space-y-2">
                    <Icon className={`w-5 h-5 ${benefit.color}`} />
                    <div className="text-sm font-semibold text-white">{benefit.title}</div>
                    <div className="text-xs text-slate-400">{benefit.description}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Technology Stack */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-700 delay-500 transform mb-16 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="p-8">
            <h3 className="text-xl font-bold text-white mb-4">Built with Modern Tech</h3>
            <p className="text-slate-400 mb-6">
              Our platform leverages cutting-edge technologies to deliver a seamless experience:
            </p>
            <div className="space-y-3">
              {[
                'React 18 with TypeScript',
                'Vite Build System',
                'Tailwind CSS Framework',
                'Lucide Icon System'
              ].map((tech, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  <span className="text-slate-300 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center border border-indigo-500/30">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Performance Optimized</h4>
              <p className="text-slate-400 text-sm">
                Achieving 95+ Lighthouse scores across all metrics for optimal user experience.
              </p>
              <Button 
                variant="primary" 
                size="medium"
                onClick={onExploreProducts}
                className="group mt-2"
              >
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Accessibility Commitment */}
        <div className={`transition-all duration-700 delay-600 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="p-6 bg-slate-800/30 border-l-4 border-l-indigo-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Accessibility First</h4>
                  <p className="text-slate-400 text-sm">
                    Built with WCAG compliance, reduced motion support, and keyboard navigation.
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-500">
                Supports <span className="text-indigo-400 font-medium">prefers-reduced-motion</span>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;