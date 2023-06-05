import React, { createContext, useState } from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import Main from '../components/Home/Main'
import Css from '../css/Theme.css'
export const ThemeContext = createContext(null);

const Home = () => {
  const Presentacion = 
  {'Nombre': 'Maria Victoria Abraham',
    'Edad': '20 años',
    'Cumpleaños': 'Cumpleaños: 25 de Junio',
    'Celular': '+54 381 4161182',
    'Hobbies': 'Me gusta escuchar musica, salir a caminar y tambien la reposteria.',
    'DeporteFav': 'Practique muchos deportes, pero me encanta andar en rollers, sobretodo en los dias de frio' };

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
      <Main presentacion={Presentacion}/>
      <Footer/>
        </div>
        </div>
      </div>
    </ThemeContext.Provider>
   </>
  )
}

export default Home