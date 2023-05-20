const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/data.base");
const { user } = require("./model.users");

//const { user } = require("./user.js");

exports.account = sequelize.define(
  "accounts",
  {
    id_account: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER(42),
      allowNull: true,
    },
    balanceUsd: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
