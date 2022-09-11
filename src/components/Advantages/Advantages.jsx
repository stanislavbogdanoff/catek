import React from 'react'

import './Advantages.css'

import mill from '../../images/mill.svg'
import adv from '../../images/adv.png'

const Advantages = () => {
  return (
    <section className="advant-section section">
      <div className="section-heading">
        <div className="label-box">
          <div className="heading-label">
            ПОЧЕМУ МЫ?
          </div>
          <h2>Наши <br /> перимущества</h2>
        </div>
        <p>Почему нужно работать с нами? Мы первпопроходцы в сфере ВИЭ в Казахстане</p>
      </div>
      <div className="advant-details-box">
        <div className="advant-details">
          <div className="advant-circle">
            <img src={mill} alt="" />
          </div>
          <h4>Ваше преимущество</h4>
          <hr className="green-line" />
          <p>Мини-описание. Это текст о компании. Он необходим для  продвижения Вашего сайта</p>
        </div>
        <div className="advant-details">
          <div className="advant-circle"><img src={mill} alt="" /></div>
          <h4>Ваше преимущество</h4>
          <hr className="green-line" />
          <p>Мини-описание. Это текст о компании. Он необходим для  продвижения Вашего сайта</p>
        </div>
        <div className="advant-details">
          <div className="advant-circle"><img src={mill} alt="" /></div>
          <h4>Ваше преимущество</h4>
          <hr className="green-line" />
          <p>Мини-описание. Это текст о компании. Он необходим для  продвижения Вашего сайта</p>
        </div>
        <div className="advant-details">
          <div className="advant-circle"><img src={mill} alt="" /></div>
          <h4>Ваше преимущество</h4>
          <hr className="green-line" />
          <p>Мини-описание. Это текст о компании. Он необходим для  продвижения Вашего сайта</p>
        </div>
      </div>
    </section>
  )
}

export default Advantages