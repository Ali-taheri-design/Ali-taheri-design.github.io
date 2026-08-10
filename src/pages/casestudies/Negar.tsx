import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import heroImage from '../../imports/negar-case/Gemini_Generated_Image_g0kzd6g0kzd6g0kz.png'
import businessCardsImage from '../../imports/negar-case/Gemini_Generated_Image_cki6b3cki6b3cki6.png'
import applicationsImage from '../../imports/negar-case/Gemini_Generated_Image_t9xfxvt9xfxvt9xf.png'
import geometryImage from '../../imports/negar-case/Frame.png'
import colorsImage from '../../imports/negar-case/div.png'
import markImage from '../../imports/negar-case/Group.png'
import wordmarkImage from '../../imports/negar-case/Group2.png'
import patternImage from '../../imports/negar-case/div2.png'
import finalPresentationImage from '../../imports/negar-case/Frame2.png'

const GOLD = '#b88a3b'

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
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function Reveal({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`negar-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="negar-section-heading">
      <span>{index} / Identity System</span>
      <h2>{title}</h2>
    </div>
  )
}

function FullImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <Reveal className={className}>
      <img className="negar-full-image" src={src} alt={alt} />
    </Reveal>
  )
}

export default function Negar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="negar-page">
      <style>{`
        .negar-page {
          --negar-gold: ${GOLD};
          --negar-ink: #111111;
          --negar-paper: #f5f2ec;
          background: var(--negar-ink);
          color: var(--negar-paper);
          padding-top: 88px;
          overflow: hidden;
        }

        .negar-shell {
          padding-left: 40px;
          padding-right: 40px;
        }

        .negar-header {
          padding-top: 48px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .negar-back {
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

        .negar-back:hover { color: var(--negar-paper); }

        .negar-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
          align-items: end;
          gap: clamp(56px, 8vw, 150px);
          margin-top: 42px;
        }

        .negar-kicker,
        .negar-section-heading span,
        .negar-meta dt,
        .negar-next-label {
          color: var(--negar-gold);
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .negar-title {
          margin-top: 13px;
          color: var(--negar-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(64px, 8.2vw, 126px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 0.82;
          text-transform: uppercase;
        }

        .negar-description {
          max-width: 600px;
          color: #777;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
        }

        .negar-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 26px 48px;
          margin-top: 25px;
        }

        .negar-meta div { min-width: 74px; }
        .negar-meta dd {
          margin-top: 5px;
          color: #b8b8b8;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
        }

        .negar-hero {
          padding-top: 0;
          padding-bottom: clamp(82px, 8vw, 130px);
        }

        .negar-hero img {
          aspect-ratio: 1376 / 768;
          object-fit: cover;
        }

        .negar-section {
          padding-top: clamp(78px, 7vw, 112px);
          padding-bottom: clamp(78px, 7vw, 112px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .negar-section-heading { margin-bottom: clamp(44px, 4.5vw, 72px); }
        .negar-section-heading h2 {
          margin-top: 8px;
          color: var(--negar-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(28px, 3.1vw, 48px);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1;
          text-transform: uppercase;
        }

        .negar-full-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .negar-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 800ms ease, transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .negar-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .negar-geometry {
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        .negar-geometry img {
          transform-origin: center;
          transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1), filter 650ms ease;
        }

        .negar-geometry:hover img {
          transform: scale(1.018);
          filter: drop-shadow(0 16px 32px rgba(184, 138, 59, 0.14));
        }

        .negar-palette-frame,
        .negar-application-frame {
          overflow: hidden;
          border-radius: 2px;
        }

        .negar-logo-stage {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(60px, 7vw, 120px);
          min-height: 360px;
          padding: 12px clamp(10px, 3vw, 46px) 0;
        }

        .negar-logo-figure {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms ease;
        }

        .negar-logo-figure:hover {
          transform: scale(1.025);
          filter: drop-shadow(0 18px 36px rgba(184, 138, 59, 0.12));
        }

        .negar-logo-figure img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .negar-mark-alone img { width: min(100%, 520px); }

        .negar-lockup {
          flex-direction: column;
          gap: 20px;
        }

        .negar-lockup .negar-lockup-mark { width: min(78%, 360px); }
        .negar-lockup .negar-lockup-word { width: min(82%, 390px); }

        .negar-wordmark-alone {
          grid-column: 1 / -1;
          padding: 40px 7% 22px;
        }

        .negar-wordmark-alone img { width: min(100%, 1050px); }

        .negar-pattern-section { padding-bottom: 0; }
        .negar-pattern-wrap {
          margin-left: -40px;
          margin-right: -40px;
        }

        .negar-applications {
          display: grid;
          gap: 18px;
        }

        .negar-application-frame img {
          aspect-ratio: 1376 / 768;
          object-fit: cover;
          transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .negar-application-frame:hover img { transform: scale(1.015); }

        .negar-final {
          width: min(100%, 1260px);
          margin: 0 auto;
        }

        .negar-next {
          display: block;
          color: inherit;
          text-decoration: none;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .negar-next-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          min-height: 270px;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        .negar-next h2 {
          margin-top: 13px;
          color: var(--negar-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(54px, 8vw, 118px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 0.88;
          text-transform: uppercase;
          transition: color 350ms ease;
        }

        .negar-next-arrow {
          color: var(--negar-gold);
          font-family: 'Barlow', sans-serif;
          font-size: clamp(34px, 4vw, 62px);
          line-height: 1;
          transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .negar-next:hover h2 { color: #fff; }
        .negar-next:hover .negar-next-arrow { transform: translateX(12px); }

        @media (max-width: 800px) {
          .negar-shell { padding-left: 22px; padding-right: 22px; }
          .negar-header { padding-top: 32px; padding-bottom: 38px; }
          .negar-intro {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 32px;
          }
          .negar-description { font-size: 14px; }
          .negar-hero { padding-left: 0; padding-right: 0; }
          .negar-logo-stage {
            grid-template-columns: 1fr;
            gap: 70px;
            padding-left: 8px;
            padding-right: 8px;
          }
          .negar-mark-alone img { width: min(86%, 430px); }
          .negar-wordmark-alone {
            grid-column: auto;
            padding: 20px 0 0;
          }
          .negar-pattern-wrap { margin-left: -22px; margin-right: -22px; }
          .negar-next-inner { min-height: 220px; }
        }

        @media (max-width: 520px) {
          .negar-page { padding-top: 76px; }
          .negar-title { font-size: clamp(58px, 22vw, 88px); }
          .negar-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .negar-section-heading { margin-bottom: 38px; }
          .negar-logo-stage { gap: 58px; }
          .negar-next-inner { align-items: flex-end; }
        }

        @media (prefers-reduced-motion: reduce) {
          .negar-reveal { opacity: 1; transform: none; transition: none; }
          .negar-logo-figure,
          .negar-geometry img,
          .negar-application-frame img,
          .negar-next-arrow { transition: none; }
        }
      `}</style>

      <header className="negar-header negar-shell">
        <Link className="negar-back" to="/projects" aria-label="Back to all projects">
          <span aria-hidden="true">←</span> All Projects
        </Link>

        <div className="negar-intro">
          <div>
            <span className="negar-kicker">Project 02 / Brand Identity</span>
            <h1 className="negar-title">Negar</h1>
          </div>

          <div>
            <p className="negar-description">
              A modern identity for an engineered wood systems company, built around the precision
              of construction and the warmth of natural material. The geometric mark brings the
              structure of timber, architecture, and the NEGAR name into one confident system.
            </p>
            <dl className="negar-meta">
              <div>
                <dt>Year</dt>
                <dd>2025</dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>Engineered Wood</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>Identity &amp; Art Direction</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <section className="negar-hero negar-shell" aria-label="NEGAR brand presentation cover">
        <FullImage src={heroImage} alt="Illuminated NEGAR timber logo installed on a concrete wall" />
      </section>

      <section className="negar-section negar-shell">
        <SectionHeading index="02" title="Geometry & Grid" />
        <FullImage
          className="negar-geometry"
          src={geometryImage}
          alt="Construction grid and measurements for the NEGAR symbol"
        />
      </section>

      <section className="negar-section negar-shell">
        <SectionHeading index="03" title="Brand Colors" />
        <FullImage
          className="negar-palette-frame"
          src={colorsImage}
          alt="NEGAR color palette in walnut brown, gold, charcoal and warm white"
        />
      </section>

      <section className="negar-section negar-shell">
        <SectionHeading index="04" title="Logo System" />
        <Reveal className="negar-logo-stage">
          <figure className="negar-logo-figure negar-mark-alone">
            <img src={markImage} alt="NEGAR standalone symbol" />
          </figure>

          <figure className="negar-logo-figure negar-lockup">
            <img className="negar-lockup-mark" src={markImage} alt="" aria-hidden="true" />
            <img className="negar-lockup-word" src={wordmarkImage} alt="NEGAR stacked logo lockup" />
          </figure>

          <figure className="negar-logo-figure negar-wordmark-alone">
            <img src={wordmarkImage} alt="NEGAR custom wordmark" />
          </figure>
        </Reveal>
      </section>

      <section className="negar-section negar-shell negar-pattern-section">
        <SectionHeading index="05" title="Brand Pattern" />
        <div className="negar-pattern-wrap">
          <FullImage src={patternImage} alt="Repeating gold NEGAR symbol pattern" />
        </div>
      </section>

      <section className="negar-section negar-shell">
        <SectionHeading index="06" title="Brand In Use" />
        <div className="negar-applications">
          <FullImage
            className="negar-application-frame"
            src={businessCardsImage}
            alt="NEGAR gold and walnut business cards"
          />
          <FullImage
            className="negar-application-frame"
            src={applicationsImage}
            alt="NEGAR identity applied across an engineered timber workspace"
          />
        </div>
      </section>

      <section className="negar-section negar-shell">
        <SectionHeading index="07" title="Final Presentation" />
        <FullImage
          className="negar-final"
          src={finalPresentationImage}
          alt="NEGAR logo and app icon presentation across brand colors"
        />
      </section>

      <Link className="negar-next" to="/projects/fars-roboyar">
        <div className="negar-next-inner negar-shell">
          <div>
            <span className="negar-next-label">Next Project</span>
            <h2>Fars Roboyar</h2>
          </div>
          <span className="negar-next-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </main>
  )
}
