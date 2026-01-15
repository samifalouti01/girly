import React from 'react';
import { Award, Users, Zap, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import Card from './Card';

export interface AboutSectionProps {
  onNavigateToContact: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateToContact }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '5+', label: 'Years Experience', icon: Award, color: 'text-indigo-400' },
    { value: '10k+', label: 'Happy Customers', icon: Users, color: 'text-emerald-400' },
    { value: '99.9%', label: 'Uptime', icon: Zap, color: 'text-pink-400' },
    { value: '50+', label: 'Countries Served', icon: Globe, color: 'text-purple-400' },
  ];

  const values = [
    'Innovation at the core of every product',
    'Customer satisfaction is our top priority',
    'Sustainable and ethical business practices',
    'Continuous improvement and evolution',
    'Premium quality without compromise'
  ];

  return (
    <section 
      id="about-section"
      className="w-full py-20 bg-slate-900 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="about-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            About DarkCommerce
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We are pioneers in the digital marketplace, redefining how you shop with cutting-edge technology and exceptional service.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-700 delay-100 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="p-8 md:p-12 text-center border-indigo-500/30">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center border border-indigo-500/50">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To deliver the most advanced e-commerce experience by combining premium product curation, 
                lightning-fast performance, and a visually stunning dark-mode interface that adapts to the modern user.
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-700 delay-200 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="text-center py-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Core Values & CTA */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-300 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Values List */}
          <Card className="p-8">
            <h3 className="text-xl font-bold text-white mb-6">Our Core Values</h3>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{value}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* CTA Card */}
          <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-indigo-900/20 border-indigo-500/30 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
            <p className="text-slate-400 mb-6">
              Join thousands of satisfied customers experiencing the future of e-commerce today.
            </p>
            <button
              onClick={onNavigateToContact}
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 group"
              aria-label="Contact us to get started"
            >
              Contact Us
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;