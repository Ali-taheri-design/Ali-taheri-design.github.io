import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '60px 40px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '40px',
        alignItems: 'end',
      }}
    >
      {/* Left — Studio */}
      <div>
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#f0efed',
          }}
        >
          VORMA Studio
        </span>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: '13px',
            color: '#555',
            marginTop: '12px',
            lineHeight: 1.7,
            maxWidth: '220px',
          }}
        >
          Independent branding studio specializing in visual identity systems and brand strategy.
        </p>
      </div>

      {/* Center — Navigation */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        {[
          ['/', 'Home'],
          ['/projects', 'Projects'],
          ['/about', 'About'],
          ['/contact', 'Contact'],
        ].map(([href, label]) => (
          <Link
            key={href}
            to={href}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#555',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0efed')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right — Social + Copyright */}
      <div style={{ textAlign: 'right' }}>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', marginBottom: '24px' }}>
          {['Instagram', 'Behance', 'LinkedIn'].map((s) => (
            <a
              key={s}
              href="#"
              className="hover-line"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#555',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0efed')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
            >
              {s}
            </a>
          ))}
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: '12px',
            color: '#333',
            letterSpacing: '0.04em',
          }}
        >
          © {year} VORMA Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
