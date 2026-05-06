import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t, lang, switchLang } = useLang()
  const f = t.footer
  const n = t.nav

  const links = {
    [f.company]: [
      { label: n.history, href: '/about#history' },
      { label: n.aboutUs, href: '/about#presentation' },
      { label: n.news,    href: '/about#news' },
      { label: n.careers, href: '/careers' },
    ],
    [f.services]: [
      { label: n.engineering, href: '/engineering' },
      { label: n.production,  href: '/production' },
      { label: n.quality,     href: '/quality' },
      { label: n.products,    href: '/products' },
    ],
    [f.contact]: [
      { label: 'fuyma@fuyma.com',  href: 'mailto:fuyma@fuyma.com', external: false },
      { label: '+34 91 697 73 25', href: 'tel:+34916977325',        external: false },
      { label: n.contact,          href: '/contact',                external: false },
      { label: lang === 'es' ? 'Canal Ético' : lang === 'de' ? 'Ethik-Kanal' : lang === 'fr' ? 'Canal Éthique' : 'Ethics Channel',
        href: 'https://centinela.lefebvre.es/public/concept/1794671?access=k3iGVTedsO3Z%2BJQkvltZbgxwBwiVS%2BUbo7hU3Mz4B8g%3D',
        external: true },
    ],
  }

  const certs = ['IATF 16949', 'ISO 9001', 'ISO 14001', 'ISO 27001', 'EcoVadis']

  return (
    <footer className="bg-am-surface border-t border-am-border">

      {/* Cert strip */}
      <div className="border-b border-am-border overflow-hidden py-5">
        <div className="marquee-wrap">
          <div className="marquee-inner flex gap-12 w-max">
            {[...certs, ...certs, ...certs, ...certs].map((c, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <div className="gold-dot animate-gold-pulse" />
                <span style={{ fontFamily: 'Inter', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A4438', fontWeight: 500 }}>
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-am py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-6 group w-fit">
              <div
                className="text-am-white group-hover:text-am-gold transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: '2.2rem', letterSpacing: '0.06em', lineHeight: 1 }}
              >
                FUYMA
              </div>
              <div className="eyebrow mt-1" style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>
                High Pressure Die Casting
              </div>
            </Link>
            <p className="body-copy max-w-sm mb-8 leading-relaxed">{f.tagline}</p>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/pages/FUNDICIONES-Y-MATRICERIA-SL-FUYMA/247836575258335',
                  icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { label: 'YouTube', href: 'https://www.youtube.com/watch?v=iOSKhwzg1Xo',
                  icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#B89355" /></> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 border border-am-border flex items-center justify-center text-am-muted hover:text-am-gold hover:border-am-gold transition-all duration-300"
                  aria-label={s.label}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="eyebrow mb-6">{group}</div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="body-copy hover:text-am-gold transition-colors duration-200 text-sm">
                        {item.label}
                      </a>
                    ) : item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? (
                      <a href={item.href} className="body-copy hover:text-am-gold transition-colors duration-200 text-sm">
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.href} className="body-copy hover:text-am-gold transition-colors duration-200 text-sm">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-am-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="body-copy text-xs">{f.rights}</p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: f.legal, href: '#' },
              { label: f.privacy, href: '#' },
              { label: f.infosec, href: '#' },
              { label: lang === 'es' ? 'Política de Calidad' : lang === 'de' ? 'Qualitätspolitik' : lang === 'fr' ? 'Politique Qualité' : 'Quality Policy', href: '/quality-policy' },
            ].map((item) => (
              <Link key={item.label} to={item.href}
                className="body-copy text-xs hover:text-am-gold transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
