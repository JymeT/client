import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const ButtonNav: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none'

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
    tertiary: 'bg-transparent text-red-600 hover:bg-red-50 disabled:text-red-300',
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonNav