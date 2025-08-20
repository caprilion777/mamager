'use client';

import { useEffect } from 'react';

export default function useShimmerButtonEffect(className = '.shimmer-button') {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      ${className}::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: sweep 4s ease-in-out infinite;
      }
      @keyframes sweep {
        0% { left: -100%; }
        50% { left: 100%; }
        100% { left: 100%; }
      }
      ${className}:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(235, 110, 138, 0.4);
      }
      ${className}:active {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [className]);
}
