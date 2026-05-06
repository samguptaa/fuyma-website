import { useEffect, useRef } from 'react'

export default function PageHero({ label, title, description, children, narrow = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const lines = el.querySelectorAll('.line-reveal')
    lines.forEach((l, i) => setTimeout(() => l.classList.add('visible'), 120 + i * 110))
  }, [])

  return (
    <section ref={ref} className="page-hero-am relative overflow-hidden">
      {/* Ambient gold light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
        style={{ background: 'radial-gradient(ellipse, rgba(184,147,85,0.06) 0%, transparent 70%)' }} />

      <div className="container-am relative">
        <div className="line-reveal">
          <span className="line-reveal-inner eyebrow">{label}</span>
        </div>
        <div className="mt-4 line-reveal" style={{ transitionDelay: '0.1s' }}>
          <h1 className={`line-reveal-inner display-xl ${narrow ? 'max-w-3xl' : ''}`}>{title}</h1>
        </div>
        {description && (
          <div className="line-reveal mt-6" style={{ transitionDelay: '0.22s' }}>
            <p className="line-reveal-inner body-copy max-w-2xl" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              {description}
            </p>
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(184,147,85,0.2), transparent)' }} />
    </section>
  )
}
