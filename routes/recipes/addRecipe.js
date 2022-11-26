
const addRecipe = {
    route:(req,res)=>{
        console.log("Acessando add recipe");
        res.render("addRecipe")
    }
}

module.exports = addRecipe;