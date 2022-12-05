const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');

const Index = {
    action:async (req,res)=>{
        recipes = await getRecipes();
        res.render('index',{
            userName:req.session.username,
            userId:req.session.userId,
            isLogged:req.session.isLogged,
            recipes: recipes 
        } )
    }
}


async function getRecipes(){
    try{
        let result =  await tb_receitas.findAll();
        for(i = 0; i<result.length; i++){
            await tb_usuarios.findByPk(result[i]["id_autor_usuario"]).then(queryResult=>{
                result[i]["nome_autor_usuario"] = queryResult.nome_usuario;
            })
        }
        return result
    
    }catch(err){
        console.log(err)
    }

}

module.exports = Index;
