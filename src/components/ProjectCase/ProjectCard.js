import React from 'react'

const ProjectCard = ({imgSrc, title, alt}) => {
  return (
    <div className="projects-card">
        <img src={imgSrc} alt={alt} />
        <h4>{title}</h4>
        <hr />
        <a href="services.html">Read More <i className="fa-regular fa-arrow-up-right" /></a>
    </div>
  )
}

export default ProjectCard