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
  const isCookiesPage = pathname === '/cookies';

  return (
    <>
      {!isTermsPage && !isCookiesPage && <Header />}
      {children}
      {!isTermsPage && !isCookiesPage && <Footer />}
    </>
  );
} 