const eventoModel = require('../models/eventos.model');



const createEvento = async(req, res) => {
    try {
        const { nombre_evento, descripcion } = req.body;
        const imagen = '/uploads/' + req.file.filename;

        let evento = new eventoModel({
            nombre_evento: nombre_evento,
            descripcion: descripcion,
            imagen: imagen
        });

        await evento.save();

        return res.status(201).json({
            message: ' se creo de manera correcta el evento',
            evento
        });
    } catch (error) {
        console.error('Hubo un error al crear el evento');
        return res.status(500).json({
            message: 'Hubo un error al crear el evento',
            error: error.message
        });
    }
}


const getEvento = async(req, res) => {

    try {
        const eventos = await eventoModel.find();

        if (!eventos || eventos.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron ningun evento'
            });
        }


        return res.status(200).json({
            message: 'Se obtuvieron correctamente los eventos',
            eventos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los eventos',
            error: error.message
        });
    }
}


const deleteEvento = async(req, res) => {
    try {
        const eventoId = req.params.id;

        const eventoEliminado = await eventoModel.findByIdAndDelete(eventoId);

        if (!eventoEliminado) {
            return res.status(404).json({
                message: 'El evento a eliminar no fue encontrado'
            });
        }
        return res.status(200).json({
            message: 'El evento fue eliminado con exito'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error al eliminar el evento',
            error: error.message
        })
    }

}

const updateEvento = async(req, res) => {
    try {
        const eventoId = req.params.id;

        const { nombre_evento, descripcion } = req.body;
        let imagen = '';

        let valores = {
            nombre_evento: nombre_evento,
            descripcion: descripcion
        }

        if (req.file != null) {
            imagen = '/uploads/' + req.file.filename;
            valores = {
                nombre_evento: nombre_evento,
                descripcion: descripcion,
                imagen: imagen
            }
        }
        const eventoActualizado = await eventoModel.findByIdAndUpdate(eventoId, { $set: valores }, { new: true });


        if (!eventoActualizado) {
            return res.status(404).json({
                message: 'El evento no fue encontrado'
            });
        }

        return res.status(200).json({
            message: 'El evento fue actualizado correctamente',
            eventoActualizado
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar el evento',
            error: error.message
        })
    }
}


const getByIdEvento = async(req, res) => {
    try {
        const eventoId = req.params.id;

        const evento = await eventoModel.findById(eventoId, 'nombre_evento imagen');

        if (!evento) {
            return res.status(404).json({
                message: 'El evento no fue encontrado'
            });
        }

        return res.status(200).json({
            message: "Se obtuvo el evento correctamente",
            evento
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener el evento',
            error: error.message
        })
    }
}


const getImagenesEvento = async(req, res) => {
    try {

        const eventos = await eventoModel.find({}, 'imagen');


        if (!eventos || eventos.length === 0) {
            return res.status(404).json({
                message: 'no se encontro ninguna imagen de eventos'
            })
        }


        return res.status(200).json({
            message: 'Se obtuvieron correctamente las imagenes de los eventos',
            eventos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener las imagenes de los eventos',
            error: error.message
        })
    }
}

module.exports = {
    createEvento,
    getEvento,
    deleteEvento,
    updateEvento,
    getByIdEvento,
    getImagenesEvento
}