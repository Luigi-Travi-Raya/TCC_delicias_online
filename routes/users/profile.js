const tb_receitas = require('../../model/tb_receitas');
const tb_usuarios = require('../../model/tb_usuarios');

const Profile = {
    route: async(req,res)=>{
        tb_usuarios.findAll({where: {id_usuario: req.params.id}}).then(resultUserData=>{
            tb_receitas.findAll({where:{id_autor_usuario: req.params.id}}).then(resultRecipesData=>{
                res.render('profile',{
                    userId:req.session.userId,
                    userName:req.session.username,
                    userEmail:req.session.userEmail, 
                    isLogged:req.session.isLogged,
                    userData: resultUserData[0],
                    recipes: resultRecipesData
                    });
            })
        })
    }
}

module.exports = Profile;