import { useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../../Cards/Card';
import css from './CardsList.module.scss'


const CardsList = () =>{
const [cards, setCards] = useState([])


useEffect(() =>{
//const response = 
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {setCards(response.data)})
    .catch((error) => console.error(error))   
  }, []);

  return (
    <div className = {css.CardsList}> 
      {cards.map(user => 
            <Card key = {user.id} props = {user}></Card>
        )}
    </div>
  )
}

export default CardsList;