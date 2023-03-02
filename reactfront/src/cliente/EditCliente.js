import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/cliente/'

const CompEditCliente = () => {
    const[nombreapellido, setNombreapellido] = useState('')
    const[direccion, setDireccion] = useState('')
    const[nit, setNit] = useState('')
    const[telefono, setTelefono] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombreapellido: nombreapellido,
            direccion: direccion,
            nit: nit,
            telefono: telefono
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getClienteByid() }, 
        []
    )

    const getClienteByid = async () => {
        const res = await axios.get(URI + id)
            setNombreapellido(res.data.nombreapellido)
            setDireccion(res.data.direccion)
            setNit(res.data.nit)
            setTelefono(res.data.telefono)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Cliente</h5>
            </div>

            <div class="card-body">
                <h5>Cliente Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
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
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditCliente
