import './Footer.css'

const SERVICES = ['Web Design & Development', 'SEO Services', 'Digital Marketing', 'Catalogue Design', 'Branding & Identity', 'E-Commerce']
const LINKS    = [
  { label: 'Home',          href: '#hero' },
  { label: 'Services',      href: '#services' },
  { label: 'About',         href: '#about' },
  { label: 'Process',       href: '#process' },
  { label: 'Clients',       href: '#clients' },
  { label: 'Why Us',        href: '#why-us' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="fl-icon"><img src="/nk_logo.jpg" alt=""  /></div>
              {/* <div className="fl-text">
                <span className="fl-main">Innovative Minds</span>
                <span className="fl-sub">Digital Agency</span>
              </div> */}
            </div>
            <p className="footer-tagline">
            We specialize in designing and developing websites that are not just visually engaging but strategically built around your business goals. Our team blends creativity, technology, and performance-driven thinking to craft digital experiences that truly represent your brand.
            </p>
            <div className="footer-social">
              {[
                { label: 'Call', href: 'tel:+919711603885', icon: '📞' },
                { label: 'WhatsApp', href: 'https://wa.me/919711603885', icon: '💬' },
                { label: 'Website', href: 'https://nkinnovativeminds.in', icon: '🌐' },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} className="social-btn" aria-label={label}
                   target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              {SERVICES.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-list">
              {LINKS.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact">
              {[
                { icon: '📞', val: '+91-9711603885',       href: 'tel:+919711603885' },
                { icon: '💬', val: 'WhatsApp Us',           href: 'https://wa.me/919711603885' },
                { icon: '🌐', val: 'nkinnovativeminds.in',  href: 'https://nkinnovativeminds.in' },
                { icon: '📍', val: 'Pocket C, Sanjay Gandhi Memorial Nagar, Sector 48, Faridabad, Haryana 121001',    href: null },
              ].map(({ icon, val, href }) => (
                <li key={val}>
                  <span className="fc-icon">{icon}</span>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{val}</a>
                  ) : <span>{val}</span>}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="#contact" className="btn btn-primary footer-cta-btn" style={{ marginTop: '1.5rem' }}>
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <div className="glow-divider" />

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} NK Innovative Minds. All rights reserved.</p>
          {/* <p className="footer-made">
            Engineered with ❤️ using React.js + Three.js + Vite
          </p> */}
        </div>
      </div>
    </footer>
  )
}
