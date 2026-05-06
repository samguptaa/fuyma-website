import { useState } from 'react'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const DEPARTMENTS = [
  { name: 'Quality',            value: 'quality' },
  { name: 'Foundry',            value: 'foundry' },
  { name: 'Maintenance',        value: 'maintenance' },
  { name: 'Die-Making & Tooling', value: 'tooling' },
  { name: 'CNC Machining',      value: 'machining' },
]

export default function Careers() {
  const { t } = useLang()
  const c = t.careers
  const revRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', dept: '', message: '' })
  }

  return (
    <>
      <PageHero label={c.heroLabel} title={c.heroTitle} description={c.heroDesc} />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Departments */}
          <div className="reveal mb-12">
            <span className="eyebrow">{c.openDepts}</span>
            <h2 className="display-md mt-4 mb-6">{c.lookingFor}</h2>
            <p className="body-copy max-w-2xl">{c.lookingDesc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-am-border mb-24">
            {DEPARTMENTS.map((dept, i) => (
              <div key={dept.name} className={`reveal reveal-delay-${i+1}`}>
                <div className="bg-am-surface p-8 text-center hover:bg-am-surface2 transition-colors duration-300 cursor-default group h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-10 h-10 border border-am-border flex items-center justify-center group-hover:border-am-gold transition-colors duration-300">
                    <div className="gold-dot group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <span className="body-copy text-sm text-center">{dept.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why FUYMA */}
          <div className="reveal mb-12">
            <span className="eyebrow">{c.whyFuyma}</span>
            <h2 className="display-md mt-4 mb-12">{c.grow}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-am-border mb-24">
            {[
              { title: 'Continuous Investment',    text: 'FUYMA has invested continuously in technology and people since 1987 — joining our team means working with state-of-the-art equipment and proven processes.' },
              { title: 'International Recognition',text: 'Work for a John Deere Hall of Fame supplier — a company with a proven reputation for quality and reliability across global supply chains.' },
              { title: 'Innovation Culture',       text: 'Active R&D programme co-funded by CDTI and the EU — contributing to real research into new materials, processes and industrial applications.' },
              { title: 'Stable & Certified',       text: 'ISO 9001, IATF 16949, ISO 14001 and ISO 27001 certified — operating to the highest international standards across quality, environment and security.' },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i+1}`}>
                <div className="card-am p-8 h-full">
                  <h3 className="text-am-white mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.15rem' }}>{item.title}</h3>
                  <p className="body-copy text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="reveal mb-12">
            <span className="eyebrow">{c.apply}</span>
            <h2 className="display-md mt-4 mb-6">{c.register}</h2>
            <p className="body-copy max-w-2xl">{c.registerDesc}</p>
          </div>

          <div className="reveal max-w-2xl">
            <div className="bg-am-surface2 border border-am-border p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 mx-auto mb-6 border border-am-gold flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89355" strokeWidth="1.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-am-white mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.5rem' }}>{c.submitted}</h3>
                  <p className="body-copy text-sm">{c.submittedDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.fullName} *</label>
                    <input type="text" className="input-am" placeholder="Your full name"
                      required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.emailAddr} *</label>
                    <input type="email" className="input-am" placeholder="your@email.com"
                      required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.phoneNum}</label>
                    <input type="tel" className="input-am" placeholder="+34 ..."
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.deptInterest} *</label>
                    <select className="input-am cursor-pointer" required value={form.dept}
                      onChange={e => setForm({ ...form, dept: e.target.value })}>
                      <option value="" disabled>Select a department</option>
                      {DEPARTMENTS.map(d => (
                        <option key={d.value} value={d.value}>{d.name}</option>
                      ))}
                      <option value="other">Other / Open</option>
                    </select>
                  </div>
                  <div>
                    <label className="eyebrow mb-2 block" style={{ fontSize:'0.58rem' }}>{c.coverNote}</label>
                    <textarea className="input-am resize-none" rows={4}
                      placeholder="Tell us about your experience and what you're looking for..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center py-4">
                    {c.submit}
                  </button>
                  <p className="body-copy text-xs leading-relaxed pt-2">{c.gdpr}</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
