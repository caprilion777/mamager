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
          textAlign: 'center'
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
      </div>
    </section>
  );
}