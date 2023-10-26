import React, {useRef} from 'react'
import '../styles/content.css'
import AboutMe from './AboutMe.jsx'
import Angel from './Angel'
import Projects from './Projects'
import Skills from './Skills'
import '../styles/aside.css'
import imgPresentation from '../imgs/Photo.jpg'

import {useTranslation} from 'react-i18next'

const Content = () => {
    //Scrolling
    const angelRef = useRef();
    const aboutmeRef = useRef();
    const projectsRef = useRef();
    const skillsRef = useRef();

    const handleScrollToAngel = () => {
        if(angelRef.current) angelRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const handleScrollToAboutme = () => {
        if(aboutmeRef.current) aboutmeRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const handleScrollToProjects = () => {
        if(projectsRef.current) projectsRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const handleScrollToSkills = () => {
        if(skillsRef.current) skillsRef.current.scrollIntoView({behavior: 'smooth'});
    }

    //TRADUCCIONES
    const [t, i18n] = useTranslation("global")

    const handleChangeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    }


    return(
        <div>
            <div className='aside'>
                <img src={imgPresentation} className="imgPresentation" alt="react logo" />
                <div className='links'>
                    <p onClick={handleScrollToAngel} className='link-aside'>Angel Jorde</p>
                    <p onClick={handleScrollToAboutme} className='link-aside'>{t("aside.Aboutme")}</p>
                    <p onClick={handleScrollToProjects} className='link-aside'>{t("aside.Projects")}</p>
                    <p onClick={handleScrollToSkills} className='link-aside'>{t("aside.Education")}</p>
                    
                </div>
                <select class="select-language" name="Idioma" id="" className="select-language" onChange={(e)=>handleChangeLanguage(e.target.value)}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                </select>
            </div>
            <div className='content-container'>
                <div ref={angelRef}>
                    <Angel lang={i18n.language}/>
                </div>
                <div ref={aboutmeRef}>
                    <AboutMe/>
                </div>
                <div ref={projectsRef}>
                    <Projects lang={i18n.language}/>
                </div>
                <div ref={skillsRef}>
                    <Skills lang={i18n.language}/>
                </div>
            </div>
        </div>
        
    )
}

export default Content