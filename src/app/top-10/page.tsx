'use client';

import { top10 } from '@/data/top10';
import Image from 'next/image';
import Link from 'next/link';
import useShimmerButtonEffect from '@/components/useShimmerButtonEffect';

export default function Top10Page() {
  useShimmerButtonEffect('.top10-shimmer-button');
  return (
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      padding: '7rem 16px 0 16px',
      fontFamily: 'Montserrat, Arial, sans-serif',
      color: '#333',
    }}>
      {/* <h1 style={{
        textAlign: 'center',
        marginBottom: 8,
        fontSize: '1.7rem',
        fontWeight: 700,
        color: '#EB6E8A',
        letterSpacing: '-1px',
      }}>
        Top 10 Goods Right Now
      </h1> */}
      <style>{`
        @media (max-width: 700px) {
          h1 {
            font-size: 1.7rem !important;
          }
        }
      `}</style>
      <div style={{ textAlign: 'center', color: '#EB6E8A', fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
        Curated by Mamager.ai — trusted picks to save you time and money.
      </div>
      <div style={{ textAlign: 'center', color: '#888', fontSize: 13, marginBottom: 32 }}>
        Prices and availability may change.
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 28,
          margin: '0 auto 36px auto',
          maxWidth: 700,
        }}
      >
        {top10.map((item) => (
          <div
            key={item.title}
            style={{
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: 12,
              boxShadow: '0 2px 12px 0 rgba(235,110,138,0.07)',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 340,
              position: 'relative',
            }}
          >
            <div style={{ width: '100%', maxWidth: 180, marginBottom: 16 }}>
              <Image
                src={`/top10/${item.imageFile}`}
                alt={item.title}
                width={180}
                height={180}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: 8, background: '#f9f9f9' }}
              />
            </div>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#EB6E8A', marginBottom: 6, textAlign: 'center' }}>{item.title}</div>
            <div style={{ fontSize: 15, color: '#444', marginBottom: 12, textAlign: 'center', minHeight: 38 }}>{item.blurb}</div>
            <div style={{ fontWeight: 600, fontSize: 16, color: '#222', marginBottom: 4 }}>{item.priceText}</div>
            <div style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>As of June 2024</div>
            <a
              href="about:blank"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 16,
                fontWeight: 700,
                background: '#EB6E8A',
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                padding: '10px 24px',
                textDecoration: 'none',
                marginTop: 'auto',
                boxShadow: '0 4px 15px rgba(235, 110, 138, 0.18)',
                transition: 'transform 0.2s',
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              className="shimmer-button subscribe-button"
            >
              Buy on Amazon &rarr;
            </a>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 700px) {
          div[style*='grid-template-columns'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={{
        background: '#FDF2ED',
        borderRadius: 8,
        padding: '18px 16px',
        margin: '0 auto 24px auto',
        maxWidth: 600,
        fontSize: 13,
        color: '#888',
        textAlign: 'center',
        border: '1px solid #f3e0e0',
      }}>
        As an Amazon Associate, Mamager.ai earns from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
      </div>
      <div style={{ textAlign: 'center', margin: '32px 0 48px 0' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#EB6E8A' }}>
          Want your own personalized list, tailored to your baby’s age and needs?
        </div>
        <Link
          href="/#subscribe"
          style={{
            fontSize: '16px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '999px',
            background: '#EB6E8A',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            padding: '0 20px',
            height: '41px',
            lineHeight: '41px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(235, 110, 138, 0.3)',
            marginTop: 18,
            textDecoration: 'none',
            verticalAlign: 'middle',
          }}
          className="top10-shimmer-button"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}
