import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    function clickHandle(){
        navigate("/about");
    }

  return (
    <div>
      Home Page
      <button onClick={() => navigate("/about")}> About us</button>
      <button onClick={() => navigate(-1)}> Go Back</button>

    </div>
  )
}

export default Home
