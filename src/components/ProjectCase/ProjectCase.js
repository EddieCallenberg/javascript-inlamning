import React from 'react'
import ManPaper from '../../assets/images/man-with-paper.png'
import TabletTable from '../../assets/images/tablet-smartwatch-glasses.png'
import NotebookCup from '../../assets/images/notebook-and-cup.png'
import LaptopGraph from '../../assets/images/laptop-showing-graphs.png'
import SectionTitle from '../generics/SectionTitle'
import ProjectCard from './ProjectCard'
import Button from '../generics/Button'

const ProjectCase = () => {

    const projects = [
        {imgSrc: ManPaper, title: "Grow your business", alt: "Man holding a paper"},
        {imgSrc: TabletTable, title: "Why your client needs a responsive website", alt: "Tablet on a table"},
        {imgSrc: NotebookCup, title: "Educate your employees to get better results", alt: "Notebook on table"},
        {imgSrc: LaptopGraph, title: "Business insights is a important piece of your business", alt: "Laptop with a graph on screen"}
    ]

  return (
    <section>
        <div className="container">
            <div className="project-case-wrapper">
            <div className="headings">
                <SectionTitle title="Project &amp; Case Studies" description="Let's Look at Our Global Projects" />
            </div>
            <div className="projects-cards-wrapper">
                {
                    projects.map((project, index) =>(
                        <ProjectCard key={index} imgSrc={project.imgSrc} title={project.title} />
                    ))
                }
            </div>
                <div className="btnwrapper">
                    <Button type="btn-black" title="All recent projects" url="/projects" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectCase