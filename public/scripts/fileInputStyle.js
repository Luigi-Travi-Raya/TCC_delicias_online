function changeStyle(){
    let fileLabel = document.getElementById("input_img");
    let fileInput = document.getElementById("img").files
    console.log(fileInput)
    if(FileReader && fileInput.length){
        let fr = new FileReader();
        fr.onload = ()=>{
            fileLabel.innerHTML = `<img src="${fr.result}" class="p-3 overflow-hidden text-ellipsis break-word"></p>`; 
        }
        fr.readAsDataURL(fileInput[0]);
        
    }else{
        fileLabel.innerHTML = `<p  class="p-3 overflow-hidden text-ellipsis break-word"> ${fileInput[0]['name']}</p>`;
    }
}