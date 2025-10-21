const Usuario = require('../models/Usuario');

// Crear usuario
const crearUsuario = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const usuario = new Usuario({ nombre, email });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar usuario por ID
const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Borrar usuario por ID
const borrarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { crearUsuario, obtenerUsuarios, actualizarUsuario, borrarUsuario };
