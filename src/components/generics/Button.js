import React from 'react'

const Button = ({type, url, title}) => {
  return (
    <a href={url} className={type}>{title} <i className="fa-solid fa-arrow-up-right" /></a>
  )
}

export default Button