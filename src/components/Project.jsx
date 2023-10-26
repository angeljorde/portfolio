import React from  'react'
import '../styles/content.css'
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

const Project = (project) =>{
    return(
        <div className="project" key={project.index}>
            <img src={`../img/${project.img}`} alt={project.title} className='imgProject'/>
            <div className="content-project">
                <div className="title-description-container">
                    <p className="titulo-project">{project.title}</p>
                    <p className="description-project">{project.description}</p>
                </div>
                <div className='tecnologias-enlaces-container'>
                    <div className="tecnologias-project">
                        {project.technologies.map((prop) =>{
                            return <p className='tecnologia'>{prop}</p>

                        })}
                    </div>
                    <div className="enlaces-project">
                        {project.link.map((prop, index) =>{
                            return (
                                <div>
                                    {prop === "Github" && <a className="url-link" href={project.url[index]} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                                    {prop === "link" && <a  className="url-link" href={project.url[index]} target="_blank" rel="noopener noreferrer"><BiLinkExternal/></a>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;