let title = document.getElementsByClassName("title")[0]
let b = document.getElementById("username11");
// let num = localStorage.getItem("num");
// let prof = JSON.parse(localStorage.getItem(`loginuser`));
// let prof1 = prof.username;
// let log1 = document.getElementById("logBtn");


window.onload = function(){ 
    if (localStorage.getItem(`loginuser`)) {
    window.location.href = "index2.html";
}
}


let logIn = document.getElementById("logBtn");
logIn.addEventListener("click", ()=> {
    window.location.href ="login.html";
})
