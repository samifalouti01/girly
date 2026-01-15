import React, { useState, useEffect, useRef } from 'react';
import Index from './pages/Index';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  // Global state for the SPA
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Refs for section scrolling (passed down or managed here if needed, 
  // but Index.tsx handles specific refs. App.tsx manages the root layout)
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial mount trigger for global animations
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes cart or modals
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      ref={appRef}
      className="min-h-screen w-full bg-slate-900 text-slate-300 antialiased selection:bg-indigo-600 selection:text-white overflow-x-hidden"
      role="application"
      aria-label="DarkCommerce Single Page Application"
    >
      {/* 
        Global Background Effects 
        Hardware-accelerated for performance
      */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
        {/* Subtle ambient glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[100px] motion-reduce:hidden" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[100px] motion-reduce:hidden" />
      </div>

      {/* 
        Main Layout Container 
        Passes state management down to Index page
      */}
      <Index 
        // In a larger app, we might pass setActiveSection here
        // but Index.tsx manages its own section state as per architecture
      />
    </div>
  );
};

export default App;