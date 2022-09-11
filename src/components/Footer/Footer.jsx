import React from 'react'

import './Footer.css'

import white_arrow from '../../images/white-arrow.svg'

import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer>

      <div className="footer-heading">
        <img src={logo} alt="" className='logo'/>
        <button className="contact-btn grey-link">
          <img src={white_arrow} alt="" />
          Связаться с нами
        </button>
      </div>

      <div className="footer-content">

        <div className="footer-content-box">
          <h4><a href="#about">о компании</a></h4>
          <ul className='footer-ul'>
            <li><a href="#about">О нас</a></li>
            <li><a href="/">Наша история</a></li>
            <li><a href="/">Наша команда</a></li>
            <li><a href="/">Новости</a></li>
          </ul>
        </div>

        <div className="footer-content-box" id='large'>
          <h4><a href="#services">наши услуги</a></h4>
          <ul className='footer-ul'>
            <li><a href="/">Разработка программ проведения комплексных испытаний объектов ВИЭ</a></li>
            <li><a href="/">Мониторинг состояния воздушных линий электропередач (ЛЭП) и оборудования подстанций с помощью дрона</a></li>
            <li><a href="/">Инспекция ветровых турбин и солнечных панелей с помощью дрона</a></li>
            <li><a href="/">Комплексное сопровождение проектов по строительству объектов ВИЭ</a></li>
          </ul>
        </div>

        <div className="footer-content-box">
          <h4><a href="#projects">проекты</a></h4>
          <h4><a href="#contacts">контакты</a></h4>
        </div>

        <div className="footer-content-box" id='contacts'>
          <h4><a href="#contacts">для связи</a></h4>
          <span><p>Эл. почта:</p><a href = "mailto: info@cge.kz">info@cge.kz</a></span>
          <span><p>Адрес:</p><font>г.Нур-Султан ул.Достык 2, БЦ "SAAD", 8 этаж</font></span>
          <span><p>Телефон:</p><a href = "tel:+77172954494" id='phone'>+7 7172 95 44 94</a></span>
        </div>

      </div>

      <div className="footer-creds">
        <a href="https://abc-design.kz/">ABC DESIGN</a>
        <p>Публичная оферта</p>
      </div>

    </footer>
  )
}

export default Footer