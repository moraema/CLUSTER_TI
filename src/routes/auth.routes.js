const express = require('express');
const router = express.Router();
const autController = require('../auth/auth.controller');


router.post('/', autController.login);

module.exports = router;