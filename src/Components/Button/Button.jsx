import React, {useState} from "react";
import css from 'styled-components'


const CustomButton = css.button`
margin-top: 15px;
padding: 7px;
border-radius: 10px;
color: ;
transition: .2s linear;   
background: ;
cursor: pointer;
  &:hover{
    box-shadow: 0 0 0 2px  transparent, 0 0 0 4px #dce5f5;
    
  }
`

  const Button = ({address, setBgColor}) =>{

  const [isOpen, setIsOpen] = useState(false)
  const {city, street, suite} = address

  const toggle = () => {
      setIsOpen((isOpen) => !isOpen)
      isOpen ? setBgColor('purple') : setBgColor('white')
    }
  

  return (
    <>
    <CustomButton onClick={toggle}> address </CustomButton>
    {isOpen && <p>{city}, {street}, {suite}</p>}
    </>
  )
}

export default Button;