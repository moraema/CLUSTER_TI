const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const subirImagen = require('../utils/multer.config');
const miembroController = require('../controllers/miembros.controller');

router.post('/', authMiddleware.verificarJWT, subirImagen.single('imagen'), miembroController.createMiembros);
router.get('/', authMiddleware.verificarJWT, miembroController.getMiembros);

module.exports = router;