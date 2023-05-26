import React from 'react'
import { useState } from 'react'
import { Form, Button, Table } from "react-bootstrap"
import css from '../css/MainContact.css'

const MainContact = () => {

    const consultas = [{
        id: 1, nombre: "Mariano Perez", email: "maripe@gmail.com", descripcion: "Necesito contactarme contigo"
    },
    ]

    const [pedidos, setPedidos] = useState(consultas)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [id, setId] = useState(null)


    const handlerChange = (e) => {
        setEmail(e.target.value)
    }

    const agregarConsulta = (e) => {
        e.preventDefault();
        setPedidos([...pedidos, { id, nombre, email, descripcion }])
        alert("Me contactare contigo a la brevedad.")
        e.target.reset()
    }

    const deleteConsulta = (id) => {
        console.log("borro el id: " + id);
        const resultado = pedidos.filter(pedido=>pedido.id !== id)
        setPedidos(resultado)
    }

    return (
        <>
        <div className='contact'>

            <div className='consulta'>

            <Form onSubmit={agregarConsulta}>

                <Form.Group >


                    <Form.Control type='text' onChange={(e) => setId(e.target.value)} required className='form' placeholder='ID'/>

                    <br />

                    <Form.Control type='text' onChange={(e) => setNombre(e.target.value)} required className='form' placeholder='NOMBRE'/>

                    <br />

                    <Form.Control type="text" onChange={handlerChange} required className='form' placeholder='EMAIL'/>

                    <br />

                    <Form.Control onChange={(e) => setDescripcion(e.target.value)} required className='form' placeholder='MENSAJE'/>

                    <br />

                    <Button className='btn btn-primary' type='submit'>Enviar mensaje</Button>

                </Form.Group>


            </Form>

            </div>

            <Table hover className='container'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre </th>
                        <th>Email</th>
                        <th>Descripcion</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido =>
                        <tr key={pedido.id}>
                            <td>{pedido.id}</td>
                            <td>{pedido.nombre}</td>
                            <td>{pedido.email}</td>
                            <td>{pedido.descripcion}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteConsulta(pedido.id)}>eliminar</button>
                            </td>
                        </tr>
                    )}


                </tbody>
            </Table>
        </div>
        </>
    )
}

export default MainContact