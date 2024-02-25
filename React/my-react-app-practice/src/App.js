
import { useState } from 'react';
import './App.css';
import NewProduct from './components/Product/NewProduct';
import Products from './components/Product/Products';
import Counter from './components/Counter/Counter'

import data from './components/Tourism/data';
import Tours from './components/Tourism/Tours';

 
// function App() {

//   const products = [
//     {
//       id: 'p1',
//       title: 'Nirma',
//       amount: 100,
//       date: new Date(2021,8,10)
//   },
//   {
//     id: 'p2',
//       title: 'SurufExcel',
//       amount: 300,
//       date: new Date(2021,2,1)
//   },
//   {
//     id: 'p3',
//       title: 'Chocolate',
//       amount: 10,
//       date: new Date(2022,3,4)
//   },
//   {
//     id: 'p4',
//       title: 'Oil',
//       amount: 540,
//       date: new Date(2024,2,11)
//   }
// ];



// function pData(data){
//  console.log("inside pData");
//  console.log(data);
// }
//   return (
//     <div>
//     <NewProduct fun = {pData}></NewProduct>
//       <Products items = {products} />
//     </div>
    
//   );
// }






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
    // <Counter/>
      
      <Tours className='App' tours={tours} removeTour = {removeTour}></Tours>

  );

}

export default App;
