const tb_categorias = require("./model/tb_categorias")
const tb_comentarios = require("./model/tb_comentarios")
const tb_receitas = require("./model/tb_receitas")
const tb_usuarios = require("./model/tb_usuarios")

tb_usuarios.findAll({
    where:{id_usuario: tb_receitas.id_autor_usuario}
}).then(res=>{
    console.log(res)
})



    
