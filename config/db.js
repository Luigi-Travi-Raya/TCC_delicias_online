const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '',
{dialect: 'mysql', host: 'localhost', query:{raw:true}}
);

module.exports = sequelize;