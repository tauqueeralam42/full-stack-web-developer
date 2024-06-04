import React from 'react'
import { useState } from 'react';

export default function Card({id, name, info, image, price, removeTour}) {

    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

  
    return (
    <div className='card'>

    <img src={image} className='image'/>

    <div className='tour-info'>

    <div className='tour-details'>
        <h4 className='tour-price'>₹{price}</h4>
        <h4 className='toure-name'>{name}</h4>
    </div>
    <div className='description'>
        {description}
        <span className='read-more' onClick={readmoreHandler}>
            {readmore ? ` Show Less` : ` Read More`}
        </span>
    </div>

    </div>

    <button className='btn-red' onClick={() => removeTour(id)}>
        Not Interested
    </button>

    </div>
  )
}
