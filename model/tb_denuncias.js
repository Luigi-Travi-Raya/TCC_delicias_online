const database = require('../config/db');
const Sequelize = require('sequelize');

const tb_denuncias = database.define('tb_denuncias',{
    id_denuncia: {
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
    }
})

module.exports = tb_denuncias;