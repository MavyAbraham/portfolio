import React, { createContext, useState } from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import MainContact from '../components/MainContact'
import css from '../css/Theme.css'
export const ThemeContext = createContext(null);

const Contact = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))

  };

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='Home' id={theme}>
        <div className='contenedor1'>
        <div className='conteiner'>
      <Header/>
      <div >
        <button onClick={toggleTheme} className='boton-theme'>Dark/Light</button>
      </div>
      <MainContact/>
      <Footer/>
        </div>
        </div>
      </div>
    </ThemeContext.Provider>
    </>
  )
}

export default Contact