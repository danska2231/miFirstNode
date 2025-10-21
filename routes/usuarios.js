/**
 * @swagger
 * /Usuarios:
 *   get:
 *     summary: Devuelve un Usuarios 
 *     responses:
 *       200:
 *         description: Retorna listas de Usuarios
 */

const express = require('express');
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  borrarUsuario
} = require('../controllers/usuarioController');

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.put('/:id', actualizarUsuario);
router.delete('/:id', borrarUsuario);

module.exports = router;
