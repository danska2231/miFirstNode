const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
   // 1️⃣ Obtener el token del header 'Authorization'
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Acceso denegado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mi_secreto');
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = auth;
