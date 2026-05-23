import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

const baseStyle: CSSProperties = {
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  fontFamily: 'inherit',
  border: '1px solid transparent',
  borderRadius: '6px',
  cursor: 'pointer',
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    color: 'var(--color-btn-primary-text)',
    background: 'var(--color-btn-primary-bg)',
    borderColor: 'var(--color-btn-primary-border)',
  },
  secondary: {
    color: 'var(--color-btn-secondary-text)',
    background: 'var(--color-btn-secondary-bg)',
    borderColor: 'var(--color-btn-secondary-border)',
  },
}

export function Button({
  children,
  variant = 'primary',
  style,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      style={{ ...baseStyle, ...variantStyles[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  )
}
