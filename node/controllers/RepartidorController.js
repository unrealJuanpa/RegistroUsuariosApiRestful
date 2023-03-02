import RepartidorModel from "../models/RepartidorModel.js"

export const getAllRepartidor = async (req, res) => {
    try 
    {
        const datos = await RepartidorModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getRepartidor = async (req, res) => {
    try
    {
        const datos = await RepartidorModel.findAll({
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

export const createRepartidor = async (req, res) => {
    try
    {
        await RepartidorModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateRepartidor = async (req, res) => {
    try
    {
        await RepartidorModel.update(req.body, {
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

export const deleteRepartidor = async (req, res) => {
    try
    {
        await RepartidorModel.destroy({
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

