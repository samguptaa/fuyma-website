import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const SECTORS = [
  { title: 'Automotive',            text: 'Structural, hydraulic and engine-bay components for passenger cars and commercial vehicles. IATF 16949 certified for automotive supply chains.' },
  { title: 'Agricultural Machinery',text: 'Robust, high-performance castings for tractors, harvesters and agricultural implements — including supply to John Deere (Hall of Fame supplier).' },
  { title: 'Industrial Components', text: 'Precision castings for hydraulic valves, pumps, compressors, and general industrial machinery requiring tight tolerances and consistent performance.' },
  { title: 'Technical Lighting',    text: 'Aluminium heat sinks and housings for professional and architectural LED lighting — leveraging R&D-led thermal management expertise.' },
  { title: 'Fire Suppression',      text: 'Safety-critical castings for sprinkler systems, gas suppression equipment and fire protection infrastructure — with strict leak-tight requirements.' },
  { title: 'Thermal Management',    text: "Novel thermal dissipator designs developed through R&D — aluminium's high thermal conductivity makes it ideal for heat management in electronics and power systems." },
]

const FINISHES = [
  { num: '01', name: 'CNC Machining',          text: 'Post-cast machining of bores, threads, mating faces and precision surfaces — in-house capability ensures dimensional control and fast turnaround.' },
  { num: '02', name: 'Vacuum Impregnation',     text: 'Seals micro-porosity in castings to achieve pressure-tight components — essential for hydraulic, pneumatic and fluid-handling applications.' },
  { num: '03', name: 'Cataphoresis (E-Coat)',   text: 'Electrocoating for uniform corrosion protection on complex geometries, including internal surfaces inaccessible by spray.' },
  { num: '04', name: 'Painting & Powder Coat',  text: 'Decorative and protective paint and powder coating finishes matched to your specification.' },
  { num: '05', name: 'Sub-Assembly & Assembly', text: 'Integration of hardware, inserts, seals and components into finished sub-assemblies ready for direct line-side use.' },
  { num: '06', name: 'Chrome Plating',          text: 'Decorative or hard chrome plating for surface hardness, wear resistance and aesthetic finish.' },
  { num: '07', name: 'Shot Blasting',           text: 'Surface preparation and finishing using controlled shot media for consistent surface texture and paint adhesion.' },
  { num: '08', name: 'Vibratory Finishing',     text: 'Bulk deburring and surface smoothing for high-volume small parts with complex internal features.' },
  { num: '09', name: 'Prototyping',             text: 'Rapid prototype castings for early-stage validation before production tooling investment.' },
  { num: '10', name: 'Leak Testing',            text: 'Dedicated leak-testing installations for components with high sealing requirements in hydraulic, pneumatic and gas applications.' },
]

const TABS = ['products', 'finishes']

export default function Products() {
  const { t } = useLang()
  const n = t.nav
  const location = useLocation()
  const hash = location.hash.replace('#', '')
  const [active, setActive] = useState(TABS.includes(hash) ? hash : 'products')
  const revRef = useReveal()

  useEffect(() => { if (TABS.includes(hash)) setActive(hash) }, [hash])

  return (
    <>
      <PageHero
        label={n.products}
        title="Precision Parts, Ready to Fit"
        description="From raw castings to fully machined, treated and assembled components — FUYMA delivers finished parts across a range of demanding sectors."
      />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Tabs */}
          <div className="flex gap-8 border-b border-am-border mb-16">
            {[{ id:'products', label: n.products }, { id:'finishes', label: n.finishes }].map(tab => (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                className={`tab-am ${active === tab.id ? 'active' : ''}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* PRODUCTS */}
          {active === 'products' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">What We Make</span>
                  <h2 className="display-md mt-4 mb-8">Precision Aluminium Components</h2>
                  <p className="body-copy mb-8">
                    FUYMA produces high-pressure die cast components in aluminium, zamak and brass for clients across multiple industries. Parts are distributed globally and range from small precision components to large structural castings up to 15 kg.
                  </p>
                  <div className="border-l-2 border-am-gold pl-8 py-2">
                    <p className="body-copy text-sm"><strong className="text-am-silver">One-Stop Supply.</strong> We supply complete, finished machined parts — integrating casting, machining, finishing and assembly either in-house or through our trusted supplier network. One purchase order, one supplier, zero gaps.</p>
                  </div>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border overflow-hidden flex items-center justify-center">
                  <img src="https://www.fuyma.com/images/products.jpg" alt="FUYMA precision components"
                    className="w-full h-full object-cover opacity-60"
                    onError={e => e.target.style.display = 'none'} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.1)', fontWeight:300 }}>Precision</span>
                  </div>
                </div>
              </div>

              <div className="reveal mb-12">
                <span className="eyebrow">Sectors Served</span>
                <h2 className="display-md mt-4 mb-12">Industries That Rely on FUYMA</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-am-border mb-24">
                {SECTORS.map((sector, i) => (
                  <div key={sector.title} className={`reveal reveal-delay-${(i%3)+1}`}>
                    <div className="card-am p-8 h-full">
                      <h3 className="text-am-white mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.3rem' }}>{sector.title}</h3>
                      <p className="body-copy text-sm">{sector.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Barajas Feature */}
              <div className="reveal">
                <div className="bg-am-surface2 border border-am-border p-8 lg:p-10 grid lg:grid-cols-4 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <span className="eyebrow mb-2 block">Featured Project</span>
                    <span className="eyebrow" style={{ color:'#B89355', fontSize:'0.7rem' }}>Madrid · 2005</span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-am-white mb-4" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.5rem' }}>Madrid Barajas T4 Terminal</h3>
                    <p className="body-copy text-sm">FUYMA fittings and connectors were selected for the landmark T4 terminal expansion at Madrid Barajas International Airport. The easy-assembly, cost-effective structure demonstrated FUYMA's capacity for large-scale infrastructure supply.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FINISHES */}
          {active === 'finishes' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Finishing Services</span>
                  <h2 className="display-md mt-4 mb-8">Complete Parts from a Single Source</h2>
                  <p className="body-copy mb-8">
                    We integrate machining and finishing operations — either in-house or through our trusted supplier network — delivering complete, ready-to-assemble parts to your dock. Fewer suppliers, simpler logistics, better control.
                  </p>
                  <div className="border-l-2 border-am-gold pl-8 py-2">
                    <p className="body-copy text-sm">We coordinate the full range of standard and specialised surface treatments through our qualified supplier network, acting as a single point of contact for your finished component supply.</p>
                  </div>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border overflow-hidden flex items-center justify-center">
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.1)', fontWeight:300 }}>Finishing</span>
                </div>
              </div>

              <div className="reveal mb-12">
                <span className="eyebrow">Available Treatments</span>
                <h2 className="display-md mt-4 mb-12">Our Finishing Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-am-border mb-24">
                {FINISHES.map((finish, i) => (
                  <div key={finish.name} className={`reveal reveal-delay-${(i%3)+1}`}>
                    <div className="bg-am-surface p-6 h-full flex gap-6 hover:bg-am-surface2 transition-colors duration-300">
                      <span style={{ fontFamily:'Inter', fontWeight:700, fontSize:'0.65rem', letterSpacing:'0.1em', color:'#B89355', flexShrink:0, paddingTop:'2px' }}>{finish.num}</span>
                      <div>
                        <h4 className="text-am-white mb-1" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.05rem' }}>{finish.name}</h4>
                        <p className="body-copy text-sm">{finish.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-px bg-am-border">
                {[
                  { title: 'Precision CNC Machining', text: 'Post-cast machining of bores, threads, mating faces and precision surfaces — in-house capability ensures dimensional control and fast turnaround.' },
                  { title: 'Vacuum Impregnation',     text: 'Seals micro-porosity in castings to achieve pressure-tight components — essential for hydraulic, pneumatic and fluid-handling applications.' },
                  { title: 'Surface Coatings',        text: 'Cataphoresis, painting, chrome plating and powder coating for corrosion protection, decorative finish or functional surface properties.' },
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
