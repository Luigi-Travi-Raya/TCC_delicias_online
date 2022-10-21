const database = require('../config/db');
const Sequelize = require('sequelize');

const tb_likes = database.define('tb_likes',{
    id_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model:'tb_usuarios',
            key: 'id_usuario'
        }
    },
    id_receita:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model:'tb_receitas',
            key: 'id_receita'
        }
    }
})

module.exports = tb_likes;