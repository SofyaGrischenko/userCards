import React from "react";
import { useState } from "react";



const Card = function({props}){


    const [isOpen, setIsOpen] = useState(false)
    const address = props.address


    function toggle(){
        setIsOpen((isOpen) => !isOpen)
    }


    return (
        <div className="Card">
            
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <button onClick={toggle}> more info </button>
            {isOpen && <p id = "dopInfo">{address.city}, {address.street}, {address.suite}</p>}
            
        </div>
    )
}

export default Card;