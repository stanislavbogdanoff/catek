import React from 'react'
import Slider from "react-slick";

import './Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projects_a from '../../images/projects_a.png'
import projects_b from '../../images/projects_b.png'
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

const ProjectsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1704,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Slider {...settings} className='projects-carousel'>
      <div className="projects-item">
        <img src={projects_b} alt="" />
        <hr className="green-line" />
        <h4>Ветровая электростанция "Астана EXPO-2017"</h4>
        <p>год реализации: 2020</p>
      </div>
      <div className="projects-item">
        <img src={projects_a} alt="" />
        <hr className="green-line" />
        <h4>Ветровая электростанция "Астана EXPO-2017"</h4>
        <p>год реализации: 2020</p>
      </div>
      <div className="projects-item">
        <img src={projects_b} alt="" />
        <hr className="green-line" />
        <h4>Ветровая электростанция "Астана EXPO-2017"</h4>
        <p>год реализации: 2020</p>
      </div>
      <div className="projects-item">
        <img src={projects_a} alt="" />
        <hr className="green-line" />
        <h4>Ветровая электростанция "Астана EXPO-2017"</h4>
        <p>год реализации: 2020</p>
      </div>
    </Slider>

  )
}

export default ProjectsCarousel