import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'

import logo from '../../images/logo.svg'
import globe from '../../images/globe-sm.png'

import './Navbar.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const [isTop, setIsTop] = useState(true)
  let height = window.innerHeight
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
        <li><a href="#about" className='nav-link'>О КОМПАНИИ</a></li>
        <li><a href="#services" className='nav-link'>НАШИ УСЛУГИ</a></li>
        <li><a href="#projects" className='nav-link'>НАШИ проекты</a></li>
        <li><a href="/" className='nav-link'>ПАРТНЕРЫ</a></li>
        <li><a href="/" className='nav-link'>НПА В СФЕРЕ ВИЭ</a></li>
        <li><a href="#contatcs" className='nav-link'>КОНТАКТЫ</a></li>
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