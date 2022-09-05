import React from 'react'

import about from '../../images/about.png'
import about_two from '../../images/about-2.png'
import green_arrow from '../../images/green-arrow.svg'

import './About.css'

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className="about-img">
        <img src={about_two} alt="" id='first-img'/>
        <img src={about} alt="" />
      </div>
      <div className="about-content">
        <hr className="green-line" />
        <h2>о компании</h2>
        <p>
          Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст. 
          <br />
          Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные
        </p>
        <button className="more-btn">
          ПОДРОБНЕЕ <img src={green_arrow} alt="" />
        </button>
      </div>
    </section>
  )
}

export default About