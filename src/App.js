import { useEffect, useState} from 'react';
import './Styles/app.css';
import axios from 'axios';
import Card from './components/Card';



function App() {
const [cards, setCards] = useState([])


useEffect(() =>{
//const response = 
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {setCards(response.data)})
    .catch((error) => console.error(error))   
  }, []);


    return (
      <>   
      <div className="App"> 
        {cards.map(user => 
              <Card key = {user.id} props = {user}></Card>

          )}
        </div>
      </>
      
      
    );
  }

export default App;