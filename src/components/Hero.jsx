import { useEffect, useRef } from 'react'
import HeroCanvas from './HeroCanvas'
import './Hero.css'

const TYPED_WORDS = ['Web Development', 'Digital Marketing', 'SEO Mastery', 'Brand Identity', 'Catalogue Design']

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    function type() {
      const current = TYPED_WORDS[wordIndex]
      if (deleting) {
        charIndex--
      } else {
        charIndex++
      }

      if (typedRef.current) {
        typedRef.current.textContent = current.slice(0, charIndex)
      }

      let delay = deleting ? 55 : 100

      if (!deleting && charIndex === current.length) {
        delay = 1800
        deleting = true
      } else if (deleting && charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % TYPED_WORDS.length
        delay = 400
      }

      timer = setTimeout(type, delay)
    }

    timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero container" id="hero">
      {/* Full-page Three.js canvas */}
      <HeroCanvas />

      {/* Radial gradient overlays */}
      <div className="hero-grad-1" />
      <div className="hero-grad-2" />
      <div className="hero-vignette" />

      {/* Scanline effect */}
      <div className="hero-scanlines" />

      <div className=" hero-content">
        {/* Status badge */}
        <div className="hero-badge">
          <span className="badge-pulse" />
          <span className="badge-label">
            <span className="badge-mono">{'>'}</span>&nbsp;
            India's #1 Creative Digital Agency &nbsp;
            <span className="badge-mono">_</span>
          </span>
        </div>

        {/* Main headline */}
        <h1 className="hero-title">
          <span className="hero-title-line">We Architect </span> <span className="hero-title-line hero-title-gradient">
            Digital Futures
          </span> <span className="hero-title-line hero-title-sub">
            That Define Industries
          </span>
        </h1>

        {/* Typed service */}
        <div className="hero-typed-wrap">
          <span className="hero-typed-prefix">Specializing in</span>
          <span className="hero-typed gradient-text" ref={typedRef} />
          <span className="hero-cursor" />
        </div>

        {/* Description */}
        <p className="hero-desc">
          NK Innovative Minds engineers high-performance digital ecosystems — from pixel-perfect websites
          to full-funnel marketing campaigns that convert visitors into loyal customers.
          8+ years. 200+ brands. Zero compromises.
        </p>

        {/* CTA Row */}
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>

        {/* Metrics row */}
        <div className="hero-metrics">
          {[
            { val: '8+',   label: 'Years Active',       icon: '◆' },
            { val: '200+', label: 'Brands Transformed',  icon: '◆' },
            { val: '98%',  label: 'Client Retention',    icon: '◆' },
            { val: '50+',  label: 'Industries Served',   icon: '◆' },
          ].map(({ val, label, icon }) => (
            <div className="hero-metric" key={label}>
              <span className="metric-icon gradient-text">{icon}</span>
              <div>
                <span className="metric-val">{val}</span>
                <span className="metric-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-track">
          <div className="scroll-thumb" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
