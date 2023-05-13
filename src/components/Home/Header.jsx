import React from 'react'
import Perfil from '../../assets/multimedia/Perfil3.jpg'
import Css from '../../css/Header.css'


const Header = () => {
  return (
    <>

        <div className='contenedor'>
            <div className='contenedor2'>
            <h4 className='welcome'>Welcome to</h4>
            <h1  className='titulo'>Maria Victoria Abraham</h1> 
            <h4 className='s'>'s portfolio</h4>
            </div>
            
            <div className='box'>
              <div className='content'>
                <img src={Perfil} alt="" />
              </div>
            </div>
        </div> 


    </>
  )
}

export default Header