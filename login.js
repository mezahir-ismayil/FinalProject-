let btn = document.getElementById("btn2")
btn.addEventListener("click",()=>{
    for(let i  = 0 ;i<b; i++){
let obj = JSON.parse(localStorage.getItem(`user${i}`))
let i1 = document.getElementById("inp12")
let i2 = document.getElementById("inp22")
        if(i1.value == obj.name1 && i2.value == obj.password){
            alert("ты зарегался харош")
            location.href("index.html")
            break;
        }else if ((i1.value != obj.name1 && i2.value != obj.password)){

        }
        else{
          continue;
        }
}
    })
    
