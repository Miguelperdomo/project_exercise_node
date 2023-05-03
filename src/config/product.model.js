// const mysql = require('mysql');

// let connection = mysql.createConnection({

//     host: 'localhost',
//     database: 'exerciseapi',
//     user: 'root',
//     password: '1234'
// });


// connection.connect(function(err){
//     if(err){
//         throw err;
//     }else{
//         console.log('connection good')
//     }

// });

// connection.query('SELECT * FROM users', function(err,result, fields){
//     if(err)
//     throw err;
    
//     result.forEach(result => {
//         console.log(result);
//     });
// })

// connection.end();


// module.exports = connection;


const {Sequelize} = require('sequelize')

exports.sequelize = new Sequelize('exerciseapi', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });