import React from 'react'

const Button = ({onClick, className, label}) => {
  return (
    <button className={className} onClick={onClick}>{label}</button>
  )
}

export default Button