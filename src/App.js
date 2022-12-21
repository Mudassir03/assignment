import './App.css';

import Details from './component/Details';
import Home from './component/Home';
import Navbar from './component/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/details' element={<Details/>}></Route>
      </Routes>
      </BrowserRouter>
     
      
      {/* <Details/> */}
      
      
    </div>
  );
}

export default App;
