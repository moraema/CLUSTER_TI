const servicioModel = require('../models/servicio.model');


const createServicio = async(req, res) => {

    try {
        const { nombre_servicio, descripcion } = req.body;
        const imagen = '/uploads/' + req.file.filename;



        let servicio = new servicioModel({
            nombre_servicio: nombre_servicio,
            descripcion: descripcion,
            imagen: imagen
        })

        await servicio.save();

        return res.status(201).json({
            message: 'Se creo de manera correcta el servicio',
            data: servicio
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el servicio',
            error: error.message
        });
    }
};



const getServicio = async(req, res) => {

    try {
        const servicios = await servicioModel.find();

        if (!servicios || servicios.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron ningun servicio'
            });
        }

        return res.status(200).json({
            message: 'Se obtuvieron correctamente los servicios',
            servicios
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los servicios',
            error: error.message
        })
    }
}

module.exports = {
    createServicio,
    getServicio
}