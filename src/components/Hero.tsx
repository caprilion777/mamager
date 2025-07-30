import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ width: '100vw', height: '100vh', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', overflow: 'hidden' }}>
      <Image src="/hero-image.jpg" alt="Hero" fill style={{ objectFit: 'cover' }} priority />
    </section>
  );
}