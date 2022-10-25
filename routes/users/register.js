const formidable = require('formidable');
const tb_usuarios = require('../../model/tb_usuarios');

const Registro = {
    route:(req,res)=>{
            res.render('registro');
            console.log("Acessando registro.pug")
    },
    action:(req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, function (err1, fields, files){

            if(fields.name=="" || fields.email=="" || fields.password=="" || fields.confirm_password==""){
                console.log("Preencher todos campos");
                let errRegistro = "missing_fields";
                res.redirect('/registro');
            }
            if(fields.password != fields.confirm_password){
                console.log("Senhas diferentes");
                let errRegistro = "passwords_not_matching";
                res.redirect('/registro');
            }
            
            tb_usuarios.findAll({
                where: {nome_usuario: fields.name}
            }).then(result=>{
                if(result != ""){
                    console.log("Usuário já cadastrado");
                    let errRegistro = "user_exists";
                    res.redirect('/registro');
                }
            })

            tb_usuarios.findAll({
                where: {email_usuario: fields.email}
            }).then(result=>{
                if(result != ""){
                    console.log("Email já cadastrado");
                    let errRegistro = "email_exists";
                    res.redirect('/registro');
                }
            })
            
        }
    )}
}

module.exports = Registro;