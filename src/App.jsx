import { useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Contact from './pages/Contact'
import About from './pages/About'

import './App.css'
import Home from './pages/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
