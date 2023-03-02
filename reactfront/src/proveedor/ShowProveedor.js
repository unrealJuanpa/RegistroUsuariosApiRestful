import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/proveedor/'

const CompShowProveedor = () => {
    const[proveedor, setProveedor] = useState([])
    useEffect(() => {
            getProveedor()
        },[]
    )

    const getProveedor = async () => {
        const res = await axios.get(URI)
        setProveedor(res.data)
    }

    const deleteProveedor = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProveedor()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Proveedor Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Proveedor!</span>
                <br></br>
                <Link to="/proveedor/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                proveedor.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.direccion}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>
                                                <Link to={`/proveedor/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteProveedor(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowProveedor

