import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import vormaLogo from '../imports/Artboard_1_200x.png'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
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

const TIMELINE = [
  { year: '2018', event: 'VORMA Studio founded', detail: 'Started as an independent practice focused entirely on logo design for early-stage brands.' },
  { year: '2019', event: 'First major identity system', detail: 'Delivered a full brand system for a Series A financial services company. The identity still runs today.' },
  { year: '2020', event: 'Expanded to brand strategy', detail: 'Began integrating positioning and naming work upstream of visual design.' },
  { year: '2021', event: 'International clients', detail: 'Identity work for brands in Europe, Middle East, and Southeast Asia.' },
  { year: '2022', event: 'Motion & digital expansion', detail: 'Added motion identity and digital brand systems to the service offering.' },
  { year: '2023', event: 'Recognition & awards', detail: 'Selected work featured in identity design publications and award programs.' },
  { year: '2024', event: 'Present day', detail: 'A focused practice of senior-level identity work. No juniors, no volume. Every project is principal-led.' },
]

const VALUES = [
  { title: 'Precision Over Decoration', desc: 'Every visual decision must earn its place. We design with constraint — removing until nothing can be subtracted without loss.' },
  { title: 'Research Before Aesthetics', desc: 'Beautiful marks that say nothing are a waste of budget. We begin by understanding what makes a brand genuinely different.' },
  { title: 'Systems Thinking', desc: 'A logo is not a brand. We build identity systems that scale — from favicon to billboard, from today to ten years from now.' },
  { title: 'Transparent Process', desc: 'Clients know where we are at every stage. No black box, no mystery — just clear reasoning behind every decision.' },
]

const EXPERTISE = [
  'Logo Design', 'Wordmark Systems', 'Brand Marks', 'Visual Identity', 'Color Systems',
  'Typography Selection', 'Brand Pattern', 'Motion Identity', 'Brand Strategy',
  'Naming', 'Brand Positioning', 'Brand Guidelines', 'Stationery Design', 'Packaging',
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '88px' }}>

      {/* ─── Hero ─── */}
      <section style={{ padding: '80px 40px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 100% 0%, rgba(63,99,217,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionLabel>About VORMA</SectionLabel>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
              fontSize: 'clamp(64px, 8vw, 120px)', letterSpacing: '-0.02em',
              textTransform: 'uppercase', lineHeight: 0.9, color: '#f0efed', marginTop: '16px',
            }}>
              We Make<br />
              <span style={{ color: '#3F63D9' }}>Brands</span><br />
              Legible
            </h1>
          </div>
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '18px',
              lineHeight: 1.78, color: '#777', marginBottom: '20px',
            }}>
              VORMA Studio is an independent branding practice specializing in logo design, visual identity systems, and brand strategy for ambitious companies.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '18px',
              lineHeight: 1.78, color: '#555',
            }}>
              We work with founders, creative directors, and CMOs who understand that a world-class identity is not a cost — it is the most efficient investment in perception a brand can make.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Studio image placeholder ─── */}
      <section style={{ padding: '0 40px 100px' }}>
        <div style={{
          width: '100%', aspectRatio: '21/8',
          background: 'linear-gradient(135deg, #161616 0%, #1c1c1c 100%)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(63,99,217,0.06) 0%, transparent 70%)',
          }} />
          <img src={vormaLogo} alt="VORMA Studio" style={{
            width: '120px', height: '120px', objectFit: 'contain',
            filter: 'brightness(0.6)', opacity: 0.5,
          }} />
          <span style={{
            position: 'absolute', bottom: '20px', right: '24px',
            fontFamily: "'Barlow', sans-serif", fontSize: '10px',
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)',
          }}>Studio Image Placeholder</span>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <PhilosophySection />

      {/* ─── Timeline ─── */}
      <TimelineSection />

      {/* ─── Expertise ─── */}
      <ExpertiseSection />

      {/* ─── Workflow ─── */}
      <WorkflowSection />

      {/* ─── CTA ─── */}
      <CTASection />
    </main>
  )
}

function PhilosophySection() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '100px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <SectionLabel>Our Philosophy</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', marginTop: '48px' }}>
        {VALUES.map((v, i) => (
          <div key={v.title} style={{
            padding: '48px 40px',
            background: '#161616',
            borderRadius: i === 0 ? '4px 0 0 0' : i === 1 ? '0 4px 0 0' : i === 2 ? '0 0 0 4px' : '0 0 4px 0',
          }}>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
              fontSize: '24px', letterSpacing: '0.04em', textTransform: 'uppercase',
              color: '#f0efed', marginBottom: '16px',
            }}>{v.title}</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px',
              lineHeight: 1.75, color: '#666',
            }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function TimelineSection() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '100px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}>
        <div>
          <SectionLabel>Timeline</SectionLabel>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.01em',
            textTransform: 'uppercase', lineHeight: 0.95, color: '#f0efed', marginTop: '16px',
          }}>
            Six Years<br />of Work
          </h2>
        </div>
        <div>
          {TIMELINE.map((item, i) => (
            <div key={item.year} style={{
              display: 'grid', gridTemplateColumns: '72px 1fr', gap: '24px',
              padding: '28px 0',
              borderBottom: i < TIMELINE.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                fontSize: '22px', letterSpacing: '0.04em',
                color: item.year === '2024' ? '#3F63D9' : '#333',
              }}>{item.year}</span>
              <div>
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                  fontSize: '20px', letterSpacing: '0.04em', textTransform: 'uppercase',
                  color: '#f0efed', marginBottom: '6px',
                }}>{item.event}</p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px',
                  lineHeight: 1.7, color: '#555',
                }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '100px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <SectionLabel>Expertise</SectionLabel>
      <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {EXPERTISE.map((e) => (
          <span key={e} style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500,
            fontSize: '16px', letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '10px 20px', borderRadius: '2px',
            border: '1px solid rgba(255,255,255,0.1)', color: '#888',
            transition: 'all 0.3s ease',
            cursor: 'default',
          }}
          onMouseEnter={(el) => {
            el.currentTarget.style.borderColor = '#3F63D9'
            el.currentTarget.style.color = '#f0efed'
          }}
          onMouseLeave={(el) => {
            el.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            el.currentTarget.style.color = '#888'
          }}
          >{e}</span>
        ))}
      </div>
    </section>
  )
}

function WorkflowSection() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '100px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(135deg, #111 0%, #131320 100%)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <SectionLabel>How We Work</SectionLabel>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.01em',
        textTransform: 'uppercase', lineHeight: 0.95, color: '#f0efed',
        marginTop: '16px', marginBottom: '60px',
      }}>Working Principles</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
        {[
          { title: 'Senior-Led', desc: 'Every project is handled by principal-level designers. No juniors, no handoffs.' },
          { title: 'Focused Roster', desc: 'We limit active projects to maintain complete focus on your brief.' },
          { title: 'Collaborative', desc: 'You are involved at every critical decision. We build with you, not for you.' },
          { title: 'Research-Driven', desc: 'Deep competitive and cultural research before a single mark is drawn.' },
          { title: 'Revision-Inclusive', desc: 'Pricing includes the rounds needed to get it right. No nickel-and-diming.' },
          { title: 'Delivery-Complete', desc: 'Full production files, guides, and rollout support included in every project.' },
        ].map((p) => (
          <div key={p.title} style={{
            padding: '40px 32px',
            background: '#111',
          }}>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
              fontSize: '20px', letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#f0efed', marginBottom: '12px',
            }}>{p.title}</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px',
              lineHeight: 1.75, color: '#555',
            }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
      <SectionLabel>Start a Project</SectionLabel>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
        fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '-0.02em',
        textTransform: 'uppercase', lineHeight: 0.92, color: '#f0efed',
        marginTop: '20px', marginBottom: '40px',
      }}>
        Ready to Begin?
      </h2>
      <Link
        to="/contact"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '16px',
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
          fontSize: '14px', letterSpacing: '0.16em', textTransform: 'uppercase',
          textDecoration: 'none', color: '#111', background: '#3F63D9',
          padding: '16px 44px', borderRadius: '2px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#5578e8' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#3F63D9' }}
      >
        Get in Touch →
      </Link>
    </section>
  )
}
