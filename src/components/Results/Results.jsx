import React from 'react'

import './Results.css'

const Results = () => {
  return (
    <section className="results-section section">
      <div className="section-heading">
          <div className="heading-label">
            ЦАТЭК В ЦИФРАХ
            <hr className="grey-line" />
          </div>
          <h2>Наши <br /> ПОКАЗАТЕЛИ</h2>
        <p>Реализация инвестиционных проектов в сфере возобновляемых источников энергии (ВИЭ)</p>
      </div>
      <div className="results-details-box">
        <div className="results-details">
          <h3>300 +</h3>
          <p>РАБОЧИХ МЕСТ НА ЭТАПЕ СТРОИТЕЛЬСТВА</p>
        </div>
        <div className="results-details">
          <h3>79 000 <font>тонн</font></h3>
          <p>ЭКОНОМИЯ ТОПЛИВА В ГОД</p>
        </div>
        <div className="results-details">
        <h3>230 000 <font>тонн</font></h3>
          <p>СНИЖЕНИЕ ВЫБРОСОВ ПАРНИКОВЫХ ГАЗОВ</p>
        </div>
        <div className="results-details">
        <h3>300 000 <font>тонн</font></h3>
          <p>ВЫРАБОТКА ЭЛЕКТРО- ЭНЕРГИИ В ГОД</p>
        </div>
      </div>
    </section>
  )
}

export default Results