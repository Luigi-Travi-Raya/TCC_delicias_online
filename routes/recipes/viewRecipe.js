const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');

const viewRecipe = {
    route: (req,res)=>{
        tb_receitas.findAll({where:{id_receita:req.params.id}}).then(resultQuery=>{
            res.render("recipe.pug", {
                recipe: resultQuery
            })

        })
    }
}

module.exports = viewRecipe;