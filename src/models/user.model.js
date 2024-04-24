const mongoose = require('mongoose');


const usuarioSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);