/**
 * @swagger
 * /saludo:
 *   get:
 *     summary: Devuelve un saludo simple
 *     responses:
 *       200:
 *         description: Retorna un mensaje de saludo
 */
// routes/saludo.js
const express = require('express');
const router = express.Router();
const { enviarSaludo } = require('../controllers/saludoController');

// Ruta POST /saludo
router.post('/', enviarSaludo);

module.exports = router;
