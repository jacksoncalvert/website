import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <header className="header">
        <h1>Smartlane Software PTY LTD</h1>
        <Link to="/" className="home-link">← Back to Home</Link>
      </header>

      <main className="policy-content">
        <h2>Privacy Policy</h2>
        <p className="last-updated">Last Updated: January 27, 2026</p>

        <section>
          <h3>1. Introduction</h3>
          <p>
            Welcome to Smartlane Software PTY LTD ("Company", "we", "our", "us"). We respect your 
            privacy and are committed to protecting your personal data. This privacy policy will 
            inform you about how we look after your personal data and tell you about your privacy 
            rights and how the law protects you.
          </p>
        </section>

        <section>
          <h3>2. Information We Collect</h3>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address, telephone numbers, and mailing address.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h3>3. How We Use Your Information</h3>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h3>4. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from 
            being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. 
            In addition, we limit access to your personal data to those employees, agents, contractors 
            and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h3>5. Data Retention</h3>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes 
            we collected it for, including for the purposes of satisfying any legal, accounting, or 
            reporting requirements.
          </p>
        </section>

        <section>
          <h3>6. Your Legal Rights</h3>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h3>7. Third-Party Links</h3>
          <p>
            Our website may include links to third-party websites, plug-ins and applications. 
            Clicking on those links or enabling those connections may allow third parties to collect 
            or share data about you. We do not control these third-party websites and are not 
            responsible for their privacy statements.
          </p>
        </section>

        <section>
          <h3>8. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date at 
            the top of this Privacy Policy.
          </p>
        </section>

        <section>
          <h3>9. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p>
            <strong>Smartlane Software PTY LTD</strong><br />
            Email: privacy@smartlane-software.com<br />
            Phone: +61 (0) XXX XXX XXX
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Smartlane Software PTY LTD. All rights reserved.</p>
        <nav>
          <Link to="/" className="footer-link">Home</Link>
        </nav>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
