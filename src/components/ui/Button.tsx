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
    color: '#fff',
    background: '#2563eb',
    borderColor: '#1d4ed8',
  },
  secondary: {
    color: '#1a1a1a',
    background: '#e5e5e5',
    borderColor: '#ccc',
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
