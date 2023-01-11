const tb_comentarios = require("../model/tb_comentarios")
const tb_usuarios = require("../model/tb_usuarios")

const getComments = async (recipeId)=>{
    let comments = await tb_comentarios.findAll({where:{id_receita:recipeId}}).catch(err=>{console.log(err)})
    tb_usuarios.findAll().then(resultUserQuery=>{
        for(i=0; i<comments.length; i++){
            for(j=0; j<resultUserQuery.length; j++){
                if(comments[i]["id_usuario"] == resultUserQuery[j]["id_usuario"]){
                    comments[i]["nome_autor"] = resultUserQuery[j]["nome_usuario"]
                    comments[i]["nome_foto_autor"] = resultUserQuery[j]["nome_foto_usuario"]
                }
            }
        }
        console.log("retornando valores")
        return comments
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = getComments;

