import React from  'react'
import '../styles/content.css'
import Project from './Project'

import global_es from '../translations/es/global.json'
import global_en from '../translations/en/global.json'
import global_de from '../translations/de/global.json'


export default function Projects (prop){
    return(
        <section className='projects-container'>
                <h1 className="project-title">Proyectos</h1>
                <div className="projects-grid">
                    {prop.lang === "es" ? (
                        global_es.dataProjects.map((item, index) =>{
                            return <Project key={index} {...item} />
                        })
                    ):(
                        prop.lang === "de" ? (
                            global_de.dataProjects.map((item, index) =>{
                                return <Project key={index} {...item} />
                            })
                        ):(
                            global_en.dataProjects.map((itemes, index) =>{
                            return <Project key={index} {...itemes} />
                            })
                        )
                        
                    )}
                </div>
        </section>
    )
}