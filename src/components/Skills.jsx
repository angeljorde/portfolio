import  React from 'react'
import '../styles/content.css'

import Ability from './Ability'
import Title from './Title'

import { abilities} from '../data/data'

import global_es from '../translations/es/global.json'
import global_en from '../translations/en/global.json'
import global_de from '../translations/de/global.json'

export default function Skills (prop){
    return(
        <section className="skills-container">
            <section className="education-container">
                <h1 className="education-title">Educación</h1>
                <div className="titles">
                    {prop.lang === "es" ? (
                        global_es.titles.map((item, index) =>{
                            return <Title key={index} {...item} />
                        })
                    ):(
                        prop.lang === "de" ? (
                            global_de.titles.map((item, index) =>{
                                return <Title key={index} {...item} />
                            })
                        ):(
                            global_en.titles.map((itemes, index) =>{
                                return <Title key={index} {...itemes} />
                            })
                        )
                    )}
                    
                </div>
            </section>
            <section className="abilities-container">
                <h1 className="abilities-title">Habilidades</h1>
                <div className="abilities">
                    {abilities.map((item)=>{
                        return <Ability {...item} />
                    })}
                </div>
            </section>
        </section>
    )
}