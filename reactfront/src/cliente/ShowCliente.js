import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/cliente/'

const CompShowCliente = () => {
    const[cliente, setCliente] = useState([])
    useEffect(() => {
            getCliente()
        },[]
    )

    const getCliente = async () => {
        const res = await axios.get(URI)
        setCliente(res.data)
    }

    const deleteCliente = async (id) => {
        await axios.delete(`${URI}${id}`)
        getCliente()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Cliente Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Cliente!</span>
                <br></br>
                <Link to="/cliente/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombreapellido</th>
                                <th>Direccion</th>
                                <th>Nit</th>
                                <th>Telefono</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cliente.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombreapellido}</td>
                                            <td>{dtyo.direccion}</td>
                                            <td>{dtyo.nit}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>
                                                <Link to={`/cliente/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteCliente(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowCliente

