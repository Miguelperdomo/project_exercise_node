const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/product.model");
const { user } = require("./user");

//const { user } = require("./user.js");

exports.accot = sequelize.define(
  "accounts",
  {
    id_account: {
      type: DataTypes.INTEGER(42),
      primaryKey: true,
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: user, key: "id_user" },
    },
    category: { type: DataTypes.STRING, allowNull: true },
  },
  { timestamps: true }
);

// acco.prototype.updateCategory = function () {
//   if (this.balance < 1000000) {
//     this.category = "cobre";
//   } else if (this.balance < 550000000) {
//     this.category = "plata";
//   } else {
//     this.category = "oro";
//   }
// };
