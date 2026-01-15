import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { CartItem, MOCK_PRODUCTS } from '../components/ProductsSection';

export interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const [transitionState, setTransitionState] = useState<'idle' | 'exiting' | 'entering'>('idle');

  // Refs for scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Initial mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll when active section changes
  useEffect(() => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      home: homeRef,
      products: productsRef,
      features: featuresRef,
      about: aboutRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    };

    const targetRef = refs[activeSection];
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [activeSection]);

  // Cart operations
  const addToCart = (product: typeof MOCK_PRODUCTS[0]) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here. This is a demo.');
    setIsCartOpen(false);
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Render sections based on activeSection with staggered animations
  const renderSections = () => {
    const sections = [
      { id: 'home', Component: HeroSection, ref: homeRef },
      { id: 'products', Component: ProductsSection, ref: productsRef },
      { id: 'features', Component: FeaturesSection, ref: featuresRef },
      { id: 'about', Component: AboutSection, ref: aboutRef },
      { id: 'testimonials', Component: TestimonialsSection, ref: testimonialsRef },
      { id: 'contact', Component: ContactSection, ref: contactRef },
    ];

    return sections.map(({ id, Component, ref }, index) => {
      // Calculate animation delay based on index for cascading effect
      const delay = index * 50;
      const isVisible = activeSection === id;

      if (!isVisible) return null;

      return (
        <div
          key={id}
          ref={ref}
          className="transition-all duration-500"
          style={{ 
            animationDelay: `${delay}ms`,
            scrollMarginTop: '80px'
          }}
        >
          {id === 'home' && (
            <HeroSection onGetStarted={() => handleNavigation('products')} />
          )}
          {id === 'products' && (
            <ProductsSection 
              onAddToCart={addToCart} 
              cartItems={cartItems} 
            />
          )}
          {id === 'features' && (
            <FeaturesSection onExploreProducts={() => handleNavigation('products')} />
          )}
          {id === 'about' && (
            <AboutSection onNavigateToContact={() => handleNavigation('contact')} />
          )}
          {id === 'testimonials' && (
            <TestimonialsSection />
          )}
          {id === 'contact' && (
            <ContactSection />
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 antialiased selection:bg-indigo-600 selection:text-white">
      {/* Background ambient gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      </div>

      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavigation}
        setIsCartOpen={setIsCartOpen}
        cartItemCount={cartItemCount}
      />

      {/* Main Content Area with transition wrapper */}
      <main 
        className="relative z-10 container mx-auto px-4 py-0"
        role="main"
      >
        {/* Hero Section is always rendered at top for visual continuity, 
            other sections are conditionally rendered below based on navigation */}
        
        {/* We render all sections for proper layout, but control visibility via CSS for smoother transitions */}
        <div className="space-y-0">
          {/* Home/Hero - Always visible as the landing point */}
          <div ref={homeRef} id="home" className="scroll-mt-20">
            <HeroSection onGetStarted={() => handleNavigation('products')} />
          </div>

          {/* Products Section - Visible when active or for layout */}
          <div 
            ref={productsRef} 
            id="products" 
            className={`scroll-mt-20 transition-opacity duration-500 ${
              activeSection === 'products' || activeSection === 'home' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            <ProductsSection 
              onAddToCart={addToCart} 
              cartItems={cartItems} 
            />
          </div>

          {/* Features Section */}
          <div 
            ref={featuresRef} 
            id="features" 
            className={`scroll-mt-20 transition-opacity duration-500 ${
              activeSection === 'features' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            <FeaturesSection onExploreProducts={() => handleNavigation('products')} />
          </div>

          {/* About Section */}
          <div 
            ref={aboutRef} 
            id="about" 
            className={`scroll-mt-20 transition-opacity duration-500 ${
              activeSection === 'about' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            <AboutSection onNavigateToContact={() => handleNavigation('contact')} />
          </div>

          {/* Testimonials Section */}
          <div 
            ref={testimonialsRef} 
            id="testimonials" 
            className={`scroll-mt-20 transition-opacity duration-500 ${
              activeSection === 'testimonials' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            <TestimonialsSection />
          </div>

          {/* Contact Section */}
          <div 
            ref={contactRef} 
            id="contact" 
            className={`scroll-mt-20 transition-opacity duration-500 ${
              activeSection === 'contact' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer - Always visible at bottom */}
      <Footer 
        onNavigate={handleNavigation} 
        setIsCartOpen={setIsCartOpen} 
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      {/* Accessibility: Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Index;