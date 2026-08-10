import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import vormaMark from '../imports/vorma-mark-bold.png'
import vormaProjectImg from '../imports/project-vorma.png'
import negarProjectImg from '../imports/project-negar.png'
import farsRoboyarProjectImg from '../imports/project-fars-roboyar.png'
import codeIntelligenceProjectImg from '../imports/project-code-intelligence.png'

/* ─── Shared data ─── */
const FEATURED_PROJECTS = [
  {
    id: 'vorma',
    name: 'VORMA',
    category: 'Brand Identity',
    year: '2026',
    image: vormaProjectImg,
    description: 'A branding system designed to represent our own philosophy.',
    index: '01',
  },
  {
    id: 'negar',
    name: 'NEGAR',
    category: 'Industry',
    year: '2026',
    image: negarProjectImg,
    description: 'A modern identity inspired by craftsmanship and precision.',
    index: '02',
  },
  {
    id: 'fars-roboyar',
    name: 'Fars Roboyar',
    category: 'Technology',
    year: '2025',
    image: farsRoboyarProjectImg,
    description: 'A modern identity representing advanced drone services, technical expertise, and innovation.',
    index: '03',
  },
  {
    id: 'code-intelligence',
    name: 'Code Intelligence',
    category: 'Artificial Intelligence',
    year: '2026',
    image: codeIntelligenceProjectImg,
    description: 'Designed for the future of intelligent systems.',
    index: '04',
  },
]

const CLIENTS = [
  'Negar', 'Fars Roboyar', 'Code Intelligence',
  'Aipha', 'S Bar', 'Rendanlab',
  'Hamid Abbasi', 'Lion Company', 'Tejarat Aria',
]

const PROCESS = [
  { num: '01', title: 'Discovery', desc: 'Deep research into your brand, market, and audience. We extract what makes you singular.' },
  { num: '02', title: 'Strategy', desc: 'Positioning and direction — the foundation every visual decision is built on.' },
  { num: '03', title: 'Design', desc: 'Rigorous exploration. Every mark is constructed with intent, geometry, and purpose.' },
  { num: '04', title: 'Refinement', desc: 'Close collaboration until the identity is exactly right. No compromises.' },
  { num: '05', title: 'Delivery', desc: 'Full production files, guidelines, and rollout support. Ready for the world.' },
]

/* ─── Reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

/* ─── Section label ─── */
function SectionLabel({ children }: { children: string }) {
  return (
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
      {children}
    </span>
  )
}

/* ─── Featured project card ─── */
function ProjectCard({ project, reversed }: { project: typeof FEATURED_PROJECTS[0]; reversed: boolean }) {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: reversed ? '1fr 1.2fr' : '1.2fr 1fr',
        gap: '0',
        minHeight: '520px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Image pane */}
      <div
        style={{ order: reversed ? 1 : 0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="img-placeholder"
          style={{
            height: '100%',
            minHeight: '520px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            style={{
              width: '100%',
              height: '100%',
              minHeight: '520px',
              objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </div>

      {/* Text pane */}
      <div
        style={{
          order: reversed ? 0 : 1,
          padding: '64px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderLeft: reversed ? 'none' : '1px solid rgba(255,255,255,0.08)',
          borderRight: reversed ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
            <SectionLabel>{project.category}</SectionLabel>
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: '12px',
                color: '#333',
                letterSpacing: '0.08em',
              }}
            >
              {project.year}
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(48px, 5vw, 80px)',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              color: '#f0efed',
            }}
          >
            {project.name}
          </h3>
        </div>

        <div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#777',
              marginBottom: '40px',
              maxWidth: '320px',
            }}
          >
            {project.description}
          </p>
          <Link
            to={`/projects/${project.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#f0efed',
              transition: 'gap 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.gap = '20px'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.gap = '12px'
            }}
          >
            View Case Study
            <span style={{ color: '#3F63D9', fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─── Main component ─── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '88px',
        }}
      >
        {/* Background subtle gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(63,99,217,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Thin grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '40px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left: headline */}
          <div>
            <div style={{ marginBottom: '28px' }}>
              <SectionLabel>Brand Identity Studio</SectionLabel>
            </div>
            <h1
              className="display-hero"
              style={{
                fontSize: 'clamp(72px, 9vw, 148px)',
                color: '#f0efed',
                marginBottom: '0',
                transform: `translateY(${scrollY * 0.12}px)`,
              }}
            >
              Brand<br />
              Identity<br />
              <span style={{ color: '#3F63D9' }}>That Builds</span><br />
              Recognition
            </h1>
          </div>

          {/* Right: logo + subtext */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '48px',
            }}
          >
            <img
              src={vormaMark}
              alt="VORMA Studio mark"
              style={{
                width: 'clamp(220px, 28vw, 380px)',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 60px rgba(63,99,217,0.25))',
                transform: `translateY(${scrollY * -0.08}px)`,
              }}
            />

            <div style={{ maxWidth: '360px', textAlign: 'right' }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: '#888',
                  marginBottom: '36px',
                }}
              >
                We design visual identities that help ambitious brands become memorable — precise, confident, and built to last.
              </p>
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: '#111',
                  background: '#3F63D9',
                  padding: '14px 32px',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#5578e8'
                  e.currentTarget.style.gap = '22px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3F63D9'
                  e.currentTarget.style.gap = '14px'
                }}
              >
                View Projects <span style={{ fontSize: '16px' }}>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#333',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, rgba(63,99,217,0.5), transparent)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section style={{ paddingTop: '120px' }}>
        <div
          style={{
            padding: '0 40px 60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#f0efed',
                marginTop: '12px',
              }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hover-line"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#555',
              transition: 'color 0.3s ease',
              paddingBottom: '2px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0efed')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
          >
            All Projects →
          </Link>
        </div>

        {FEATURED_PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} reversed={i % 2 !== 0} />
        ))}
      </section>

      {/* ─── SERVICES ─── */}
      <ServicesSection />

      {/* ─── SELECTED CLIENTS ─── */}
      <ClientsSection clients={CLIENTS} />

      {/* ─── PROCESS ─── */}
      <ProcessSection steps={PROCESS} />

      {/* ─── ABOUT STUDIO ─── */}
      <AboutTeaser />

      {/* ─── CONTACT BAND ─── */}
      <ContactBand />
    </main>
  )
}

/* ─── Services ─── */
function ServicesSection() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '140px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <SectionLabel>Capabilities</SectionLabel>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 56px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
              color: '#f0efed',
              marginTop: '16px',
            }}
          >
            What We<br />Do Best
          </h2>
        </div>

        <div>
          {[{ num: '01', title: 'Logo Design', desc: 'Singular marks that carry weight and meaning — built to endure across every scale and context.' },
            { num: '02', title: 'Visual Identity', desc: 'Complete systems: color, typography, pattern, motion, and voice — cohesive at every touchpoint.' },
            { num: '03', title: 'Brand Strategy', desc: 'Positioning, naming, and narrative that sets direction and gives design a foundation to stand on.' },
            { num: '04', title: 'Brand Guidelines', desc: 'Precise documentation that ensures your identity stays consistent wherever it appears.' },
          ].map((s) => (
            <ServiceRow key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service }: { service: { num: string; title: string; desc: string } }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr 1fr',
        gap: '32px',
        alignItems: 'start',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        cursor: 'default',
        transition: 'background 0.3s ease',
        background: hovered ? 'rgba(255,255,255,0.02)' : 'transparent',
        margin: '0 -20px',
        padding: '32px 20px',
      }}
    >
      <span
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: hovered ? '#3F63D9' : '#333',
          transition: 'color 0.3s ease',
          paddingTop: '4px',
        }}
      >
        {service.num}
      </span>
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: '28px',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: '#f0efed',
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '14px',
          lineHeight: 1.7,
          color: '#666',
        }}
      >
        {service.desc}
      </p>
    </div>
  )
}

/* ─── Clients ─── */
function ClientsSection({ clients }: { clients: string[] }) {
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
      <SectionLabel>Selected Clients</SectionLabel>
      <div
        style={{
          marginTop: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {clients.map((c, i) => (
          <div
            key={c}
            style={{
              padding: '28px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              borderRight: i % 3 !== 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              paddingLeft: i % 3 !== 0 ? '32px' : '0',
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '18px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#444',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0efed')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
            >
              {c}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Process ─── */
function ProcessSection({ steps }: { steps: { num: string; title: string; desc: string }[] }) {
  const { ref, visible } = useReveal()
  const [active, setActive] = useState(0)

  return (
    <section
      ref={ref}
      style={{
        padding: '140px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <SectionLabel>Our Process</SectionLabel>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 56px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
              color: '#f0efed',
              marginTop: '16px',
            }}
          >
            From Brief<br />to Brand
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#666',
              marginTop: '32px',
              maxWidth: '340px',
            }}
          >
            A disciplined five-step process that moves from discovery to delivery with intention at every stage.
          </p>
        </div>

        <div>
          {steps.map((step, i) => (
            <div
              key={step.num}
              onClick={() => setActive(i)}
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: '24px 0',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: active === i ? '#3F63D9' : '#333',
                  transition: 'color 0.3s ease',
                  paddingTop: '3px',
                }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: active === i ? '#f0efed' : '#555',
                    transition: 'color 0.3s ease',
                    marginBottom: active === i ? '12px' : '0',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#666',
                    maxHeight: active === i ? '80px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About teaser ─── */
function AboutTeaser() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '140px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(135deg, #111 0%, #141420 100%)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <SectionLabel>About Studio</SectionLabel>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(40px, 5vw, 72px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
              color: '#f0efed',
              marginTop: '16px',
            }}
          >
            Identity Design<br />
            <span style={{ color: '#3F63D9' }}>With Purpose</span>
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#777',
              marginBottom: '40px',
            }}
          >
            VORMA Studio is an independent branding practice focused on logo design, visual identity systems, and brand strategy. We work with ambitious brands who understand that design is not decoration — it is differentiation.
          </p>
          <Link
            to="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#f0efed',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              paddingBottom: '6px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3F63D9'
              e.currentTarget.style.color = '#3F63D9'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#f0efed'
            }}
          >
            Learn About VORMA →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact band ─── */
function ContactBand() {
  const { ref, visible } = useReveal()
  return (
    <section
      ref={ref}
      style={{
        padding: '120px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <SectionLabel>Start a Project</SectionLabel>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(56px, 8vw, 120px)',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          lineHeight: 0.92,
          color: '#f0efed',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >
        Let's Build<br />
        <span style={{ color: '#3F63D9' }}>Something</span><br />
        Remarkable
      </h2>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '17px',
          color: '#666',
          marginBottom: '52px',
          maxWidth: '440px',
          margin: '0 auto 52px',
          lineHeight: 1.75,
        }}
      >
        Ready to invest in an identity that separates your brand from everyone else?
      </p>
      <Link
        to="/contact"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          color: '#111',
          background: '#3F63D9',
          padding: '18px 48px',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#5578e8'
          e.currentTarget.style.gap = '24px'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#3F63D9'
          e.currentTarget.style.gap = '16px'
        }}
      >
        Get in Touch <span style={{ fontSize: '18px' }}>→</span>
      </Link>
    </section>
  )
}
