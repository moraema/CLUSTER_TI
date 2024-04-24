const contactoModel = require('../models/contacto.model');
const serviceEmail = require('../services/service.email');


const createContacto = async(req, res) => {
    try {
        const { nombre, correo, telefono, mensaje } = req.body;

        let contacto = new contactoModel({
            nombre: nombre,
            correo: correo,
            telefono: telefono,
            mensaje: mensaje
        });

        await contacto.save();

        // enviar el correo del nuevo contacto
        await serviceEmail.notifificarNuevoContacto(nombre, correo, telefono, mensaje);

        return res.status(201).json({
            message: 'El contacto se creo de manera correcta',
            data: contacto
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el contacto',
            error: error.message
        });
    }
}

// en el caso que se desee tener un get para todos los contactos si no se lo eliminamos 
const getContacto = async(req, res) => {
    try {
        const contactos = await contactoModel.find();


        return res.status(200).json({
            message: 'Se obtuvieron los contactos correctos',
            data: contactos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los contactos',
            error: error.message
        });
    }
}

module.exports = {
    createContacto,
    getContacto
}