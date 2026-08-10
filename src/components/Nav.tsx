import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import vormaLogo from '../imports/vorma-logo-nav.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <style>{`
        .site-nav-menu-button {
          display: none;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #f0efed;
          cursor: pointer;
        }

        .site-nav-menu-button span {
          display: block;
          width: 22px;
          height: 1px;
          margin: 6px auto;
          background: currentColor;
          transition: transform 300ms ease, opacity 300ms ease;
        }

        .site-nav-menu-button.is-open span:first-child { transform: translateY(3.5px) rotate(45deg); }
        .site-nav-menu-button.is-open span:last-child { transform: translateY(-3.5px) rotate(-45deg); }

        @media (max-width: 720px) {
          .site-nav {
            height: 76px !important;
            padding: 0 22px !important;
          }
          .site-nav-logo-image { height: 48px !important; }
          .site-nav-desktop { display: none !important; }
          .site-nav-menu-button { display: block; }
          .site-nav-overlay { padding: 76px 22px 40px !important; }
        }
      `}</style>
      <nav
        className="site-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 40px',
          height: '88px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: scrolled ? 'rgba(17,17,17,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            className="site-nav-logo-image"
            src={vormaLogo}
            alt="VORMA Studio"
            style={{
              height: '60px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(1.15)',
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="site-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="hover-line"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: location.pathname === link.href ? '#f0efed' : '#888',
                transition: 'color 0.3s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#111',
              background: '#3F63D9',
              padding: '9px 22px',
              borderRadius: '2px',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#5578e8')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#3F63D9')}
          >
            Start a Project
          </Link>
        </div>

        <button
          className={`site-nav-menu-button ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="site-nav-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: '#111',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '80px 40px',
            gap: '32px',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '56px',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#f0efed',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
