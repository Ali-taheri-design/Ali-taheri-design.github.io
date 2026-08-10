import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const PROJECTS: Record<string, {
  name: string; category: string; year: string; industry: string; desc: string; color: string; services: string[]
}> = {
  meridian: {
    name: 'Meridian Capital', category: 'Brand Identity', year: '2024',
    industry: 'Financial Services',
    desc: 'A complete visual identity for a boutique investment firm positioning itself as the definitive choice for sophisticated capital deployment. The mark draws from meridian geometry — the precise arc that marks direction and certainty.',
    color: '#1a1f2e',
    services: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Stationery Design'],
  },
  solara: {
    name: 'Solara Skincare', category: 'Visual Identity', year: '2024',
    industry: 'Beauty & Wellness',
    desc: 'An identity system for a clean skincare brand rooted in solar science. The mark captures the golden hour — warmth without warmth-washing. Every element speaks to clarity, efficacy, and light.',
    color: '#1c1a17',
    services: ['Logo Design', 'Visual Identity', 'Packaging Design', 'Brand Guidelines'],
  },
  kova: {
    name: 'Kova Architecture', category: 'Brand System', year: '2023',
    industry: 'Architecture',
    desc: "A rigorous brand system for an architecture firm building at the intersection of precision and ecology. Kova's identity mirrors their practice — nothing superfluous, every line carrying purpose.",
    color: '#141a14',
    services: ['Logo Design', 'Brand System', 'Print Design', 'Digital Identity'],
  },
}


function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span style={{
      fontFamily: "'Barlow', sans-serif",
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#3F63D9',
    }}>{children}</span>
  )
}

function Placeholder({ label, aspect, accent = '#3F63D9' }: { label: string; aspect: string; accent?: string }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        aspectRatio: aspect,
        background: 'linear-gradient(135deg, #161616 0%, #1e1e1e 100%)',
        borderRadius: '4px',
        position: 'relative',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {/* Subtle inner glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${accent}08 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Corner marks — Swiss design grid aesthetic */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
        <div key={corner} style={{
          position: 'absolute',
          width: '16px',
          height: '16px',
          top: corner.includes('top') ? '16px' : 'auto',
          bottom: corner.includes('bottom') ? '16px' : 'auto',
          left: corner.includes('left') ? '16px' : 'auto',
          right: corner.includes('right') ? '16px' : 'auto',
          borderTop: corner.includes('top') ? `1px solid rgba(255,255,255,0.12)` : 'none',
          borderBottom: corner.includes('bottom') ? `1px solid rgba(255,255,255,0.12)` : 'none',
          borderLeft: corner.includes('left') ? `1px solid rgba(255,255,255,0.12)` : 'none',
          borderRight: corner.includes('right') ? `1px solid rgba(255,255,255,0.12)` : 'none',
        }} />
      ))}

      {/* Label */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          border: `1px solid rgba(255,255,255,0.1)`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accent, opacity: 0.5 }} />
        </div>
        <span style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.18)',
        }}>{label}</span>
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const { id = 'meridian' } = useParams()
  const project = PROJECTS[id] ?? PROJECTS.meridian

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <main style={{ paddingTop: '88px' }}>

      {/* ─── Hero ─── */}
      <section style={{ padding: '60px 40px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 50% 60% at 80% 50%, rgba(63,99,217,0.07) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Link
            to="/projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '12px',
              letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
              color: '#444', marginBottom: '48px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0efed')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
          >
            ← All Projects
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'end', marginBottom: '64px' }}>
            <div>
              <SectionLabel>{project.category}</SectionLabel>
              <h1 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: 'clamp(56px, 7vw, 108px)', letterSpacing: '-0.02em',
                textTransform: 'uppercase', lineHeight: 0.9, color: '#f0efed', marginTop: '16px',
              }}>
                {project.name}
              </h1>
            </div>
            <div style={{ paddingBottom: '8px' }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '17px',
                lineHeight: 1.78, color: '#777', marginBottom: '36px',
              }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                {[
                  ['Year', project.year],
                  ['Industry', project.industry],
                ].map(([label, val]) => (
                  <div key={label}>
                    <span style={{
                      fontFamily: "'Barlow', sans-serif", fontSize: '10px', letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: '#3F63D9', display: 'block', marginBottom: '6px',
                    }}>{label}</span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '15px', color: '#aaa',
                    }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {project.services.map((s) => (
              <span key={s} style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '7px 14px', borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.1)', color: '#555',
              }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hero image ─── */}
      <section style={{ padding: '0 40px 80px' }}>
        <Placeholder label="Hero Image" aspect="16/7" />
      </section>

      {/* ─── Logo Presentation ─── */}
      <CaseSection label="Logo Presentation" title="The Mark">
        <Placeholder label="Logo Presentation" aspect="4/3" />
      </CaseSection>

      {/* ─── Construction + Geometry ─── */}
      <CaseSection label="Construction" title="Geometry & Grid">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          <Placeholder label="Construction" aspect="4/3" />
          <Placeholder label="Geometry" aspect="4/3" />
        </div>
        <div style={{ marginTop: '2px' }}>
          <Placeholder label="Grid System" aspect="21/7" />
        </div>
      </CaseSection>

      {/* ─── Color Palette ─── */}
      <CaseSection label="Color" title="Brand Colors">
        <Placeholder label="Color Palette" aspect="21/9" />
      </CaseSection>

      {/* ─── Typography ─── */}
      <CaseSection label="Typography" title="Type System">
        <Placeholder label="Typography" aspect="4/3" />
      </CaseSection>

      {/* ─── Brand Pattern ─── */}
      <CaseSection label="Pattern" title="Brand Pattern">
        <Placeholder label="Brand Pattern" aspect="3/1" />
      </CaseSection>

      {/* ─── Brand Applications ─── */}
      <CaseSection label="Applications" title="Brand in Use">
        <Placeholder label="Brand Applications" aspect="16/9" />
      </CaseSection>

      {/* ─── Stationery + Packaging ─── */}
      <CaseSection label="Print" title="Print & Packaging">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          <Placeholder label="Stationery" aspect="4/3" />
          <Placeholder label="Packaging" aspect="4/3" />
        </div>
      </CaseSection>

      {/* ─── Website Mockup ─── */}
      <CaseSection label="Digital" title="Website Mockup">
        <Placeholder label="Website Mockup" aspect="16/9" />
      </CaseSection>

      {/* ─── Social + Business Card ─── */}
      <CaseSection label="Collateral" title="Social & Stationery">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2px' }}>
          <div style={{ display: 'grid', gap: '2px' }}>
            <Placeholder label="Social Media" aspect="1/1" />
            <Placeholder label="Social Media" aspect="1/1" />
          </div>
          <Placeholder label="Business Card" aspect="4/3" />
        </div>
      </CaseSection>

      {/* ─── Final Showcase ─── */}
      <CaseSection label="Showcase" title="Final Presentation">
        <Placeholder label="Final Showcase" aspect="16/7" />
      </CaseSection>

      {/* ─── Next project ─── */}
      <NextProject current={id} />
    </main>
  )
}

function CaseSection({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '80px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <SectionLabel>{label}</SectionLabel>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.01em',
            textTransform: 'uppercase', color: '#f0efed', marginTop: '8px',
          }}>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function NextProject({ current }: { current: string }) {
  const ids = Object.keys(PROJECTS)
  const idx = ids.indexOf(current)
  const nextId = ids[(idx + 1) % ids.length]
  const next = PROJECTS[nextId]

  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '80px 40px' }}>
      <span style={{
        fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '11px',
        letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3F63D9',
      }}>Next Project</span>

      <Link
        to={`/projects/${nextId}`}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          textDecoration: 'none', marginTop: '24px', gap: '40px',
          padding: '40px 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
        onMouseEnter={(e) => {
          const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement
          if (arrow) arrow.style.transform = 'translateX(8px)'
        }}
        onMouseLeave={(e) => {
          const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement
          if (arrow) arrow.style.transform = 'translateX(0)'
        }}
      >
        <div>
          <p style={{
            fontFamily: "'Barlow', sans-serif", fontSize: '12px',
            letterSpacing: '0.1em', color: '#444', textTransform: 'uppercase', marginBottom: '8px',
          }}>{next.category}</p>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.01em',
            textTransform: 'uppercase', color: '#f0efed',
          }}>{next.name}</h3>
        </div>
        <span
          className="arrow"
          style={{
            fontSize: '40px', color: '#3F63D9', flexShrink: 0,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >→</span>
      </Link>
    </section>
  )
}
