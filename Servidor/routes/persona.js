

//rutas para usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioContorller')

//api/usuarios
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.get('/:id', usuarioController.obtenerUsuarios);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports= router;

