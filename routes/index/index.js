const tb_likes = require('../../model/tb_likes');
const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');
const getRecipes = require('../../utils/getRecipes.js')

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

module.exports = Index;