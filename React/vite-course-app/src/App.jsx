import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import { apiUrl, filterData } from './Data';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Spinner from './components/Spinner';


function App() {

  const[courses,setCourses] = useState([]);
  const[loading,setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title)

  useEffect( () =>{
    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
        console.log(courses);
      }
      catch(e){
        toast.error("Somting went wrong");
      }
      setLoading(false);
    }

    fetchData();
  },[]);


  return(
    <div className='min-h-screen flex flex-col'>
    <div>
    <Navbar/>
    </div>

    <div className='bg-slate-500'>

    <div>
     <Filter filterData = {filterData}
      category = {category}
      setCategory = {setCategory}
     />
    </div>      
     <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
     {
        loading ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
     }
     </div>
    </div>

    </div>

  );
  
}

export default App
