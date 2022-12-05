const database = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const tb_receitas = require('./tb_receitas');
const tb_comentarios = require('./tb_comentarios');
const tb_denuncias = require('./tb_denuncias');
const tb_likes = require('./tb_likes');

const tb_usuarios = sequelize.define('tb_usuarios',{
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_usuario:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email_usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha_usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_foto_usuario:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

tb_usuarios.hasMany(tb_receitas);
tb_usuarios.hasMany(tb_comentarios);
tb_usuarios.hasMany(tb_denuncias);
tb_usuarios.hasMany(tb_likes);
module.exports = tb_usuarios;