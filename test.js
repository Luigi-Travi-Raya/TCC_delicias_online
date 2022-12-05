const tb_receitas = require("./model/tb_receitas")
const tb_usuarios = require("./model/tb_usuarios")

async function getRecipes(){
    try{
        let recipes = [];
        let result =  await tb_receitas.findAll();
        for(i = 0; i<result.length; i++){
            await tb_usuarios.findByPk(result[i]["id_autor_usuario"]).then(queryResult=>{
                console.log(result[i]+" "+i);
                result[i]["nome_autor_usuario"] = queryResult.nome_usuario;
                recipes.push(result);
            })
        }
        return recipes
    }catch(err){
        console.log(err)
    }
}

teste()