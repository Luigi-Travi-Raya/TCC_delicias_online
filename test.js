const tb_categorias = require('./model/tb_categorias.js')
const tb_likes = require('./model/tb_likes.js')
const tb_receitas = require('./model/tb_receitas.js')
const Tables = require ('./tables.js')
userId = 11

tb_categorias.create({
    nome_categoria:"Carnes"
})

tb_categorias.create({
    nome_categoria:"Massas"
})

tb_categorias.create({
    nome_categoria:"Pães"
})

tb_categorias.create({
    nome_categoria:"Vegano"
})

tb_categorias.create({
    nome_categoria:"Low Carb"
})

tb_categorias.create({
    nome_categoria:"Molhos"
})

tb_categorias.create({
    nome_categoria:"Prato Asiático"
})
