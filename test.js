const tb_likes = require('./model/tb_likes.js')
const tb_receitas = require('./model/tb_receitas.js')
const Tables = require ('./tables.js')
userId = 11


async function sexo(){
    let recipe =  await tb_receitas.findAll();
    resultQueryLikes = await tb_likes.findAll({where:{id_usuario: userId}})
    
    for(i = 0; i<resultQueryLikes.length; i++){
        console.log(resultQueryLikes[i]["id_receita"])
        let recipeResult = await tb_receitas.findAll({where:{id_receita: resultQueryLikes[i]["id_receita"]}})
        console.log(`recipes liked: ${recipe[i]["id_receita"]} `)
        recipe[i]["likedByUser"] = true;

    }

    console.log(recipe)
    return recipe
}

console.log(teste2())


async function teste2(){
    let recipe =  await tb_receitas.findAll();
    resultQueryLikes = await tb_likes.findAll({where:{id_usuario: userId}})

    for(i=0;i<resultQueryLikes.length;i++){
        for(j=0;j<recipe.length;j++){
            console.log(`${recipe[j]["id_receita"]} with ${resultQueryLikes[i]["id_receita"]}`)
            if(recipe[j]["id_receita"] == resultQueryLikes[i]["id_receita"]){
                recipe[j]["likedByUser"] = true;
                
            }
        }
    }
    console.log(recipe)
    return recipe
}




















