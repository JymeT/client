import React from 'react'

interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>
}

export default ButtonGroup