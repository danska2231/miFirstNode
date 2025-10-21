// 📂 swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios y Autenticación',
      version: '1.0.0',
      description: 'Documentación de la API con Express + MongoDB + JWT',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia si despliegas en otro servidor
      },
    ],

    components: {
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
},
security: [
  {
    bearerAuth: [],
  },
],

  },
  apis: ['./routes/*.js'], // rutas donde pondremos la documentación
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
