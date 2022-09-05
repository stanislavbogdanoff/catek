import React from 'react'

import './Contacts.css'

import white_arrow_btn from '../../images/white_arrow_btn.svg'

const Contacts = () => {
  return (
    <section className="contacts-section" id='contacts'>
      <div className="contacts-content">
        <div className="heading-label">
          СВЯЗАТЬСЯ С НАМИ
          <hr className="grey-line" />
        </div>
        <h2>ОБРАТНАЯ <br /> СВЯЗЬ</h2>
        <p>Заполните форму, чтобы договориться о встрече с ведущим специалистом компании ЦАТЭК</p>
        <form action="">
          <div className="form-line">
            <input type="name" placeholder='Ваше имя' id='name'/>
            <input type="phone" placeholder='+7 (...)' id='phone-num'/>
          </div>
          <div className="form-line"><input type="text" placeholder='Компания'/></div>
        </form>
        <button type='submit' className='submit-btn'>
          ОТПРАВИТЬ <img src={white_arrow_btn} alt="" />
        </button>
      </div>
    </section>
  )
}

export default Contacts