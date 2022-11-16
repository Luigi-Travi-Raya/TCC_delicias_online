const Sequelize = require('sequelize');
const {config} = require('dotenv')
config();

const sequelize = new Sequelize(process.env.DBNAME, 'root', '',
{dialect: 'mysql', host: process.env.DBHOST, query:{raw:true}}
);

module.exports = sequelize;