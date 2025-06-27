let b = document.getElementById("username11");
window.onload = function(){ 
    if (localStorage.getItem(`loginuser`)) {
        let prof = JSON.parse(localStorage.getItem(`loginuser`));
        let prof1 = prof.username;
        b.innerHTML = prof1;
} 
}


let logOut = document.getElementById("logBtn");
logOut.addEventListener("click", ()=> {
    
    localStorage.removeItem("loginuser");
    window.location.href = "index.html";
})




let btn1 = document.getElementsByClassName("btn")[0];
let btnC = document.getElementById("btnC");
let obj = {
    name1:"",
    surname:"",
    email:"",
    username:"",
    password:"",
};


  if(!localStorage.getItem("num")){
        localStorage.setItem("num","0");
    }
    let a = +localStorage.getItem("num");


btnC.addEventListener("click",()=>{
    let name = document.getElementById("inp1")
    let surname= document.getElementById("inp2")
    let email = document.getElementById("inp3")
    let username = document.getElementById("inp4")
    let password = document.getElementById("inp5")
    obj.name1 = name.value;
    obj.surname = surname.value;
    obj.email = email.value;
    obj.username = username.value;
    obj.password = password.value;
    localStorage.setItem(`user${a++}`,JSON.stringify(obj));
    localStorage.setItem("num",a);
    window.location.href = "login.html";
})
// localStorage.clear()