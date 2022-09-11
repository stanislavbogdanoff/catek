import React, { useState } from 'react';

import logo from '../../images/logo.svg'
import globe from '../../images/globe-sm.png'

import './Navbar.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
    console.log('clicked')
  }
  const [isTop, setIsTop] = useState(true)
  let height = window.innerHeight - 200
  let distanceToTop = window.pageYOffset
  window.addEventListener('scroll', () => {
    distanceToTop = window.pageYOffset
    if (distanceToTop > height) setIsTop(false)
    else setIsTop(true)
  })
  return (
    <nav className={isTop ? "navbar" : "navbar dark"}>
      <a href="#"><img src={logo} alt="logo" className='logo'/></a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={ clicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"} ></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        <li onClick={handleClick}><a href="#about"  className='nav-link green-link'>О КОМПАНИИ</a></li>
        <li onClick={handleClick}><a href="#services" className='nav-link green-link'>НАШИ УСЛУГИ</a></li>
        <li onClick={handleClick}><a href="#projects" className='nav-link green-link'>НАШИ проекты</a></li>
        <li onClick={handleClick}><a href="#clients" className='nav-link green-link'>ПАРТНЕРЫ</a></li>
        <li onClick={handleClick}><a href="/" className='nav-link green-link'>НПА В СФЕРЕ ВИЭ</a></li>
        <li onClick={handleClick}><a href="#contacts" className='nav-link green-link'>КОНТАКТЫ</a></li>
        <div className="lang-select-box">
        <img src={globe} alt="" />
        <select defaultValue='RUS' className='lang-select'>
          <option value="RUS">RUS</option>
          <option value="ENG">ENG</option>
        </select>
      </div>
      </ul>
    </nav>
  )
}

export default Navbar