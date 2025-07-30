import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "88px 16px 0 16px" }}>
        <section id="features" style={{ minHeight: 300, padding: '4rem 0', borderBottom: '1px solid #eee' }} />
        <section id="how" style={{ minHeight: 300, padding: '4rem 0', borderBottom: '1px solid #eee' }} />
        <section id="subscribe" style={{ minHeight: 300, padding: '4rem 0' }} />
      </div>
    </>
  );
}
