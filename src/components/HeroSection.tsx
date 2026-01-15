import React from 'react';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import Button from './Button';

export interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '200ms' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen E-Commerce Experience</span>
          </div>

          {/* Main Heading */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Discover the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Digital Shopping
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Experience premium products with animated interactions, secure checkout, 
            and a design that adapts seamlessly to your device. Dark mode optimized.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="primary" 
              size="large"
              onClick={onGetStarted}
              className="group"
              aria-label="Get started with shopping"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Learn more about features"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 w-full max-w-3xl">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
              <Zap className="w-6 h-6 text-indigo-400" />
              <span className="text-sm font-medium text-slate-300">Lightning Fast</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: '100ms' }}>
              <Shield className="w-6 h-6 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Secure & Safe</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: '200ms' }}>
              <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full" />
              <span className="text-sm font-medium text-slate-300">Premium Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;