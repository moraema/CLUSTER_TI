const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const subirImagen = require('../utils/multer.config');
const servicioController = require('../controllers/servicio.controller');

router.get('/', authMiddleware.verificarJWT, servicioController.getServicio);
router.post('/', authMiddleware.verificarJWT, subirImagen.single('imagen'), servicioController.createServicio);


module.exports = router;