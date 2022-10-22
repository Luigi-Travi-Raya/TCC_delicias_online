const formidable = require('formidable');

const Registro = {
    route:(req,res)=>{
            res.render('registro');
            console.log("Acessando registro.pug")
    },
    action:(req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, function (err1, fields, files){
            console.log(err1 + "\n")
            console.log(fields.name + "\n")
            console.log(fields.email + "\n")
            console.log(fields.password + "\n")
            console.log(fields.confirm_password + "\n")
            if(fields.name=="" || fields.email=="" || fields.password=="" || fields.confirm_password==""){
                console.log("Preencher todos campos");
                let errRegistro = "missing_fields";
                res.redirect('/login');
            }
            if(fields.password != fields.confirm_password){
                console.log("Senhas diferentes");
                let errRegistro = "passwords_not_matching";
                res.redirect('/registro');
            }
        }
    )}
}

module.exports = Registro;