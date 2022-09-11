import React from 'react'
import InputMask from 'react-input-mask';

import './Contacts.css'

import white_arrow_btn from '../../images/white_arrow_btn.svg'

const Contacts = () => {
  return (
    <section className="contacts-section" id='contacts'>
      <div className="container">
      <div className="contacts-content">

        <div className="section-heading">
          <div className="label-box">
            <div className="heading-label">
              СВЯЗАТЬСЯ С НАМИ
            </div>
            <h2>ОБРАТНАЯ <br /> СВЯЗЬ</h2>
          </div>
        </div>

        <p>Заполните форму, чтобы договориться о встрече с ведущим специалистом компании ЦАТЭК</p>
        <form>
          <div className="form-line">
            <input type="text" placeholder='Ваше имя' id='name'/>
            <InputMask mask="+7\ (999) 999 99 99" placeholder='+7 (...)' maskChar="." />
          </div>
          <div className="form-line"><input type="text" placeholder='Компания'/></div>
        </form>
        <button type='submit' className='submit-btn grey-link large'>
          ОТПРАВИТЬ <img src={white_arrow_btn} alt="" />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Contacts