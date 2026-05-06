import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const PRINCIPLES = [
  {
    num: '01',
    title: 'Customer Satisfaction',
    text: 'Understanding and meeting the needs of our customers — including those of the end user — is the fundamental objective of every process we operate. Client requirements are identified at the outset and tracked through delivery.',
  },
  {
    num: '02',
    title: 'Continuous Improvement',
    text: 'Ongoing improvement is embedded in our culture. We systematically review processes, results and outcomes to raise quality standards over time. Every non-conformance is an opportunity for permanent corrective action.',
  },
  {
    num: '03',
    title: 'Right First Time',
    text: 'We are committed to achieving zero defects through disciplined process control, robust engineering and employee training. The cost of quality is always lower than the cost of failure.',
  },
  {
    num: '04',
    title: 'Involvement of All Personnel',
    text: 'Quality is the responsibility of every person in the organisation — from the foundry floor to senior management. We invest in training and clear communication to ensure every employee understands and contributes to our quality goals.',
  },
  {
    num: '05',
    title: 'Supplier Partnership',
    text: 'We hold our suppliers to the same standards we apply internally. Long-term supplier relationships built on shared quality objectives strengthen the entire value chain and benefit our clients.',
  },
  {
    num: '06',
    title: 'Legal & Regulatory Compliance',
    text: 'We comply with all applicable legal, regulatory, customer and normative requirements as a minimum baseline — and we continuously seek to exceed them.',
  },
]

const CERTIFICATIONS = [
  'IATF 16949 : 2016 — Automotive Quality Management',
  'ISO 9001 : 2015 — Quality Management System',
  'ISO 14001 : 2015 — Environmental Management',
  'ISO 27001 — Information Security Management',
]

export default function QualityPolicy() {
  const { t, lang } = useLang()
  const n = t.nav
  const revRef = useReveal()

  const policyTitle = lang === 'es' ? 'Política de Calidad' : lang === 'de' ? 'Qualitätspolitik' : lang === 'fr' ? 'Politique Qualité' : 'Quality Policy'

  return (
    <>
      <PageHero
        label={n.quality}
        title={policyTitle}
        description="FUYMA is committed to excellence in quality management across every stage of our operations — from engineering and tooling through to production, inspection and delivery."
      />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Opening Statement */}
          <div className="reveal grid lg:grid-cols-2 gap-20 mb-24">
            <div>
              <span className="eyebrow">Our Commitment</span>
              <h2 className="display-md mt-4 mb-8">A Culture of Quality</h2>
              <p className="body-copy mb-6">
                At FUYMA, quality is not a department — it is a culture. Since our foundation in 1987, our guiding principle has been simple: the best guarantee of our company's future is the complete satisfaction of our clients.
              </p>
              <p className="body-copy mb-8">
                This principle is embedded in every decision we make — from investment in technology and training to the rigorous controls we apply at every stage of the manufacturing process.
              </p>
              <blockquote className="border-l-2 border-am-gold pl-8 py-2">
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontStyle:'italic', fontSize:'1.4rem', color:'#F5F0E8', lineHeight:1.5 }}>
                  "The best guarantee of our future is the complete satisfaction of our clients."
                </p>
                <p className="body-copy mt-3 text-sm">— FUYMA Quality Policy</p>
              </blockquote>
            </div>
            <div className="relative bg-am-surface2 border border-am-border overflow-hidden flex flex-col items-center justify-center p-10 gap-6">
              {CERTIFICATIONS.map(cert => (
                <div key={cert} className="flex items-center gap-4 w-full">
                  <div className="w-6 h-6 border border-am-border flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#B89355" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="body-copy text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Principles */}
          <div className="reveal mb-12">
            <span className="eyebrow">Policy Principles</span>
            <h2 className="display-md mt-4 mb-12">Our Six Quality Commitments</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-am-border mb-24">
            {PRINCIPLES.map((p, i) => (
              <div key={p.num} className={`reveal reveal-delay-${(i%3)+1}`}>
                <div className="bg-am-surface p-8 h-full hover:bg-am-surface2 transition-colors duration-300">
                  <span style={{ fontFamily:'Inter', fontWeight:700, fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'#B89355' }}>{p.num}</span>
                  <h3 className="text-am-white mt-4 mb-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.25rem' }}>{p.title}</h3>
                  <p className="body-copy text-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Management Commitment */}
          <div className="reveal mb-24">
            <div className="bg-am-surface2 border border-am-border p-10 lg:p-16">
              <span className="eyebrow mb-4 block">Management Commitment</span>
              <h2 className="display-md mb-8">Signed by Senior Management</h2>
              <p className="body-copy max-w-3xl mb-6">
                This Quality Policy is approved and actively promoted by the General Management of FUYMA. Resources, training and infrastructure are allocated to support the implementation and continual improvement of our Quality Management System.
              </p>
              <p className="body-copy max-w-3xl">
                The effectiveness of this policy is reviewed at regular management review meetings and updated to reflect changes in our business environment, customer requirements and applicable standards.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <Link to="/quality" className="btn-gold">View Quality Assurance</Link>
            <Link to="/contact" className="btn-ghost">Contact Our Quality Team</Link>
          </div>

        </div>
      </section>
    </>
  )
}
