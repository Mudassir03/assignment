import React from 'react'
import Crddata from '../data/Crddata';
import Ip from './Ip';
import Card from './Card';





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
    


export default function Home() {
  return (
    <div>

        <Ip/>
      {Crddata.map(CardEntry)}
    </div>
  )
}
