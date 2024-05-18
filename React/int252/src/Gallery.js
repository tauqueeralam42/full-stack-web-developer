import React from 'react';
import './Gallery.css';


function Gallery  ({ imgs }) {

  return (

    <div style={{ textAlign : 'center'  , marginTop: '10px' }} >
    <h1 > Photo Gallery </h1>

     <div className='container'>
     { 
      imgs.map( img => (
      <div className="image-card">
      <img src={img} alt='img' className="image" />
      </div>
        ))
     }
     </div>

     <div className='container'>
     { 
      imgs.map( img => (
      <div className="image-card">
      <img src={img} alt='img' className="image" />
      </div>
        ))
     }
     </div>


    </div>

  );
}

export default Gallery ;
