const formidable = require("formidable");
const getRecipes = require("../../utils/getRecipes");

const searchRecipes = {
    route: async (req,res)=>{
        let form = new formidable.IncomingForm();
        form.parse(req,async function (err1, fields, files){
            console.log("Search Term:: "+fields.search)
            recipes = await getRecipes(req.session.isLogged,req.session.userId, fields.search);
            res.render('busca',{
                userName:req.session.username,
                userId:req.session.userId,
                isLogged:req.session.isLogged,
                recipes: recipes,
                searchTerm: fields.search 
            } )
        })
    }
}

module.exports=searchRecipes