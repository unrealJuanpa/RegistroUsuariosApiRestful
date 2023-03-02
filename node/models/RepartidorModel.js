import db from "../database/db.js"
import { DataTypes } from "sequelize"

const RepartidorModel = db.define('repartidor', {
    nombreapellido: { type: DataTypes.TEXT },
    fechanac: { type: DataTypes.DATE },
    telefono: { type: DataTypes.TEXT}
})

export default RepartidorModel