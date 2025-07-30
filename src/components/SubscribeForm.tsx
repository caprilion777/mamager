'use client';

export default function SubscribeForm() {
  const inputStyle = {
    fontSize: '16px',
    fontWeight: 400,
    border: '2px solid #e0e0e0',
    borderRadius: 0,
    outline: 'none',
    transition: 'border-color 0.3s ease',
    backgroundColor: 'white',
    boxSizing: 'border-box' as const
  };
  const buttonStyle = {
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '999px',
    backgroundColor: '#EB6E8A',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap' as const,
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <section id="subscribe" style={{ 
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      margin: 0
    }}>
      {/* Background Image with Parallax */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/subscribe-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: -2
      }} />
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex: -1
      }} />
      {/* Subscription Content */}
      <div style={{
        maxWidth: 600,
        width: '100%',
        padding: '3rem',
        textAlign: 'center',
        margin: '0 16px',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#EB6E8A',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          Be the first to know our start!
        </h2>
        <p style={{
          fontWeight: 600,
          color: '#EB6E8A',
          marginBottom: '2.5rem',
          fontSize: '16px',
          lineHeight: 1.6,
          opacity: 0.9
        }}>
          Subscribe and you will be the first to get access to our service, including bonuses for early users
        </p>
        <form style={{
          display: 'flex',
          gap: '1rem',
          maxWidth: 400,
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <input
            type="email"
            placeholder="Your Email"
            style={{
              ...inputStyle,
              flex: 1,
              minWidth: 180
            }}
            onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#EB6E8A'}
            onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#e0e0e0'}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#d45a7a'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#EB6E8A'}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
} 