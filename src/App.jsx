import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './assets/components/Api'
import Movies from './assets/components/Movies'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Services from './assets/components/Services'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Api/> */}
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/api' element={<Api/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
