
const express = require('express');
const conectardb = require('./config/db');
const cors = require("cors");

//crear servidor
const app = express()
//conectamos a la base de datos
conectardb();

app.use(cors());

app.use(express.json());

app.use('/api/usuario', require('./routes/persona'));


app.listen(4000, () => {
    console.log('Servidor conectado perfectamente');
})