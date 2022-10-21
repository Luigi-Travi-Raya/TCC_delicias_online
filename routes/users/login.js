const Login = {
    action:(req,res)=>{
            res.render('login');
            console.log("Acessando login.pug")
    }
}

module.exports = Login;