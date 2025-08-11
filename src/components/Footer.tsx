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
    <footer style={{ width: '100vw', background: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
      <div className="footer-inner" style={{ maxWidth: 1024, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '0 16px', height: '100%', position: 'relative' }}>
        <Link
          href="/"
          className="footer-logo"
          style={{ display: 'flex', alignItems: 'center', height: 64, minWidth: 0, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          onClick={handleLogoClick}
        >
          <Image src="/logo.png" alt="mamager logo" width={160} height={64} style={{ objectFit: 'contain', flexShrink: 0, height: 64, width: 'auto' }} />
        </Link>
        <div className="footer-texts" style={{
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
            <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#EB6E8A', textDecoration: 'none', display: 'inline-block', marginTop: 4 }}>Terms and Conditions</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          /* Use identical top/bottom padding so space above logo equals space below terms */
          footer {
            padding: 16px 0 !important;
          }
          .footer-inner {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 8px !important;
            position: static !important;
            width: 100% !important;
            height: auto !important;
            gap: 8px !important; /* controls spacing between logo and texts */
          }
          /* Guard against extra external margins altering perceived top/bottom space */
          .footer-inner > :first-child { margin-top: 0 !important; }
          .footer-inner > :last-child { margin-bottom: 0 !important; }

          .footer-logo {
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            height: auto !important;
          }
          .footer-logo img {
            height: 36px !important;
            width: auto !important;
            margin: 0 auto !important; /* rely on .footer-inner gap instead of img margin */
            display: block !important;
            padding: 0 !important;
          }
          .footer-texts {
            width: 100% !important;
            font-size: 13px !important;
            margin-bottom: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 4px !important;
            position: static !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            margin-left: 0 !important;
          }
          .footer-texts div {
            width: 100%;
          }
          .footer-texts a {
            margin-top: 0 !important;
            font-size: 13px !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}