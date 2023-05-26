import React from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import Main from '../components/Home/Main'
import Css from '../css/Home.css'
const Home = () => {
  const Presentacion = 
  {'Nombre': 'Maria Victoria Abraham',
    'Edad': 20,
    'Cumpleaños': '25 de Junio',
    'Celular': '+54 381 4161182',
    'Hobbies': 'Me gusta escuchar musica, salir a caminar y tambien la reposteria.',
    'DeporteFav': 'Practique muchos deportes, pero me encanta andar en rollers, sobretodo en los dias de frio' };
  return (
   <>
    <Header/>
    <Main presentacion={Presentacion}/>
    <Footer/>
   </>
  )
}

export default Home