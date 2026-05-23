import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const codeStyle = {
  background: 'var(--color-code-bg)',
  padding: '0.1rem 0.35rem',
  borderRadius: '4px',
  fontSize: '0.9em',
} as const

function About() {
  return (
    <main
      style={{
        maxWidth: '32rem',
        margin: '0 auto',
        padding: '2rem 1rem 3rem',
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
        color: 'var(--color-text)',
      }}
    >
      <h1 style={{ marginTop: 0 }}>About this exercise</h1>
      <p>
        This is a small starter project for learning the basics of a web app: HTML structure,
        inline CSS, and React state.
      </p>
      <h2>What to try</h2>
      <ul style={{ paddingLeft: '1.25rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          Change the button labels in <code style={codeStyle}>src/routes/index.tsx</code>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Change colors and sizes using the <code style={codeStyle}>style</code> prop on each
          element.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Add a new button variant in <code style={codeStyle}>src/components/ui/Button.tsx</code>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Subtract 1 from the count, or set a maximum value.</li>
      </ul>
      <p>
        Run <code style={codeStyle}>npm run dev</code> and open the app in your browser to see
        changes live.
      </p>
    </main>
  )
}
