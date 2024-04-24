require('dotenv').config();
require('./src/configs/db.config');
const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const authRoute = require('./src/routes/auth.routes');
const usuariosRoute = require('./src/routes/usuarios.routes');
const contactoRoute = require('./src/routes/contacto.routes');
const eventoRoute = require('./src/routes/evento.routes');
const servicioRoute = require('./src/routes/servicio.routes');
const miembroRoute = require('./src/routes/miembro.routes');


app.use(cors({
    origin: "*"
}));


app.use(express.static('public'))
    /*
    app.use(express.static('public'))
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/public'
    }));
    */
app.use(express.json());
app.use('/login', authRoute);
app.use('/usuarios', usuariosRoute);
app.use('/contactos', contactoRoute);
app.use('/eventos', eventoRoute);
app.use('/servicios', servicioRoute);
app.use('/miembros', miembroRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('API escuchado en el puerto ', PORT)
})