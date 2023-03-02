import ProveedorModel from "../models/ProveedorModel.js"

export const getAllProveedor = async (req, res) => {
    try 
    {
        const datos = await ProveedorModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getProveedor = async (req, res) => {
    try
    {
        const datos = await ProveedorModel.findAll({
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

export const createProveedor = async (req, res) => {
    try
    {
        await ProveedorModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateProveedor = async (req, res) => {
    try
    {
        await ProveedorModel.update(req.body, {
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

export const deleteProveedor = async (req, res) => {
    try
    {
        await ProveedorModel.destroy({
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

