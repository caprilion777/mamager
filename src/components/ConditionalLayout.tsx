'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isTermsPage = pathname === '/terms';

  return (
    <>
      {!isTermsPage && <Header />}
      {children}
      {!isTermsPage && <Footer />}
    </>
  );
} 