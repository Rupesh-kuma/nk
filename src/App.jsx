import { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Clients from './components/Clients'
import Partners from './components/Partners'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import './styles/App.css'

// ─── Custom Cursor ────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let rx = -100, ry = -100
    let mx = -100, my = -100
    let raf

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      raf = requestAnimationFrame(animate)
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
    }
    animate()

    const onEnter = () => {
      if (dotRef.current) { dotRef.current.style.width = '16px'; dotRef.current.style.height = '16px' }
      if (ringRef.current) { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px'; ringRef.current.style.opacity = '.3' }
    }
    const onLeave = () => {
      if (dotRef.current) { dotRef.current.style.width = '8px'; dotRef.current.style.height = '8px' }
      if (ringRef.current) { ringRef.current.style.width = '40px'; ringRef.current.style.height = '40px'; ringRef.current.style.opacity = '1' }
    }
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

// ─── Page Loader ──────────────────────────────────────
function Loader({ done }) {
  return (
    <div className={`page-loader ${done ? 'done' : ''}`}>
      <div className="loader-nk">NK</div>
      <div className="loader-progress">
        <div className="loader-bar" />
      </div>
      <span className="loader-label">Initializing Experience...</span>
    </div>
  )
}

// ─── FAB Buttons ──────────────────────────────────────
function FAB() {
  return (
    <div className="fab-container">
      <a
        href="https://wa.me/919711603885?text=Hello!%20I%27m%20interested%20in%20your%20services."
        className="fab fab-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span className="fab-tooltip">Chat on WhatsApp</span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <a
        href="tel:+919711603885"
        className="fab fab-call"
        aria-label="Call us"
      >
        <span className="fab-tooltip">+91-9711603885</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
        </svg>
      </a>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────
export default function App() {
// const changeTheme = (theme) => {
//   document.body.className = ""; // reset

//   if (theme !== "default") {
//     document.body.classList.add(`theme-${theme}`);
//   }
// };

  const [loaderDone, setLoaderDone] = useState(false)
  useScrollReveal()

  useEffect(() => {
    const t = setTimeout(() => setLoaderDone(true), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* <Cursor /> */}
      <Loader done={loaderDone} />

      <div className={`site-wrap ${loaderDone ? 'visible' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          {/* <div className="glow-divider" /> */}
          <Services />
          <div className="glow-divider" />
          <Clients />
          <div className="glow-divider" />
          <About />
          <div className="glow-divider" />
          
          <Partners />
          <div className="glow-divider" />
          <Process />
          <div className="glow-divider" />

          <WhyUs />
          <div className="glow-divider" />
          <Testimonials />
          <div className="glow-divider" />
          <Contact />
        </main>
        <Footer />
        {/* <div className="theme-switcher">
          <span onClick={() => changeTheme("default")} className="color default"></span>
          <span onClick={() => changeTheme("green")} className="color green"></span>
          <span onClick={() => changeTheme("orange")} className="color orange"></span>
          <span onClick={() => changeTheme("pink")} className="color pink"></span>
        </div> */}
      </div>

      <FAB />
    </>
  )
}
