import React from 'react'
import Slider from "react-slick";

import './Clients.css'
import slider_arrow from '../../images/slider-arrow.svg'
import clients_a from '../../images/clients_a.png'
import clients_b from '../../images/clients_b.png'
import clients_c from '../../images/clients_c.png'

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

const ClientsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1020,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }
  return (
    <Slider {...settings} className='projects-carousel'>
      <div className="clients-item">
        <img src={clients_b} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_a} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_c} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_a} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_b} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_c} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_a} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_b} alt="" />
      </div>
      <div className="clients-item">
        <img src={clients_c} alt="" />
      </div>
    </Slider>

  )
}

export default ClientsCarousel