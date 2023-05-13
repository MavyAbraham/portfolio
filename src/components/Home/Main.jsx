import React from 'react'
import  '../../css/Main.css'
import photo from '../../assets/multimedia/photo.webp'




const Main = () => {
  return (
    <>
    <hr />
    <div className='contenedor'>
    <div className='contenedor-descripcion'>
    <div className='descripcion'> 
    
    <p>¡Hola! Soy Maria Victoria (Mavy) Abraham y soy estudiante de programación en la Universidad Tecnológica Nacional FRT. Actualmente tengo 20 años y mi objetivo es convertirme en una desarrolladora web exitosa.</p>

    <p>Si bien mis conocimientos en bases de datos como SQL son básicos, me he enfocado en aprender y mejorar en áreas como C#, HTML, CSS, JavaScript y ReactJS. Me apasiona el aspecto visual del desarrollo web, especialmente cómo los usuarios interactúan con los sitios y las aplicaciones. Mi objetivo es crear experiencias en línea atractivas e intuitivas que los usuarios adoren.</p>

    <p>Estoy comprometida a aprender y mejorar constantemente mis habilidades de programación para poder ofrecer soluciones innovadoras y efectivas. Me encanta trabajar en equipo y estoy emocionado por la posibilidad de colaborar en futuros proyectos.</p>

    <p>¡Gracias por visitar mi portfolio y espero tener la oportunidad de trabajar contigo!</p>

    </div>
    </div>

    <div className='cont-img'> <img src={photo} alt="photo" /></div>
    </div>
    </>
  )
}

export default Main