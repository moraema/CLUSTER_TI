const multer = require('multer');

const guardar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, Date.now() + '.' + ext)
    }
});

const filtro = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false)
    }
};

module.exports = multer({ storage: guardar, fileFilter: filtro });