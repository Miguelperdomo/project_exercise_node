const express = require("express");
const bodyparse = require("body-parser");
const { sequelize } = require("./config/product.model");
// const cors = require('cors');
const usua = require("./router/users");
const { user } = require("./model/user");
const app = express();
const port = process.env.PORT || 3030;

// //midleware
app.use(express.json()); //recibir informacion
// app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app

const main = async () => {
  try {
    await sequelize.sync();
    console.log("established connection");
    app.listen(port, () => {
      console.log("--------------------- running server in the port", port);
    });
  } catch (error) {
    console.error("failed to connect", error);
  }
};

main();

app.use(bodyparse.json());

app.use(usua);

// app.listen(port, () => {
//     console.log("--------------------- running server in the port", port);
// })
