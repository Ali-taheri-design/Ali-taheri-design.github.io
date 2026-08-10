import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ProjectPageProps = {
  accent: string
  projectNumber: string
  category: string
  title: string
  description: string
  year: string
  industry: string
  services: string
  heroSrc: string
  heroAlt: string
  nextName: string
  nextTo: string
  children: ReactNode
}

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

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`brand-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function CaseImage({
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
    <Reveal className={className}>
      <img className="brand-case-image" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
    </Reveal>
  )
}

export function CaseSection({
  index,
  title,
  children,
  className = '',
}: {
  index: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`brand-case-section brand-case-shell ${className}`}>
      <div className="brand-case-heading">
        <span>{index} / Identity System</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default function BrandCaseStudy({
  accent,
  projectNumber,
  category,
  title,
  description,
  year,
  industry,
  services,
  heroSrc,
  heroAlt,
  nextName,
  nextTo,
  children,
}: ProjectPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="brand-case-page" style={{ '--case-accent': accent } as CSSProperties}>
      <style>{`
        .brand-case-page {
          --case-paper: #f5f2ec;
          background: #111;
          color: var(--case-paper);
          padding-top: 88px;
          overflow: hidden;
        }

        .brand-case-shell { padding-left: 40px; padding-right: 40px; }

        .brand-case-header {
          padding-top: 48px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .brand-case-back {
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

        .brand-case-back:hover { color: var(--case-paper); }

        .brand-case-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(380px, 0.92fr);
          align-items: end;
          gap: clamp(52px, 8vw, 148px);
          margin-top: 42px;
        }

        .brand-case-kicker,
        .brand-case-heading span,
        .brand-case-meta dt,
        .brand-case-next-label {
          color: var(--case-accent);
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .brand-case-title {
          margin-top: 13px;
          color: var(--case-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(54px, 5.7vw, 92px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 0.86;
          text-transform: uppercase;
        }

        .brand-case-description {
          max-width: 610px;
          color: #777;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
        }

        .brand-case-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 26px 48px;
          margin-top: 25px;
        }

        .brand-case-meta div { min-width: 74px; }
        .brand-case-meta dd {
          margin-top: 5px;
          color: #b8b8b8;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
        }

        .brand-case-hero { padding-bottom: clamp(82px, 8vw, 130px); }
        .brand-case-hero .brand-case-image { object-fit: cover; }

        .brand-case-section {
          padding-top: clamp(78px, 7vw, 112px);
          padding-bottom: clamp(78px, 7vw, 112px);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .brand-case-heading { margin-bottom: clamp(44px, 4.5vw, 72px); }
        .brand-case-heading h2 {
          margin-top: 8px;
          color: var(--case-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(28px, 3.1vw, 48px);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1;
          text-transform: uppercase;
        }

        .brand-case-image { display: block; width: 100%; height: auto; }

        .brand-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 800ms ease, transform 800ms cubic-bezier(0.16,1,0.3,1);
        }

        .brand-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .brand-case-contained { width: min(100%, 1160px); margin-left: auto; margin-right: auto; }
        .brand-case-narrow { width: min(100%, 820px); margin-left: auto; margin-right: auto; }

        .brand-case-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          width: min(100%, 760px);
          min-height: 560px;
          margin: 0 auto;
          padding: clamp(44px, 7vw, 100px);
          overflow: hidden;
          border-radius: 3px;
          background: #181818;
        }

        .brand-case-panel img {
          display: block;
          width: min(100%, 520px);
          height: auto;
          transition: transform 500ms cubic-bezier(0.16,1,0.3,1), filter 500ms ease;
        }

        .brand-case-panel:hover img {
          transform: scale(1.025);
          filter: drop-shadow(0 18px 36px color-mix(in srgb, var(--case-accent) 18%, transparent));
        }

        .brand-case-floating-mark {
          width: min(100%, 760px);
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .brand-case-floating-mark img {
          display: inline-block;
          width: auto;
          max-width: min(100%, 520px);
          max-height: 560px;
          object-fit: contain;
          transition: transform 500ms cubic-bezier(0.16,1,0.3,1), filter 500ms ease;
        }

        .brand-case-floating-mark:hover img {
          transform: scale(1.03);
          filter: drop-shadow(0 18px 36px color-mix(in srgb, var(--case-accent) 20%, transparent));
        }

        .brand-case-hoverable img {
          transform-origin: center;
          transition: transform 650ms cubic-bezier(0.16,1,0.3,1), filter 650ms ease;
        }

        .brand-case-hoverable:hover img {
          transform: scale(1.018);
          filter: drop-shadow(0 16px 32px color-mix(in srgb, var(--case-accent) 14%, transparent));
        }

        .brand-case-two-column {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: center;
          gap: clamp(44px, 7vw, 110px);
        }

        .brand-case-stack { display: grid; gap: 34px; align-content: center; }

        .brand-case-artwork img {
          max-height: 520px;
          object-fit: contain;
          transition: transform 500ms cubic-bezier(0.16,1,0.3,1);
        }

        .brand-case-artwork:hover img { transform: scale(1.02); }

        .brand-case-framed { overflow: hidden; border-radius: 3px; }
        .brand-case-framed img { transition: transform 850ms cubic-bezier(0.16,1,0.3,1); }
        .brand-case-framed:hover img { transform: scale(1.012); }

        .brand-case-edge-to-edge { padding-bottom: 0; }
        .brand-case-edge-to-edge-media { margin-left: -40px; margin-right: -40px; }

        .brand-case-next {
          display: block;
          color: inherit;
          text-decoration: none;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .brand-case-next-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          min-height: 270px;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        .brand-case-next h2 {
          margin-top: 13px;
          color: var(--case-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(54px, 8vw, 118px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 0.88;
          text-transform: uppercase;
          transition: color 350ms ease;
        }

        .brand-case-next-arrow {
          color: var(--case-accent);
          font-family: 'Barlow', sans-serif;
          font-size: clamp(34px, 4vw, 62px);
          line-height: 1;
          transition: transform 450ms cubic-bezier(0.16,1,0.3,1);
        }

        .brand-case-next:hover h2 { color: #fff; }
        .brand-case-next:hover .brand-case-next-arrow { transform: translateX(12px); }

        @media (max-width: 800px) {
          .brand-case-shell { padding-left: 22px; padding-right: 22px; }
          .brand-case-header { padding-top: 32px; padding-bottom: 38px; }
          .brand-case-intro { grid-template-columns: 1fr; gap: 30px; margin-top: 32px; }
          .brand-case-description { font-size: 14px; }
          .brand-case-hero { padding-left: 0; padding-right: 0; }
          .brand-case-panel { min-height: 420px; }
          .brand-case-two-column { grid-template-columns: 1fr; gap: 58px; }
          .brand-case-edge-to-edge-media { margin-left: -22px; margin-right: -22px; }
          .brand-case-next-inner { min-height: 220px; }
        }

        @media (max-width: 520px) {
          .brand-case-page { padding-top: 76px; }
          .brand-case-title { font-size: clamp(50px, 17vw, 72px); }
          .brand-case-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .brand-case-panel { min-height: 320px; padding: 42px; }
          .brand-case-next-inner { align-items: flex-end; }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-reveal { opacity: 1; transform: none; transition: none; }
          .brand-case-panel img,
          .brand-case-floating-mark img,
          .brand-case-hoverable img,
          .brand-case-artwork img,
          .brand-case-framed img,
          .brand-case-next-arrow { transition: none; }
        }
      `}</style>

      <header className="brand-case-header brand-case-shell">
        <Link className="brand-case-back" to="/projects">
          <span aria-hidden="true">←</span> All Projects
        </Link>

        <div className="brand-case-intro">
          <div>
            <span className="brand-case-kicker">Project {projectNumber} / {category}</span>
            <h1 className="brand-case-title">{title}</h1>
          </div>
          <div>
            <p className="brand-case-description">{description}</p>
            <dl className="brand-case-meta">
              <div><dt>Year</dt><dd>{year}</dd></div>
              <div><dt>Industry</dt><dd>{industry}</dd></div>
              <div><dt>Services</dt><dd>{services}</dd></div>
            </dl>
          </div>
        </div>
      </header>

      <section className="brand-case-hero brand-case-shell" aria-label={`${title} presentation cover`}>
        <CaseImage src={heroSrc} alt={heroAlt} eager />
      </section>

      {children}

      <Link className="brand-case-next" to={nextTo}>
        <div className="brand-case-next-inner brand-case-shell">
          <div>
            <span className="brand-case-next-label">Next Project</span>
            <h2>{nextName}</h2>
          </div>
          <span className="brand-case-next-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </main>
  )
}
