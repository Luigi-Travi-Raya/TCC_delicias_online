const tb_comentarios = require('../../model/tb_comentarios');
const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');
const getComments = require('../../utils/getComments');


const viewRecipe = {
    route: async (req,res)=>{
        getComments(req.params.id).then(comments=>{
            console.log(comments)
            tb_receitas.findAll({where:{id_receita:req.params.id}}).then(resultQuery=>{
                console.log(comments)
                res.render("recipe.pug", {
                    recipe: resultQuery,
                    isLogged: req.session.isLogged,
                    userId: req.session.userId,
                    comments
                })
            })
        }
        )
    }
}

module.exports = viewRecipe;