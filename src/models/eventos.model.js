const mongoose = require('mongoose');

const eventoSchema = mongoose.Schema({
    nombre_evento: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: new Date()
    },
    imagen: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Evento', eventoSchema);