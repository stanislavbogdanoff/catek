import React, { useState } from 'react'

import './Anchor.css'

import anchor from '../../images/anchor.svg'

const Anchor = () => {
  const [isActive, setIsActive] = useState(false)

  window.addEventListener('scroll', () => {
    window.pageYOffset > window.innerHeight ? setIsActive(true) : setIsActive(false)
  })

  return (
    <a href='#' className={isActive ? "anchor-btn active" : "anchor-btn"}>
      <img src={anchor} alt="" />
    </a>
  )
}

export default Anchor