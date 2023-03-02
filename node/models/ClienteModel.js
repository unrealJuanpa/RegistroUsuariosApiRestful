import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ClienteModel = db.define('cliente', {
    nombreapellido: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.TEXT },
    nit: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT}
})

export default ClienteModel