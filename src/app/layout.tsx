import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "../components/ConditionalLayout";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plan, Shop, Relax — Smart Baby Shopping with Mamager.ai",
  description: "Mamager.ai helps parents save time and money with personalized shopping plans, discount alerts, and home delivery. Everything your baby needs in one simple app."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-v2.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CookieBanner />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
