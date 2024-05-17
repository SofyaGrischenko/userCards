import React, { useState } from "react";
import css from './Cards.module.scss'


const Card = ({props}) => {

    const [isOpen, setIsOpen] = useState(false)
    const {name, email, address} = props
    const {city, street, suite} = address


    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }


    return (
        <div className = {css.card}> 
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button className = {css.card__button} onClick={toggle}> address </button>
            {isOpen && <p>{city}, {street}, {suite}</p>}   
         
        </div> 
    )
}

export default Card;