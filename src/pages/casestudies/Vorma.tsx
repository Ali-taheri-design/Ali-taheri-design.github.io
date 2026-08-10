import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import heroCover from '../../imports/vorma-case/hero-cover.png'
import markLockup from '../../imports/vorma-case/mark-lockup.png'
import markOnly from '../../imports/vorma-case/mark-only.png'
import wideLockup from '../../imports/vorma-case/wide-lockup.png'
import geoAngle from '../../imports/vorma-case/geo-angle.png'
import geoLetterform from '../../imports/vorma-case/geo-letterform.png'
import geoWordmark from '../../imports/vorma-case/geo-wordmark.png'
import mockupCards from '../../imports/vorma-case/mockup-cards.png'
import mockupSignMonitor from '../../imports/vorma-case/mockup-sign-monitor.png'
import brandPattern from '../../imports/vorma-case/brand-pattern.png'

/* ─── Shared helpers (kept consistent with the rest of the site) ─── */
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

function SectionTitle({ eyebrow, heading }: { eyebrow: string; heading: string }) {
  return (
    <div>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          lineHeight: 1,
          color: '#f0efed',
          marginTop: '10px',
        }}
      >
        {heading}
      </h2>
    </div>
  )
}

function RevealImage({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <img src={src} alt={alt} style={{ width: '100%', display: 'block', ...style }} />
    </div>
  )
}

/** A floating (unboxed) figure with a soft accent-colored hover glow — matches the hover
 *  language used elsewhere on the site (project cards, buttons, etc). */
function HoverFigure({ src, alt, maxWidth }: { src: string; alt: string; maxWidth?: string }) {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState(false)
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        maxWidth: maxWidth ?? '100%',
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-15%',
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(63,99,217,0.16) 0%, transparent 72%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          display: 'block',
          position: 'relative',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  )
}

export default function Vorma() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '88px' }}>

      {/* ─── Header ─── */}
      <section style={{ padding: '48px 40px 40px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Link
          to="/projects"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#555',
            textDecoration: 'none',
          }}
        >
          ← All Projects
        </Link>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '32px',
            marginTop: '32px',
          }}
        >
          <div>
            <SectionLabel>Brand Identity</SectionLabel>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(56px, 8vw, 120px)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                lineHeight: 0.9,
                color: '#f0efed',
                marginTop: '12px',
              }}
            >
              Vorma
            </h1>
          </div>

          <div style={{ maxWidth: '460px' }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.8,
                color: '#888',
              }}
            >
              A complete visual identity for a creative studio operating at the intersection of
              design and engineering. The mark is built from two intersecting geometric forms —
              a symbol of precision, motion, and structure.
            </p>
            <div style={{ display: 'flex', gap: '48px', marginTop: '24px' }}>
              <div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3F63D9' }}>Year</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', marginTop: '4px' }}>2026</p>
              </div>
              <div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3F63D9' }}>Industry</span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', marginTop: '4px' }}>Branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cover hero ─── */}
      <section>
        <RevealImage src={heroCover} alt="VORMA — brand identity cover" />
      </section>

      {/* ─── The Mark ─── */}
      <section style={{ padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionTitle eyebrow="Identity Mark" heading="The Mark" />
        <div style={{ marginTop: '64px' }}>
          <HoverFigure src={markLockup} alt="VORMA mark and wordmark lockup" maxWidth="560px" />
        </div>
      </section>

      {/* ─── Geometry & Grid ─── */}
      <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionTitle eyebrow="Construction" heading="Geometry & Grid" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '80px',
            marginTop: '72px',
          }}
        >
          <HoverFigure src={geoAngle} alt="Mark angle construction — 63.5°" maxWidth="280px" />
          <HoverFigure src={geoLetterform} alt="Letterform grid construction" maxWidth="460px" />
        </div>
        <div style={{ marginTop: '96px' }}>
          <HoverFigure src={geoWordmark} alt="Wordmark grid construction" maxWidth="900px" />
        </div>
      </section>

      {/* ─── Brand Colors ─── */}
      <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionTitle eyebrow="Palette" heading="Brand Colors" />
        <div style={{ marginTop: '64px', borderRadius: '4px', overflow: 'hidden' }}>
          {/* Gradient ramp + primary swatch */}
          <div style={{ display: 'flex', height: '160px' }}>
            {['#243B82', '#3150B5', '#3F63D9', '#6282E3', '#88A1EA', '#AFC1F2', '#D5DEF8', '#EBF0FC', '#F6F8FE'].map((c) => (
              <div key={c} style={{ flex: 1, background: c }} />
            ))}
            <div
              style={{
                flex: 1.5,
                background: '#3F63D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: '#fff' }}>
                #3F63D9
              </span>
            </div>
          </div>
          {/* Neutral pair */}
          <div style={{ display: 'flex', height: '220px', gap: '2px', marginTop: '2px' }}>
            <div style={{ flex: 1, background: '#191919', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: '#fff' }}>
                #191919
              </span>
            </div>
            <div style={{ flex: 1, background: '#F9FAF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '18px', letterSpacing: '0.1em', color: '#111' }}>
                #F9FAF9
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Type System ─── */}
      <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionTitle eyebrow="Typography" heading="Type System" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '80px',
            marginTop: '72px',
          }}
        >
          <HoverFigure src={markLockup} alt="Mark and wordmark, stacked" maxWidth="260px" />
          <HoverFigure src={markOnly} alt="Mark only" maxWidth="220px" />
        </div>
        <div style={{ marginTop: '96px' }}>
          <HoverFigure src={wideLockup} alt="Mark and wordmark, horizontal lockup" maxWidth="640px" />
        </div>
      </section>

      {/* ─── Brand Pattern ─── */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ padding: '0 40px' }}>
          <SectionTitle eyebrow="System" heading="Brand Pattern" />
        </div>
        <div style={{ marginTop: '56px' }}>
          <RevealImage src={brandPattern} alt="VORMA repeating brand pattern" />
        </div>
      </section>

      {/* ─── Brand In Use (Stationery) ─── */}
      <section style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionTitle eyebrow="Application" heading="Brand In Use" />
        <div style={{ marginTop: '56px', borderRadius: '4px', overflow: 'hidden' }}>
          <RevealImage src={mockupCards} alt="VORMA business cards in use" />
        </div>
      </section>

      {/* ─── Brand In Use (Signage & Digital) ─── */}
      <section style={{ padding: '0 40px 120px' }}>
        <SectionTitle eyebrow="Application" heading="Brand In Use" />
        <div style={{ marginTop: '56px', borderRadius: '4px', overflow: 'hidden' }}>
          <RevealImage src={mockupSignMonitor} alt="VORMA signage and website mockup" />
        </div>
      </section>

      {/* ─── Next project teaser ─── */}
      <Link
        to="/projects/negar"
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <section
          style={{
            padding: '100px 40px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#3F63D9',
            }}
          >
            Next Project
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(56px, 10vw, 140px)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              lineHeight: 0.9,
              color: '#f0efed',
              marginTop: '16px',
            }}
          >
            Negar
          </h2>
        </section>
      </Link>
    </main>
  )
}
