import React from 'react'

import './Advantages.css'

import mill from '../../images/mill.svg'

const Advantages = () => {
  return (
    <section className="advant-section section">
      <div className="section-heading">
      <div className="heading-label">
            ПОЧЕМУ МЫ?
            <hr className="grey-line" />
          </div>
        <h2>Наши <br /> перимущества</h2>
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