const database = require('../config/db');
const Sequelize = require('sequelize');

const tb_comentarios = database.define('tb_comentarios',{
    id_comentario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:'tb_usuarios',
            key: 'id_usuario'
        }
    },
    id_receita:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:'tb_receitas',
            key: 'id_receita'
        }
    },
    texto_comentario:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = tb_comentarios;