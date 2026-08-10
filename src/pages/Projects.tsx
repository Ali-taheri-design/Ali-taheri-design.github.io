import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoVorma from '../imports/logo-vorma.png'
import logoNegar from '../imports/logo-negar.png'
import logoFarsRoboyar from '../imports/logo-fars-roboyar.png'
import logoCodeIntelligence from '../imports/logo-code-intelligence.png'
import logoRendanlab from '../imports/logo-rendanlab.png'
import logoHamidAbbasi from '../imports/logo-hamid-abbasi.png'
import logoSBar from '../imports/logo-s-bar.png'
import logoAlpha from '../imports/logo-alpha.png'
import logoLionCompany from '../imports/logo-lion-company.png'

const ALL_PROJECTS = [
  { id: 'vorma', name: 'Vorma Studio', category: 'Brand Identity', year: '2026', color: '#3F63D9', logo: logoVorma, logoScale: 0.62 },
  { id: 'negar', name: 'Negar', category: 'Industry', year: '2026', color: '#C89B5C', logo: logoNegar, logoScale: 0.62 },
  { id: 'fars-roboyar', name: 'Fars Roboyar', category: 'Technology', year: '2025', color: '#C81E3A', logo: logoFarsRoboyar, logoScale: 0.5 },
  { id: 'code-intelligence', name: 'Code Intelligence', category: 'Technology', year: '2026', color: '#4B2E9E', logo: logoCodeIntelligence, logoScale: 0.4 },
  { id: 'rendanlab', name: 'Rendanlab', category: 'Technology', year: '2025', color: '#4A9FD8', logo: logoRendanlab, logoScale: 0.42 },
  { id: 'hamid-abbasi', name: 'Hamid Abbasi', category: 'Brand Identity', year: '2025', color: '#D4AF37', logo: logoHamidAbbasi, logoScale: 0.55 },
  { id: 's-bar', name: 'S Bar', category: 'Industry', year: '2024', color: '#6B4FA0', logo: logoSBar, logoScale: 0.42 },
  { id: 'alpha', name: 'Alpha', category: 'Technology', year: '2024', color: '#7A8590', logo: logoAlpha, logoScale: 0.4 },
  { id: 'lion-company', name: 'Lion Company', category: 'Technology', year: '2024', color: '#8A8A8A', logo: logoLionCompany, logoScale: 0.5 },
]

const FILTERS = ['All', 'Brand Identity', 'Industry', 'Technology']

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

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === filter)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ paddingTop: '88px' }}>
      {/* Header */}
      <section
        style={{
          padding: '80px 40px 60px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(63,99,217,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
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
            Portfolio
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(56px, 8vw, 120px)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                lineHeight: 0.9,
                color: '#f0efed',
              }}
            >
              Selected<br />Work
            </h1>
            <div style={{ textAlign: 'right' }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#666',
                  maxWidth: '320px',
                }}
              >
                A collection of identity systems crafted for ambitious brands across every sector.
              </p>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  color: '#333',
                  marginTop: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {ALL_PROJECTS.length} Projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section
        style={{
          padding: '32px 40px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '8px 18px',
              borderRadius: '2px',
              border: filter === f ? 'none' : '1px solid rgba(255,255,255,0.12)',
              background: filter === f ? '#3F63D9' : 'transparent',
              color: filter === f ? '#111' : '#555',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            {f}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section style={{ padding: '60px 40px 120px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ project, index }: { project: typeof ALL_PROJECTS[0]; index: number }) {
  const { ref, visible } = useReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 60}ms, transform 0.6s ease ${index * 60}ms`,
      }}
    >
      <Link
        to={`/projects/${project.id}`}
        style={{ display: 'block', textDecoration: 'none' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div
          style={{
            aspectRatio: '4/3',
            background: `radial-gradient(ellipse at 50% 40%, ${project.color}22 0%, #141414 65%)`,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Hover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(63,99,217,0.08)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Project logo */}
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            style={{
              width: `${(project.logoScale ?? 0.5) * 100}%`,
              height: `${(project.logoScale ?? 0.5) * 100}%`,
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* Project number */}
          <span
            style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              fontFamily: "'Barlow', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* View arrow */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '24px',
              width: '36px',
              height: '36px',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              color: '#f0efed',
              fontSize: '14px',
            }}
          >
            →
          </div>
        </div>

        {/* Info */}
        <div
          style={{
            padding: '20px 24px 28px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '8px' }}>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: hovered ? '#f0efed' : '#ccc',
                transition: 'color 0.3s ease',
              }}
            >
              {project.name}
            </h3>
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: '12px',
                color: '#333',
                letterSpacing: '0.06em',
                flexShrink: 0,
              }}
            >
              {project.year}
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#3F63D9',
            }}
          >
            {project.category}
          </span>
        </div>
      </Link>
    </div>
  )
}
