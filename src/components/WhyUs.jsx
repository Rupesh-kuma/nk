import { useEffect, useRef } from 'react'
import * as THREE from 'three'
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

function WhyCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const mount = ref.current
    if (!mount) return
    const W = mount.clientWidth, H = mount.clientHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
    camera.position.z = 10
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0, 0)
    mount.appendChild(renderer.domElement)

    // Rotating DNA-like helix
    const helixPoints = []
    for (let i = 0; i < 200; i++) {
      const t = (i / 200) * Math.PI * 8
      helixPoints.push(new THREE.Vector3(Math.cos(t) * 2, (i / 200) * 16 - 8, Math.sin(t) * 2))
    }
    const helixPoints2 = []
    for (let i = 0; i < 200; i++) {
      const t = (i / 200) * Math.PI * 8 + Math.PI
      helixPoints2.push(new THREE.Vector3(Math.cos(t) * 2, (i / 200) * 16 - 8, Math.sin(t) * 2))
    }

    const hGeo1 = new THREE.BufferGeometry().setFromPoints(helixPoints)
    const hGeo2 = new THREE.BufferGeometry().setFromPoints(helixPoints2)
    const hMat1 = new THREE.LineBasicMaterial({ color: 0x00c8ff, transparent: true, opacity: .5 })
    const hMat2 = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: .5 })
    const helix1 = new THREE.Line(hGeo1, hMat1)
    const helix2 = new THREE.Line(hGeo2, hMat2)
    scene.add(helix1, helix2)

    // Cross-rungs
    for (let i = 0; i < 20; i++) {
      const t = (i / 20) * Math.PI * 8
      const y = (i / 20) * 16 - 8
      const rGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(Math.cos(t) * 2, y, Math.sin(t) * 2),
        new THREE.Vector3(Math.cos(t + Math.PI) * 2, y, Math.sin(t + Math.PI) * 2),
      ])
      const rMat = new THREE.LineBasicMaterial({ color: 0x06ffd4, transparent: true, opacity: .25 })
      scene.add(new THREE.Line(rGeo, rMat))
    }

    let rafId
    const clock = new THREE.Clock()
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      helix1.rotation.y = t * .3
      helix2.rotation.y = t * .3
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const W2 = mount.clientWidth, H2 = mount.clientHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])
  return <div ref={ref} className="why-canvas" />
}

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-canvas-wrap">
        <WhyCanvas />
        <div className="why-canvas-fade-t" />
        <div className="why-canvas-fade-b" />
      </div>
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
        <div className="why-bottom reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="why-bottom-text">
            Ready to work with a team that's genuinely invested in your growth?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <a href="#contact" className="btn btn-primary">Schedule a Free Consultation</a>
            <a href="https://wa.me/919711603885" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
