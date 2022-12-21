import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Crddata from './data/Crddata';

function CardEntry(entry){
  return(
  <Card
  key={entry.id}
  image={entry.image}
  price={entry.price}
  address={entry.address}
  about={entry.about}
  
  />
  );
}


function App() {
  return (
    <div className="App">
      <Navbar/>
      {Crddata.map(CardEntry)}
      
      
    </div>
  );
}

export default App;
