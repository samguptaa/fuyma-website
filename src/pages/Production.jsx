import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { useLang } from '../i18n/LanguageContext'

const TABS = ['production', 'foundry']

export default function Production() {
  const { t } = useLang()
  const n = t.nav
  const location = useLocation()
  const hash = location.hash.replace('#', '')
  const [active, setActive] = useState(TABS.includes(hash) ? hash : 'production')
  const revRef = useReveal()

  useEffect(() => { if (TABS.includes(hash)) setActive(hash) }, [hash])

  return (
    <>
      <PageHero
        label={n.production}
        title="State-of-the-Art Casting Facilities"
        description="Fully automated die casting cells and pioneering induction melting technology — delivering minimal porosity and maximum quality for demanding applications."
      />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Tabs */}
          <div className="flex gap-8 border-b border-am-border mb-16">
            {[{ id:'production', label: n.production }, { id:'foundry', label: n.foundry }].map(tab => (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                className={`tab-am ${active === tab.id ? 'active' : ''}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* PRODUCTION */}
          {active === 'production' && (
            <div>
              {/* Stats */}
              <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-am-border mb-24">
                {[
                  { val: '60–1600', unit: '',    label: 'Tonnes Clamping Force' },
                  { val: '15',      unit: 'kg',  label: 'Max Part Weight' },
                  { val: '100',     unit: '%',   label: 'Automated Cells' },
                  { val: '3',       unit: '',    label: 'Materials Processed' },
                ].map(s => (
                  <div key={s.label} className="bg-am-surface p-8 text-center">
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'2.5rem', color:'#F5F0E8', letterSpacing:'-0.02em' }}>
                      {s.val.includes('–') ? s.val : <AnimatedCounter value={s.val} suffix={s.unit} />}
                    </div>
                    <div className="eyebrow mt-2" style={{ color:'#4A4438', fontSize:'0.58rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Our Plant</span>
                  <h2 className="display-md mt-4 mb-8">Fully Automated Production Islands</h2>
                  <p className="body-copy mb-6">
                    FUYMA operates injection machines from <strong className="text-am-silver">60 to 1,600 tonnes</strong> of closing force in fully automated production islands. High automation enables consistently low porosity and high sealing performance.
                  </p>
                  <p className="body-copy mb-8">
                    Our machines produce castings up to <strong className="text-am-silver">15 kg</strong> in weight, serving automotive, agricultural, industrial and lighting clients worldwide.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Aluminium (Al) — primary alloy, multiple grades',
                      'Zamak — zinc-based alloy for precision small parts',
                      'Brass — copper-zinc alloy for high-strength applications',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <div className="gold-dot mt-2 flex-shrink-0" />
                        <span className="body-copy text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border overflow-hidden flex items-center justify-center">
                  <img src="https://www.fuyma.com/images/production.jpg" alt="FUYMA production floor"
                    className="w-full h-full object-cover opacity-60"
                    onError={e => e.target.style.display = 'none'} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.1)', fontWeight:300 }}>Production</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-am-border">
                {[
                  { title: 'High Pressure Die Casting', text: 'Aluminium injected at high pressure into hardened steel dies — achieving tight tolerances, excellent surface finish and high production rates.' },
                  { title: 'Minimal Porosity',          text: 'Induction melting combined with optimised process parameters delivers consistently low porosity — critical for pressure-tight and structural components.' },
                  { title: 'High Sealing Performance',  text: 'Dedicated leak-testing facilities ensure components for hydraulic, pneumatic and gas applications meet the most stringent sealing requirements.' },
                  { title: 'Post-Casting Integration',  text: 'Machining, deburring, impregnation, surface treatments and assembly all available — delivering ready-to-fit parts from one supplier.' },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i+1}`}>
                    <div className="card-am p-8 h-full">
                      <h3 className="text-am-white mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.15rem' }}>{item.title}</h3>
                      <p className="body-copy text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FOUNDRY & MELTING */}
          {active === 'foundry' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Induction Melting</span>
                  <h2 className="display-md mt-4 mb-8">Pioneers of Induction Melting in Spain</h2>
                  <p className="body-copy mb-8">
                    FUYMA was among the first Spanish die casters to adopt medium-frequency induction melting technology. Our 450 kW furnace delivers cleaner, more homogeneous metal to the die — measurably improving part quality.
                  </p>
                  <div className="border-l-2 border-am-gold pl-8 py-2">
                    <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontStyle:'italic', fontSize:'1.35rem', color:'#F5F0E8', lineHeight:1.4 }}>
                      "Induction melting reduces final porosity by delivering cleaner metal — fewer inclusions, lower gas content and more consistent mechanical properties."
                    </p>
                  </div>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border overflow-hidden flex items-center justify-center">
                  <img src="https://www.fuyma.com/images/furnace.jpg" alt="FUYMA induction furnace"
                    className="w-full h-full object-cover opacity-60"
                    onError={e => e.target.style.display = 'none'} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.1)', fontWeight:300 }}>Foundry</span>
                  </div>
                </div>
              </div>

              {/* Furnace stats */}
              <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-px bg-am-border mb-24">
                {[
                  { val: '450', unit: 'kW',   label: 'Furnace Power' },
                  { val: '860', unit: 'kg',   label: 'Melt Capacity' },
                  { val: '960', unit: 'kg/h', label: 'Production Rate' },
                ].map(s => (
                  <div key={s.label} className="bg-am-surface p-10 text-center">
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'3rem', color:'#F5F0E8', letterSpacing:'-0.02em' }}>
                      <AnimatedCounter value={s.val} suffix={s.unit} />
                    </div>
                    <div className="eyebrow mt-3" style={{ color:'#4A4438', fontSize:'0.58rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-am-border">
                {[
                  { title: 'Reduced Porosity',     text: 'Induction melting produces cleaner metal with fewer dissolved gases and inclusions — directly reducing porosity in the finished part.' },
                  { title: 'Consistent Quality',   text: 'Precise temperature and composition control through induction heating ensures metal quality is consistent across every cycle and shift.' },
                  { title: 'High Throughput',       text: 'At 960 kg/hour, our induction furnace supports continuous high-volume production without compromising metal quality.' },
                  { title: 'Environmental Benefit', text: 'Induction melting is more energy-efficient and produces less dross than gas-fired alternatives, supporting our ISO 14001 commitments.' },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i+1}`}>
                    <div className="card-am p-8 h-full">
                      <h3 className="text-am-white mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.15rem' }}>{item.title}</h3>
                      <p className="body-copy text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
