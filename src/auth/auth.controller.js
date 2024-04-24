const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const usuarioModel = require('../models/user.model');


const login = async(req, res) => {

    try {
        const { correo, contraseña } = req.body;

        const usuarioEncontrado = await usuarioModel.findOne({ correo });
        if (!usuarioEncontrado) {
            return res.status(400).json({
                message: 'Correo o contraseña incorrecto'
            });
        }

        const contraseñaEncontrada = bcrypt.compareSync(contraseña, usuarioEncontrado.contraseña);
        if (!contraseñaEncontrada) {
            return res.status(400).json({
                message: 'Correo o contraseña incorrecta'
            });
        }

        const payload = {
            usuario: {
                id: usuarioEncontrado._id
            }
        }
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

        return res.status(200).json({
            message: 'El acceso fue correcto',
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al validar las credenciales',
            error: error.message
        });
    }
}


module.exports = {
    login
}