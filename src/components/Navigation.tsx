import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Home, Info, LayoutGrid, ChevronDown } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setIsCatalogView: (isCatalog: boolean) => void;
  isCatalogView: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  setIsCatalogView,
  isCatalogView,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for desktop navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when section changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, isCatalogView]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: LayoutGrid },
    { id: 'featured', label: 'Featured', icon: ShoppingBag },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavigation = (section: string) => {
    if (section === 'catalog') {
      setIsCatalogView(true);
      setActiveSection('home');
    } else {
      setIsCatalogView(false);
      setActiveSection(section);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsCatalogView(false);
    setActiveSection('home');
  };

  const desktopNavClasses = `fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 py-4 z-50 transition-all duration-300 ${
    isScrolled ? 'py-2 shadow-lg' : ''
  }`;

  const mobileNavClasses = 'fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 z-50 md:hidden';

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={desktopNavClasses} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-lg p-1"
              aria-label="Girly Pants Boutique - Home"
            >
              <span className="text-2xl font-extrabold text-pink-500">G</span>
              <span className="hidden sm:block text-xl font-bold text-gray-800">Girly Pants</span>
            </button>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id && !isCatalogView;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`}
                    aria-label={`Navigate to ${item.label}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}

              {/* Catalog Button */}
              <button
                onClick={() => handleNavigation('catalog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isCatalogView
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 ml-2`}
                aria-label="View all products in catalog"
                aria-current={isCatalogView ? 'page' : undefined}
              >
                <ShoppingBag size={18} />
                Catalog
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-100 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={mobileNavClasses} role="navigation" aria-label="Mobile navigation">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id && !isCatalogView;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}

            {/* Mobile Catalog Button */}
            <button
              onClick={() => handleNavigation('catalog')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                isCatalogView
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300`}
              aria-label="Catalog"
              aria-current={isCatalogView ? 'page' : undefined}
            >
              <ShoppingBag size={20} />
              <span className="text-xs font-medium">Catalog</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (for full-screen menu) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-4 p-6 animate-fade-in">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-pink-600 transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id && !isCatalogView;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-pink-500 text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`}
                  aria-label={item.label}
                >
                  <Icon size={22} />
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={() => handleNavigation('catalog')}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 mt-2 ${
                isCatalogView
                  ? 'bg-purple-500 text-white shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300`}
              aria-label="View Catalog"
            >
              <ShoppingBag size={22} />
              View Catalog
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;