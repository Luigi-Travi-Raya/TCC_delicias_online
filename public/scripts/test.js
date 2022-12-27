let ingredientTextArea = document.getElementById("ingredients")

function test(){
    ingredientTextArea = document.getElementById("ingredients")
    console.log(ingredientTextArea.value.split('\n'))
}

function test2(){
    values = ingredientTextArea.value.split('\n')
    for(i=0;i<values.length;i++){
        if(values[i] == "")
            values[i] = null;
        
    }
    console.log(values)
}

