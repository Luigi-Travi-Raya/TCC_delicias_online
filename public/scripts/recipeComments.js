function postComment(recipeId, userId){
    let commentText = document.getElementById("textarea-comment").value
    console.log(commentText)
    axios.post("/post_comment",{
        recipeId: recipeId,
        userId: userId,
        commentText: commentText
    }).then(response=>{
        document.getElementById("textarea-comment").value = ""
        document.getElementById("textarea-comment").style = "border-color: green"
        console.log(`comentario postado com sucesso! ${response}`)
    }).catch(err=>{
        console.log(err.response.data)
    })
}

