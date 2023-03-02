import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/cliente/'

const CompCreateCliente = () => {
    const[nombreapellido, setNombreapellido] = useState('')
    const[direccion, setDireccion] = useState('')
    const[nit, setNit] = useState('')
    const[telefono, setTelefono] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombreapellido:nombreapellido,direccion:direccion,nit:nit,telefono:telefono})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Cliente</h5>
            </div>

            <div class="card-body">
                <h5>Cliente Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Nombreapellido</label>
                                <input value={nombreapellido} onChange={ (e) => setNombreapellido(e.target.value) } type="text" class="form-control" placeholder="Enter Nombreapellido"></input>
                            </div>
                            <div class="form-group">
                                <label>Direccion</label>
                                <input value={direccion} onChange={ (e) => setDireccion(e.target.value) } type="text" class="form-control" placeholder="Enter Direccion"></input>
                            </div>
                            <div class="form-group">
                                <label>Nit</label>
                                <input value={nit} onChange={ (e) => setNit(e.target.value) } type="text" class="form-control" placeholder="Enter Nit"></input>
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

export default CompCreateCliente
