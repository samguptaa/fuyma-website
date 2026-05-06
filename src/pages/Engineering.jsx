import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const RD_PROJECTS = [
  { year: '2010',    title: 'Improvement of Porosity and Compaction in Aluminium Parts',           funder: 'Approved by IMADE · Co-funded by Comunidad de Madrid & FEDER Funds' },
  { year: '2014–15', title: 'New High-Specification Aluminium Alloys for Demanding Technical Applications', funder: 'Co-funded by CDTI & FEDER Funds' },
  { year: '2017–18', title: 'Carbon Fibre Fabric-Reinforced Aluminium Alloys',                     funder: 'Co-funded by CDTI' },
  { year: '2019',    title: 'Next-Generation Thermal Dissipators for LED Lighting Systems',         funder: 'Co-funded by CDTI & European Union Funds' },
]

const SIMULATIONS = [
  { name: 'Fill Simulation',               desc: 'Models how liquid aluminium flows through the die cavity, identifying premature solidification and air entrapment.' },
  { name: 'Cooling / Solidification',      desc: 'Predicts how the part cools, identifying shrinkage zones and optimising cooling channels for uniform solidification.' },
  { name: 'Material Trace Simulation',     desc: 'Tracks the path of molten metal through the runner system and die cavity from injection point to final fill.' },
  { name: 'Hot Zone / Cold Zone Analysis', desc: 'Maps thermal distribution to prevent localised overheating or premature cooling in critical die zones.' },
  { name: 'Thickness Analysis',            desc: 'Verifies wall thickness consistency and identifies areas at risk of misrun or cold shuts before tooling investment.' },
  { name: 'Porosity Risk Analysis',        desc: 'Identifies regions susceptible to gas or shrinkage porosity before the mould is manufactured.' },
]

const FILE_FORMATS = ['IGES', 'STEP', 'PARASOLID', 'PRT', 'SAT', 'STL']

const TABS = ['overview', 'design', 'simulations', 'rd', 'success']

export default function Engineering() {
  const { t } = useLang()
  const n = t.nav
  const s = t.sections
  const location = useLocation()
  const hash = location.hash.replace('#', '')
  const [active, setActive] = useState(TABS.includes(hash) ? hash : 'overview')
  const revRef = useReveal()

  useEffect(() => { if (TABS.includes(hash)) setActive(hash) }, [hash])

  const tabLabels = {
    overview:    s.engineeringServices || 'Overview',
    design:      n.designTooling,
    simulations: n.simulations,
    rd:          n.rd,
    success:     n.successCases,
  }

  return (
    <>
      <PageHero
        label={n.engineering}
        title="Design, Simulation & Innovation"
        description="Involve FUYMA from day one — our engineering team collaborates on product co-design, fill simulations, mould development and advanced R&D projects."
      />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Tabs */}
          <div className="flex flex-wrap gap-8 border-b border-am-border mb-16">
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`tab-am ${active === tab ? 'active' : ''}`}>
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          {/* OVERVIEW */}
          {active === 'overview' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Our Approach</span>
                  <h2 className="display-md mt-4 mb-8">Engineering Partnership from Concept to Production</h2>
                  <p className="body-copy mb-8">
                    We recommend involving FUYMA at the earliest stage of your project. Our engineers advise on design choices that directly impact quality, cost and manufacturability — before a single gram of metal is poured.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Simplicity — we optimise part geometry for die casting',
                      'Mass reduction — lightweight design without compromising strength',
                      'Cost savings — design decisions that reduce tooling and cycle time',
                      'Tolerances — realistic achievable tolerances agreed upfront',
                      'Critical points — early identification of demanding features',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <div className="gold-dot mt-2 flex-shrink-0" />
                        <span className="body-copy text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'5rem', color:'rgba(184,147,85,0.08)', fontWeight:300, lineHeight:1 }}>Eng.</span>
                    <span className="eyebrow" style={{ color:'#3A3830' }}>Design · Simulation · R&D</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-px bg-am-border">
                {[
                  { title: 'Design & Tooling',  text: 'In-house mould design and manufacture, co-design with fill and solidification simulations to optimise every component before production.', tab: 'design' },
                  { title: 'Simulations',        text: 'Advanced fill, cooling, porosity risk and hot-zone simulations that predict and eliminate defects before the mould is cut.',              tab: 'simulations' },
                  { title: 'R&D Projects',       text: 'Publicly co-funded research into new aluminium alloys, carbon fibre reinforcement and LED thermal management systems.',                   tab: 'rd' },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i+1}`}>
                    <button onClick={() => setActive(item.tab)} className="card-am p-8 h-full w-full text-left group cursor-pointer">
                      <h3 className="text-am-white mb-3 group-hover:text-am-gold transition-colors duration-300"
                        style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.3rem' }}>{item.title}</h3>
                      <p className="body-copy text-sm mb-6">{item.text}</p>
                      <span className="eyebrow" style={{ color:'#B89355', fontSize:'0.58rem' }}>Explore →</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DESIGN & TOOLING */}
          {active === 'design' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Design & Tooling</span>
                  <h2 className="display-md mt-4 mb-8">Moulds Built on Foundry Expertise</h2>
                  <p className="body-copy mb-8">
                    We apply the deep knowledge gained from running our own foundry directly into mould design. Every mould benefits from real production data on metal flow, cooling behaviour and shrinkage — eliminating theoretical assumptions.
                  </p>
                  <div className="border-l-2 border-am-gold pl-8 py-2 mb-8">
                    <p className="body-copy text-sm">During series production, our philosophy of continuous improvement guarantees the long-term success of your part — quality outcomes that compound over time.</p>
                  </div>
                  <div>
                    <span className="eyebrow mb-4 block">File Formats Accepted</span>
                    <div className="flex flex-wrap gap-3">
                      {FILE_FORMATS.map(fmt => (
                        <span key={fmt} className="px-4 py-2 border border-am-border text-am-silver"
                          style={{ fontFamily:'Inter', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase' }}>
                          {fmt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border flex items-center justify-center overflow-hidden">
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.08)', fontWeight:300 }}>Tooling</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-am-border">
                {[
                  { title: 'Injection Moulds',    text: 'Complete mould development including fill simulation, solidification analysis and shrinkage compensation for every part.' },
                  { title: 'Deburring Equipment', text: "Bespoke deburring and trimming tooling designed to match each part's geometry for clean, consistent results at high volume." },
                  { title: 'Assembly Tooling',    text: 'Fixtures and jigs to support sub-assembly and final assembly operations with repeatability and speed.' },
                  { title: 'Gauges & Machining',  text: 'Purpose-built gauges for rapid dimensional verification and specialist machining tooling for post-cast operations.' },
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

          {/* SIMULATIONS */}
          {active === 'simulations' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Virtual Validation</span>
                  <h2 className="display-md mt-4 mb-8">Predict Defects Before Production</h2>
                  <p className="body-copy mb-8">
                    Our simulation suite allows us to analyse every aspect of the die casting process digitally — eliminating costly errors and reducing time to first good part significantly.
                  </p>
                  <div>
                    <span className="eyebrow mb-6 block">Simulation Benefits</span>
                    <div className="flex flex-wrap gap-3">
                      {['Optimised cycle times','Reduced porosity','Eliminated hot zones','Better thermal balance','Lower scrap rates'].map(b => (
                        <span key={b} className="px-4 py-2 border border-am-border body-copy text-sm">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border flex items-center justify-center overflow-hidden">
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.08)', fontWeight:300 }}>Simulation</span>
                </div>
              </div>

              <div className="reveal mb-12">
                <span className="eyebrow">Simulation Types</span>
                <h2 className="display-md mt-4 mb-12">Our Full Simulation Capability</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-am-border">
                {SIMULATIONS.map((sim, i) => (
                  <div key={sim.name} className={`reveal reveal-delay-${(i%3)+1}`}>
                    <div className="card-am p-8 h-full flex gap-6">
                      <div className="gold-dot mt-1.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-am-white mb-2" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.1rem' }}>{sim.name}</h3>
                        <p className="body-copy text-sm">{sim.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* R&D */}
          {active === 'rd' && (
            <div>
              <div className="reveal mb-16">
                <span className="eyebrow">Research & Development</span>
                <h2 className="display-md mt-4 mb-6">Publicly Co-Funded Innovation</h2>
                <p className="body-copy max-w-2xl">FUYMA invests in structured R&D projects co-funded by Spanish and European public bodies — pushing the boundaries of aluminium die casting technology.</p>
              </div>

              <div className="space-y-px bg-am-border">
                {RD_PROJECTS.map((project, i) => (
                  <div key={project.year} className={`reveal reveal-delay-${(i%3)+1}`}>
                    <div className="bg-am-surface p-8 lg:p-10 grid lg:grid-cols-5 gap-8 items-center hover:bg-am-surface2 transition-colors duration-300">
                      <div className="lg:col-span-1">
                        <span className="eyebrow" style={{ color:'#B89355', fontSize:'0.7rem' }}>{project.year}</span>
                      </div>
                      <div className="lg:col-span-3">
                        <h3 className="text-am-white" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.2rem' }}>{project.title}</h3>
                      </div>
                      <div className="lg:col-span-1">
                        <p className="body-copy text-xs">{project.funder}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUCCESS CASES */}
          {active === 'success' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-20 mb-24">
                <div className="reveal">
                  <span className="eyebrow">Success Cases</span>
                  <h2 className="display-md mt-4 mb-8">Results That Speak for Themselves</h2>
                  <p className="body-copy mb-8">
                    Our most successful outcomes share a common factor: FUYMA was involved from the very beginning of the project — shaping design decisions that reduced cost, weight and lead time.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Simplified geometries — fewer secondary operations required',
                      'Significant mass reduction — up to 30% weight savings achieved',
                      'Reduced piece cost through optimised tooling and cycle time',
                      'Zero-defect delivery achieved for key automotive clients',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <div className="gold-dot mt-2 flex-shrink-0" />
                        <span className="body-copy text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="reveal reveal-delay-2 relative aspect-video bg-am-surface2 border border-am-border flex items-center justify-center overflow-hidden">
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', color:'rgba(184,147,85,0.08)', fontWeight:300 }}>Results</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-px bg-am-border">
                {[
                  { title: 'John Deere — Hall of Fame', sub: '2012 · Moline, USA',       text: 'Five consecutive years as a John Deere "Partner" supplier — inducted into the Hall of Fame at the global headquarters in Moline, USA.' },
                  { title: 'Madrid Barajas T4',         sub: '2005 · Infrastructure',    text: "FUYMA fittings and connectors selected for Madrid's landmark T4 terminal — demonstrating capacity for large-scale infrastructure supply." },
                  { title: 'LED Thermal Management',    sub: 'R&D · CDTI & EU Funded',   text: 'R&D-led development of novel aluminium heat sink designs for LED lighting, achieving superior thermal performance with reduced material use.' },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i+1}`}>
                    <div className="card-am p-8 h-full">
                      <h3 className="text-am-white mb-1" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.3rem' }}>{item.title}</h3>
                      <span className="eyebrow mb-4 block" style={{ fontSize:'0.58rem', color:'#B89355' }}>{item.sub}</span>
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
