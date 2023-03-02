import ClienteModel from "../models/ClienteModel.js"

export const getAllCliente = async (req, res) => {
    try 
    {
        const datos = await ClienteModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getCliente = async (req, res) => {
    try
    {
        const datos = await ClienteModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(datos[0])
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const createCliente = async (req, res) => {
    try
    {
        await ClienteModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateCliente = async (req, res) => {
    try
    {
        await ClienteModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json( { message: "Registro actualizado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const deleteCliente = async (req, res) => {
    try
    {
        await ClienteModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro eliminado correctamente!" })
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

