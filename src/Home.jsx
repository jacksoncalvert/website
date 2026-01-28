import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Smartlane Software PTY LTD</h1>
        <p className="tagline">Innovative Software Solutions</p>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Welcome to Smartlane Software</h2>
          <p>
            We are a leading software development company specializing in cutting-edge 
            technology solutions for businesses of all sizes.
          </p>
        </section>

        <section className="services">
          <h3>Our Services</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Custom Software Development</h4>
              <p>Tailored solutions to meet your unique business needs</p>
            </div>
            <div className="service-card">
              <h4>Web Applications</h4>
              <p>Modern, responsive web applications built with the latest technologies</p>
            </div>
            <div className="service-card">
              <h4>Mobile Solutions</h4>
              <p>Cross-platform mobile applications for iOS and Android</p>
            </div>
            <div className="service-card">
              <h4>Cloud Integration</h4>
              <p>Seamless cloud-based solutions for scalability and efficiency</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h3>Get In Touch</h3>
          <p>Ready to start your next project? Contact us today to discuss your requirements.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Smartlane Software PTY LTD. All rights reserved.</p>
        <nav>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </nav>
      </footer>
    </div>
  )
}

export default Home
