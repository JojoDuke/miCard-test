import './App.css';
import CardItem from './Components/CardItem';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [newCard, setNewCard] = useState([]);

  const createCard = (e) => {
    setNewCard(newCard.concat(<CardItem key={newCard.length}/>));
  }

  return (
    <div className="main">
      <div className="block">
        <h2 style={{ marginLeft: "20px", marginTop: "10px", }}>Midas</h2>
        
        <div>
            <form className="inputForm">
                <input type="text" placeholder="Name of Card"/>
                <input type="text" placeholder="Mobile Money Number"/>
                <input type="text" placeholder="Amount"/>
                <input type="button" className="card-btn" onClick={createCard} value="Create Card"/>
            </form>
        </div>
      </div>
      <div className="cards-div">
        {newCard}
      </div>
    </div>
  );
}

export default App;
