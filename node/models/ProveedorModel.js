import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ProveedorModel = db.define('proveedor', {
    nombre: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT}
})

export default ProveedorModel