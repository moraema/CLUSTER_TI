const mongoose = require('mongoose');


mongoose.connect(process.env.URL_MONGODB)
    .then(() => {
        console.log('Conectado a mongodb')
    })
    .catch(console.log)