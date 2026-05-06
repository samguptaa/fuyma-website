import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useReveal } from '../components/useReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const SECTOR_ICONS = ['🚗','🚜','⚙️','💡','🔥','🌡️']

export default function Home() {
  const { t } = useLang()
  const s  = t.sections
  const h  = t.hero
  const st = t.stats

  const heroRef  = useRef(null)
  const revRef1  = useReveal()
  const revRef2  = useReveal()
  const revRef3  = useReveal()
  const revRef4  = useReveal()
  const revRef5  = useReveal()
  const revRef6  = useReveal()
  const revRef7  = useReveal()

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const lines = hero.querySelectorAll('.line-reveal')
    lines.forEach((l, i) => setTimeout(() => l.classList.add('visible'), 200 + i * 130))

    // Subtle parallax on hero text
    const onScroll = () => {
      const sy = window.scrollY
      const title = hero.querySelector('.hero-title-wrap')
      const badge = hero.querySelector('.hero-badge-wrap')
      if (title) title.style.transform = `translateY(${sy * 0.14}px)`
      if (badge) badge.style.transform = `translateY(${sy * 0.08}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const statItems = [
    { val: '37', suffix: '+', label: st.years },
    { val: '1600', suffix: 'tn', label: st.clamp },
    { val: '15', suffix: 'kg', label: st.weight },
    { val: '4', suffix: '', label: st.certs },
  ]

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* Background: dark gradient + subtle texture */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #06060A 0%, #0E0D0B 50%, #09090A 100%)' }} />

        {/* Vertical gold lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[15, 35, 65, 85].map((x) => (
            <div key={x} className="gold-line-v absolute top-0 bottom-0 h-full"
              style={{ left: `${x}%`, opacity: 0.06 }} />
          ))}
        </div>

        {/* Gold ambient glow */}
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(184,147,85,0.07) 0%, transparent 60%)' }} />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(184,147,85,0.04) 0%, transparent 60%)' }} />

        <div className="relative container-am pt-36 pb-24">
          {/* Badge */}
          <div className="line-reveal hero-badge-wrap mb-10">
            <div className="line-reveal-inner flex items-center gap-3">
              <div className="w-px h-6 bg-am-gold opacity-60" />
              <span className="eyebrow">{h.badge}</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="hero-title-wrap max-w-5xl">
            <div className="line-reveal">
              <h1 className="line-reveal-inner display-hero"
                style={{ fontStyle: 'italic', color: '#F5F0E8' }}>
                {h.title1}
              </h1>
            </div>
            <div className="line-reveal" style={{ transitionDelay: '0.13s' }}>
              <h1 className="line-reveal-inner display-hero"
                style={{ color: '#B89355', fontStyle: 'normal', fontWeight: 300 }}>
                {h.title2}
              </h1>
            </div>
          </div>

          {/* Sub & desc */}
          <div className="line-reveal mt-10" style={{ transitionDelay: '0.27s' }}>
            <p className="line-reveal-inner eyebrow" style={{ color: '#4A4438', letterSpacing: '0.22em' }}>
              {h.subtitle}
            </p>
          </div>
          <div className="line-reveal mt-4" style={{ transitionDelay: '0.37s' }}>
            <p className="line-reveal-inner body-copy max-w-xl" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              {h.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="line-reveal mt-10" style={{ transitionDelay: '0.47s' }}>
            <div className="line-reveal-inner flex flex-wrap gap-4">
              <Link to="/about" className="btn-gold-fill">
                {h.cta1}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-gold">
                {h.cta2}
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="line-reveal mt-24" style={{ transitionDelay: '0.57s' }}>
            <div className="line-reveal-inner">
              <div className="gold-line mb-8 opacity-30" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {statItems.map((stat) => (
                  <div key={stat.label} className="stat-am">
                    <div
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2.2rem,4vw,3.5rem)', letterSpacing: '-0.02em', color: '#F5F0E8', lineHeight: 1 }}
                    >
                      <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                    </div>
                    <div className="eyebrow mt-2" style={{ color: '#4A4438', fontSize: '0.6rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-12 overflow-hidden">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-am-gold animate-float" />
          </div>
        </div>
      </section>

      {/* ─── VALUE CHAIN ─────────────────────────────────────────── */}
      <section className="section-am border-t border-am-border bg-am-surface" ref={revRef1}>
        <div className="container-am">
          <div className="reveal grid lg:grid-cols-2 gap-16 items-end mb-20">
            <div>
              <span className="eyebrow">{s.capabilities}</span>
              <h2 className="display-lg mt-4">{s.valueChain}</h2>
            </div>
            <p className="body-copy">{s.valueChainDesc}</p>
          </div>

          <div className="reveal reveal-delay-2 relative pt-8">
            {/* Track line */}
            <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-am-gold to-transparent opacity-20" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-am-border">
              {t.chain.map((step, i) => (
                <div key={step} className="bg-am-surface p-6 hover:bg-am-surface2 transition-colors duration-300 group">
                  <div className="eyebrow mb-3" style={{ color: '#3A3830', fontSize: '0.55rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-am-silver group-hover:text-am-gold transition-colors duration-300"
                    style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '0.78rem', lineHeight: 1.5 }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ────────────────────────────────────────── */}
      <section className="section-am" ref={revRef2}>
        <div className="container-am">
          <div className="reveal mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <span className="eyebrow">{s.whyFuyma}</span>
                <h2 className="display-lg mt-4">{s.precision}</h2>
              </div>
              <p className="body-copy">{s.precisionDesc}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-am-border">
            {t.caps.map((cap, i) => (
              <div key={cap.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="card-am p-8 h-full group">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="eyebrow" style={{ color: '#3A3830', fontSize: '0.6rem', flex: '0 0 auto', paddingTop: '2px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-px h-4 bg-am-gold opacity-30 flex-shrink-0 mt-0.5" />
                  </div>
                  <h3 className="text-am-white mb-4 group-hover:text-am-gold transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.25rem', letterSpacing: '0.01em' }}>
                    {cap.title}
                  </h3>
                  <p className="body-copy text-sm leading-relaxed">{cap.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTORS ─────────────────────────────────────────────── */}
      <section className="section-am bg-am-surface border-y border-am-border" ref={revRef3}>
        <div className="container-am">
          <div className="reveal grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="eyebrow">{s.industries}</span>
              <h2 className="display-lg mt-4">{s.trusted}</h2>
            </div>
            <p className="body-copy">{s.trustedDesc}</p>
          </div>

          <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-am-border">
            {t.sectors.map((sector, i) => (
              <div key={sector} className="bg-am-surface p-8 hover:bg-am-surface2 transition-all duration-400 group text-center">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{SECTOR_ICONS[i]}</div>
                <div className="text-am-muted group-hover:text-am-silver transition-colors"
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                  {sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HALL OF FAME PULL QUOTE ─────────────────────────────── */}
      <section className="section-am-sm" ref={revRef4}>
        <div className="container-am">
          <div className="reveal">
            <div className="grid lg:grid-cols-3 gap-12 items-center py-12 border-y border-am-border">
              <div className="lg:col-span-2">
                <span className="eyebrow mb-4 block">{s.recognition}</span>
                <h2 className="display-md">{s.jdHallFame}</h2>
                <p className="body-copy mt-4">{s.jdDesc}</p>
              </div>
              <div className="flex lg:justify-end">
                <Link to="/engineering#success" className="btn-ghost">
                  {s.viewSuccess}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ──────────────────────────────────────── */}
      <section className="section-am bg-am-surface border-y border-am-border" ref={revRef5}>
        <div className="container-am">
          <div className="reveal text-center mb-16">
            <span className="eyebrow">{s.qualityTitle}</span>
            <h2 className="display-lg mt-4 mx-auto max-w-2xl">{s.certified}</h2>
            <p className="body-copy mx-auto mt-5 max-w-xl text-center">{s.certifiedDesc}</p>
          </div>
          <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-am-border">
            {[
              { name: 'IATF 16949', desc: 'Automotive Quality' },
              { name: 'ISO 9001',   desc: 'Quality Mgmt' },
              { name: 'ISO 14001',  desc: 'Environmental' },
              { name: 'ISO 27001',  desc: 'Info Security' },
              { name: 'EcoVadis',   desc: 'Sustainability' },
              { name: 'Madrid Network', desc: 'Innovation' },
            ].map((c) => (
              <div key={c.name} className="bg-am-surface cert-am hover:bg-am-surface2 group">
                <div className="gold-dot animate-gold-pulse" />
                <div className="text-am-white group-hover:text-am-gold transition-colors"
                  style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.78rem', letterSpacing: '0.04em' }}>
                  {c.name}
                </div>
                <div className="eyebrow" style={{ color: '#3A3830', fontSize: '0.55rem' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS NUMBERS ─────────────────────────────────────── */}
      <section className="section-am" ref={revRef6}>
        <div className="container-am">
          <div className="gold-line mb-20 opacity-20" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: '450', unit: 'kW',   label: 'Furnace Power' },
              { num: '960', unit: 'kg/h', label: 'Metal Throughput' },
              { num: '100', unit: '%',    label: 'Material Traceability' },
              { num: '860', unit: 'kg',   label: 'Melt Capacity' },
            ].map((item, i) => (
              <div key={item.label} className={`reveal reveal-delay-${i + 1} stat-am`}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4.5rem)', letterSpacing: '-0.02em', color: '#F5F0E8', lineHeight: 1 }}>
                  <AnimatedCounter value={item.num} suffix={item.unit} />
                </div>
                <div className="eyebrow mt-3" style={{ color: '#4A4438', fontSize: '0.58rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div className="gold-line mt-20 opacity-20" />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="section-am bg-am-surface border-y border-am-border relative overflow-hidden" ref={revRef7}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(184,147,85,0.06) 0%, transparent 70%)' }} />
        <div className="container-am relative text-center">
          <div className="reveal max-w-3xl mx-auto">
            <span className="eyebrow">{s.startProject}</span>
            <h2 className="display-lg mt-4 mb-6">{s.involveDay1}</h2>
            <p className="body-copy mx-auto mb-12 max-w-xl">{s.involveDesc}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold-fill">
                {s.contactTeam}
              </Link>
              <Link to="/engineering" className="btn-gold">
                {s.engineeringServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EMPLOYEE ACCESS ─────────────────────────────────────── */}
      <section className="section-am-sm border-b border-am-border">
        <div className="container-am">
          <div className="reveal flex flex-col lg:flex-row items-center justify-between gap-8 py-4">
            <div className="flex items-center gap-8">
              <div className="w-12 h-12 border border-am-border flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B89355" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div>
                <span className="eyebrow block mb-1">{s.staffAccess}</span>
                <h3 className="text-am-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.3rem' }}>{s.employeeTitle}</h3>
                <p className="body-copy text-xs mt-1 max-w-md">{s.employeeDesc}</p>
              </div>
            </div>
            <a href="../Fuyma Online Training Portal/index.html" className="btn-gold flex-shrink-0">
              {s.trainingPortal}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
