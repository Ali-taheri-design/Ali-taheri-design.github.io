import { useEffect, useRef, useState } from 'react'

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

const SOCIAL = [
  { label: 'Instagram', handle: '@vorma.studio', href: '#' },
  { label: 'LinkedIn', handle: 'VORMA Studio', href: '#' },
  { label: 'Behance', handle: 'vorma-studio', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', project: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    padding: '16px 0',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: '15px',
    color: '#f0efed',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle = {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 500,
    fontSize: '10px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#3F63D9',
    display: 'block',
    marginBottom: '4px',
  }

  return (
    <main style={{ paddingTop: '88px' }}>

      {/* ─── Hero ─── */}
      <section style={{ padding: '80px 40px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 70% at 0% 50%, rgba(63,99,217,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '11px',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3F63D9',
          }}>Contact</span>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
            fontSize: 'clamp(64px, 10vw, 140px)', letterSpacing: '-0.02em',
            textTransform: 'uppercase', lineHeight: 0.88, color: '#f0efed',
            marginTop: '16px', marginBottom: '0',
          }}>
            Let's Talk<br />
            <span style={{ color: '#3F63D9' }}>About Your</span><br />
            Brand
          </h1>
        </div>
      </section>

      {/* ─── Content grid ─── */}
      <section style={{
        padding: '0 40px 120px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: '80px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '80px',
      }}>

        {/* Left — info */}
        <div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: '32px', letterSpacing: '0.02em', textTransform: 'uppercase',
            color: '#f0efed', marginBottom: '24px',
          }}>Get in Touch</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '15px',
            lineHeight: 1.78, color: '#666', marginBottom: '56px',
          }}>
            Tell us about your project. We typically respond within 24 hours and take on a limited number of new projects each quarter.
          </p>

          {/* Email */}
          <div style={{ marginBottom: '48px' }}>
            <span style={labelStyle}>Email</span>
            <a
              href="mailto:hello@vorma.studio"
              className="hover-line"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                fontSize: '24px', letterSpacing: '0.04em', textTransform: 'uppercase',
                textDecoration: 'none', color: '#f0efed', display: 'inline-block',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#3F63D9')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#f0efed')}
            >
              hello@vorma.studio
            </a>
          </div>

          {/* Social */}
          <div style={{ marginBottom: '56px' }}>
            <span style={{ ...labelStyle, marginBottom: '20px' }}>Follow</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    textDecoration: 'none',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(63,99,217,0.3)'
                    const label = e.currentTarget.querySelector('.social-label') as HTMLElement
                    if (label) label.style.color = '#f0efed'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    const label = e.currentTarget.querySelector('.social-label') as HTMLElement
                    if (label) label.style.color = '#555'
                  }}
                >
                  <span
                    className="social-label"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                      fontSize: '18px', letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: '#555', transition: 'color 0.3s ease',
                    }}
                  >{s.label}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '13px',
                    color: '#333',
                  }}>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <span style={labelStyle}>Location</span>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '15px',
              color: '#555', lineHeight: 1.7,
            }}>
              Remote-first.<br />
              Available worldwide.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div
          ref={formRef.ref}
          style={{
            opacity: formRef.visible ? 1 : 0,
            transform: formRef.visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {submitted ? (
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              justifyContent: 'center', height: '100%', gap: '24px',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                border: '2px solid #3F63D9', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', color: '#3F63D9',
              }}>✓</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: '36px', letterSpacing: '-0.01em', textTransform: 'uppercase', color: '#f0efed',
              }}>Message Sent</h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '15px',
                lineHeight: 1.75, color: '#666', maxWidth: '320px',
              }}>
                Thank you for reaching out. We'll review your brief and be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>

                <div style={{ marginBottom: '40px' }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{ ...inputStyle }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#3F63D9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{ ...inputStyle }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#3F63D9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <label style={labelStyle}>Company / Brand</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    style={{ ...inputStyle }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#3F63D9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <label style={labelStyle}>Project Type</label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      cursor: 'pointer',
                      color: form.project ? '#f0efed' : '#333',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#3F63D9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" disabled style={{ background: '#111' }}>Select a service</option>
                    <option value="logo" style={{ background: '#111' }}>Logo Design</option>
                    <option value="identity" style={{ background: '#111' }}>Visual Identity</option>
                    <option value="strategy" style={{ background: '#111' }}>Brand Strategy</option>
                    <option value="full" style={{ background: '#111' }}>Full Brand System</option>
                    <option value="guidelines" style={{ background: '#111' }}>Brand Guidelines</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <label style={labelStyle}>Budget Range</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                    color: form.budget ? '#f0efed' : '#333',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#3F63D9')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  <option value="" disabled style={{ background: '#111' }}>Select a range</option>
                  <option value="5-10k" style={{ background: '#111' }}>$5,000 – $10,000</option>
                  <option value="10-20k" style={{ background: '#111' }}>$10,000 – $20,000</option>
                  <option value="20-50k" style={{ background: '#111' }}>$20,000 – $50,000</option>
                  <option value="50k+" style={{ background: '#111' }}>$50,000+</option>
                </select>
              </div>

              <div style={{ marginBottom: '52px' }}>
                <label style={labelStyle}>Tell Us About Your Project *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your brand, what you're building, and what you need from this identity..."
                  style={{
                    ...inputStyle,
                    resize: 'none',
                    lineHeight: 1.75,
                    paddingTop: '16px',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#3F63D9')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                  fontSize: '14px', letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: '#111', background: '#3F63D9',
                  border: 'none', padding: '16px 48px', borderRadius: '2px',
                  cursor: 'pointer', transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#5578e8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3F63D9')}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
