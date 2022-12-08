const tb_likes = require('../../model/tb_likes');
const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');

const Index = {
    action:async (req,res)=>{
        recipes = await getRecipes(req.session.isLogged,req.session.userId);
        res.render('index',{
            userName:req.session.username,
            userId:req.session.userId,
            isLogged:req.session.isLogged,
            recipes: recipes 
        } )
    }
}


async function getRecipes(isLogged,userId){
    try{
        let recipe =  await tb_receitas.findAll();
        for(i = 0; i<recipe.length; i++){
            await tb_usuarios.findByPk(recipe[i]["id_autor_usuario"]).then(queryResult=>{
                recipe[i]["nome_autor_usuario"] = queryResult.nome_usuario;
            })
        }

        if(isLogged){
            resultQueryLikes = await tb_likes.findAll({where:{id_usuario: userId}})
            for(i = 0; i<resultQueryLikes.length; i++){
                await tb_receitas.findAll({where:{id_receita: resultQueryLikes[i]["id_receita"]}}).then(recipeResult=>{
                    console.log(`comparing: ${recipeResult[0]['id_receita']} with ${recipe[i]["id_receita"]} `)
                    if(recipeResult[0]['id_receita'] == recipe[i]["id_receita"])
                        recipe[i]["likedByUser"] = true;
                })
            }
        }

        return recipe
    
    }catch(err){
        console.log(err)
    }

}

module.exports = Index;
