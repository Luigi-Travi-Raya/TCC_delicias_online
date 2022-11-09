const formidable = require('formidable');
const tb_usuarios = require('../../model/tb_usuarios');
const bcrypt = require('bcrypt');

const Edit = {
    route:(req,res)=>{
        if(!req.session.isLogged)
            res.redirect('/')
        res.render('preferencia', {username:req.session.username, isLogged:req.session.isLogged});
        console.log("Acessando edita.pug")
    },
    action:(req,res)=>{
            res.redirect('/');
        }
    }

module.exports = Edit;