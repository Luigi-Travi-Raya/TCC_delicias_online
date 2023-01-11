const tb_comentarios = require("../../model/tb_comentarios");

const addComment = {
    post: (req,res)=>{
        console.log(req.body)
        tb_comentarios.create({
            id_usuario: req.body.userId,
            id_receita: req.body.recipeId,
            texto_comentario: req.body.commentText
        })
        res.end();
    }
}

module.exports = addComment