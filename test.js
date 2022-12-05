const tb_categorias = require("./model/tb_categorias")
const tb_comentarios = require("./model/tb_comentarios")
const tb_receitas = require("./model/tb_receitas")
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const tb_usuarios = require("./model/tb_usuarios")
const Tables = require ('./tables.js');
const tb_likes = require("./model/tb_likes");


Tables.start();
console.log(tb_likes === sequelize.models.tb_likes);



// console.log("tb_receitas:" + tb_receitas === sequelize.models.tb_receitas);
// tb_usuarios.findAll({
//     include:[
//         {
//             model:tb_receitas,
//             required: true
//         }
//     ]
// }).then(res=>{
//     console.log(res)
// })



    
