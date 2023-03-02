import { Sequelize } from "sequelize"

const db = new Sequelize('arquiusuarios', 'root', '',{
    host:'localhost',
    dialect:"mysql"
})

export default db
