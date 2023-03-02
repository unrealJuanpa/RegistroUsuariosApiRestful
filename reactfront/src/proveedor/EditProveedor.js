import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/proveedor/'

const CompEditProveedor = () => {
    const[nombre, setNombre] = useState('')
    const[direccion, setDireccion] = useState('')
    const[telefono, setTelefono] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            direccion: direccion,
            telefono: telefono
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getProveedorByid() }, 
        []
    )

    const getProveedorByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
            setDireccion(res.data.direccion)
            setTelefono(res.data.telefono)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Proveedor</h5>
            </div>

            <div class="card-body">
                <h5>Proveedor Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Direccion</label>
                                <input value={direccion} onChange={ (e) => setDireccion(e.target.value) } type="text" class="form-control" placeholder="Enter Direccion"></input>
                            </div>
                            <div class="form-group">
                                <label>Telefono</label>
                                <input value={telefono} onChange={ (e) => setTelefono(e.target.value) } type="text" class="form-control" placeholder="Enter Telefono"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditProveedor
