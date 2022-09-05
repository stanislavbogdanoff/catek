import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './Services.css'

import image from '../../images/services-carousel.png'
import arrow from '../../images/green_circle_arrow.svg'
import slider_arrow from '../../images/slider-arrow.svg'

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1704,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
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


  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // }

  // return (
    
  //   <Carousel 
  //     centerMode={true}
  //     responsive={responsive} 
  //     className='carousel'
  //   >
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //     <div className="services-item">
  //       <img src={image} alt="" />
  //       <h4 className='services-text'>Разработка программ проведения комплексных испытаний объектов ВИЭ</h4>
  //       <button className='services-btn'>ПОДРОБНЕЕ <img src={arrow} alt="" /></button>
  //     </div>
  //   </Carousel>
    
  )
}

export default ServicesCarousel