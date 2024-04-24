const mongoose = require('mongoose');

const serviciosSchema = mongoose.Schema({
    nombre_servicio: {
        type: String,
        require: true
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


module.exports = mongoose.model('Servicios', serviciosSchema);