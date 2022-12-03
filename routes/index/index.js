const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');

const Index = {
    action:(req,res)=>{
        let recipes = []
        tb_receitas.findAll().then(async recipeQueryResult=>{
            recipeQueryResult.forEach(recipe => {
                tb_usuarios.findByPk(recipe.id_autor_usuario).then(userQueryResult=>{
                    recipe["nome_autor_usuario"] = userQueryResult.nome_usuario;
                    recipes.push(recipe);
                })
            })
            res.render('index',{
                userName:req.session.username,
                userId:req.session.userId,
                isLogged:req.session.isLogged,
                recipes: recipes
            });
            console.log(recipes)
        })
    }
}
module.exports = Index;