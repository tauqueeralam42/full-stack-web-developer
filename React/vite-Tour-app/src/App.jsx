import { useState } from 'react';
import './App.css';

import data from './components/Tourism/data';
import Tours from './components/Tourism/Tours';

function App(){
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
}

if(tours.length === 0){
  return (
    <div className='refresh'>
      <h2>No Tours Left</h2>
      <button className='btn-white' onClick={ () => setTours(data)}>Refresh</button>
    </div>
  );
}

  return (
      
      <Tours className='App' tours={tours} removeTour = {removeTour}></Tours>

  );

}

export default App;