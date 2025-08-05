import Hero from "../components/Hero";
import SubscribeForm from "../components/SubscribeForm";

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 16px 0 16px", marginTop: "64px" }}>
        <section id="features" className="features-section" style={{ minHeight: 300, padding: '4rem 0', borderBottom: '1px solid #eee', marginTop: '56px', scrollMarginTop: '64px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 700, marginBottom: '3rem' }}>Key Features and Benefits</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem 2rem',
            alignItems: 'start',
            maxWidth: 900,
            margin: '0 auto',
          }}>
            {/* 1 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: 16 }}>Save Time and Money</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Intelligent Planning:</div>
                <div style={{ marginBottom: 12 }}>Mamager.ai automatically creates a shopping list based on your child&apos;s age, preferences, and seasonal needs.</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Discount Alerts:</div>
                <div style={{ marginBottom: 12 }}>Get notifications about the best deals and promotions so you can shop smart and save big.</div>
              </div>
              <img src="/features/money.svg" alt="Save Time and Money" width={72} height={72} style={{ flexShrink: 0 }} />
            </div>
            {/* 2 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: 16 }}>Everything Your Baby Needs in One App</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Personalized Shopping Plans:</div>
                <div style={{ marginBottom: 12 }}>From diapers to toys, plan and manage purchases tailored to your child&apos;s evolving needs.</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Automatic Updates:</div>
                <div style={{ marginBottom: 12 }}>The app adjusts its recommendations as your child grows, ensuring you always have the right products.</div>
              </div>
              <img src="/features/tray.svg" alt="Everything Your Baby Needs in One App" width={72} height={72} style={{ flexShrink: 0 }} />
            </div>
            {/* 3 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: 16 }}>More Time for Family</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Simplicity and Convenience:</div>
                <div style={{ marginBottom: 12 }}>Make all your purchases with just a few clicks, allowing you more time with your family.</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Home Delivery:</div>
                <div style={{ marginBottom: 12 }}>Order everything you need to your doorstep with our seamless integration with leading retailers.</div>
              </div>
              <img src="/features/clock.svg" alt="More Time for Family" width={72} height={72} style={{ flexShrink: 0 }} />
            </div>
            {/* 4 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: 16 }}>Security Features</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Reliable:</div>
                <div style={{ marginBottom: 12 }}>Your personal data is protected with state-of-the-art encryption technologies.</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Confidential:</div>
                <div style={{ marginBottom: 12 }}>We ensure your information remains private and is never shared with third parties.</div>
              </div>
              <img src="/features/shield.svg" alt="Security Features" width={72} height={72} style={{ flexShrink: 0 }} />
            </div>
          </div>
        </section>
      </div>

      {/* How the service works section - Full width */}
      <section id="how" style={{ 
        minHeight: 600, 
        padding: '4rem 0', 
        borderBottom: '1px solid #eee', 
        scrollMarginTop: '64px',
        backgroundColor: '#FDF2ED',
        width: '100vw',
        margin: 0
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '24px', 
            fontWeight: 700, 
            marginBottom: '3rem',
            color: '#333'
          }}>
            How the service works
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '16px', 
            marginBottom: '4rem',
            lineHeight: 1.6
          }}>
            Mamager.ai - a simple and convenient service that saves you time and money
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            alignItems: 'stretch'
          }}>
            {/* Step 01 - Left aligned */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'flex-start',
              position: 'relative',
              justifyContent: 'flex-start',
              maxWidth: '60%',
              alignSelf: 'flex-start'
            }}>
              <div style={{
                fontSize: '120px',
                fontWeight: 700,
                color: '#EBA5B1 !important',
                opacity: 0.3,
                lineHeight: 1,
                position: 'absolute',
                left: '-20px',
                top: '-20px',
                zIndex: 0
              }}>
                01
              </div>
              <div style={{ position: 'relative', zIndex: 1, marginLeft: '60px' }}>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  color: '#333'
                }}>
                  Register in the service
                </h3>
                <p style={{ 
                  lineHeight: 1.6
                }}>
                  Register in the service, enter your wishes and the age, height and other data of the child
                </p>
              </div>
            </div>

            {/* Step 02 - Right aligned */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'flex-start',
              position: 'relative',
              justifyContent: 'flex-end',
              maxWidth: '60%',
              alignSelf: 'flex-end'
            }}>
              <div style={{
                fontSize: '120px',
                fontWeight: 700,
                color: '#EBA5B1 !important',
                opacity: 0.3,
                lineHeight: 1,
                position: 'absolute',
                left: '-20px',
                top: '-20px',
                zIndex: 0
              }}>
                02
              </div>
              <div style={{ position: 'relative', zIndex: 1, marginLeft: '60px' }}>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  color: '#333'
                }}>
                  Get a shopping plan
                </h3>
                <p style={{ 
                  lineHeight: 1.6
                }}>
                  Get a purchase plan, make suggestions and adjustments if necessary
                </p>
              </div>
            </div>

            {/* Step 03 - Left aligned */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              alignItems: 'flex-start',
              position: 'relative',
              justifyContent: 'flex-start',
              maxWidth: '60%',
              alignSelf: 'flex-start'
            }}>
              <div style={{
                fontSize: '120px',
                fontWeight: 700,
                color: '#EBA5B1 !important',
                opacity: 0.3,
                lineHeight: 1,
                position: 'absolute',
                left: '-20px',
                top: '-20px',
                zIndex: 0
              }}>
                03
              </div>
              <div style={{ position: 'relative', zIndex: 1, marginLeft: '60px' }}>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 700, 
                  marginBottom: '1rem',
                  color: '#333'
                }}>
                  Receive your purchases
                </h3>
                <p style={{ 
                  lineHeight: 1.6
                }}>
                  Now it plans and remembers everything, and all that's required from you is just confirmation and your preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscribeForm />
    </>
  );
}
