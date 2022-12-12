const tb_likes = require("../../model/tb_likes");
const tb_receitas = require("../../model/tb_receitas");
const tb_usuarios = require("../../model/tb_usuarios");


const Save = {
    route: async(req,res)=>{
        if(req.session.isLogged){
            let recipes = await getRecipes(req.session.isLogged, req.session.userId)
            console.log(recipes)
            res.render('saved',{
                userId:req.session.userId,
                userName:req.session.username,
                userEmail:req.session.userEmail, 
                isLogged:req.session.isLogged,
                recipes:recipes});
        }else
            res.redirect('/')

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

module.exports = Save;