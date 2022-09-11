import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

import './Videos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FsLightbox from 'fslightbox-react';

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
    
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
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
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          videos_a,
          videos_b,
          videos_c,
          videos_d,
          videos_e,
          videos_f,
        ]}
        slide={lightboxController.slide}
      />
      {
        isMobile ? (
          <Slider {...settings} className='videos-carousel mobile'>
            
            <div className="videos-slide">
              <div className="videos-item" >
                <div className="videos-img" id='a'></div>
                <button onClick={() => openLightboxOnSlide(1)}><img src={play} alt="" className='play-btn'/></button>
              </div>
            </div>

            <div className="videos-slide">
              <div className="videos-item">
              <div className="videos-img" id='b'></div>
              <button onClick={() => openLightboxOnSlide(2)}><img src={play} alt="" className='play-btn'/></button>
              </div>
            </div>

            <div className="videos-slide">
              <div className="videos-item">
              <div className="videos-img" id='c'></div>
              <button onClick={() => openLightboxOnSlide(3)}><img src={play} alt="" className='play-btn'/></button>
              </div>
            </div>

            <div className="videos-slide">
              <div className="videos-item">
              <div className="videos-img" id='d'></div>
              <button onClick={() => openLightboxOnSlide(4)}><img src={play} alt="" className='play-btn'/></button>
              </div>
            </div>

            <div className="videos-slide">
              <div className="videos-item">
              <div className="videos-img" id='e'></div>
              <button onClick={() => openLightboxOnSlide(5)}><img src={play} alt="" className='play-btn'/></button>
              </div>
            </div>

            <div className="videos-slide">
              <div className="videos-item">
              <div className="videos-img" id='f'></div>
              <button onClick={() => openLightboxOnSlide(6)}><img src={play} alt="" className='play-btn'/></button>
              </div>
            </div>
            
          </Slider>
        ) : (

          <Slider {...settings} className='videos-carousel'>
            
            <div className="videos-slide" style={{ display: "flex" }}>
              
              <div className="slide-line">

                <div className="videos-item">
                  <div className="videos-img" id='a'></div>
                  <button onClick={() => openLightboxOnSlide(1)}><img src={play} alt="" className='play-btn'/></button>
                </div>

                <div className="videos-item">
                  <div className="videos-img" id='b'></div>
                  <button onClick={() => openLightboxOnSlide(2)}><img src={play} alt="" className='play-btn'/></button>
                </div>

                <div className="videos-item">
                  <div className="videos-img" id='c'></div>
                  <button onClick={() => openLightboxOnSlide(3)}><img src={play} alt="" className='play-btn'/></button>
                </div>

              </div>

              <div className="slide-line" id='second-line'>
                <div className="videos-item">
                  <div className="videos-img" id='d'></div>
                  <button onClick={() => openLightboxOnSlide(4)}><img src={play} alt="" className='play-btn'/></button>
                </div>
                <div className="videos-item">
                  <div className="videos-img" id='e'></div>
                  <button onClick={() => openLightboxOnSlide(5)}><img src={play} alt="" className='play-btn'/></button>
                </div>
                <div className="videos-item">
                  <div className="videos-img" id='f'></div>
                  <button onClick={() => openLightboxOnSlide(6)}><img src={play} alt="" className='play-btn'/></button>
                </div>
              </div>

            </div>

            <div className="videos-slide" style={{ display: "flex" }}>
              
              <div className="slide-line">

                <div className="videos-item">
                  <div className="videos-img" id='a'></div>
                  <button onClick={() => openLightboxOnSlide(1)}><img src={play} alt="" className='play-btn'/></button>
                </div>

                <div className="videos-item">
                  <div className="videos-img" id='b'></div>
                  <button onClick={() => openLightboxOnSlide(2)}><img src={play} alt="" className='play-btn'/></button>
                </div>

                <div className="videos-item">
                  <div className="videos-img" id='c'></div>
                  <button onClick={() => openLightboxOnSlide(3)}><img src={play} alt="" className='play-btn'/></button>
                </div>

              </div>

              <div className="slide-line" id='second-line'>
                <div className="videos-item">
                  <div className="videos-img" id='d'></div>
                  <button onClick={() => openLightboxOnSlide(4)}><img src={play} alt="" className='play-btn'/></button>
                </div>
                <div className="videos-item">
                  <div className="videos-img" id='e'></div>
                  <button onClick={() => openLightboxOnSlide(5)}><img src={play} alt="" className='play-btn'/></button>
                </div>
                <div className="videos-item">
                  <div className="videos-img" id='f'></div>
                  <button onClick={() => openLightboxOnSlide(6)}><img src={play} alt="" className='play-btn'/></button>
                </div>
              </div>

            </div>


            
            
          </Slider>

        )
      }
    </>
  )
}

export default VideosCarousel