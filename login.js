let num = +localStorage.getItem("num");

let btn = document.getElementById("btn2");
btn.addEventListener("click",()=>{
    for(let i  = 0 ;i< num; i++){
let obj = JSON.parse(localStorage.getItem(`user${i}`));
let i1 = document.getElementById("inp12").value;
let i2 = document.getElementById("inp22").value;

        if (i1 == obj.username && i2 == obj.password){
            alert("ты зарегался харош");
                window.location.href = "index.html";
                if(i1 == obj.username){
                    localStorage.setItem("loginuser",JSON.stringify(obj));
                }
                break;
            }else if ((i1 != obj.username || i2 != obj.password) && i == num-1) {
                alert("неверный пароль или username");
            }
            else{
                continue;
            }
}})
