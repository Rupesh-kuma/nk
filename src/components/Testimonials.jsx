import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder, TechCorp India',
    avatar: 'RS',
    rating: 5,
    text: 'NK Innovative Minds completely transformed our online presence. Our website traffic increased by 340% in just 6 months, and the quality of leads we receive has never been better. Their team genuinely understands both design and digital strategy.',
    col: '#00c8ff',
  },
  {
    name: 'Priya Mehta',
    role: 'CEO, BrightShine Solutions',
    avatar: 'PM',
    rating: 5,
    text: 'We\'ve worked with multiple agencies before, but NK Innovative Minds is on another level. They rebuilt our entire brand identity and e-commerce site, and our online sales doubled within the first quarter. Communication is transparent and delivery is always on time.',
    col: '#8b5cf6',
  },
  {
    name: 'Arjun Nair',
    role: 'Director, ARC Enterprises',
    avatar: 'AN',
    rating: 5,
    text: 'The SEO results have been extraordinary. We went from page 5 to ranking #1 for our top keywords within 4 months. Their technical SEO expertise and content strategy are genuinely world-class. Worth every rupee invested.',
    col: '#06ffd4',
  },
  {
    name: 'Sunita Verma',
    role: 'Owner, Heritage Fashions',
    avatar: 'SV',
    rating: 5,
    text: 'Our catalogue design is absolutely stunning. Clients constantly compliment how professional and premium our marketing materials look. NK Innovative Minds understood our brand perfectly and elevated it beyond what we imagined.',
    col: '#f472b6',
  },
  {
    name: 'Vikram Thakur',
    role: 'Co-Founder, NovaTech Startups',
    avatar: 'VT',
    rating: 5,
    text: 'From logo design to full website development to Google Ads — they handled everything seamlessly. Our startup\'s digital presence now competes with established players in our industry. The ROI on our marketing spend has been phenomenal.',
    col: '#ff6b35',
  },
  {
    name: 'Kavitha Reddy',
    role: 'Managing Director, PrimeEdge Group',
    avatar: 'KR',
    rating: 5,
    text: 'The team at NK Innovative Minds doesn\'t just execute — they think strategically about your business. Their digital marketing campaigns brought in clients from markets we hadn\'t even targeted. True growth partners.',
    col: '#00c8ff',
  },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (idx) => {
    if (animating || idx === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 300)
  }

  const next = () => goTo((active + 1) % TESTIMONIALS.length)
  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 5500)
    return () => clearInterval(intervalRef.current)
  }, [active])

  const t = TESTIMONIALS[active]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-bg-orb testi-orb-1" />
      <div className="testi-bg-orb testi-orb-2" />

      <div className="container">
        <header className="testi-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Client Stories</span>
          <h2 className="section-title">
            Real Results, <span className="gradient-text">Real Voices</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Don't take our word for it. Here's what our clients say after partnering
            with NK Innovative Minds to transform their digital presence.
          </p>
        </header>

        {/* Featured testimonial */}
        <div className="testi-featured reveal">
          <div className={`testi-card-main glass-card ${animating ? 'testi-fade-out' : 'testi-fade-in'}`}
            style={{ '--tcard-col': t.col }}>
            <div className="tcard-glow" style={{ background: t.col }} />

            <div className="tcard-quote-icon">"</div>
            <Stars count={t.rating} />
            <p className="tcard-text">{t.text}</p>

            <div className="tcard-author">
              <div className="tcard-avatar" style={{ background: `linear-gradient(135deg, ${t.col}44, ${t.col}22)`, borderColor: t.col }}>
                <span style={{ color: t.col }}>{t.avatar}</span>
              </div>
              <div>
                <span className="tcard-name">{t.name}</span>
                <span className="tcard-role">{t.role}</span>
              </div>
            </div>

            <div className="tcard-nav">
              <button className="tcard-btn" onClick={prev} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
              </button>
              <div className="tcard-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`tcard-dot ${i === active ? 'active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{ '--dot-col': TESTIMONIALS[i].col }}
                  />
                ))}
              </div>
              <button className="tcard-btn" onClick={next} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Side mini cards */}
          <div className="testi-side">
            {TESTIMONIALS.filter((_, i) => i !== active).slice(0, 3).map((side, i) => (
              <div
                key={side.name}
                className="testi-mini glass-card"
                onClick={() => goTo(TESTIMONIALS.indexOf(side))}
                style={{ transitionDelay: `${i * 0.06}s`, '--mini-col': side.col }}
              >
                <Stars count={5} />
                <p className="tmini-text">"{side.text.slice(0, 90)}..."</p>
                <div className="tmini-author">
                  <div className="tmini-avatar" style={{ color: side.col }}>{side.avatar}</div>
                  <div>
                    <span className="tmini-name">{side.name}</span>
                    <span className="tmini-role">{side.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
