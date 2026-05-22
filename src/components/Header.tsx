import { Link } from '@tanstack/react-router'

const linkStyle = {
  color: '#2563eb',
  textDecoration: 'none',
} as const

export default function Header() {
  return (
    <header
      style={{
        background: '#fff',
        borderBottom: '1px solid #ddd',
        padding: '0.75rem 1rem',
      }}
    >
      <nav
        style={{
          maxWidth: '32rem',
          margin: '0 auto',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ ...linkStyle, fontWeight: 700, color: '#1a1a1a' }}>
          Counter App
        </Link>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </nav>
    </header>
  )
}
