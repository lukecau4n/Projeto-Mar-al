const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastro', usuarioController.createUsuario);
router.post('/login', usuarioController.loginUsuario);

module.exports = router;
