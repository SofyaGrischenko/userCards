import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../../Cards/Card'
import css from 'styled-components'


const СardListCSS = css.div`
padding: 15px;
display: flex;
flex-wrap: wrap;
gap: 10px;
background-color: ${props => props.color};
min-height: 100vh;
`



const CardsList = () =>{
const [cards, setCards] = useState([])
const [bgColor, setBgColor] = useState('#7f90af')
  
useEffect(() =>{
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {setCards(response.data)})
    .catch((error) => console.error(error))   
  }, []);

 
  return (
    <СardListCSS color = {bgColor}>   
      {cards.map(user => 
            <Card 
              key={user.id} 
              user={user} 
              setBgColor={setBgColor}>
             </Card>
        )}
    </СardListCSS>
  )
}


export default CardsList;