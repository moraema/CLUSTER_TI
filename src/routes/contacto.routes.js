const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contacto.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.verificarJWT, contactoController.createContacto);
router.get('/', authMiddleware.verificarJWT, contactoController.getContacto);


module.exports = router;