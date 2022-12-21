import React from 'react'
import { Link } from 'react-router-dom'
// import Details from './Details'


export default function Card(props) {
    return (
        <div className='card-wrap'>
            
            <div className='card' >
                
           
          <Link to='/details'> <img className='card-img'  src={props.image} alt="" /></Link>
                <div className='card-details'>
                <p className='card-add'>{props.address}</p>
                <p className='card-price'><b>{props.price}</b></p>
                <p>{props.about}</p>
               
                </div>


            </div>
        </div>
    )
}
