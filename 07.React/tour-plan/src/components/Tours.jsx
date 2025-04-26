import React from 'react'
import Card from './Card';

export default function Tours({tours,removeTour}) {
  return (
    <div className='container'>
        <div>
            <h1 className='title'>Plan Tour With Us</h1>
        </div>
        <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key = {tour.id}  {...tour} removeTour = {removeTour} />
                    })
                }
        </div>
    </div>
  );
}