const express = require('express');
const router = express.Router();
const subirImagen = require('../utils/multer.config');
const eventoController = require('../controllers/evento.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/', authMiddleware.verificarJWT, subirImagen.single('imagen'), eventoController.createEvento);
router.get('/imagenes', authMiddleware.verificarJWT, eventoController.getImagenesEvento);
router.get('/', authMiddleware.verificarJWT, eventoController.getEvento);
router.get('/:id', authMiddleware.verificarJWT, eventoController.getByIdEvento);
router.put('/:id', authMiddleware.verificarJWT, subirImagen.single('imagen'), eventoController.updateEvento);
router.delete('/:id', authMiddleware.verificarJWT, eventoController.deleteEvento);


module.exports = router;