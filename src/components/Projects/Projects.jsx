import React from 'react'

import ProjectsCarousel from './ProjectsCarousel'

import './Projects.css'

const Projects = () => {
  return (
    <section className="projects-section section" id='projects'>
      <div className="section-heading">
          <div className="label-box">
            <div className="heading-label">
              ПОЧЕМУ МЫ?
              <hr className="grey-line" />
            </div>
            <h2>Наши <br /> проекты</h2>
          </div>
        <p>Специалисты нашей компании имеют огросный опыт и компетенции в сфере ВИЭ</p>
      </div>
      <ProjectsCarousel />
    </section>
  )
}

export default Projects