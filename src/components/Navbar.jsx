import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Services',    href: '#services' },
  { label: 'About',       href: '#about' },
  { label: 'Process',     href: '#process' },
  { label: 'Clients',     href: '#clients' },
  { label: 'Why Us',      href: '#why-us' },
  { label: 'Testimonials',href: '#testimonials' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation">
      <div className="nav-inner container">
        {/* Logo */}
        <a href="#hero" className="nav-logo" aria-label="NK Innovative Minds Home">
          <div className="logo-box">
            <img src='/nk_logo.jpg' className="logo-letters"/>
            <div className="logo-scan" />
          </div>
          {/* <div className="logo-wordmark">
            <span className="logo-w1">Innovative</span>
            <span className="logo-w2">Minds</span>
          </div> */}
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link ${active === href ? 'active' : ''}`}
                onClick={() => { setActive(href); setOpen(false) }}
              >
                {label}
                <span className="link-underline" />
              </a>
            </li>
          ))}
          <li className="nav-cta-wrap">
            <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
              Get a Free Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </nav>
  )
}
