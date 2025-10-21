const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar usuario
const registrar = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Revisar si usuario ya existe
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ error: 'Usuario ya existe' });

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear usuario
    const usuario = new Usuario({ nombre, email, password: hashedPassword });
    await usuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login usuario
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(400).json({ error: 'Usuario no encontrado' });

    // Comparar contraseña
    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Generar JWT
    const token = jwt.sign(
      { id: usuario._id, nombre: usuario.nombre },
      process.env.JWT_SECRET || 'mi_secreto',
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registrar, login };
