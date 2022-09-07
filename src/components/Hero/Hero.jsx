import React from 'react'

import white_arrow from '../../images/white-arrow.svg'
import phone from '../../images/phone.svg'

import './Hero.css'

const Hero = () => {
  
  const scrollToContent = () => {
    let height = window.innerHeight
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section className='hero-section'>
      <div className="hero-content">
        <div className="hero-heading">
          <h1>ЦАТЭК</h1>
          <h2>Green Energy</h2>
        </div>
        <h3>
          Реализация инвестиционных проектов в сфере ВИЭ
        </h3>
      </div>
      <button className='scroll-btn' onClick={scrollToContent}>
        <img src={white_arrow} alt="" className='bounce'/>
        УЗНАТЬ БОЛЬШЕ
      </button>
      <a href="tel:+77172954494" className='phone-btn'>
        <img src={phone} alt="" />
      </a>
    </section>
  )
}

export default Hero