import React from 'react';
import Button from "../Button/Button";
import css from 'styled-components'


const СardStyle = css.div`
border: 2px outset rgb(0, 0, 0) ;
  border-radius: 5%;
  height: 200px;
  width: 350px;
  padding: 15px;
  color: #ffffff;
  background-color:  #909bbd;
  margin-top: 15px;
`


const Card = ({user, setBgColor}) => {

    const {name, email, address} = user

    return (
        <СardStyle> 
            <p>Name: {name}</p>
            <p>Email: {email}</p> 
            <Button 
                address={address}
                setBgColor={setBgColor}>
            </Button>
        </СardStyle> 
    )
}

export default Card;