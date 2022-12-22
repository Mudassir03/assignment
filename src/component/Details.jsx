// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Crddata from '../data/Crddata';


function CardEntry(entry){
  
  return(
  <Card
  id={entry.id}
  key={entry.id}
  image={entry.image}
  price={entry.price}
  address={entry.address}
  about={entry.about}
  
  />
  
  );
 
}





export default function Details() {

  return (
    <>
    <Link className='back-link' to='/'><button className='back-btn'><h3>Back</h3></button></Link>
    
    <div className='details'>
     {Crddata.map(CardEntry)}
     

    </div>
    
    
    </>
  )
}
