import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import heroImage from '../../imports/lion-company-case/hero.png'
import markImage from '../../imports/lion-company-case/mark.png'
import logoVariantsImage from '../../imports/lion-company-case/logo-variants.png'
import geometryImage from '../../imports/lion-company-case/geometry.png'
import brandColorsImage from '../../imports/lion-company-case/brand-colors.png'
import wordmarkImage from '../../imports/lion-company-case/wordmark.png'
import patternImage from '../../imports/lion-company-case/pattern.png'
import applicationsImage from '../../imports/lion-company-case/applications.png'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`lion-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="lion-section-heading">
      <span>{index} / Identity System</span>
      <h2>{title}</h2>
    </div>
  )
}

function LionMedia({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  eager?: boolean
}) {
  return (
    <Reveal className={`lion-media ${className}`}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
    </Reveal>
  )
}

export default function LionCompany() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="lion-page">
      <style>{`
        .lion-page {
          --lion-yellow: #ffc532;
          --lion-navy: #17232f;
          --lion-paper: #f5f2ec;
          background: #111;
          color: var(--lion-paper);
          padding-top: 88px;
          overflow: hidden;
        }

        .lion-shell { padding-left: 40px; padding-right: 40px; }

        .lion-header {
          padding-top: 48px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .lion-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #555;
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 300ms ease;
        }

        .lion-back:hover { color: var(--lion-paper); }

        .lion-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(390px, 0.92fr);
          align-items: end;
          gap: clamp(56px, 8vw, 150px);
          margin-top: 42px;
        }

        .lion-kicker,
        .lion-section-heading span,
        .lion-meta dt,
        .lion-next-label {
          color: var(--lion-yellow);
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .lion-title {
          margin-top: 13px;
          color: var(--lion-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(62px, 7vw, 110px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 0.84;
          text-transform: uppercase;
        }

        .lion-description {
          max-width: 620px;
          color: #777;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
        }

        .lion-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 26px 48px;
          margin-top: 25px;
        }

        .lion-meta div { min-width: 74px; }
        .lion-meta dd {
          margin-top: 5px;
          color: #b8b8b8;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
        }

        .lion-hero { padding-bottom: clamp(82px, 8vw, 130px); }

        .lion-section {
          padding-top: clamp(78px, 7vw, 112px);
          padding-bottom: clamp(78px, 7vw, 112px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .lion-section-heading { margin-bottom: clamp(44px, 4.5vw, 72px); }
        .lion-section-heading h2 {
          margin-top: 8px;
          color: var(--lion-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(28px, 3.1vw, 48px);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1;
          text-transform: uppercase;
        }

        .lion-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 800ms ease, transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lion-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .lion-media { margin-left: auto; margin-right: auto; }
        .lion-media img {
          display: block;
          width: 100%;
          height: auto;
          transform-origin: center;
          transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms ease;
        }

        .lion-media:hover img {
          transform: scale(1.018);
          filter: drop-shadow(0 18px 38px rgba(255, 197, 50, 0.15));
        }

        .lion-framed { overflow: hidden; border-radius: 2px; }
        .lion-framed:hover img { transform: scale(1.012); }

        .lion-mark-stack {
          display: grid;
          gap: clamp(72px, 8vw, 120px);
        }

        .lion-mark {
          width: min(100%, 900px);
          padding: 8px clamp(8px, 4vw, 56px);
        }

        .lion-mark img,
        .lion-geometry img,
        .lion-wordmark img {
          max-height: 650px;
          object-fit: contain;
        }

        .lion-variants { width: min(100%, 1180px); }
        .lion-geometry { width: min(100%, 930px); }
        .lion-palette { width: min(100%, 1180px); }
        .lion-wordmark { width: min(100%, 1080px); padding: 20px 4%; }

        .lion-pattern-section { padding-bottom: 0; }
        .lion-pattern-wrap { margin-left: -40px; margin-right: -40px; }
        .lion-pattern-wrap .lion-media { overflow: hidden; }

        .lion-applications { width: min(100%, 1260px); }

        .lion-next {
          display: block;
          color: inherit;
          text-decoration: none;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .lion-next-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          min-height: 270px;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        .lion-next h2 {
          margin-top: 13px;
          color: var(--lion-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(54px, 8vw, 118px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 0.88;
          text-transform: uppercase;
          transition: color 350ms ease;
        }

        .lion-next-arrow {
          color: var(--lion-yellow);
          font-family: 'Barlow', sans-serif;
          font-size: clamp(34px, 4vw, 62px);
          line-height: 1;
          transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lion-next:hover h2 { color: #fff; }
        .lion-next:hover .lion-next-arrow { transform: translateX(12px); }

        @media (max-width: 800px) {
          .lion-shell { padding-left: 22px; padding-right: 22px; }
          .lion-header { padding-top: 32px; padding-bottom: 38px; }
          .lion-intro { grid-template-columns: 1fr; gap: 30px; margin-top: 32px; }
          .lion-description { font-size: 14px; }
          .lion-hero { padding-left: 0; padding-right: 0; }
          .lion-mark { padding-left: 0; padding-right: 0; }
          .lion-pattern-wrap { margin-left: -22px; margin-right: -22px; }
          .lion-next-inner { min-height: 220px; }
        }

        @media (max-width: 520px) {
          .lion-page { padding-top: 76px; }
          .lion-title { font-size: clamp(54px, 18vw, 76px); }
          .lion-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .lion-section-heading { margin-bottom: 38px; }
          .lion-mark-stack { gap: 70px; }
          .lion-next-inner { align-items: flex-end; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lion-reveal { opacity: 1; transform: none; transition: none; }
          .lion-media img,
          .lion-next-arrow { transition: none; }
        }
      `}</style>

      <header className="lion-header lion-shell">
        <Link className="lion-back" to="/projects" aria-label="Back to all projects">
          <span aria-hidden="true">←</span> All Projects
        </Link>

        <div className="lion-intro">
          <div>
            <span className="lion-kicker">Project 09 / Technology</span>
            <h1 className="lion-title">Lion Company</h1>
          </div>

          <div>
            <p className="lion-description">
              A contemporary brand identity designed to establish a bold and recognizable corporate
              presence. The visual language combines geometric precision with modern simplicity,
              representing confidence, reliability, and a future-focused vision.
            </p>
            <dl className="lion-meta">
              <div><dt>Year</dt><dd>2024</dd></div>
              <div><dt>Industry</dt><dd>Computer Retail</dd></div>
              <div><dt>Services</dt><dd>Identity &amp; Art Direction</dd></div>
            </dl>
          </div>
        </div>
      </header>

      <section className="lion-hero lion-shell" aria-label="Lion Company presentation cover">
        <LionMedia className="lion-framed" src={heroImage} alt="Yellow Lion Company bilingual logo on a deep navy background" eager />
      </section>

      <section className="lion-section lion-shell">
        <SectionHeading index="02" title="The Mark" />
        <div className="lion-mark-stack">
          <LionMedia className="lion-mark" src={markImage} alt="Lion Company geometric lion monogram" />
          <LionMedia className="lion-variants lion-framed" src={logoVariantsImage} alt="Lion Company mark in navy and yellow color variants" />
        </div>
      </section>

      <section className="lion-section lion-shell">
        <SectionHeading index="03" title="Geometry & Grid" />
        <LionMedia className="lion-geometry" src={geometryImage} alt="Construction grid for the Lion Company geometric mark" />
      </section>

      <section className="lion-section lion-shell">
        <SectionHeading index="04" title="Brand Colors" />
        <LionMedia className="lion-palette lion-framed" src={brandColorsImage} alt="Lion Company navy and yellow brand color palette" />
      </section>

      <section className="lion-section lion-shell">
        <SectionHeading index="05" title="Type System" />
        <LionMedia className="lion-wordmark" src={wordmarkImage} alt="Lion Company custom Persian wordmark" />
      </section>

      <section className="lion-section lion-shell lion-pattern-section">
        <SectionHeading index="06" title="Brand Pattern" />
        <div className="lion-pattern-wrap">
          <LionMedia src={patternImage} alt="Repeating yellow Lion Company monogram pattern" />
        </div>
      </section>

      <section className="lion-section lion-shell">
        <SectionHeading index="07" title="Brand in Use" />
        <LionMedia className="lion-applications lion-framed" src={applicationsImage} alt="Lion Company invoice, folder, and letterhead applications" />
      </section>

      <Link className="lion-next" to="/projects/vorma">
        <div className="lion-next-inner lion-shell">
          <div>
            <span className="lion-next-label">Next Project</span>
            <h2>Vorma Studio</h2>
          </div>
          <span className="lion-next-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </main>
  )
}
