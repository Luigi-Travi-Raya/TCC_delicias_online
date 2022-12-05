const database = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const tb_categorias = sequelize.define('tb_categorias',{
    id_categoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = tb_categorias;