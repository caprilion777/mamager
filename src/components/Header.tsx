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

  useEffect(() => {
    const headerHeight = 64;
    const onScroll = () => {
      const firstSection = document.getElementById(navLinks[0].href.replace('#', ''));
      if (firstSection) {
        const firstTop = firstSection.offsetTop;
        if (window.scrollY + headerHeight < firstTop) {
          setActive('');
          return;
        }
      }
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.href.replace('#', ''));
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: Math.abs(rect.top - headerHeight) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].href);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}