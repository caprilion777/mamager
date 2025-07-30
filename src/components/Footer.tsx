'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  function handleLogoClick(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      router.push("/");
    }, 500);
  }

  return (
    <footer style={{ width: '100vw', borderTop: '1px solid #eee', marginTop: '2rem', height: 64, minHeight: 64, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: 1024, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '0 16px', height: '100%', position: 'relative' }}>
        <a
          href="/"
          onClick={handleLogoClick}
          style={{ display: 'flex', alignItems: 'center', height: '100%', minWidth: 0, marginRight: 32, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <Image src="/logo.png" alt="mamager logo" width={160} height={64} style={{ objectFit: 'contain', flexShrink: 0, height: '100%', width: 'auto' }} />
        </a>
        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'max-content',
        }}>
          <div style={{ color: '#FFFFFF', fontWeight: 600 }}>© 2025 mamager.ai | All rights reserved.</div>
          <div>
            <a href="#" style={{ color: '#EB6E8A', textDecoration: 'none', fontWeight: 600 }}>Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}