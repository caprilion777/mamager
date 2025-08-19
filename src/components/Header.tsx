'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: '#features', label: 'Key Features and Benefits' },
  { href: '#how', label: 'How the service works' },
  { href: '#subscribe', label: 'Subscribe Now' },
];

export default function Header() {
  const [active, setActive] = useState('');
  const [clickedSection, setClickedSection] = useState('');
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const headerHeight = 64;
    const onScroll = () => {
      let currentSection = '';
      let maxVisibility = 0;
      navLinks.forEach(link => {
        const element = document.getElementById(link.href.replace('#', ''));
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const visibleTop = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
          const visibility = visibleTop / Math.min(rect.height, viewportHeight);
          const topDistance = Math.abs(rect.top);
          const score = visibility - (topDistance / viewportHeight) * 0.5;
          if (score > maxVisibility) {
            maxVisibility = score;
            currentSection = link.href;
          }
        }
      });
      if (window.scrollY < 100) {
        currentSection = '';
      }
      if (clickedSection && Date.now() - parseInt(clickedSection.split('-')[1] || '0') < 1000) {
        currentSection = clickedSection.split('-')[0];
      }
      setActive(currentSection);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [clickedSection]);

  // Close menu on nav click (mobile)
  const handleNavClick = (href: string) => {
    setClickedSection(`${href}-${Date.now()}`);
    if (clickTimeout) clearTimeout(clickTimeout);
    const timeout = setTimeout(() => setClickedSection(''), 1000);
    setClickTimeout(timeout);
    setMenuOpen(false);
  };

  return (
    <header className="site-header" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 1000, borderBottom: 'none', height: 64, minHeight: 64, display: 'flex', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.24)' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', height: 64, width: '100%', position: 'relative' }}>
        <Link
          href="/"
          onClick={() => {
            if (menuOpen) setMenuOpen(false);
          }}
          className="header-logo"
          style={{ position: 'absolute', left: 16, display: 'flex', alignItems: 'center', zIndex: 200, height: '100%' }}
        >
          <Image src="/logo.png" alt="mamager logo" width={160} height={160} className="header-logo-img" />
        </Link>
        {/* Burger icon for mobile */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
          className="burger-menu-btn"
          style={{
            display: 'none',
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            padding: 8,
            zIndex: 20,
            cursor: 'pointer',
          }}
        >
          {/* Simple burger icon */}
          <span
            style={{
              display: 'block',
              width: 22.4,
              height: 3,
              background: '#EB6E8A',
              marginBottom: 6,
              borderRadius: 2,
              transition: 'transform 200ms ease, opacity 200ms ease, background-color 200ms ease',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(9px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22.4,
              height: 3,
              background: '#EB6E8A',
              marginBottom: 6,
              borderRadius: 2,
              transition: 'transform 200ms ease, opacity 200ms ease, background-color 200ms ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22.4,
              height: 3,
              background: '#EB6E8A',
              borderRadius: 2,
              transition: 'transform 200ms ease, opacity 200ms ease, background-color 200ms ease',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
        {/* Desktop nav */}
        <nav
          style={{
            display: 'flex',
            gap: '1.25rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            height: '100%',
            alignItems: 'center',
          }}
          className="header-nav"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                color: active === link.href ? '#EB6E8A' : '#000',
                textDecoration: 'none',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                transition: 'color 0.2s',
              }}
              title={`Active: ${active === link.href ? 'Yes' : 'No'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile nav overlay */}
        <nav
          style={{
            display: menuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            position: 'fixed',
            top: 64,
            right: 0,
            left: 0, // full width
            width: '100vw',
            maxWidth: '100vw',
            background: '#FDF2ED',
            boxShadow: 'none',
            zIndex: 1100,
            padding: '24px 16px',
            gap: 24,
            borderRadius: 0,
            alignItems: 'center', // center buttons
          }}
          className="mobile-nav"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                color: active === link.href ? '#EB6E8A' : '#000',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '18px',
                padding: '8px 0',
                display: 'block',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .site-header {
          background: rgba(253, 242, 237, 0.5);
        }
        .header-logo-img {
          object-fit: contain;
          flex-shrink: 0;
          display: block;
          height: 100%;
          width: auto;
        }
        @media (max-width: 600px) {
          .site-header {
            background: #FDF2ED !important;
          }
          .header-nav {
            display: none !important;
          }
          .burger-menu-btn {
            display: block !important;
          }
          header {
            height: auto !important;
            min-height: 0 !important;
            padding: 0 !important;
          }
          .header-logo {
            height: auto !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
          }
          .header-logo img {
            height: 36px !important;
            width: auto !important;
            margin: 0 auto !important;
            display: block !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </header>
  );
}