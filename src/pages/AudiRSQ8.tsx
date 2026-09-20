import { useEffect, useRef, useState } from 'react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(34px)',
        transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .8s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const stages = [
  ['01', 'Concept Sketch', 'Exploring proportion, stance and overall form.'],
  ['02', 'Digital Sketch', 'Translating the design direction into a clearer digital study.'],
  ['03', '3D Modeling', 'Building the vehicle in Autodesk Alias with a surface-first workflow.'],
  ['04', 'Clay Model', 'Developing the form through a clay-oriented visualization pass.'],
  ['05', 'Final Product', 'Refining details, materials and surface quality for the final presentation.'],
]

const process = ['Shadesky', 'Clay Model', 'Box Mode', 'By Material', 'Surface Quality']

export default function AudiRSQ8() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <main style={{ paddingTop: '88px', background: '#0d0e10' }}>
      <section style={{ minHeight: 'calc(100vh - 88px)', display: 'grid', gridTemplateColumns: '1.05fr .95fr', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ padding: 'clamp(48px,8vw,110px) 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="label-mono" style={{ color: '#e87924', marginBottom: '24px' }}>Automotive / 01</div>
            <h1 className="display-hero" style={{ fontSize: 'clamp(70px,10vw,150px)', maxWidth: '900px' }}>
              Audi<br /><span style={{ color: '#777' }}>RS Q8</span>
            </h1>
            <p style={{ marginTop: '34px', maxWidth: '520px', color: '#85878b', fontSize: '16px', lineHeight: 1.8 }}>
              3D modeling study of the Audi RS Q8 (2020), developed in Autodesk Alias with a focus on automotive form development and surface quality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', maxWidth: '620px', marginTop: '70px' }}>
            {[
              ['YEAR', '2026'],
              ['SOFTWARE', 'ALIAS'],
              ['FOCUS', 'HARD-SURFACE'],
            ].map(([k,v]) => (
              <div key={k} style={{ borderTop: '1px solid rgba(255,255,255,.14)', paddingTop: '14px' }}>
                <div className="label-mono" style={{ color: '#555', fontSize: '9px' }}>{k}</div>
                <div style={{ marginTop: '7px', color: '#d8d8d5', fontSize: '13px', letterSpacing: '.08em' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="audi-hero-visual" style={{ position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,.08)', background: '#15171a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 55% 45%, rgba(232,121,36,.09), transparent 42%)' }} />
          <img src="/assets/audi-rs-q8.svg" alt="Audi RS Q8 automotive modeling visual" style={{ width: '100%', maxWidth: '900px', position: 'relative', zIndex: 1, transition: 'transform .9s cubic-bezier(.16,1,.3,1)' }} />
          <div className="label-mono" style={{ position: 'absolute', left: '28px', bottom: '24px', color: '#555', zIndex: 2 }}>Autodesk Alias · SubD / Surface Development</div>
        </div>
      </section>

      <section style={{ padding: '110px 40px 120px', maxWidth: '1500px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <div className="label-mono" style={{ color: '#e87924' }}>Project Overview</div>
              <h2 className="display-large" style={{ fontSize: 'clamp(46px,6vw,84px)', marginTop: '18px' }}>From sketch<br />to surface</h2>
            </div>
            <p style={{ color: '#85878b', fontSize: '17px', lineHeight: 1.9, maxWidth: '720px' }}>
              The study follows a visual progression from concept and digital sketching into 3D modeling, clay visualization and final product presentation. The modeling process is centered on Autodesk Alias and the refinement of automotive surfaces.
            </p>
          </div>
        </Reveal>

        <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', borderTop: '1px solid rgba(255,255,255,.1)' }}>
          {stages.map(([num,title,desc], i) => (
            <Reveal key={num} delay={i * 80}>
              <article className="stage-card" style={{ minHeight: '270px', padding: '28px 24px 28px 0', marginRight: '24px', borderRight: i < stages.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none', transition: 'transform .45s ease' }}>
                <div className="label-mono" style={{ color: '#555' }}>{num}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '28px', textTransform: 'uppercase', marginTop: '58px', color: '#ddd' }}>{title}</h3>
                <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.7, marginTop: '14px', maxWidth: '190px' }}>{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 40px 120px', maxWidth: '1500px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', gap: '30px', alignItems: 'end' }}>
            <div>
              <div className="label-mono" style={{ color: '#e87924' }}>Alias Workflow</div>
              <h2 className="display-large" style={{ fontSize: 'clamp(54px,7vw,100px)', marginTop: '14px' }}>Modeling<br />Process</h2>
            </div>
            <p style={{ color: '#5e6064', maxWidth: '330px', fontSize: '13px', lineHeight: 1.7 }}>
              A closer look at the different Alias visualization and modeling stages documented in the project board.
            </p>
          </div>
        </Reveal>

        <div style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '2px' }}>
          {process.map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <div className="process-tile" style={{ aspectRatio: '1/1.25', background: i % 2 ? '#17191c' : '#141619', border: '1px solid rgba(255,255,255,.07)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', transition: 'transform .5s cubic-bezier(.16,1,.3,1), background .5s ease' }}>
                <span className="label-mono" style={{ color: '#4f5155' }}>0{i + 1}</span>
                <div>
                  <div style={{ height: '1px', width: '32px', background: '#e87924', marginBottom: '18px' }} />
                  <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '32px', textTransform: 'uppercase', color: '#d8d8d5' }}>{item}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 40px 140px', maxWidth: '1500px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ background: '#17191c', border: '1px solid rgba(255,255,255,.08)', padding: 'clamp(35px,6vw,80px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', alignItems: 'center', overflow: 'hidden' }}>
            <div>
              <div className="label-mono" style={{ color: '#e87924' }}>Surface Study</div>
              <h2 className="display-large" style={{ fontSize: 'clamp(48px,6vw,88px)', marginTop: '16px' }}>Form is<br />the finish.</h2>
              <p style={{ color: '#737579', maxWidth: '460px', marginTop: '28px', lineHeight: 1.8 }}>
                The final stage focuses on clean automotive transitions, reflections and the visual readability of the body surfaces.
              </p>
            </div>
            <div style={{ height: '360px', background: 'radial-gradient(circle at 50% 35%, #858b93 0%, #34383d 24%, #111315 67%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '76%', height: '42%', borderRadius: '50% 55% 28% 30%', transform: 'skewX(-12deg)', background: 'linear-gradient(150deg,#aeb4ba,#4e545b 45%,#151719 78%)', boxShadow: '0 35px 70px rgba(0,0,0,.6)' }} />
              <span className="label-mono" style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#4f5155' }}>SURFACE QUALITY / ALIAS</span>
            </div>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .audi-hero-visual { min-height: 55vh !important; border-left: 0 !important; border-top: 1px solid rgba(255,255,255,.08); }
          main section:first-child { grid-template-columns: 1fr !important; }
          main section:nth-of-type(2) > div:first-child { grid-template-columns: 1fr !important; gap: 35px !important; }
          main section:nth-of-type(2) > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
          main section:nth-of-type(3) > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
          main section:nth-of-type(4) > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          main section { padding-left: 22px !important; padding-right: 22px !important; }
          main section:nth-of-type(2) > div:nth-child(2), main section:nth-of-type(3) > div:nth-child(2) { grid-template-columns: 1fr !important; }
          main section:nth-of-type(2) > div:nth-child(2) article { border-right: 0 !important; border-bottom: 1px solid rgba(255,255,255,.08); }
        }
        .audi-hero-visual:hover img { transform: scale(1.035); }
        .stage-card:hover { transform: translateY(-8px); }
        .process-tile:hover { transform: translateY(-10px); background: #1c1f23 !important; }
      `}</style>
    </main>
  )
}
