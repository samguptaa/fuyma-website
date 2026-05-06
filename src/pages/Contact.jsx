import { useState } from 'react'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const revRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero label={c.heroLabel} title={c.heroTitle} description={c.heroDesc} />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          <div className="grid lg:grid-cols-2 gap-20 mb-24">

            {/* Contact Info */}
            <div className="reveal">
              <span className="eyebrow">{c.findUs}</span>
              <div className="mt-6 mb-10">
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'3rem', color:'#F5F0E8', letterSpacing:'-0.01em', lineHeight:1 }}>FUYMA</h2>
                <p className="eyebrow mt-1" style={{ fontSize:'0.6rem' }}>Fundiciones y Matricería S.A.</p>
              </div>

              <div className="space-y-8 mb-12">
                {[
                  {
                    label: c.address,
                    content: (
                      <address className="not-italic body-copy text-sm leading-relaxed">
                        Ctra. Fuenlabrada a Moraleja<br />
                        Polígono La Fraila III<br />
                        C/ Tenerife, 30–36<br />
                        28970 Humanes de Madrid<br />
                        <strong className="text-am-silver">España</strong>
                      </address>
                    ),
                  },
                  {
                    label: c.phone,
                    content: <a href="tel:+34916977325" className="body-copy text-sm hover:text-am-gold transition-colors duration-200">+34 91 697 73 25</a>,
                  },
                  {
                    label: c.email,
                    content: <a href="mailto:fuyma@fuyma.com" className="body-copy text-sm hover:text-am-gold transition-colors duration-200">fuyma@fuyma.com</a>,
                  },
                  {
                    label: c.fax,
                    content: <span className="body-copy text-sm">+34 91 615 95 92</span>,
                  },
                ].map(item => (
                  <div key={item.label} className="grid grid-cols-3 gap-4 items-start">
                    <span className="eyebrow" style={{ fontSize:'0.58rem', paddingTop:'2px' }}>{item.label}</span>
                    <div className="col-span-2">{item.content}</div>
                  </div>
                ))}
              </div>

              <div className="gold-line mb-8" />

              <div>
                <span className="eyebrow mb-4 block" style={{ fontSize:'0.58rem' }}>{c.ethics}</span>
                <a
                  href="https://centinela.lefebvre.es/public/concept/1794671?access=k3iGVTedsO3Z%2BJQkvltZbgxwBwiVS%2BUbo7hU3Mz4B8g%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {c.ethicsLink}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal reveal-delay-2">
              <span className="eyebrow mb-8 block">{c.sendMessage}</span>
              <div className="bg-am-surface2 border border-am-border p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 mx-auto mb-6 border border-am-gold flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89355" strokeWidth="1.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-am-white mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.5rem' }}>{c.sent}</h3>
                    <p className="body-copy text-sm">{c.sentDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.yourName} *</label>
                      <input type="text" className="input-am" placeholder="Full name"
                        required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.yourPhone}</label>
                        <input type="tel" className="input-am" placeholder="+34 ..."
                          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.yourEmail} *</label>
                        <input type="email" className="input-am" placeholder="your@email.com"
                          required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.subject}</label>
                      <select className="input-am cursor-pointer" value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}>
                        <option value="">{c.selectTopic}</option>
                        {c.topics.map(topic => (
                          <option key={topic} value={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.message} *</label>
                      <textarea className="input-am resize-none" rows={5}
                        placeholder="Describe your project, component or enquiry..."
                        required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn-gold w-full justify-center py-4">
                      {c.send}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal">
            <div className="border border-am-border overflow-hidden" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.6185!2d-3.8875!3d40.3025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418e6f0d61b5c5%3A0x0!2sCalle+Tenerife+30%2C+28970+Humanes+de+Madrid!5e0!3m2!1sen!2ses!4v1234567890"
                title="FUYMA Location — Humanes de Madrid"
                className="w-full h-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: 'grayscale(1) invert(0.9) hue-rotate(180deg) brightness(0.65) contrast(1.15)' }}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
