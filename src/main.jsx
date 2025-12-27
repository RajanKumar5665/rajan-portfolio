

import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Lenis smooth scroll integration
import Lenis from '@studio-freight/lenis';


// Expose Lenis instance for scrollTo
export let lenisInstance = null;
function LenisProvider({ children }) {
  useEffect(() => {
    lenisInstance = new Lenis({
      wrapper: document.documentElement, // attach to html for Vite/React
      content: document.body,
      duration: 1.6,
      smooth: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 2,
      lerp: 0.08,
    });
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, []);
  return children;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </StrictMode>
);
