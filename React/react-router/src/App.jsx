import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import NotFound from './components/NotFound'

function App() {
  

  return (
    <>
    <nav>
      <ul> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
