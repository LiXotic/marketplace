import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '../components/ui/Button'

export const Route = createFileRoute('/')({ component: CounterPage })

function CounterPage() {
  const [count, setCount] = useState(0)

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
      <h1 style={{ marginTop: 0 }}>Counter Exercise</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
        Click <strong>Add 1</strong> to increase the count, or <strong>Reset to 0</strong> to
        start over.
      </p>

      <section
        aria-labelledby="counter-heading"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          padding: '1.5rem',
        }}
      >
        <h2
          id="counter-heading"
          style={{
            margin: '0 0 0.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
          }}
        >
          Current count
        </h2>
        <p
          aria-live="polite"
          style={{ margin: '0 0 1.25rem', fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}
        >
          {count}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Button onClick={() => setCount(count + 1)}>Add 1</Button>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset to 0
          </Button>
        </div>
      </section>
    </main>
  )
}
