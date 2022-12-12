function likePostRequest(recipeId){
    console.log("test")
    axios.post("/like",{
        method:"post",
        params:{
            recipeId:recipeId
        }
    }).catch(err=>{
        console.log(err)
    })

    let likeIcon = document.getElementById(`likeIcon${recipeId}`)
    likeIcon.style.color = "#900C3E"
    let likeBtn = document.getElementById(`likeBtn${recipeId}`)
    likeBtn.setAttribute("onclick",`dislikePostRequest(${recipeId})`)
        
}

function dislikePostRequest(recipeId){
    axios.post("/dislike",{
        method:"post",
        params:{
            recipeId:recipeId
        }
    }).catch(err=>{
        console.log(err)
    })

    let likeIcon = document.getElementById(`likeIcon${recipeId}`)
    likeIcon.style.color = "#878787"
    let likeBtn = document.getElementById(`likeBtn${recipeId}`)
    likeBtn.setAttribute("onclick",`likePostRequest(${recipeId})`)
}