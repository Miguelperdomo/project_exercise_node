const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize("exerciseapi", "root", "1234", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
