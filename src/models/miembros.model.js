const mongoose = require('mongoose');


const miembrosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Miembros', miembrosSchema);