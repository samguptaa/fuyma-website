import PageHero from '../components/PageHero'
import { useReveal } from '../components/useReveal'
import { useLang } from '../i18n/LanguageContext'

const VIDEOS = [
  {
    id: 'iOSKhwzg1Xo',
    title: 'FUYMA — High Pressure Die Casting Facility',
    desc: 'A tour of the FUYMA production facility — showcasing our automated die casting cells, induction melting furnace and quality control capabilities.',
    category: 'Company Overview',
  },
  {
    id: 'iOSKhwzg1Xo',
    title: 'Aluminium Injection Process',
    desc: 'Watch our high-pressure aluminium injection machines in operation — from metal loading through to finished casting extraction and automated handling.',
    category: 'Production',
  },
  {
    id: 'iOSKhwzg1Xo',
    title: 'Induction Melting Technology',
    desc: 'FUYMA was a pioneer of medium-frequency induction melting for aluminium in Spain. See how this technology delivers cleaner metal and reduced porosity.',
    category: 'Technology',
  },
]

export default function Videos() {
  const { t } = useLang()
  const n = t.nav
  const revRef = useReveal()

  return (
    <>
      <PageHero
        label={n.engineering}
        title="FUYMA in Action"
        description="Watch our production facility, processes and technology in operation — from aluminium injection through to finished, precision-engineered components."
      />

      <section className="section-am" ref={revRef}>
        <div className="container-am">

          {/* Featured Video */}
          <div className="reveal mb-24">
            <span className="eyebrow mb-4 block">{VIDEOS[0].category}</span>
            <h2 className="display-md mb-8">{VIDEOS[0].title}</h2>
            <div className="relative w-full border border-am-border overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEOS[0].id}`}
                title={VIDEOS[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="body-copy mt-6 max-w-2xl">{VIDEOS[0].desc}</p>
          </div>

          <div className="gold-line mb-24" />

          {/* Video Grid */}
          <div className="reveal mb-12">
            <span className="eyebrow">More Videos</span>
            <h2 className="display-md mt-4 mb-12">Explore Our Facility</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-am-border">
            {VIDEOS.slice(1).map((video, i) => (
              <div key={video.id + i} className={`reveal reveal-delay-${i+1}`}>
                <div className="bg-am-surface p-0 h-full group hover:bg-am-surface2 transition-colors duration-300">
                  <div className="relative w-full border-b border-am-border overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-8">
                    <span className="eyebrow mb-3 block" style={{ fontSize:'0.58rem', color:'#B89355' }}>{video.category}</span>
                    <h3 className="text-am-white mb-3 group-hover:text-am-gold transition-colors duration-300"
                      style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.2rem' }}>{video.title}</h3>
                    <p className="body-copy text-sm">{video.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <div className="reveal mt-24">
            <div className="bg-am-surface2 border border-am-border p-10 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="eyebrow mb-3 block">YouTube Channel</span>
                <h3 className="text-am-white" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'2rem' }}>See More on YouTube</h3>
                <p className="body-copy mt-3 max-w-md">Visit the FUYMA YouTube channel for the full library of production videos, process demonstrations and facility tours.</p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=iOSKhwzg1Xo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-shrink-0"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
