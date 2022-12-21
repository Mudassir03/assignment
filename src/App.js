import './App.css';
import Card from './component/Card';
import Details from './component/Details';
import Navbar from './component/Navbar';
import Crddata from './data/Crddata';
import Ip from './component/Ip';

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
      <Ip/>
      {Crddata.map(CardEntry)}
      {/* <Details/> */}
      
      
    </div>
  );
}

export default App;
