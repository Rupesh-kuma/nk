import './Services.css'

const SERVICES = [
  {
    id: '01',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    title: 'Web Design & Development',
    tagline: 'Code-driven experiences',
    desc: 'From high-converting landing pages to full-scale web applications — we craft fast, responsive, and visually stunning websites using React.js, Next.js, and WordPress that drive real business outcomes.',
    tags: ['React.js', 'Next.js', 'WordPress', 'WooCommerce', 'Custom CMS'],
    color: '#00c8ff',
    glow: 'rgba(0,200,255,0.12)',
  },
  {
    id: '02',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    title: 'SEO Services',
    tagline: 'Own the first page',
    desc: 'Dominate Google rankings with our comprehensive SEO strategy — on-page optimization, authoritative link building, technical audits, and keyword architecture that delivers compounding organic growth.',
    tags: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO', 'Analytics'],
    color: '#06ffd4',
    glow: 'rgba(6,255,212,0.1)',
  },
  {
    id: '03',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    title: 'Digital Marketing',
    tagline: 'ROI-obsessed growth',
    desc: 'Full-funnel digital marketing campaigns across Google Ads, Meta, Instagram, and LinkedIn. Data-driven strategies that generate qualified leads, maximize ad spend, and scale your revenue predictably.',
    tags: ['Google Ads', 'Meta Ads', 'Email Marketing', 'Social Media', 'Analytics'],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    id: '04',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    title: 'Catalogue Design',
    tagline: 'Print that converts',
    desc: 'Premium product catalogues, brochures, and marketing collateral designed to impress at every touchpoint. Print-ready files with impeccable typography, layout, and brand-consistent visual identity.',
    tags: ['Product Catalogues', 'Brochures', 'Flyers', 'Annual Reports', 'Print-Ready'],
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.1)',
  },
  {
    id: '05',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    title: 'Branding & Identity',
    tagline: 'Your story, amplified',
    desc: 'Complete brand identity systems — logo design, color systems, typography hierarchies, brand guidelines, and visual language that make your business instantly recognizable and unforgettable.',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Typography', 'Color Systems'],
    color: '#ff6b35',
    glow: 'rgba(255,107,53,0.1)',
  },
  {
    id: '06',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>`,
    title: 'E-Commerce Solutions',
    tagline: 'Sell without limits',
    desc: 'End-to-end e-commerce development with WooCommerce and custom platforms — seamless payment gateway integration, inventory management, product showcase, and conversion-optimized UX that drives sales.',
    tags: ['WooCommerce', 'Payment Gateways', 'Inventory', 'Product Pages', 'Conversion CRO'],
    color: '#00c8ff',
    glow: 'rgba(0,200,255,0.1)',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-bg-grid" />
      <div className="container">
        <header className="services-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">
            Full-Spectrum <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            From ideation to execution, we offer every service your brand needs
            to dominate the digital landscape and outperform the competition.
          </p>
        </header>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <article
            onClick={() => {
              window.open("https://wa.me/919711603885?text=Hello!%20I%27m%20interested%20in%20your%20services.", "_blank");
            }}
              key={svc.id}
              className="service-card reveal glass-card"
              data-stagger
              style={{ '--svc-color': svc.color, '--svc-glow': svc.glow, transitionDelay: `${i * 0.08}s` }}
            >
              <div className="svc-glow-layer" />
              <div className="svc-number">{svc.id}</div>

              <div className="svc-icon-wrap" style={{ '--ic': svc.color }}
                dangerouslySetInnerHTML={{ __html: svc.icon }}
              />

              <div className="svc-body">
                <p className="svc-tagline">{svc.tagline}</p>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>
              </div>

              <div className="svc-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="svc-tag">{tag}</span>
                ))}
              </div>

              <a href="#contact" className="svc-cta">
                Get Started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
