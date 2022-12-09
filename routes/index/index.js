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
            for(i=0;i<resultQueryLikes.length;i++){
                for(j=0;j<recipe.length;j++){
                    if(recipe[j]["id_receita"] == resultQueryLikes[i]["id_receita"]){
                        recipe[j]["likedByUser"] = true;
                        
                    }
                }
            }
        }
        return recipe
    }catch(err){
        console.log(err)
    }

}

module.exports = Index;