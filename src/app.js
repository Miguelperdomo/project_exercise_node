const express = require("express");
const bodyParse = require("body-parser");
const { sequelize } = require("./config/data.base");
// const cors = require('cors');
//user
const userVariable = require("./router/router.users");
//const { user } = require("./model/model.users");
//account
const accountVariable = require("./router/router.account");
//transf
const transferVariable = require("./router/router.transf");
//const { transf } = require("./model/model.transf");

//port
const app = express();
const port = process.env.PORT || 3030;

// //middleware
app.use(express.json()); //receive information
// app.use(cors()); //enable other apps to make requests to our app

const main = async () => {
  try {
    await sequelize.sync();
    //await app.use(transf);
    console.log("established connection");
    app.listen(port, () => {
      console.log("--------------------- running server in the port", port);
    });
  } catch (error) {
    console.error("failed to connect", error);
  }
};

main();

app.use(bodyParse.json());

app.use(userVariable);
app.use(accountVariable);
app.use(transferVariable);

// app.listen(port, () => {
//     console.log("--------------------- running server in the port", port);
// })
