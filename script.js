let title = document.getElementsByClassName("title")[0]
let b = document.getElementById("username11");
// let num = localStorage.getItem("num");
let prof = JSON.parse(localStorage.getItem(`loginuser`));
let prof1 = prof.username;
let log1 = document.getElementById("logBtn");


window.onload = function(){ 
    if (localStorage.getItem(`loginuser`)) {
    b.innerHTML = prof1;
    log1.innerHTML = "Log out";
} else {
    log1.innerHTML = "Log in";
    b.innerHTML = "usennrname";
}
}

