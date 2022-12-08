function teste(recipeId){
    console.log("test")
    axios.post("/like",{
        method:"post",
        params:{
            recipeId:recipeId
        }
    }).then((response)=>{
        let likeBtn = document.getElementById(`likeBtn${recipeId}`)
        console.log(response)
        likeBtn.classList.add("fa-solid")
        likeBtn.classList.remove("fa-regular")
    }).catch(err=>{
        console.log(err)
    })
        
}