import './Partners.css'

const PARTNERS = [
  { name: 'Google',         icon: '🔵', role: 'Search & Ads Partner',         desc: 'Certified Google Ads & Analytics partner delivering data-driven campaigns.' },
  { name: 'Meta',           icon: '🟣', role: 'Meta Business Partner',         desc: 'Official Meta partner for Facebook & Instagram advertising excellence.' },
  { name: 'WooCommerce',    icon: '🟢', role: 'E-Commerce Integration',        desc: 'Expert WooCommerce developers building scalable online stores.' },
  { name: 'WordPress',      icon: '🔷', role: 'CMS Development',              desc: 'Advanced WordPress development for high-performance business websites.' },
  { name: 'Cloudflare',     icon: '🟠', role: 'Security & CDN',               desc: 'Enterprise-grade website security, speed, and global content delivery.' },
  { name: 'Razorpay',       icon: '⚡', role: 'Payment Gateway',              desc: 'Seamless payment integration for Indian e-commerce and SaaS products.' },
]

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners-grid-bg" />
      <div className="container">
        <header className="partners-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Ecosystem</span>
          <h2 className="section-title">
            Our Technology <span className="gradient-text">Partners</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            We're certified and integrated with the world's leading platforms,
            ensuring you get enterprise-grade solutions at every level.
          </p>
        </header>

        <div className="partners-cards">
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className="partner-card glass-card reveal"
              data-stagger
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="partner-icon">{p.icon}</div>
              <div className="partner-body">
                <h3 className="partner-name">{p.name}</h3>
                <span className="partner-role">{p.role}</span>
                <p className="partner-desc">{p.desc}</p>
              </div>
              <div className="partner-badge">✓ Integrated</div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="partners-cta reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <div className="pcta-inner glass-card">
            <div className="pcta-icon">🤝</div>
            <div>
              <h3 className="pcta-title">Become a Partner</h3>
              <p className="pcta-desc">
                Are you a SaaS platform, tool provider, or agency?
                Let's build something incredible together.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary pcta-btn">
              Explore Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
