import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Add stagger delay to children
            entry.target.querySelectorAll('[data-stagger]').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, [data-stagger]'
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
