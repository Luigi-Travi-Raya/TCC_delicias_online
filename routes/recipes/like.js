const formidable = require('formidable');
const tb_likes = require('../../model/tb_likes');

const Like = {
    like:(req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, (err1,fields,files)=>{
            console.log(fields)
            tb_likes.create({
                id_receita: fields.recipeId ?? 13,
                id_usuario: req.session.userId
            }).then(()=>{
                console.log("awoiuhdaoiudhaiurd")
                res.send("iauowhduiawdhoILUEFHWEIOPUGFHWAEUKKARDOIPGHJSEDRLHJMDRSLKÇGHMSDFLÇJKGM")
            }).catch(err=>{
                console.log(err)
            })
        })
    }
}

module.exports = Like