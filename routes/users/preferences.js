const formidable = require('formidable');
const tb_usuarios = require('../../model/tb_usuarios');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');


const Edit = {
    route:(req,res,edit_pswrd)=>{
        if(edit_pswrd){
            if(!req.session.isLogged)
                res.redirect('/');
            else{
                res.render('preferencia', {editPassword: true, isLogged:req.session.isLogged, userName:req.session.username});
                console.log("Acessando preferencia.pug")
            }
        }else{
            if(!req.session.isLogged)
                res.redirect('/');
            else{
                tb_usuarios.findAll({ where:{id_usuario: req.session.userId}}).then(result=>{
                    req.session.userEmail = result[0]["email_usuario"];
                    res.render('preferencia', {
                        userName:req.session.username,
                        userEmail:req.session.userEmail, 
                        isLogged:req.session.isLogged, 
                        editPassword: false, 
                        erro: req.session.errEdit});
                    console.log("Acessando edita.pug")
                })
            }
        }
    },
    editData:(req,res)=>{
            let form = new formidable.IncomingForm();
            form.parse(req, (err1,fields,files)=>{
                
                if(fields.name=="" || fields.email==""){
                    console.log("Preencher todos campos");
                    req.session.errEdit = "missing_fields";
                    return res.redirect('/preferences');
                }
                tb_usuarios.findAll({where:{nome_usuario: fields.name }}).then(result=>{
                    if(result != "" && result[0]['id_usuario'] != req.session.userId){
                        req.session.errEdit = "user_taken";
                        return res.redirect('/preferences');
                    }

                    tb_usuarios.findAll({where:{email_usuario: fields.email }}).then(result=>{
                        if(result != "" && result[0]['id_usuario'] != req.session.userId){
                            req.session.errEdit = "email_exists";
                            return res.redirect('/preferences');
                        }
                        let imgPath = files.img.filepath;
                        let hash = crypto.createHash('md5').update(Date.now().toString()).digest('hex');
                        let imgName = hash + '.' + files.img.mimetype.split('/')[1];

                        let newImgPath = path.join(__dirname, '../../public/img' , imgName);
                        fs.rename(imgPath, newImgPath, (err) => { if (err) throw err})

                            tb_usuarios.update({
                                nome_usuario: fields.name,
                                email_usuario: fields.email,
                                nome_foto_usuario: imgName
                            },{where:{id_usuario: req.session.userId}} 
                            ).then(()=>{
                                tb_usuarios.findAll({where:{email_usuario:fields.email}}).then(result=>{
                                     req.session.userId = result[0]["id_usuario"];         
                                     req.session.username = fields.name
                                     req.session.isLogged = true;
                                     return res.redirect('/');
                                 })
                             })

                    })
                })
        })
    },
    editPassword:(req,res)=>{
        let form = new formidable.IncomingForm();

        form.parse(req, (err1,fields,files)=>{
            if(fields['password'] == "" || fields['new_password'] == "" || fields['confirm_password'] == ""){
                console.log(`Campos não preenchidos`)
                req.session.errEditPassword = "missing_fields";
                return res.redirect('/change_password')
            }
            
            if(fields['new_password'] != fields['confirm_password']){
                console.log(`senhas nao correspondem`)
                req.session.errEditPassword = "diferent_passwords";
                return res.redirect('/change_password')
            }

            tb_usuarios.findAll({where:{id_usuario:req.session.userId}}).then(queryResult=>{
                bcrypt.compare(fields['password'], queryResult[0]['senha_usuario']).then(compareResult=>{
                    if(compareResult){
                        
                        console.log("senha alterada")
                    }else{
                        console.log("senhas diferente da atual")
                    }
                })
            })
        })
    }
}
module.exports = Edit;