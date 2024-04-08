import React from 'react'
import './Style/App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/services' element = {<Services/>} />
         </Routes>
      </BrowserRouter>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
