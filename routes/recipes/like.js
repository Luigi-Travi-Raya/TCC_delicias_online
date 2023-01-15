const formidable = require('formidable');
const tb_likes = require('../../model/tb_likes');

const Like = {
    like:(req,res)=>
        tb_likes.create({
            id_receita: req.body.params.recipeId,
            id_usuario: req.session.userId
        }).then(()=>{
            console.log("Like salvo")
             res.end()
        }).catch(err=>{
            console.log(err)
        })
    }
module.exports = Like