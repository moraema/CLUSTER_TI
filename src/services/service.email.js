const nodemailer = require('nodemailer');

const transporte = nodemailer.createTransport({
    service: 'gmail',
    host: 'smto.gmail.com',
    port: 465,
    auth: {
        user: 'clientemanagerchtecnologia@gmail.com',
        pass: 'ehtsctkzkbfbazlu',
    },
    tls: {
        rejectUnauthorized: false
    }
})

const notifificarNuevoContacto = async(nombre, correo, telefono, mensaje) => {

    try {
        const correoClusterTI = {
            from: 'Cluster TI <clientemanagerchtecnologia@gmail.com>',
            to: 'clientemanagerchtecnologia@gmail.com',
            subject: 'Nuevo contacto creado',
            html: `<p>Se ha creado un nuevo contacto: </p>
                    <p> Nombre: ${nombre} </p>
                    <p> Correo: ${correo} </p>
                    <p> Telefono: ${telefono} </p>
                    <p> Mensaje: ${mensaje} </p>`
        };

        await transporte.sendMail(correoClusterTI);

        console.log('Correo enviado exitosamente');
        return true;
    } catch (error) {
        console.error('Hubo un error al enviar el correo', error);
        return false;
    }

}

module.exports = {
    notifificarNuevoContacto
}