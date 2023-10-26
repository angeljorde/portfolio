import React from 'react'
import '../styles/content.css'
import {useTranslation} from 'react-i18next'

export default function AboutMe(){
    
    //TRADUCCIONES
    const [t] = useTranslation("global")

    return(
        <div className='aboutme-container'>
            <h2 className="aboutme-title">{t("aboutme.aboutme-title")}</h2>
            <p className="aboutme-text" dangerouslySetInnerHTML={{ __html: t("aboutme.aboutme-text")}}></p>
            <h2 className="ambitions-title">{t("aboutme.ambitions-title")}</h2>
            <p className="ambitions-text" dangerouslySetInnerHTML={{ __html: t("aboutme.ambitions-text")}}></p>
        </div>
    )
}