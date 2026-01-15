import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import NewsletterSection from '../components/NewsletterSection';

interface HomeProps {
  setActiveSection: (section: string) => void;
  setIsCatalogView: (isCatalog: boolean) => void;
  className?: string;
}

const Home: React.FC<HomeProps> = ({ setActiveSection, setIsCatalogView, className = '' }) => {
  const handleExploreClick = () => {
    setActiveSection('categories');
    // Scroll to categories section after state update
    setTimeout(() => {
      const element = document.getElementById('categories');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleCategoryClick = (category: string) => {
    setIsCatalogView(true);
    setActiveSection('home');
    // In a real app, this would filter the catalog based on the category
    console.log(`Filtering catalog by category: ${category}`);
  };

  const handleAboutCtaClick = () => {
    setActiveSection('categories');
    setTimeout(() => {
      const element = document.getElementById('categories');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <main className={`min-h-screen bg-white ${className}`} role="main" aria-label="Home page content">
      {/* Hero Section */}
      <HeroSection onExploreClick={handleExploreClick} />

      {/* Categories Section */}
      <CategoriesSection onCategoryClick={handleCategoryClick} />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Section */}
      <AboutSection onCtaClick={handleAboutCtaClick} />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
};

export default Home;
export type { HomeProps };