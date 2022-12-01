const Sequelize = require('sequelize');
const {config} = require('dotenv')
config();

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER, 
    process.env.DBPASSWORD,
    {dialect: process.env.DBDIALECT,
    host: process.env.DBHOST,
    query:{raw:true}}
);

module.exports = sequelize;