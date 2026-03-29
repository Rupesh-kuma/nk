import './WhyUs.css'

const REASONS = [
  {
    icon: '🏆',
    title: '8+ Years of Proven Expertise',
    desc: 'Over eight years of hands-on experience across web development, digital marketing, and brand building. We\'ve navigated every trend, algorithm change, and platform shift — so you don\'t have to.',
    col: '#00c8ff',
  },
  {
    icon: '📊',
    title: 'Data-Driven Everything',
    desc: 'Every design choice, every campaign decision, every SEO strategy is backed by real data. We don\'t guess — we measure, iterate, and optimize until your metrics consistently climb.',
    col: '#8b5cf6',
  },
  {
    icon: '⚡',
    title: 'Agile & Fast Delivery',
    desc: 'We operate with startup speed and enterprise precision. Rapid sprints, transparent communication, and milestone-based delivery ensure your project launches on schedule, every time.',
    col: '#06ffd4',
  },
  {
    icon: '🎨',
    title: 'World-Class Creative Output',
    desc: 'Our design philosophy merges aesthetic excellence with conversion science. Every pixel, every word, every interaction is crafted to attract, engage, and convert your ideal customer.',
    col: '#f472b6',
  },
  {
    icon: '🔒',
    title: 'Full Transparency, Zero Surprises',
    desc: 'Real-time project dashboards, weekly performance reports, and direct access to our team at all times. You\'ll always know exactly where your project stands and what results you\'re getting.',
    col: '#ff6b35',
  },
  {
    icon: '🌐',
    title: 'End-to-End Digital Partner',
    desc: 'From your logo to your Google ranking to your social media presence — we handle every dimension of your digital existence under one roof, ensuring complete brand coherence.',
    col: '#00c8ff',
  },
]



export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      
      <div className="container">
        <header className="why-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Why NK Innovative Minds</span>
          <h2 className="section-title">
            The Difference That <span className="gradient-text">Defines Results</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Hundreds of agencies exist. Few deliver. Here's what sets NK Innovative Minds apart
            from the competition — and why 98% of our clients stay with us long-term.
          </p>
        </header>

        <div className="why-grid">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="why-card glass-card reveal"
              data-stagger
              style={{ '--why-col': r.col, transitionDelay: `${i * 0.1}s` }}
            >
              <div className="why-icon-wrap">
                <span className="why-icon">{r.icon}</span>
                <div className="why-icon-ring" style={{ borderColor: r.col }} />
              </div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
              <div className="why-accent" style={{ background: r.col }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="why-bottom reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="why-bottom-text text-center">
            Ready to work with a team that's genuinely invested in your growth?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <a href="#contact" className="btn btn-primary">Schedule a Free Consultation</a>
            <a href="https://wa.me/919711603885" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
