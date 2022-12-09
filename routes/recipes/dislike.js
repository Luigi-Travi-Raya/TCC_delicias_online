const formidable = require('formidable');
const tb_likes = require('../../model/tb_likes');

const Dislike = {
    dislike:(req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, (err1,fields,files)=>{
            tb_likes.destroy({
                where:{id_receita: fields.params.recipeId}
            }).then(()=>{
                res.end()
            }).catch(err=>{
                console.log(err)
            })
        })
    }
}

module.exports = Dislike