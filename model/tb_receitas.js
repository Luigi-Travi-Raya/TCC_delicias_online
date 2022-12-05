const database = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const tb_denuncias = require('./tb_denuncias');
const tb_comentarios = require('./tb_comentarios');
const tb_likes = require('./tb_likes');
const { STRING } = require('sequelize');

const tb_receitas = sequelize.define('tb_receitas',{
    id_receita: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_categoria:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'tb_categorias',
            key: 'id_categoria'
        }
    },
    id_autor_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'tb_usuarios',
            key: 'id_usuario'
        }
    },
    nome_receita:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome_fotos_receita:{
        type: Sequelize.STRING,
    },
    qtd_porcoes_receita:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tempo_preparo_receita:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dificuldade_receita:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ingredientes_receita:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    preparo_receita:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao_receita:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

// tb_receitas.hasMany(sequelize.tb_denuncias)
tb_receitas.hasMany(tb_likes)
// tb_receitas.hasMany(tb_comentarios)
module.exports = tb_receitas;