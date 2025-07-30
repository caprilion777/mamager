import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 10, background: 'rgba(255, 248, 246, 0.5)', borderBottom: 'none', height: 64, minHeight: 64, display: 'flex', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.24)' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', height: 64, width: '100%', position: 'relative' }}>
        <Link href="/" style={{ position: 'absolute', left: 16, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="mamager logo" width={160} height={160} style={{ objectFit: 'contain', flexShrink: 0, height: '100%', width: 'auto' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '1rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', height: '100%', alignItems: 'center' }}>
          <a href="#features" style={{ color: '#000', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '13px', display: 'flex', alignItems: 'center', height: '100%' }}>Key Features and Benefits</a>
          <a href="#how" style={{ color: '#000', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '13px', display: 'flex', alignItems: 'center', height: '100%' }}>How the service works</a>
          <a href="#subscribe" style={{ color: '#000', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '13px', display: 'flex', alignItems: 'center', height: '100%' }}>Subscribe Now</a>
        </nav>
      </div>
    </header>
  );
}