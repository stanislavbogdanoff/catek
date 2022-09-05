import React from 'react'
import Slider from "react-slick";

import './Videos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videos_a from '../../images/videos_a.png'
import videos_b from '../../images/videos_b.png'
import videos_c from '../../images/videos_c.png'
import videos_d from '../../images/videos_d.png'
import videos_e from '../../images/videos_e.png'
import videos_f from '../../images/videos_f.png'
import play from '../../images/play.svg'
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

const VideosCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
    <Slider {...settings} className={Window.innerWidth > 1520 ? 'videos-carousel' : 'videos-carousel mobile'} style={{ display: "flex" }}>
      <div className="videos-slide" style={{ display: "flex" }}>
        <div className="videos-item">
          <img src={videos_a} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_b} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_c} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_d} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_e} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_f} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
      </div>
      <div className="videos-slide" style={{ display: "flex" }}>
        <div className="videos-item">
          <img src={videos_a} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_b} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_c} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_d} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_e} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
        <div className="videos-item">
          <img src={videos_f} alt="" />
          <img src={play} alt="" className='play-btn'/>
        </div>
      </div>
    </Slider>

  )
}

export default VideosCarousel