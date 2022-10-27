const formidable = require('formidable');
const tb_usuarios = require('../../model/tb_usuarios');
const bcrypt = require('bcrypt');

const Registro = {
    route:(req,res)=>{
            res.render('registro',{erro:req.session.errRegistro});
            console.log("Acessando registro.pug")
    },
    action:(req,res,saltRounds)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, function (err1, fields, files){
            
            if(fields.name=="" || fields.email=="" || fields.password=="" || fields.confirm_password==""){
                console.log("Preencher todos campos");
                req.session.errRegistro = "missing_fields";
                return res.redirect('/registro');
            }
            if(fields.password != fields.confirm_password){
                console.log("Senhas diferentes");
                req.session.errRegistro = "passwords_not_matching";
                return res.redirect('/registro');
            }
            
            tb_usuarios.findAll({
                where: {nome_usuario: fields.name}
            }).then(result=>{
                if(result != ""){
                    console.log("Usuário já cadastrado");
                    req.session.errRegistro = "user_exists";
                    return res.redirect('/registro');
                }
            })

            tb_usuarios.findAll({
                where: {email_usuario: fields.email}
            }).then(result=>{
                if(result != ""){
                    console.log("Email já cadastrado");
                    req.session.errRegistro = "email_exists";
                    return res.redirect('/registro');
                }
            })
            
            bcrypt.hash(fields.password,saltRounds,(err,enc_password) => {
                tb_usuarios.create({
                    nome_usuario: fields.name,
                    email_usuario: fields.email,
                    senha_usuario: enc_password,
                    nome_foto_usuario: null
                })
            })
            req.session.logged = true;
            return res.redirect('/');
        }
    )}
}

module.exports = Registro;