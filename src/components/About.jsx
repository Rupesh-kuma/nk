import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './About.css'

function AIBrain() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const W = 480, H = 480
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0, 0)
    mount.appendChild(renderer.domElement)

    // Outer dodecahedron frame
    const dodGeo = new THREE.DodecahedronGeometry(2.2)
    const dodMat = new THREE.MeshBasicMaterial({ color: 0x00c8ff, wireframe: true, transparent: true, opacity: .15 })
    const dod = new THREE.Mesh(dodGeo, dodMat)
    scene.add(dod)

    // Inner icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.5, 1)
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: .3 })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    scene.add(ico)

    // Torus knot — the "brain" centerpiece
    const knGeo = new THREE.TorusKnotGeometry(.7, .18, 120, 16, 3, 5)
    const knMat = new THREE.MeshBasicMaterial({ color: 0x06ffd4, wireframe: true, transparent: true, opacity: .6 })
    const kn = new THREE.Mesh(knGeo, knMat)
    scene.add(kn)

    // Orbiting rings
    const rings = [0, 1, 2].map((i) => {
      const geo = new THREE.TorusGeometry(2.6 - i * .15, .012, 8, 80)
      const mat = new THREE.MeshBasicMaterial({ color: [0x00c8ff, 0x8b5cf6, 0x06ffd4][i], transparent: true, opacity: .4 })
      const m = new THREE.Mesh(geo, mat)
      m.rotation.x = (Math.PI / 3) * i
      m.rotation.y = (Math.PI / 5) * i
      scene.add(m)
      return m
    })

    // Particle cloud
    const pGeo = new THREE.BufferGeometry()
    const pPos = new Float32Array(400 * 3)
    for (let i = 0; i < 400; i++) {
      const r = 2.5 + Math.random() * .8
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      pPos[i*3]   = r * Math.sin(p) * Math.cos(t)
      pPos[i*3+1] = r * Math.sin(p) * Math.sin(t)
      pPos[i*3+2] = r * Math.cos(p)
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({ color: 0x00c8ff, size: .05, transparent: true, opacity: .7, blending: THREE.AdditiveBlending })
    scene.add(new THREE.Points(pGeo, pMat))

    let rafId
    const clock = new THREE.Clock()
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      dod.rotation.y = t * .15
      dod.rotation.x = t * .08
      ico.rotation.y = -t * .2
      ico.rotation.z = t * .1
      kn.rotation.y = t * .6
      kn.rotation.x = t * .3
      rings[0].rotation.z += .006
      rings[1].rotation.x += .004
      rings[2].rotation.y += .008
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: 480, height: 480, maxWidth: '100%' }} />
}

const ACHIEVEMENTS = [
  { icon: '◆', val: '8+',   label: 'Years of Excellence' },
  { icon: '◆', val: '200+', label: 'Projects Delivered' },
  { icon: '◆', val: '50+',  label: 'Industries Served' },
  { icon: '◆', val: '98%',  label: 'Client Retention Rate' },
]

const VALUES = [
  { icon: '⚡', title: 'Speed to Market',   desc: 'Rapid delivery without sacrificing quality' },
  { icon: '🎯', title: 'Results First',      desc: 'Every decision tied to measurable outcomes' },
  { icon: '🧠', title: 'Innovation-Led',     desc: 'Latest tech, frameworks, and growth strategies' },
  { icon: '🤝', title: 'True Partnership',   desc: 'We grow only when you grow' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-orb" />
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <div className="about-visual reveal-left">
            <div className="brain-wrapper">
              <AIBrain />
              <div className="brain-label">
                <span className="brain-label-top gradient-text">AI-POWERED</span>
                <span className="brain-label-bot">DIGITAL ENGINE</span>
              </div>
            </div>

            {/* Achievement row */}
            <div className="achievements">
              {ACHIEVEMENTS.map(({ icon, val, label }) => (
                <div className="achievement" key={label}>
                  <span className="ach-icon gradient-text">{icon}</span>
                  <span className="ach-val">{val}</span>
                  <span className="ach-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="about-content reveal-right">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title">
              The Minds Behind Your<br />
              <span className="gradient-text">Digital Transformation</span>
            </h2>
            <p className="about-lead">
              NK Innovative Minds is a full-service digital agency headquartered in India, built by a collective
              of visionary designers, expert developers, and performance-obsessed marketers.
            </p>
            <p className="about-body">
              Since our founding, we've partnered with over 200 brands — from emerging startups to
              established enterprises — to architect digital presences that don't just look exceptional
              but perform exceptionally. Our methodology combines creative excellence with engineering
              precision and data-driven strategy to deliver outcomes that move business metrics.
            </p>
            <p className="about-body">
              We operate at the intersection of technology and creativity, constantly evolving our
              skill set to stay ahead of the digital curve. When you work with NK Innovative Minds,
              you're not hiring a vendor — you're gaining a growth partner invested in your success.
            </p>

            <div className="about-values">
              {VALUES.map(({ icon, title, desc }) => (
                <div className="about-value" key={title}>
                  <span className="val-icon">{icon}</span>
                  <div>
                    <h4 className="val-title">{title}</h4>
                    <p className="val-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-ctas">
              <a href="#contact" className="btn btn-primary">Partner With Us</a>
              <a href="#process" className="btn btn-ghost">Our Process →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
