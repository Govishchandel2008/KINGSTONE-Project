import React from 'react'
import Home from './componet/Home'
import About from './componet/About'
import Service from './componet/Service'
import Contact from './componet/Contact'
import Login from './componet/Login'
import './App.css'


import { Routes, Route } from 'react-router-dom'
import Signup from './componet/Signup'
const App = () => {


  // Simulate a loading process

  return (
    <div>
      <Routes>

        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </div>
  )
}

export default App

