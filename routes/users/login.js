const formidable = require('formidable');
const tb_usuarios = require('../../model/tb_usuarios');
const bcrypt = require('bcrypt');

const Login = {
    route:(req,res)=>{
        res.render('login', {erro:req.session.errLogin});
        console.log("Acessando login.pug")
    },
    action:(req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req, function (err1, fields, files){
            
            if(fields.name=="" || fields.password==""){
                console.log("Preencher todos campos");
                req.session.errLogin = "missing_fields";
                return res.redirect('/login');
            }

            tb_usuarios.findAll({
                where:{nome_usuario: fields.name}
            }).then(result=>{
               
                if(result == ""){
                    req.session.errLogin = "wrong_user_password";
                    return res.redirect('/login');
                }

                bcrypt.compare(fields.password, result[0]['senha_usuario'], function(err, resultCompare) {
                    if(!resultCompare){
                        req.session.errLogin = "wrong_user_password";
                        return res.redirect('/login');
                    }
                    req.session.username = result[0]['nome_usuario']
                    req.session.isLogged = true;
                    return res.redirect('/');
                });
            })
        })
    }
}

module.exports = Login;