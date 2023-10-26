import React from 'react'
import '../styles/content.css'

const Ability = (props) =>{
    return(
        <div className="ability">
            <div className="img-container">
                <img src={`../img/${props.img}`} className="img-ability" alt={props.name} />
            </div>
            <p className="name-ability">{props.name}</p>
        </div>
    )
}

export default Ability