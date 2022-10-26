const formidable = require('formidable');
const tb_usuarios = require('../../model/tb_usuarios');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');

const Registro = {
    route:(req,res)=>{
            res.render('registro',{erro:req.session.errRegistro});
            console.log("Acessando registro.pug")
            console.log(req.session.errRegistro);
    },
    action:(req,res,saltRounds)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, function (err1, fields, files){
            
            if(fields.name=="" || fields.email=="" || fields.password=="" || fields.confirm_password==""){
                console.log("Preencher todos campos");
                req.session.errRegistro = "missing_fields";
                res.redirect('/registro');
                res.end();
            }
            if(fields.password != fields.confirm_password){
                console.log("Senhas diferentes");
                req.session.errRegistro = "passwords_not_matching";
                res.redirect('/registro');
                res.end();
            }
            
            tb_usuarios.findAll({
                where: {[Op.or]:[{nome_usuario: fields.name},{email_usuario: fields.email}]}
            }).then(result=>{
                if(result != ""){
                    console.log("Usuário já cadastrado");
                    req.session.errRegistro = "user_exists";
                    res.redirect('/registro');
                    res.end();
                }
            })

            tb_usuarios.findAll({
                where: {email_usuario: fields.email}
            }).then(result=>{
                if(result != ""){
                    console.log("Email já cadastrado");
                    req.session.errRegistro = "email_exists";
                    res.redirect('/registro');
                    res.end();
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

        }
    )}
}

module.exports = Registro;