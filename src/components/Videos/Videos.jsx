import React from 'react'

import VideosCarousel from './VideosCarousel'

import './Videos.css'

const Videos = () => {
  return (
    <section className="videos-section section">
      <div className="section-heading">
        <div className="heading-label">
          ПОЧЕМУ МЫ?
          <hr className="grey-line" />
        </div>
        <h2>ваш блок <br /> с видео</h2>
        <p>Ваше Мини-описание. Это текст о вашей компании. Он необходим для  продвижения Вашего сайта</p>
      </div>
      <VideosCarousel />
    </section>
  )
}

export default Videos