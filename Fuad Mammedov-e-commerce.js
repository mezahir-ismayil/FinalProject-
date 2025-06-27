let btn1 = document.getElementsByClassName("btn")[0];
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


btn1.addEventListener("click",()=>{
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
    location.href = "login.html";
})
// localStorage.clear()