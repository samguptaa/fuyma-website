import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { LANGUAGES } from '../i18n/translations'

export default function Navbar() {
  const { t, lang, switchLang } = useLang()
  const n = t.nav
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [langOpen, setLangOpen]     = useState(false)
  const location = useLocation()
  const navRef  = useRef(null)

  const navItems = [
    {
      label: n.company, href: '/about',
      children: [
        { label: n.history, href: '/about#history' },
        { label: n.aboutUs, href: '/about#presentation' },
        { label: n.news,    href: '/about#news' },
      ],
    },
    {
      label: n.engineering, href: '/engineering',
      children: [
        { label: n.designTooling,  href: '/engineering#design' },
        { label: n.simulations,    href: '/engineering#simulations' },
        { label: n.rd,             href: '/engineering#rd' },
        { label: n.successCases,   href: '/engineering#success' },
        { label: n.videos,         href: '/videos' },
      ],
    },
    {
      label: n.production, href: '/production',
      children: [
        { label: n.production, href: '/production#production' },
        { label: n.foundry,    href: '/production#foundry' },
      ],
    },
    {
      label: n.quality, href: '/quality',
      children: [
        { label: n.quality,       href: '/quality' },
        { label: n.qualityPolicy, href: '/quality-policy' },
      ],
    },
    {
      label: n.products, href: '/products',
      children: [
        { label: n.products, href: '/products#products' },
        { label: n.finishes, href: '/products#finishes' },
      ],
    },
    { label: n.careers, href: '/careers' },
    { label: n.contact, href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
    setLangOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null)
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = (href) => location.pathname === href || location.pathname.startsWith(href + '#')

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-700 ${
        scrolled
          ? 'bg-am-black/96 backdrop-blur-xl border-b border-am-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-am">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group flex-shrink-0">
            <span
              className="text-am-white group-hover:text-am-gold transition-colors duration-300"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: '1.65rem', letterSpacing: '0.06em' }}
            >
              FUYMA
            </span>
            <span className="eyebrow" style={{ fontSize: '0.52rem', letterSpacing: '0.22em', marginTop: '2px' }}>
              Fundiciones y Matricería
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-xs font-medium tracking-widest uppercase transition-colors duration-300 py-1 ${
                    isActive(item.href) ? 'text-am-gold' : 'text-am-silver hover:text-am-white'
                  }`}
                  style={{ letterSpacing: '0.14em', fontSize: '0.65rem' }}
                >
                  {item.label}
                  {item.children && (
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeMenu === item.label && (
                  <div className="absolute top-full left-0 min-w-[180px] animate-fade-in" style={{ paddingTop: '16px', zIndex: 9999 }}>
                    <div className="border border-am-border py-3 shadow-2xl" style={{ background: '#09090A' }}>
                    <div className="absolute top-4 left-5 right-5 h-px bg-am-gold opacity-40" />
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-5 py-2.5 text-am-muted hover:text-am-gold transition-colors duration-200"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {child.label}
                      </Link>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Lang + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language switcher */}
            <div className="relative">
              <div className="flex items-center gap-1">
                {LANGUAGES.map((l, i) => (
                  <span key={l.code} className="flex items-center">
                    <button
                      onClick={() => switchLang(l.code)}
                      className={`lang-btn ${lang === l.code ? 'active' : ''}`}
                    >
                      {l.label}
                    </button>
                    {i < LANGUAGES.length - 1 && (
                      <span className="text-am-subtle text-xs mx-0.5">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-px h-4 bg-am-border" />

            <Link to="/contact" className="btn-gold" style={{ padding: '9px 22px', fontSize: '0.62rem', letterSpacing: '0.18em' }}>
              {n.getInTouch}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-am-white transition-all duration-400 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-px bg-am-white transition-all duration-400 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-am-white transition-all duration-400 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-am-black border-t border-am-border px-6 py-6 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                className="block py-3 text-am-silver hover:text-am-gold transition-colors border-b border-am-border2"
                style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                {item.label}
              </Link>
            </div>
          ))}
          {/* Language */}
          <div className="flex gap-4 pt-5">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLang(l.code)}
                className={`lang-btn text-xs ${lang === l.code ? 'active' : ''}`}
              >
                {l.full}
              </button>
            ))}
          </div>
          <div className="pt-4">
            <Link to="/contact" className="btn-gold w-full justify-center">
              {n.getInTouch}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
