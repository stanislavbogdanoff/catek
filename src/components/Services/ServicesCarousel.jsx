import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './Services.css'

import image from '../../images/services-carousel.png'
import arrow from '../../images/green_circle_arrow.svg'
import slider_arrow from '../../images/slider-arrow.svg'
import adv from '../../images/adv.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', transform: 'rotate(180deg)', marginLeft: '100px'}}
      onClick={onClick}
    >
      <img src={slider_arrow} alt="arrow_left"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
      <img src={slider_arrow} alt="arrow_left"/>
    </div>
  );
}

const ServicesCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
          }
        },
      ]
  }
  return (
    <Slider {...settings} className='services-carousel'>
      <div className="services-item">
        <img src={image} alt="" />
        <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
        <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
      </div>
      <div className="services-item">
        <img src={image} alt="" />
        <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
        <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
      </div>
      <div className="services-item">
        <img src={image} alt="" />
        <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
        <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
      </div>
      <div className="services-item">
        <img src={image} alt="" />
        <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
        <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
      </div>
      <div className="services-item">
        <img src={image} alt="" />
        <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
        <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
      </div>
      <div className="services-item">
        <img src={image} alt="" />
        <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
        <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
      </div>
    </Slider>

  )
}

export default ServicesCarousel