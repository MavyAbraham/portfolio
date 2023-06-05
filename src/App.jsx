import { useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Contact from './pages/Contact'
import About from './pages/About'
import Error404 from './pages/Error404'

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
          <Route path="*" element={<Error404/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
