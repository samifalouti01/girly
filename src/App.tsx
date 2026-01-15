import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';

export type ActiveSection = 'home' | 'categories' | 'featured' | 'about';
export type PageView = 'home' | 'catalog' | 'about';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isCatalogView, setIsCatalogView] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [pageKey, setPageKey] = useState(0);

  // Determine current page based on view state
  useEffect(() => {
    const newPage: PageView = isCatalogView ? 'catalog' : 'home';
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      setPageKey((prev) => prev + 1);
    }
  }, [isCatalogView, currentPage]);

  // Handle initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section when activeSection changes (only for home view)
  useEffect(() => {
    if (!isCatalogView && activeSection !== 'home') {
      const element = document.getElementById(activeSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [activeSection, isCatalogView]);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transitionDuration = prefersReducedMotion ? 0 : 500;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setIsCatalogView={setIsCatalogView}
        isCatalogView={isCatalogView}
      />

      {/* Main Content Area */}
      <main className="pt-16 md:pt-20 pb-0 md:pb-16" role="main">
        {isLoading ? (
          // Loading State
          <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 font-semibold">Loading...</p>
            </div>
          </div>
        ) : (
          // Page Content with Transitions
          <>
            {/* Home View */}
            <PageTransition
              key={`home-${pageKey}`}
              isVisible={currentPage === 'home' && !isCatalogView}
              duration={transitionDuration}
              className="min-h-screen"
            >
              <Home
                setActiveSection={setActiveSection}
                setIsCatalogView={setIsCatalogView}
              />
            </PageTransition>

            {/* Catalog View */}
            <PageTransition
              key={`catalog-${pageKey}`}
              isVisible={isCatalogView}
              duration={transitionDuration}
              className="min-h-screen"
            >
              <Catalog />
            </PageTransition>

            {/* About View (when isCatalogView is false and activeSection is about) */}
            <PageTransition
              key={`about-${pageKey}`}
              isVisible={!isCatalogView && activeSection === 'about'}
              duration={transitionDuration}
              className="min-h-screen"
            >
              <About
                setActiveSection={setActiveSection}
                setIsCatalogView={setIsCatalogView}
              />
            </PageTransition>
          </>
        )}
      </main>

      {/* Footer - Only show when not loading */}
      {!isCatalogView && !isLoading && (
        <Footer />
      )}

      {/* Scroll To Top Button - Show on catalog and about pages */}
      {(isCatalogView || (!isCatalogView && activeSection === 'about')) && !isLoading && (
        <ScrollToTop />
      )}
    </div>
  );
};

export default App;