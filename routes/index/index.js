const Index = {
    action:(req,res)=>{
            res.render('index',{username:req.session.username, isLogged:req.session.isLogged});
            console.log("Acessando Index.pug")
    }
}

module.exports = Index;