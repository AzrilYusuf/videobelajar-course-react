import React from 'react'
import { ButtonProps } from '../../interfaces/component.interface';

const Button: React.FC<ButtonProps> = ({ type, className, handleClick, children }) => {
  return (
    <button type={type} className={className} onClick={handleClick}>{children}</button>
  )
}

export default Button;