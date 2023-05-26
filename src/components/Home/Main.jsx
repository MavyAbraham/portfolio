import React from 'react'
import '../../css/Main.css'
import Perfil from '../../assets/multimedia/Perfil3.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Foto from '../../assets/multimedia/photo.webp'


const Main = ({ presentacion }) => {
  console.log(presentacion);
  const Datos = (presentacion)
  return (
    <>
      <div className='contenedor'>
        <div className='contenedor2'>
          <h4 className='welcome'>Welcome to</h4>
          <h1 className='titulo'>Maria Victoria Abraham</h1>
          <h4 className='s'>'s portfolio</h4>
        </div>

        <div className='box'>
          <div className='content'>
            <img src={Perfil} alt="" />
          </div>
        </div>
      </div>


      <hr />
      <div className='contenedor'>
        <div className='contenedor-descripcion'>
          <div className='descripcion'>

            <p>¡Hola! Soy Maria Victoria (Mavy) Abraham y soy estudiante de programación en la Universidad Tecnológica Nacional FRT. Actualmente tengo 20 años y mi objetivo es convertirme en una desarrolladora web exitosa.</p>

            <p>Si bien mis conocimientos en bases de datos como SQL son básicos, me he enfocado en aprender y mejorar en áreas como C#, HTML, CSS, JavaScript y ReactJS. Me apasiona el aspecto visual del desarrollo web, especialmente cómo los usuarios interactúan con los sitios y las aplicaciones. Mi objetivo es crear experiencias en línea atractivas e intuitivas que los usuarios adoren.</p>

            <p>Estoy comprometida a aprender y mejorar constantemente mis habilidades de programación para poder ofrecer soluciones innovadoras y efectivas. Me encanta trabajar en equipo y estoy emocionada por la posibilidad de colaborar en futuros proyectos.</p>

            <p>¡Gracias por visitar mi portfolio y espero tener la oportunidad de trabajar contigo!</p>

          </div>
        </div>
        <Card className='card'>
      <Card.Img variant="top" src={Foto} />
      <Card.Body>
        <Card.Title>{presentacion.Nombre}</Card.Title>
        <Card.Text>
        <ul>
            <li>{presentacion.Edad}</li>
            <li>{presentacion.Cumpleaños}</li>
            <li>{presentacion.Celular}</li>
            <li>{presentacion.Hobbies}</li>
            <li>{presentacion.DeporteFav}</li>
          </ul>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </>
  )
}

export default Main