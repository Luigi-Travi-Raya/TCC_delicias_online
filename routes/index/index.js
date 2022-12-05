const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');

async function getRecipes(recipeQueryResult){
    let recipes = []
    recipeQueryResult.forEach( recipe => {
        tb_usuarios.findByPk(recipe.id_autor_usuario).then(userQueryResult=>{
            recipe["nome_autor_usuario"] = userQueryResult.nome_usuario;
            recipes.push(recipe);
        })
    })
    console.log(recipes)
    recipes
}


const Index = {
    action:(req,res)=>{
        tb_receitas.findAll().then(async recipeQueryResult=>{
                res.render('index',{
                    userName:req.session.username,
                    userId:req.session.userId,
                    isLogged:req.session.isLogged,
                    recipes: getRecipes(recipeQueryResult)
                });
            })

        }
    }
module.exports = Index;