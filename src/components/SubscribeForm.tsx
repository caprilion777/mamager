'use client';

import React, { useRef, useEffect } from 'react';

export default function SubscribeForm() {
  // Add light sweep animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .shimmer-button::before {
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
      .shimmer-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(235, 110, 138, 0.4);
      }
      .shimmer-button:active {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const parallax = Math.round(rect.top * 0.3); // adjust for effect
        if (window.innerWidth <= 768) {
          bgRef.current.style.transform = `scale(1.2) translateY(${parallax}px)`;
        } else {
          bgRef.current.style.transform = `translateY(${parallax}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const inputStyle = {
    fontSize: '16px',
    fontWeight: 400,
    border: '2px solid #e0e0e0',
    borderRadius: 0,
    outline: 'none',
    transition: 'border-color 0.3s ease',
    backgroundColor: 'white',
    boxSizing: 'border-box' as const,
    height: '41px',
    padding: '0 13px'
  };
  const buttonStyle = {
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '999px',
    background: '#EB6E8A',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap' as const,
    display: 'inline-block',
    padding: '0 20px',
    height: '41px',
    lineHeight: '41px',
    position: 'relative' as const,
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(235, 110, 138, 0.3)'
  };

  return (
    <section id="subscribe" style={{ 
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      margin: 0
    }}>
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="subscribe-bg-parallax"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/subscribe-bg.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          willChange: 'transform',
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: -1
      }} />
      {/* Subscription Content */}
      <div style={{
        maxWidth: 600,
        width: '100%',
        padding: '3rem',
        textAlign: 'center',
        margin: '0 16px',
        zIndex: 1
      }}>
        <h2 className="subscribe-title" style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#EB6E8A',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Be the first to know our start!
        </h2>
        <p className="subscribe-subtitle" style={{
          fontWeight: 600,
          color: '#EB6E8A',
          marginBottom: '2.5rem',
          fontSize: '16px',
          lineHeight: 1.6,
          opacity: 0.9
        }}>
          Subscribe and you will be the first to get access to our service, including bonuses for early users
        </p>
        <form
          className="subscribe-form"
          style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: 400,
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="subscribe-input-wrap" style={{ flex: 1, minWidth: 180 }}>
            <input
              type="email"
              placeholder="Your Email"
              className="subscribe-input"
              style={{
                ...inputStyle,
                width: '100%'
              }}
            />
          </div>
                     <button
             type="submit"
             style={buttonStyle}
             className="shimmer-button subscribe-button"
           >
             Subscribe
           </button>
        </form>
      </div>
    </section>
  );
} 