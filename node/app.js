import express from "express"
import cors from "cors"
import db from "./database/db.js"

import clienteRoutes from "./routes/ClienteRoutes.js"
import proveedorRoutes from "./routes/ProveedorRoutes.js"
import repartidorRoutes from "./routes/RepartidorRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/cliente', clienteRoutes)
app.use('/proveedor', proveedorRoutes)
app.use('/repartidor', repartidorRoutes)

try 
{
    await db.authenticate()
    console.log("Conectividad con la base de datos completada!")
}
catch (error)
{
    console.log("Error de conectividad: " + error)
}

app.listen(8000, () => {
    console.log("Servidor corriendo en: http://localhost:8000/")
})

