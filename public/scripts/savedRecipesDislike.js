function dislikePostRequest(recipeId){
    axios.post("/dislike",{
        method:"post",
        params:{
            recipeId:recipeId
        }
    }).catch(err=>{
        console.log(err)
    })

    let card = document.getElementById(`card${recipeId}`)
    card.style.display = "none"

}