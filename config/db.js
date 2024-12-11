const  Sequelize  = require('sequelize');
require('dotenv').config();

const HOST = process.env.DB_HOST;
const DBNAME = process.env.DB_NAME;
const DBUSER = process.env.DB_USER;
const DBPASS = process.env.DB_PASSWORD;
const PORT = process.env.DB_PORT;

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    host: HOST,
    port: PORT,
    logging: true, //Change to false when hosting
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => { 
        console.log("Connection Established to Database"); 
    })
    .catch(err => { 
        console.log("Connection Failed");
        console.log(err); 
    });

module.exports = {
    sequelize,
    Sequelize
};