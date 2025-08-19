export default function Top10Page() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Montserrat, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#EB6E8A'
      }}>
        Top 10 Goods Right Now
      </h1>
      
      <div style={{
        fontSize: '14px',
        whiteSpace: 'pre-wrap',
        fontFamily: 'Montserrat, Arial, sans-serif'
      }}>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
          Coming soon! We're curating the best baby products for you.
        </p>
        
        <div style={{ 
          background: '#f9f9f9', 
          padding: '30px', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ color: '#EB6E8A', marginBottom: '20px' }}>What to Expect</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Carefully selected baby essentials</li>
            <li>Price comparisons and deals</li>
            <li>Parent reviews and recommendations</li>
            <li>Safety ratings and certifications</li>
            <li>Age-appropriate product suggestions</li>
          </ul>
        </div>
        
        <p style={{ 
          textAlign: 'center', 
          marginTop: '40px', 
          color: '#666',
          fontStyle: 'italic'
        }}>
          This page will be updated regularly with the latest and greatest baby products.
        </p>
      </div>
    </div>
  );
}
