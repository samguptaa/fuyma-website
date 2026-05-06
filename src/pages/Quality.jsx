import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const INSPECTION_METHODS = [
  {
    abbr: 'SPCTR',
    title: 'Digital Spectrometer',
    text: 'Material composition is verified using a digital spectrometer that analyses the exact elemental make-up of every batch of metal. Ensures alloy compliance before a single shot is made — providing full material traceability from ingot to finished part.',
  },
  {
    abbr: 'X-RAY',
    title: 'X-Ray Inspection',
    text: 'Industrial X-ray equipment inspects finished castings for internal defects including porosity, inclusions and cold shuts — defects invisible to the naked eye. Essential for safety-critical, hydraulic or pneumatic applications.',
  },
  {
    abbr: 'CMM',
    title: '3D Coordinate Measurement',
    text: 'Our Coordinate Measuring Machine provides three-dimensional verification of part geometry against nominal CAD data — detecting and controlling dimensional errors in both casting and machining operations.',
  },
]

const CERTIFICATIONS = [
  { name: 'IATF 16949 : 2016', text: 'The global automotive quality management standard — required by major automotive OEMs worldwide.' },
  { name: 'ISO 9001 : 2015',   text: "The world's most recognised quality management system standard, ensuring our processes are structured and continuously improved." },
  { name: 'ISO 14001 : 2015',  text: 'Environmental management certification confirming that FUYMA systematically identifies, manages and reduces its environmental impact.' },
  { name: 'ISO 27001',         text: 'Information security management, protecting client data, designs and business information through rigorous access controls and risk assessment.' },
  { name: 'EcoVadis Certified',text: "World's most trusted provider of sustainability ratings — recognised for strong performance in environment, labour and ethics." },
  { name: 'Madrid Network',    text: 'Member of the Madrid Network innovation cluster, connecting us with research institutions and technology partners.' },
]

export default function Quality() {
  const { t } = useLang()
  const n = t.nav
  const revRef = useReveal()

  return (
    <>
      <PageHero
        label={n.quality}
        title="Quality is Not Optional"
        description="From material traceability through to final dimensional verification — every part leaves FUYMA with documented quality evidence backed by internationally recognised certifications."
      />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Inspection Methods */}
          <div className="reveal mb-16">
            <span className="eyebrow">Inspection Methods</span>
            <h2 className="display-md mt-4 mb-6">Three Pillars of Quality Control</h2>
            <p className="body-copy max-w-2xl">We deploy advanced, complementary inspection techniques to verify material composition, internal integrity and dimensional accuracy on every production run.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-am-border mb-24">
            {INSPECTION_METHODS.map((method, i) => (
              <div key={method.abbr} className={`reveal reveal-delay-${i+1}`}>
                <div className="card-am p-8 h-full">
                  <div className="mb-8">
                    <span style={{ fontFamily:'Inter', fontWeight:700, fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#B89355' }}>{method.abbr}</span>
                  </div>
                  <h3 className="text-am-white mb-4" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.4rem' }}>{method.title}</h3>
                  <p className="body-copy text-sm">{method.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gold-line mb-24" />

          {/* Certifications */}
          <div className="reveal mb-16">
            <span className="eyebrow">Certifications</span>
            <h2 className="display-md mt-4 mb-6">Internationally Recognised Standards</h2>
            <p className="body-copy max-w-2xl">FUYMA holds certifications across quality, environmental, automotive quality and information security management.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-am-border mb-24">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={cert.name} className={`reveal reveal-delay-${(i%3)+1}`}>
                <div className="card-am p-8 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-8 h-8 border border-am-border flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B89355" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </div>
                    <h3 className="text-am-white" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.1rem' }}>{cert.name}</h3>
                  </div>
                  <p className="body-copy text-sm">{cert.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="reveal">
            <div className="bg-am-surface2 border border-am-border p-10 lg:p-16">
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="display-md mt-4 mb-8">Continuous Improvement at Every Stage</h2>
              <p className="body-copy max-w-2xl mb-16">During series production, our philosophy of continuous improvement guarantees the long-term success of every part we make — quality outcomes that compound over time.</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-am-border">
                {[
                  { val: '100%',  label: 'Material Traceability' },
                  { val: '3D',    label: 'CMM Verification' },
                  { val: 'X-Ray', label: 'Internal Defect Detection' },
                  { val: '4 ISO', label: 'Certifications Held' },
                ].map(item => (
                  <div key={item.label} className="bg-am-surface p-8 text-center">
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'2.2rem', color:'#F5F0E8', letterSpacing:'-0.02em' }}>{item.val}</div>
                    <div className="eyebrow mt-2" style={{ color:'#4A4438', fontSize:'0.58rem' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
