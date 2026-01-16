import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  className?: string;
  duration?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isVisible,
  className = '',
  duration = 500,
}) => {
  const [isRendered, setIsRendered] = useState(isVisible);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.98);
  const [translateY, setTranslateY] = useState(20);

  useEffect(() => {
    // Check for user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isVisible) {
      setIsRendered(true);
      // Trigger reflow to ensure transition works
      requestAnimationFrame(() => {
        setOpacity(1);
        setScale(1);
        setTranslateY(0);
      });
    } else {
      setOpacity(0);
      setScale(0.98);
      setTranslateY(20);
      
      // Wait for fade out to complete before unmounting
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, duration);

      return () => clearTimeout(timer);
    }

    // If user prefers reduced motion, set instant states
    if (prefersReducedMotion) {
      if (isVisible) {
        setOpacity(1);
        setScale(1);
        setTranslateY(0);
      } else {
        setOpacity(0);
        setIsRendered(false);
      }
    }
  }, [isVisible, duration]);

  if (!isRendered) {
    return null;
  }

  const transitionStyle = `transition-opacity duration-${duration} ease-in-out transition-transform duration-${duration} ease-in-out`;

  return (
    <div
      className={`${transitionStyle} ${className}`}
      style={{
        opacity: opacity,
        transform: `scale(${scale}) translateY(${translateY}px)`,
      }}
      aria-live="polite"
    >
      {children}
    </div>
  );
};

export default PageTransition;
export type { PageTransitionProps };