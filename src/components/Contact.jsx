import { useState } from 'react'
import './Contact.css'

const SERVICES_LIST = [
  'Web Design & Development',
  'SEO Services',
  'Digital Marketing',
  'Catalogue Design',
  'Branding & Identity',
  'E-Commerce Solutions',
  'All of the Above',
]

const BUDGETS = ['Under ₹20,000', '₹20,000–₹50,000', '₹50,000–₹1,00,000', '₹1,00,000+', 'Let\'s Discuss']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const txt = `Hi NK Innovative Minds!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0ABudget: ${form.budget}%0A%0AMessage: ${form.message}`
    window.open(`https://wa.me/919711603885?text=${txt}`, '_blank')
    setSent(true)
  }

  const INFO = [
    { icon: '📞', label: 'Call Us', val: '+91-9711603885',        href: 'tel:+919711603885' },
    { icon: '💬', label: 'WhatsApp', val: 'Chat Instantly',        href: 'https://wa.me/919711603885' },
    { icon: '🌐', label: 'Website',  val: 'nkinnovativeminds.in',   href: 'https://nkinnovativeminds.in' },
    { icon: '📍', label: 'Location', val: 'India (Nationwide)',     href: null },
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />

      <div className="container">
        <header className="contact-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Take the first step. Share your vision with us — we'll respond within 2 hours
            with a strategic roadmap and clear next steps.
          </p>
        </header>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-left reveal-left">
            <div className="contact-info-cards">
              {INFO.map(({ icon, label, val, href }) => (
                <div key={label} className="info-card glass-card">
                  <div className="info-icon">{icon}</div>
                  <div>
                    <span className="info-label">{label}</span>
                    {href ? (
                      <a href={href} className="info-val" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {val}
                      </a>
                    ) : (
                      <span className="info-val">{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="availability glass-card">
              <div className="avail-indicator" />
              <div>
                <h4 className="avail-title">We're Available Now</h4>
                <p className="avail-desc">Our team typically responds within 2 hours on business days. For urgent queries, WhatsApp us directly.</p>
              </div>
            </div>

            {/* Social proof */}
            <div className="contact-proof glass-card">
              <div className="proof-row">
                {['⭐ 5.0 Rating', '200+ Clients', '₹0 Hidden Fees'].map((p) => (
                  <span key={p} className="proof-chip">{p}</span>
                ))}
              </div>
              <p className="proof-text">
                "NK Innovative Minds responded within 30 minutes and had a full proposal ready the same day. Incredibly professional."
              </p>
              <span className="proof-attr">— Rajesh S., TechCorp India</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right reveal-right">
            {sent ? (
              <div className="contact-success glass-card">
                <div className="success-icon">🎉</div>
                <h3>Message Sent Successfully!</h3>
                <p>We've received your inquiry. Our team will reach out within 2 hours. We look forward to transforming your digital presence!</p>
                <a href="https://wa.me/919711603885" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form className="contact-form glass-card" onSubmit={submit}>
                <div className="form-header">
                  <h3>Start Your Project</h3>
                  <p>Fill in the details and we'll reach out within 2 hours.</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" placeholder="Rahul Sharma" value={form.name} onChange={handle} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handle} required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handle} />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select id="service" name="service" value={form.service} onChange={handle} required>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Approximate Budget</label>
                    <select id="budget" name="budget" value={form.budget} onChange={handle}>
                      <option value="">Select budget range...</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project, goals, timeline, and any specific requirements..." rows={5} value={form.message} onChange={handle} required />
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send via WhatsApp 💬
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <p className="form-note">
                  🔐 Your information is 100% confidential. No spam, no sharing, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
