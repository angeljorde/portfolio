import React from 'react'
import '../styles/content.css'

const Title = (titleItem) => {
    return(
        <div className="title">
            <section className="cabecera">
                <img src={`../img/${titleItem.img}`} className="img-title" alt="" />
                <div className="text-cabecera">
                    <h2 className="title-title">{titleItem.title}</h2>
                    <p className="institution-title">{titleItem.institution}</p>
                </div>
            </section>
            <section className="footer">
                <p className="date red">{titleItem.date}</p>
                <p className="description-title">{titleItem.description}</p>
            </section>
        </div>
    )
}

export default Title