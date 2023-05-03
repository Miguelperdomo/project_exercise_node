const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/product.model");

exports.user = sequelize.define(
  "users",
  {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.BIGINT, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    checkk: { type: DataTypes.INTEGER, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: true }
);
