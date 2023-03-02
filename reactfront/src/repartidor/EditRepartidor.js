import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/repartidor/'

const CompEditRepartidor = () => {
    const[nombreapellido, setNombreapellido] = useState('')
    const[fechanac, setFechanac] = useState('')
    const[telefono, setTelefono] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombreapellido: nombreapellido,
            fechanac: fechanac,
            telefono: telefono
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getRepartidorByid() }, 
        []
    )

    const getRepartidorByid = async () => {
        const res = await axios.get(URI + id)
            setNombreapellido(res.data.nombreapellido)
            setFechanac(res.data.fechanac)
            setTelefono(res.data.telefono)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Repartidor</h5>
            </div>

            <div class="card-body">
                <h5>Repartidor Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombreapellido</label>
                                <input value={nombreapellido} onChange={ (e) => setNombreapellido(e.target.value) } type="text" class="form-control" placeholder="Enter Nombreapellido"></input>
                            </div>
                            <div class="form-group">
                                <label>Fechanac</label>
                                <input value={fechanac} onChange={ (e) => setFechanac(e.target.value) } type="date" class="form-control" placeholder="Enter Fechanac"></input>
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

export default CompEditRepartidor
