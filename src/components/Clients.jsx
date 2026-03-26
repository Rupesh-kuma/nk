import './Clients.css'

const CLIENTS_ROW1 = [
  { name: '/brightshie.webp',       abbr: 'TC',  color: '#00c8ff' },
  { name: '/logothakur.webp',abbr: 'BS',  color: '#8b5cf6' },
  { name: '/lgogo-Picsart-AiImageEnhancer-Photoroom.png',      abbr: 'ARC', color: '#06ffd4' },
  { name: '/New-Project-2.webp',  abbr: 'T&A', color: '#f472b6' },
  { name: '/cropped-logo.jpeg',        abbr: 'ND',  color: '#00c8ff' },
  { name: '/WhatsApp-Image-2024-08-29-at-11.20.36-PM.webp',      abbr: 'PE',  color: '#ff6b35' },
  { name: '/IMG-20240928-WA0002-1.webp',       abbr: 'SB',  color: '#8b5cf6' },
  { name: '/LOGO-1.png',         abbr: 'IP',  color: '#06ffd4' },
  { name: '/arc-logo.webp',         abbr: 'IP',  color: '#06ffd4' },
]

const CLIENTS_ROW2 = [
  { name: '/google.webp',       abbr: 'google',  color: '#f472b6' },
  { name: '/microsoft.webp',   abbr: 'microsoft',  color: '#00c8ff' },
  { name: '/godaddy.png',        abbr: 'godaddy',  color: '#8b5cf6' },
  { name: '/google cloud.webp',           abbr: 'ZT',  color: '#06ffd4' },
  
]

function LogoCard({ name, abbr, color }) {
  return (
    <div className="client-logo-card" style={{ '--logo-col': color }}>
      {/* <div className="logo-emblem">
        <span className="logo-abbr" style={{ color }}>{abbr}</span>
        <div className="logo-glow" style={{ background: color }} />
      </div> */}
      <span className="logo-name"><img src={name} alt={abbr} className='logo_client'/></span>
    </div>
  )
}

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="clients-overlay-left" />
      <div className="clients-overlay-right" />

      <div className="container">
        <header className="clients-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">Trusted By</span>
          <h2 className="section-title">
            Brands That <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            From nimble startups to established enterprises — over 200 brands have
            chosen NK Innovative Minds as their digital growth partner.
          </p>
        </header>
      </div>

      {/* Marquee Row 1 — left */}
      <div className="marquee-track">
        <div className="marquee-inner marquee-left">
          {[...CLIENTS_ROW1, ...CLIENTS_ROW1].map((c, i) => (
            <LogoCard key={`r1-${i}`} {...c} />
          ))}
        </div>
      </div>
      <h2 className="section-title brand_logo">
      Our Business <span className="gradient-text">Partners</span>
          </h2>
      {/* Marquee Row 2 — right */}
      <div className="marquee-track" style={{ marginTop: '1.25rem' }}>
        <div className="marquee-inner marquee-right">
          {[...CLIENTS_ROW2, ...CLIENTS_ROW2].map((c, i) => (
            <LogoCard key={`r2-${i}`} {...c} />
          ))}
        </div>
      </div>

      {/* Counter row */}
      <div className="container">
        <div className="clients-stats reveal">
          {[
            { val: '200+', label: 'Active Clients' },
            { val: '50+',  label: 'Industries' },
            { val: '8+',   label: 'Years of Trust' },
            { val: '98%',  label: 'Retention Rate' },
          ].map(({ val, label }) => (
            <div className="client-stat" key={label}>
              <span className="cstat-val gradient-text">{val}</span>
              <span className="cstat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
