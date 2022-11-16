const tb_usuarios = require('../../model/tb_usuarios');

const Index = {
    action:(req,res)=>{
            res.render('index',{userName:req.session.username, userId:req.session.userId, isLogged:req.session.isLogged });
            console.log("Acessando Index.pug")
    }
}
module.exports = Index;