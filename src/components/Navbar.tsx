import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';

export interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  setActiveSection, 
  setIsCartOpen, 
  cartItemCount 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when section changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-slate-700 shadow-lg' 
          : 'bg-slate-900/50 backdrop-blur-sm border-transparent'
      }`}
    >
      <nav 
        className="container mx-auto px-4 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveSection('home')}
              className="flex items-center space-x-2 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg p-1"
              aria-label="Navigate to home"
            >
              <ShoppingBag className="h-6 w-6 text-indigo-500" />
              <span className="text-xl font-bold text-white tracking-tight">
                DarkCommerce
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  activeSection === item.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5'
                }`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative ml-4 flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 animate-fade-in-up">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    activeSection === item.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-slate-800/50 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-2"
                aria-label="Open shopping cart"
              >
                <span className="font-medium">Cart</span>
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-rose-600 text-[10px] font-bold text-white">
                      {cartItemCount}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;