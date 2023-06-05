import React from 'react'
import "../css/MainAbout.css"
import { useState } from 'react'


const MainAbout = () => {

  const [num, setnum] = useState(1);
  const sumNum = () => {
    if (num>=3){
      setnum(1)
    } else{
      setnum(num + 1);
    }
  }




  return (
    <>
    <div className='contenedor-MainAbout'>
      <div className='contenedorFotos'>

        <div className='contenedor-img'>
          <img src={`${num}.jpg`} className='img'/>
        </div>

      <br />

        <div className='contenedor-boton'>
         <button onClick={sumNum} className='boton'>{num}</button>
        </div>

      </div>
     

      <div className='contenedorDatos'>
        <h3>Estudios realizados</h3>
        <ul>
          <li> Colegio Secundario Gral. Don Jose de San Martin (Promocion 2019)</li>
          <li> Tecnico Universitario en Programacion. Universidad Tecnologica Nacional FRT (2022-cursando ultimo año) </li>
        </ul>

        <h3>Idiomas</h3>
          <ul>
            <li>Ingles (estudios particulares)</li>
          </ul>

        <h3> Habilidades </h3>
          <h6> SOFT </h6>
          <ul>
            <li>Autodidacta</li>
            <li>Trabajo en equipo</li>
            <li>Gestion del Tiempo</li>
          </ul>
          <h6> HARD </h6>
          <ul>
            <li>Javascript </li>
            <li>HTML </li>
            <li>CSS</li>
            <li>React JS</li>
            <li>C#</li>
          </ul>
      </div>
      </div>
    </>
  )
}

export default MainAbout



