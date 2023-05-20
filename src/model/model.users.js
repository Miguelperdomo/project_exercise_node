const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/data.base");
// const { acco } = require("./account");

exports.user = sequelize.define(
  "users",
  {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: true },
    last_name: { type: DataTypes.STRING, allowNull: true },
    age: { type: DataTypes.INTEGER, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    phone_number: { type: DataTypes.BIGINT, allowNull: true },
    address: { type: DataTypes.STRING, allowNull: true },
    // account: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: { model: acco, key: "id_account" },
    // },
  },
  { timestamps: true }
);
