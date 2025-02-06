const express = require('express'); // configuración de express 
require('dotenv').config() // variables de entorno 
const { dbConnection } = require('./database/config')

// Crear el servidor de express 
const app = express(); 

// Bases de datos 
dbConnection(); 


// Directorio publico 
app.use( express.static('public') ); // use es un middleware es una función


// Lectura y parseo del body 
app.use( express.json() ); // esto es necesario para poder mostrar la info 


// Rutas 
app.use('/api/auth', require('./routes/auth') ); // configuración de la ruta de auth.js
// CRUD // eventos 


// escuchar 
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});