import React from 'react'

interface NavigContainerProps {
  children?: React.ReactNode
  className?: string
}

const NavigContainer: React.FC<NavigContainerProps> = ({ children, className = '' }) => {
  return (
    <ul className={`w-full ${className}`}>
      <div className="w-full ">{children}</div>
    </ul>
  )
}

export default NavigContainer