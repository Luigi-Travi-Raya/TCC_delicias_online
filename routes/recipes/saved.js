const tb_likes = require("../../model/tb_likes");
const tb_receitas = require("../../model/tb_receitas");
const tb_usuarios = require("../../model/tb_usuarios");
const getRecipes = require('../../utils/getRecipes.js')

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


module.exports = Save;