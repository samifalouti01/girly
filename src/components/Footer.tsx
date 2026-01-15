import React from 'react';
import { 
  ShoppingBag, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Shield,
  Lock,
  CreditCard
} from 'lucide-react';
import Button from './Button';

export interface FooterProps {
  onNavigate: (section: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, setIsCartOpen }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const quickLinks = [
    { label: 'Home', action: () => onNavigate('home') },
    { label: 'Products', action: () => onNavigate('products') },
    { label: 'Features', action: () => onNavigate('features') },
    { label: 'About', action: () => onNavigate('about') },
  ];

  const supportLinks = [
    { label: 'Contact Us', action: () => onNavigate('contact') },
    { label: 'FAQs', action: () => onNavigate('contact') },
    { label: 'Shipping Info', action: () => onNavigate('contact') },
    { label: 'Returns', action: () => onNavigate('contact') },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', action: () => console.log('Privacy') },
    { label: 'Terms of Service', action: () => console.log('Terms') },
    { label: 'Cookie Policy', action: () => console.log('Cookies') },
  ];

  const trustBadges = [
    { icon: Shield, label: 'Secure Checkout', color: 'text-emerald-400' },
    { icon: Lock, label: 'Data Protection', color: 'text-indigo-400' },
    { icon: CreditCard, label: 'Safe Payments', color: 'text-purple-400' },
  ];

  return (
    <footer 
      className="w-full bg-slate-950 border-t border-slate-800 pt-16 pb-8"
      role="contentinfo"
      aria-label="Footer navigation"
    >
      {/* Top Section with Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-700 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-indigo-500" />
              <span className="text-xl font-bold text-white tracking-tight">
                DarkCommerce
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium tech gadgets and accessories. Experience the future of e-commerce with our dark-optimized interface.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:support@darkcommerce.com" 
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-sm text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all duration-200 inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-1"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-sm text-slate-400 hover:text-indigo-400 hover:translate-x-1 transition-all duration-200 inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-1"
                    aria-label={link.label}
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>support@darkcommerce.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>San Francisco, CA 94102</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="medium"
              onClick={() => setIsCartOpen(true)}
              className="w-full justify-center mt-4 group"
              aria-label="Open shopping cart"
            >
              <span>View Cart</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-100 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index} 
                className="flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 rounded-lg py-3 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-xs font-medium text-slate-300">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-200 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DarkCommerce. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {legalLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="text-xs text-slate-500 hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-1"
                aria-label={link.label}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Accessibility Statement */}
          <div className="text-xs text-slate-600">
            <span className="text-indigo-500">●</span> WCAG 2.1 AA Compliant
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;