import './App.css';

import CompShowCliente from './cliente/ShowCliente.js';
import CompCreateCliente from './cliente/CreateCliente.js';
import CompEditCliente from './cliente/EditCliente.js';

import CompShowProveedor from './proveedor/ShowProveedor.js';
import CompCreateProveedor from './proveedor/CreateProveedor.js';
import CompEditProveedor from './proveedor/EditProveedor.js';

import CompShowRepartidor from './repartidor/ShowRepartidor.js';
import CompCreateRepartidor from './repartidor/CreateRepartidor.js';
import CompEditRepartidor from './repartidor/EditRepartidor.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/cliente/' element={ <CompShowCliente/>}/>
          <Route path='/cliente/create' element={ <CompCreateCliente/>}/>
          <Route path='/cliente/edit/:id' element={ <CompEditCliente/>}/>

          <Route path='/proveedor/' element={ <CompShowProveedor/>}/>
          <Route path='/proveedor/create' element={ <CompCreateProveedor/>}/>
          <Route path='/proveedor/edit/:id' element={ <CompEditProveedor/>}/>

          <Route path='/repartidor/' element={ <CompShowRepartidor/>}/>
          <Route path='/repartidor/create' element={ <CompCreateRepartidor/>}/>
          <Route path='/repartidor/edit/:id' element={ <CompEditRepartidor/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

