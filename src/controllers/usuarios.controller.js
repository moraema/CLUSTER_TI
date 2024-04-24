const bcrypt = require('bcrypt');
const saltosBcrypt = parseInt(process.env.SALTOS_BCRYPT)
const usuarioModel = require('../models/user.model');


const createUsuario = async(req, res) => {
    try {
        const { correo, contraseña } = req.body;
        const hashPassword = await bcrypt.hash(contraseña, saltosBcrypt);

        let usuario = new usuarioModel({
            correo: correo,
            contraseña: hashPassword
        });

        await usuario.save();

        return res.status(201).json({
            message: 'Usuario creado exitosamete!',
            data: usuario
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al creal al usuario',
            error: error.message
        });
    }
}

module.exports = {
    createUsuario
}