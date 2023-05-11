import React from 'react'
import Perfil from '../../assets/multimedia/Perfil3.jpg'
import Css from '../../css/Header.css'
const Header = () => {
  return (
    <>
    <div>
        <div className='contenedor'>
            
            <h1  className='titulo'>Maria Victoria Abraham</h1>
            
            <img src={Perfil} alt="Perfil" className='perfil' /> 
            
        </div> 
    </div>
    </>
  )
}

export default Header