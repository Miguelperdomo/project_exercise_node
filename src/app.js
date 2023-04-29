const express = require('express');
const cors = require('cors');
const users = require("./router/users");
const app = express()
const port = process.env.PORT || 3030;

//midleware
app.use(express.json()); //recibir informacion
app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app



app.use('/users', users);


app.listen(port, () => {
    console.log("running server:", port);
})