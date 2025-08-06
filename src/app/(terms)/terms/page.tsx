import fs from 'fs';
import path from 'path';

export default function TermsPage() {
  // Read the terms file content
  const termsPath = path.join(process.cwd(), 'Terms & Conditions.txt');
  const termsContent = fs.readFileSync(termsPath, 'utf-8');

  // Process the content to add styling
  const processContent = (content: string) => {
    return content
      .replace(/^(Terms & Conditions)/gm, '<h1 style="text-align: center; margin-bottom: 30px; font-size: 14px; font-weight: bold;">$1</h1>')
      .replace(/^(Last Updated:)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Acceptance of Terms)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Changes to Terms)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Age Restrictions and COPPA Compliance)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Use of the Website)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Intellectual Property)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. User Accounts)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Privacy Policy)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Disclaimer of Warranties)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Limitation of Liability)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Indemnification)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Termination)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. California Residents)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Governing Law and Jurisdiction)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Dispute Resolution)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Severability)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Entire Agreement)/gm, '<strong>$1</strong>')
      .replace(/^(\d+\. Contact Information)/gm, '<strong>$1</strong>');
  };

  const processedContent = processContent(termsContent);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Montserrat, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <div 
        style={{
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
          fontFamily: 'Montserrat, Arial, sans-serif'
        }}
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </div>
  );
} 