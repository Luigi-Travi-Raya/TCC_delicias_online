const tb_comentarios = require('../../model/tb_comentarios');
const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');


const viewRecipe = {
    route: async (req,res)=>{
        let comments = await tb_comentarios.findAll({where:{id_receita:req.params.id}}).catch(err=>{console.log(err)})
        tb_usuarios.findAll().then(resultUserQuery=>{
            for(i=0; i<comments.length; i++){
                for(j=0; j<resultUserQuery.length; j++){
                    if(comments[i]["id_usuario"] == resultUserQuery[j]["id_usuario"]){
                        comments[i]["nome_autor"] = resultUserQuery[j]["nome_usuario"]
                        comments[i]["nome_foto_autor"] = resultUserQuery[j]["nome_foto_usuario"]
                    }
                }
            }
        }).catch(err=>{
            console.log(err)
        })

        tb_receitas.findAll({where:{id_receita:req.params.id}}).then(resultQuery=>{
            res.render("recipe.pug", {
                recipe: resultQuery,
                isLogged: req.session.isLogged,
                userId: req.session.userId,
                comments
            })
        })
    }
}

module.exports = viewRecipe;