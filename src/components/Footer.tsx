'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      router.push("/");
    }, 500);
  }

  return (
    <footer style={{ width: '100vw', height: 64, minHeight: 64, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000' }}>
      <div style={{ maxWidth: 1024, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '0 16px', height: '100%', position: 'relative' }}>
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', height: '100%', minWidth: 0, marginRight: 32, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          <Image src="/logo.png" alt="mamager logo" width={160} height={64} style={{ objectFit: 'contain', flexShrink: 0, height: '100%', width: 'auto' }} />
        </Link>
        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'max-content',
        }}>
          <div style={{ color: '#FFFFFF' }}>© 2025 mamager.ai | All rights reserved.</div>
          <div>
            <a href="#" style={{ color: '#EB6E8A', textDecoration: 'none' }}>Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}