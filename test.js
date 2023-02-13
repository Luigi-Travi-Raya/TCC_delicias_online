const tb_comentarios = require("./model/tb_comentarios")
const tb_receitas = require("./model/tb_receitas")
const tb_usuarios = require("./model/tb_usuarios")
const fs = require('fs')


const test = async ()=>{
    let counter = 0
    let ingredientes_receita = []
    await tb_receitas.findAll({}).then(resultQuery=>{
        resultQuery.forEach(recipe => {
            ingredientes_receita[counter] = recipe.ingredientes_receita.replaceAll('\r', '').split("\n")
            if(ingredientes_receita[counter].length != 1 && typeof ingredientes_receita != "undefined"){
                for (let insideCounter = ingredientes_receita[counter].length - 1; insideCounter > 0 ; insideCounter--){
                    if(ingredientes_receita[counter][insideCounter] == ""){
                        ingredientes_receita[counter].splice(insideCounter,1)
                    }else{
                        ingredientes_receita[counter][insideCounter] = ["$%|" + ingredientes_receita[counter][insideCounter]]
                    }
                }
            }

            ingredientes_receita[counter] = ["$%|" + ingredientes_receita[counter]]
            counter++
        });
        
    })
    return ingredientes_receita
}



test().then(res=>{
    console.log(res)
})


