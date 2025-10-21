// controllers/saludoController.js

// Función para manejar POST /saludo
const enviarSaludo = (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ error: 'Falta el campo "nombre"' });
  }

  res.json({ mensaje: `Hola ${nombre}, ¡bienvenido a Node.js!` });
};

module.exports = { enviarSaludo };