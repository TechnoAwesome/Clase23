const express = require('express');
const app = express();
const port = 3000;

app.get('/'/*--->(ruta raíz)root = localhost:'port'*/,(req,res)/* req ---> request(petición)  res---> response(respuesta)*/=> res.send('Hi world!'))

app.get('/contactos',(req,res) => res.send('Página de contacto'));

app.get('/productos',(req,res) => res.send('Listado de productos'));

app.listen(port, () => console.log("Servidor corriendo en el puerto "+ port))