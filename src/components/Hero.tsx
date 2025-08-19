import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section style={{ width: '100vw', height: '100vh', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', overflow: 'hidden' }}>
      <Image src="/hero-image.jpg" alt="Hero" fill style={{ objectFit: 'cover' }} priority />
      
      {/* Dark overlay filter */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 5
      }} />
      
      {/* Text overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10,
        maxWidth: '800px',
        padding: '0 20px'
      }}>
        <div className={styles.heroTitle} style={{
          fontWeight: 'bold',
          marginBottom: '4rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          textAlign: 'center',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'
        }}>
          <div>Smart Baby Shopping</div>
          <div>Planning with Mamager.ai</div>
        </div>
        <p className={styles.heroSubtitle} style={{
          margin: 0,
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
          lineHeight: '1.4'
        }}>
          Efficiently organize everything your baby needs, saving you time and money
        </p>
        
        {/* Top 10 Goods heading */}
        <div className={styles.heroTitle} style={{
          fontWeight: 'bold',
          marginTop: '3rem',
          marginBottom: '2rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          textAlign: 'center',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'
        }}>
          Top 10 Goods Right Now
        </div>
        
        {/* See Full List button */}
        <a 
          href="/top-10" 
          target="_blank" 
          rel="noopener noreferrer"
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
            textDecoration: 'none',
            textAlign: 'center'
          }}
          className="shimmer-button"
        >
          See the Full List →
        </a>
      </div>
    </section>
  );
}