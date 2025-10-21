const express = require('express');
const conectarDB = require('./db')
const auth = require('./middleware/auth'); 
const app = express();
//swagger
const { swaggerUi, specs } = require('./swagger');
// Middleware para JSON
app.use(express.json());

// Importar rutas
const saludoRoutes = require('./routes/saludo');


const usuarioRoutes = require('./routes/usuarios');


// Conectar rutas
app.use('/auth', require('./routes/auth'));
app.use('/usuarios', auth, usuarioRoutes);
app.use('/saludo', saludoRoutes);



conectarDB();

// Ruta GET principal
app.get('/', (req, res) => {
  res.send('🚀 ¡Servidor funcionando correctamente!');
});

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Iniciar servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));