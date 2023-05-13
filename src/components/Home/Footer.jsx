import React from 'react'
import '../../css/Footer.css'
import { FaInstagram } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'


const Footer = () => {
  return (
    <>
    <hr />
    <div>
      <div className='contenedor-iconos'>

      <div className='box1'>
        <div className='content1'>
          <a href="https://www.instagram.com/" target='_blank'> <FaInstagram className='icono-ig'/> </a>
        </div> 
      </div>  
      
      <div className='box2'>

       <div className='content2'>
          <a href="https://github.com/MavyAbraham/portfolio" target='_blank'> <FaGithub className='icono-git'/> </a>
       </div>

      </div>
     
      <div className='box3'>
        <div className='content3'>
          <a href="mailto:abrahammavy6@gmail.com" target='_blank'> <SiGmail className='icono-gmail'/> </a>
        </div>
      </div>
     
      
      </div>
    </div>
    </>
  )
}

export default Footer