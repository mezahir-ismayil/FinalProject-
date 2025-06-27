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
