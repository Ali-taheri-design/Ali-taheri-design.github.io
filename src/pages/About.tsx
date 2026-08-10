import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const PHILOSOPHY = [
  {
    title: 'Precision Over Decoration',
    description: "We remove everything that doesn't serve the brand. Simplicity is never the goal—clarity is.",
  },
  {
    title: 'Research Before Aesthetics',
    description: 'Beautiful marks that say nothing are a waste of budget. We begin by understanding what makes a brand genuinely different.',
  },
  {
    title: 'Systems Thinking',
    description: 'A logo is only one part of a brand. Every identity we create is designed as a system that grows consistently across every touchpoint.',
  },
  {
    title: 'Strategic Collaboration',
    description: 'Clients know where we are at every stage. No black box, no mystery—just clear reasoning behind every decision.',
  },
]

const TIMELINE = [
  {
    year: '2021',
    title: 'Foundation Through Practice',
    description: 'Dedicated the year to mastering design fundamentals, exploring creative tools, and completing the first logo design projects that laid the foundation for a long-term branding career.',
  },
  {
    year: '2022',
    title: 'Professional Journey Begins',
    description: 'Started working professionally in logo design, collaborating with clients and translating business ideas into clear, functional visual identities.',
  },
  {
    year: '2023',
    title: 'Expanding Experience',
    description: 'Delivered a growing number of identity systems, logo designs, and stationery projects, refining both design quality and client communication through real-world experience.',
  },
  {
    year: '2024',
    title: 'Beyond Logo Design',
    description: 'Expanded into marketing visuals, including banners and posters, while strengthening expertise in visual communication across both digital and print media.',
  },
  {
    year: '2025',
    title: 'From Designer to Brand Specialist',
    description: 'Shifted focus from creating standalone logos to building complete brand identities—combining strategy, visual systems, and consistent experiences that help businesses grow with clarity and recognition.',
  },
  {
    year: '2026',
    title: 'VORMA Studio Founded',
    description: 'Founded VORMA Studio to provide a more focused, systematic, and trustworthy approach to branding—helping businesses build identities designed to grow with clarity and consistency. Expanded the studio’s expertise into website design and UI/UX, transforming brand identities into cohesive digital experiences that strengthen every customer touchpoint.',
  },
]

const EXPERTISE = [
  'Logo Design',
  'Wordmark Systems',
  'Brand Marks',
  'Brand Identity',
  'Brand Strategy',
  'Brand Positioning',
  'Brand Guidelines',
  'Color Systems',
  'Typography',
  'Naming',
  'Stationery',
  'Packaging',
  'Website & UI Design',
]

const PRINCIPLES = [
  {
    title: 'Senior-Led',
    description: 'Every project is handled by principal-level designers. No juniors, no handoffs.',
  },
  {
    title: 'Focused Roster',
    description: 'We intentionally take on a limited number of projects to ensure every client receives our full attention.',
  },
  {
    title: 'Collaborative',
    description: 'You are involved at every critical decision. We build with you, not for you.',
  },
  {
    title: 'Research-Driven',
    description: 'Deep competitive and cultural research before a single mark is drawn.',
  },
  {
    title: 'Strategic Thinking',
    description: 'Every design decision connects to a clear business objective, audience insight, and long-term brand direction.',
  },
  {
    title: 'Scalable Systems',
    description: 'Every identity is designed to remain consistent across every future touchpoint—from social media to websites and physical environments.',
  },
]

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
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`about-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="about-label">{children}</span>
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="about-page">
      <style>{`
        .about-page {
          --about-accent: #3f63d9;
          --about-paper: #f0efed;
          background: #111;
          color: var(--about-paper);
          padding-top: 88px;
          overflow: hidden;
        }

        .about-shell {
          padding-left: 40px;
          padding-right: 40px;
        }

        .about-label {
          display: block;
          color: var(--about-accent);
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          line-height: 1;
          text-transform: uppercase;
        }

        .about-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 800ms ease, transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-hero {
          min-height: 570px;
          padding-top: 72px;
          padding-bottom: 110px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(400px, 0.92fr);
          align-items: center;
          gap: clamp(70px, 9vw, 170px);
          overflow: hidden;
        }

        .about-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 48% 65% at 100% 5%, rgba(63, 99, 217, 0.055), transparent 72%);
          pointer-events: none;
        }

        .about-hero-copy,
        .about-hero-intro {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .about-title {
          margin-top: 18px;
          color: var(--about-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(70px, 7.4vw, 116px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 0.83;
          text-transform: uppercase;
        }

        .about-title span { color: var(--about-accent); }

        .about-hero-intro {
          color: #777;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
        }

        .about-section {
          padding-top: 92px;
          padding-bottom: 92px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .about-philosophy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          margin-top: 48px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.025);
        }

        .about-philosophy-card {
          min-height: 150px;
          padding: 40px 36px;
          background: #161616;
        }

        .about-card-title,
        .about-timeline-title,
        .about-principle-title {
          color: var(--about-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 19px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .about-card-copy,
        .about-timeline-copy,
        .about-principle-copy {
          margin-top: 13px;
          color: #5b5b5b;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.7;
        }

        .about-timeline-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.65fr);
          gap: clamp(70px, 10vw, 180px);
        }

        .about-section-title {
          margin-top: 16px;
          color: var(--about-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(42px, 4vw, 62px);
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 0.86;
          text-transform: uppercase;
        }

        .about-timeline-item {
          display: grid;
          grid-template-columns: 72px minmax(0, 1fr);
          gap: 24px;
          padding: 23px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.055);
        }

        .about-timeline-item:first-child { padding-top: 0; }
        .about-timeline-item:last-child { padding-bottom: 0; border-bottom: 0; }

        .about-year {
          color: #333;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .about-timeline-item.is-current .about-year { color: var(--about-accent); }
        .about-timeline-title { font-size: 17px; }
        .about-timeline-item > * { min-width: 0; }
        .about-timeline-copy { margin-top: 7px; }

        .about-expertise-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 40px;
        }

        .about-expertise-tag {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1px;
          padding: 9px 15px;
          color: #737373;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
          transition: border-color 300ms ease, color 300ms ease, background 300ms ease;
        }

        .about-expertise-tag:hover {
          border-color: var(--about-accent);
          background: rgba(63, 99, 217, 0.06);
          color: var(--about-paper);
        }

        .about-principles {
          padding-top: 82px;
          padding-bottom: 70px;
          background: linear-gradient(115deg, #111 0%, #12121b 100%);
        }

        .about-principles-heading { margin-bottom: 48px; }

        .about-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: rgba(255, 255, 255, 0.055);
        }

        .about-principle-card {
          min-height: 130px;
          padding: 34px 28px;
          background: #111;
        }

        .about-principle-title { font-size: 17px; }
        .about-principle-copy { font-size: 12px; }

        .about-cta {
          padding-top: 98px;
          padding-bottom: 105px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          text-align: center;
        }

        .about-cta-title {
          margin-top: 18px;
          color: var(--about-paper);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(54px, 6.3vw, 94px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 0.9;
          text-transform: uppercase;
        }

        .about-cta-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 36px;
          padding: 14px 36px;
          border-radius: 1px;
          background: var(--about-accent);
          color: #111;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 300ms ease, transform 300ms ease;
        }

        .about-cta-link:hover {
          background: #5578e8;
          transform: translateY(-2px);
        }

        @media (max-width: 800px) {
          .about-shell { padding-left: 22px; padding-right: 22px; }
          .about-hero {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 48px;
            padding-top: 54px;
            padding-bottom: 72px;
          }
          .about-title { font-size: clamp(64px, 17vw, 90px); }
          .about-hero-intro { max-width: 600px; }
          .about-section { padding-top: 72px; padding-bottom: 72px; }
          .about-timeline-layout { grid-template-columns: 1fr; gap: 54px; }
          .about-philosophy-card { padding: 34px 26px; }
          .about-principles-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 560px) {
          .about-page { padding-top: 76px; }
          .about-title { font-size: clamp(52px, 15vw, 62px); }
          .about-philosophy-grid,
          .about-principles-grid { grid-template-columns: 1fr; }
          .about-timeline-item { grid-template-columns: 54px minmax(0, 1fr); gap: 16px; }
          .about-card-title,
          .about-timeline-title,
          .about-principle-title { overflow-wrap: anywhere; }
          .about-expertise-list { gap: 6px; }
          .about-expertise-tag { padding: 8px 11px; font-size: 12px; }
          .about-cta { padding-top: 78px; padding-bottom: 84px; }
          .about-page + footer {
            grid-template-columns: 1fr !important;
            align-items: start !important;
            padding: 48px 22px 32px !important;
          }
          .about-page + footer > div:nth-child(2) { align-items: flex-start !important; }
          .about-page + footer > div:nth-child(3) { text-align: left !important; }
          .about-page + footer > div:nth-child(3) > div {
            justify-content: flex-start !important;
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal { opacity: 1; transform: none; transition: none; }
          .about-expertise-tag,
          .about-cta-link { transition: none; }
        }
      `}</style>

      <section className="about-hero about-shell">
        <Reveal className="about-hero-copy">
          <SectionLabel>About VORMA</SectionLabel>
          <h1 className="about-title">
            We Build<br />
            <span>Brands</span><br />
            That Last
          </h1>
        </Reveal>

        <Reveal className="about-hero-intro">
          VORMA Studio helps businesses build clear, memorable brand identities through strategy,
          logo design, and cohesive visual systems. Every project is approached with precision,
          clarity, and long-term thinking—creating brands designed to be recognized, trusted, and
          remembered.
        </Reveal>
      </section>

      <section className="about-section about-shell">
        <Reveal>
          <SectionLabel>Our Philosophy</SectionLabel>
          <div className="about-philosophy-grid">
            {PHILOSOPHY.map((item) => (
              <article className="about-philosophy-card" key={item.title}>
                <h2 className="about-card-title">{item.title}</h2>
                <p className="about-card-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="about-section about-shell">
        <Reveal className="about-timeline-layout">
          <div>
            <SectionLabel>Timeline</SectionLabel>
            <h2 className="about-section-title">The Path<br />To<br />VORMA</h2>
          </div>

          <div>
            {TIMELINE.map((item) => (
              <article className={`about-timeline-item ${item.year === '2026' ? 'is-current' : ''}`} key={item.year}>
                <span className="about-year">{item.year}</span>
                <div>
                  <h3 className="about-timeline-title">{item.title}</h3>
                  <p className="about-timeline-copy">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="about-section about-shell">
        <Reveal>
          <SectionLabel>Expertise</SectionLabel>
          <div className="about-expertise-list">
            {EXPERTISE.map((item) => (
              <span className="about-expertise-tag" key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="about-principles about-shell">
        <Reveal>
          <div className="about-principles-heading">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="about-section-title">Working Principles</h2>
          </div>

          <div className="about-principles-grid">
            {PRINCIPLES.map((item) => (
              <article className="about-principle-card" key={item.title}>
                <h3 className="about-principle-title">{item.title}</h3>
                <p className="about-principle-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="about-cta about-shell">
        <SectionLabel>Start a Project</SectionLabel>
        <h2 className="about-cta-title">Ready to Begin?</h2>
        <Link className="about-cta-link" to="/contact">
          Get in Touch <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  )
}
