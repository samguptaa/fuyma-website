import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const TIMELINE = [
  { year: '1987',   title: 'Foundation',               text: 'D. Feliciano Arias founds FUYMA and begins die-casting operations in aluminium, zamak and brass.' },
  { year: '~1990',  title: 'First Injection Machine',  text: 'The first 60-tonne injection machine is commissioned, formally launching foundry production operations.' },
  { year: '2005',   title: 'Barajas T4 Terminal',       text: "FUYMA fittings and connectors selected for Madrid's landmark Barajas T4 international airport terminal." },
  { year: '2008',   title: 'First John Deere Partner Award', text: 'FUYMA receives its first John Deere "Partner" supplier award for quality, technical support and delivery.' },
  { year: '2011',   title: 'Induction Furnace Investment', text: '450 kW induction furnace installed — 860 kg capacity, 960 kg/h. FUYMA pioneers induction melting in Spain.' },
  { year: '2012',   title: 'John Deere Hall of Fame',  text: 'Five consecutive Partner awards. Inducted at Moline, USA global headquarters.' },
  { year: '2013',   title: 'New Leak-Testing Facility', text: 'Dedicated leak-testing infrastructure commissioned for high-sealing applications.' },
  { year: '2025',   title: 'Madrid Community Grant',   text: 'FUYMA awarded public funding from Comunidad de Madrid financing 39% of eligible capital expenditure.' },
  { year: 'Today',  title: 'Global Precision Manufacturer', text: '60–1,600 tonne machines. Parts up to 15 kg for global clients across automotive, agricultural, industrial and lighting.' },
]

const NEWS = [
  { date: 'September 2025', title: 'FUYMA Receives Public Grant for Acquisition of Production Equipment', text: 'FUYMA has been awarded funding by the Direccion General de Economia e Industria of the Comunidad de Madrid. The grant finances 39% of eligible capital expenditure for 2025.' },
  { date: 'September 2013', title: 'FUYMA Opens New Leak-Testing Facilities', text: 'FUYMA invested in dedicated leak-testing installations, expanding quality control capabilities for components with high sealing requirements.' },
  { date: 'November 2012', title: 'FUYMA Inducted into John Deere Hall of Fame', text: "After five consecutive years as a John Deere Partner supplier, FUYMA was inducted into the Hall of Fame at John Deere's global headquarters in Moline, USA." },
  { date: 'September 2011', title: 'FUYMA Exhibits at CUMBRE 2011 – Bilbao Exhibition Centre', text: 'FUYMA presented its products and capabilities at the CUMBRE 2011 trade fair at the Bilbao Exhibition Centre (BEC).' },
  { date: 'April 2011', title: 'Investment in Medium-Frequency Induction Furnace', text: 'FUYMA announced a major investment: a 450 kW furnace with 860 kg melt capacity and 960 kg/hour output — pioneering induction melting for aluminium injection in Spain.' },
  { date: 'November 2008', title: 'FUYMA Wins Inaugural John Deere Partner Award', text: 'FUYMA honoured with the John Deere "Partner" award for outstanding quality, technical support, delivery reliability, cost and component performance.' },
  { date: 'January 2005', title: 'FUYMA Components Selected for Barajas T4 Terminal', text: "FUYMA fittings and connectors used in Madrid Barajas Airport's Terminal 4 expansion — demonstrating capacity for large-scale infrastructure supply." },
]

const TABS = ['history', 'presentation', 'news']

export default function About() {
  const { t } = useLang()
  const a = t.about
  const location = useLocation()
  const hash = location.hash.replace('#', '')
  const [active, setActive] = useState(TABS.includes(hash) ? hash : 'history')
  const revRef = useReveal()

  useEffect(() => { if (TABS.includes(hash)) setActive(hash) }, [hash])

  return (
    <>
      <PageHero label={a.heroLabel} title={a.heroTitle} description={a.heroDesc} />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Tabs */}
          <div className="flex gap-8 border-b border-am-border mb-16">
            {[{ id:'history', label: a.tabHistory }, { id:'presentation', label: a.tabAbout }, { id:'news', label: a.tabNews }].map(tab => (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                className={`tab-am ${active === tab.id ? 'active' : ''}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* HISTORY */}
          {active === 'history' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">{a.since}</span>
                  <h2 className="display-md mt-4 mb-8">{a.legacy}</h2>
                  <p className="body-copy mb-8">{a.foundedBy} <strong className="text-am-silver">D. Feliciano Arias</strong> in 1987. The company's guiding philosophy has always been simple:</p>
                  <blockquote className="border-l-2 border-am-gold pl-8 py-2">
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: '1.5rem', color: '#F5F0E8', lineHeight: 1.4 }}>
                      {a.quote}
                    </p>
                    <p className="body-copy mt-4 text-sm">{a.quoteDesc}</p>
                  </blockquote>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 overflow-hidden border border-am-border flex items-center justify-center">
                  <img src="https://www.fuyma.com/images/history-founders.jpg" alt="FUYMA founders 1987"
                    className="w-full h-full object-cover opacity-80"
                    onError={e => { e.target.style.display='none' }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'5rem', color:'rgba(184,147,85,0.15)', fontWeight:300 }}>1987</span>
                    <span className="eyebrow" style={{ color:'#3A3830' }}>Est. Humanes, Madrid</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-8">
                <div className="timeline-track" />
                <div className="space-y-0">
                  {TIMELINE.map((ev, i) => (
                    <div key={ev.year} className={`reveal reveal-delay-${(i%3)+1} relative flex gap-10 pb-12`}>
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full border border-am-gold bg-am-black" style={{ marginLeft: '-1px' }} />
                      <div className="w-20 flex-shrink-0">
                        <span className="eyebrow" style={{ color:'#B89355', fontSize:'0.6rem' }}>{ev.year}</span>
                      </div>
                      <div>
                        <h3 className="text-am-white mb-2" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.15rem' }}>{ev.title}</h3>
                        <p className="body-copy text-sm">{ev.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ABOUT US */}
          {active === 'presentation' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-20">
                <div className="reveal relative aspect-video bg-am-surface2 border border-am-border overflow-hidden flex items-center justify-center">
                  <img src="https://www.fuyma.com/images/fuyma-team.jpg" alt="The FUYMA Team"
                    className="w-full h-full object-cover" onError={e=>e.target.style.display='none'} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'3rem', color:'rgba(184,147,85,0.12)', fontWeight:300 }}>FUYMA</span>
                  </div>
                </div>
                <div className="reveal reveal-delay-2">
                  <span className="eyebrow">{a.whoWeAre}</span>
                  <h2 className="display-md mt-4 mb-6">{a.specialists}</h2>
                  <p className="body-copy mb-8">{a.specialistsDesc}</p>
                  <ul className="space-y-3">
                    {['Injection machines from 60 to 1,600 tonnes','Parts up to 15 kg in weight','Fully automated production cells',
                      'Induction melting — pioneers in Spain','In-house mould design and manufacture','Global distribution across multiple industries'].map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <div className="gold-dot mt-2 flex-shrink-0" />
                        <span className="body-copy text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-am-border mb-20">
                {[{val:'37+',label:'Years in Operation'},{val:'60–1600tn',label:'Machine Range'},{val:'15kg',label:'Max Part Weight'},{val:'4',label:'ISO Certifications'}].map(s => (
                  <div key={s.label} className="bg-am-surface p-8 text-center">
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'2.5rem', color:'#F5F0E8', letterSpacing:'-0.02em' }}>{s.val}</div>
                    <div className="eyebrow mt-2" style={{ color:'#4A4438', fontSize:'0.58rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Info Security */}
              <div className="reveal mb-10">
                <span className="eyebrow">{a.commitments}</span>
                <h2 className="display-md mt-4 mb-12">{a.infoSec}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-px bg-am-border">
                {[
                  { title:'Confidentiality', text:'Information is accessible only to authorised persons. We safeguard client data, designs and business information through robust access controls.' },
                  { title:'Integrity',       text:'Accuracy and completeness of information is maintained at all times across physical, logical and corporate security domains.' },
                  { title:'Availability',    text:'Authorised users can access information and systems when needed. Operational continuity is maintained at all times.' },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i+1}`}>
                    <div className="card-am p-8 h-full">
                      <h3 className="text-am-white mb-4" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.3rem' }}>{item.title}</h3>
                      <p className="body-copy text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEWS */}
          {active === 'news' && (
            <div className="space-y-0">
              {NEWS.map((n, i) => (
                <div key={n.title} className={`reveal reveal-delay-${(i%3)+1}`}>
                  <div className="border-b border-am-border py-10 hover:bg-am-surface2 transition-colors duration-300 px-0 -mx-0 group cursor-default">
                    <div className="grid lg:grid-cols-4 gap-6">
                      <div>
                        <span className="eyebrow" style={{ color:'#B89355', fontSize:'0.6rem' }}>{n.date}</span>
                      </div>
                      <div className="lg:col-span-3">
                        <h3 className="text-am-white mb-3 group-hover:text-am-gold transition-colors duration-300"
                          style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.25rem' }}>{n.title}</h3>
                        <p className="body-copy text-sm">{n.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  )
}
