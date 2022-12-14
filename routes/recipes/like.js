const formidable = require('formidable');
const tb_likes = require('../../model/tb_likes');

const Like = {
    like:(req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, (err1,fields,files)=>{
            tb_likes.create({
                id_receita: fields.params.recipeId,
                id_usuario: req.session.userId
            }).then(()=>{
                res.end()
            }).catch(err=>{
                console.log(err)
            })
        })
    }
}

module.exports = Like