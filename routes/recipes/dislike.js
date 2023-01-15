const formidable = require('formidable');
const tb_likes = require('../../model/tb_likes');

const Dislike = {
    dislike:(req,res)=>{
        tb_likes.destroy({
            where:{id_receita: req.body.params.recipeId}
        }).then(()=>{
            res.end()
        }).catch(err=>{
            console.log(err)
        })
    }
}

module.exports = Dislike