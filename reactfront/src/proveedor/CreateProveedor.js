import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/proveedor/'

const CompCreateProveedor = () => {
    const[nombre, setNombre] = useState('')
    const[direccion, setDireccion] = useState('')
    const[telefono, setTelefono] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre,direccion:direccion,telefono:telefono})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Proveedor</h5>
            </div>

            <div class="card-body">
                <h5>Proveedor Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
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
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateProveedor
