const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/data.base");
const { user } = require("./model.users");

exports.transf = sequelize.define(
  "transfers",
  {
    id_transfer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    creation_date: { type: DataTypes.DATE, allowNull: false },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: user, key: "id_user" },
    },
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: user, key: "id_user" },
    },
    amount: { type: DataTypes.INTEGER, allowNull: true },
  },
  { timestamps: true }
);
