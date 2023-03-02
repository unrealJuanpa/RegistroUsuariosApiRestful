import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/repartidor/'

const CompShowRepartidor = () => {
    const[repartidor, setRepartidor] = useState([])
    useEffect(() => {
            getRepartidor()
        },[]
    )

    const getRepartidor = async () => {
        const res = await axios.get(URI)
        setRepartidor(res.data)
    }

    const deleteRepartidor = async (id) => {
        await axios.delete(`${URI}${id}`)
        getRepartidor()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Repartidor Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Repartidor!</span>
                <br></br>
                <Link to="/repartidor/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombreapellido</th>
                                <th>Fechanac</th>
                                <th>Telefono</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                repartidor.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombreapellido}</td>
                                            <td>{dtyo.fechanac}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>
                                                <Link to={`/repartidor/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteRepartidor(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
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

export default CompShowRepartidor

