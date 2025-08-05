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

    useEffect(() => {
    const headerHeight = 64;
    const onScroll = () => {
      let currentSection = '';
      const scrollPosition = window.scrollY + headerHeight;
      
      // Find the section that's most prominently in view
      let maxVisibility = 0;
      
      navLinks.forEach(link => {
        const element = document.getElementById(link.href.replace('#', ''));
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
          const visibility = visibleTop / Math.min(rect.height, viewportHeight);
          
          // Prefer sections that are more visible and closer to the top of viewport
          const topDistance = Math.abs(rect.top);
          const score = visibility - (topDistance / viewportHeight) * 0.5;
          
          if (score > maxVisibility) {
            maxVisibility = score;
            currentSection = link.href;
          }
        }
      });
      
      // If we're at the very top, clear active section
      if (window.scrollY < 100) {
        currentSection = '';
      }
      
      // If a section was recently clicked, prioritize it for a short time
      if (clickedSection && Date.now() - parseInt(clickedSection.split('-')[1] || '0') < 1000) {
        currentSection = clickedSection.split('-')[0];
      }
      
      setActive(currentSection);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [clickedSection]);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 10, background: 'rgba(255, 248, 246, 0.5)', borderBottom: 'none', height: 64, minHeight: 64, display: 'flex', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.24)' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', height: 64, width: '100%', position: 'relative' }}>
        <Link href="/" style={{ position: 'absolute', left: 16, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="mamager logo" width={160} height={160} style={{ objectFit: 'contain', flexShrink: 0, height: '100%', width: 'auto' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '1.25rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', height: '100%', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setClickedSection(`${link.href}-${Date.now()}`);
                // Clear any existing timeout
                if (clickTimeout) {
                  clearTimeout(clickTimeout);
                }
                // Clear the clicked section after 1 second
                const timeout = setTimeout(() => {
                  setClickedSection('');
                }, 1000);
                setClickTimeout(timeout);
              }}
              style={{
                color: active === link.href ? '#EB6E8A' : '#000',
                textDecoration: 'none',
                fontWeight: 500,
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
      </div>
    </header>
  );
}