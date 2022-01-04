import './App.css';
import CardsList from './Components/CardsList';
import Inputs from './Components/Inputs';

function App() {
  return (
    <div className="main">
      <div className="block">
        <h2 style={{ marginLeft: "20px", marginTop: "10px", }}>Midas</h2>
        <Inputs/>
      </div>
      <div className="cards-div">
        <CardsList/>
      </div>
    </div>
  );
}

export default App;
