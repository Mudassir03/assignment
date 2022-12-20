import React from 'react'
import Details from './Details'

export default function Card(props) {
    return (
        <div className='card-wrap'>
            
            <div className='card' >
           
           <a href="src\component\Details.jsx" to={<Details/>}> <img className='card-img' src={props.image} alt="" /></a>
                <div className='card-details'>
                <p className='card-add'>{props.address}</p>
                <p className='card-price'><b>{props.price}</b></p>
                <p>{props.about}</p>
               
                </div>


            </div>
        </div>
    )
}
