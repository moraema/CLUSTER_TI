const miembrosModel = require('../models/miembros.model');


const createMiembros = async(req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const imagen = '/uploads/' + req.file.filename;



        let miembros = new miembrosModel({
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen
        });

        await miembros.save();

        return res.status(201).json({
            message: 'Se creo de manera correcta el miembro',
            miembros
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el miembro',
            error: error.message
        });
    }
}


const getMiembros = async(req, res) => {
    try {
        const miembros = await miembrosModel.find();

        if (!miembros || miembros.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron ningun miembro'
            });
        }

        return res.status(200).json({
            message: 'Se obtuvieron correctamente los miembros',
            miembros
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los miembros',
            error: error.message
        })
    }
}


module.exports = {
    createMiembros,
    getMiembros
}