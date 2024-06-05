import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {filterData, apiUrl} from "./data"

function App() {

  const[courses,setCourses] = useState([]);
  const[loading, setLoading] = useState(true); 
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {

    async function fetchData (){
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();

        setCourses(data.data);
        console.log(data);

      }
      catch(err){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
    
  },[]);


  return (
    <div className='min-h-screen flex flex-col bg-bgDark2'>
      <Navbar/>
      <Filter filterData = {filterData}
      category = {category}
      setCategory = {setCategory}
       />
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">

      {
        loading ? (
          <Spinner/>
        ) : (
          <Cards courses = {courses} category = {category} />
        )
      }

      </div>

    </div>
  )
}

export default App
