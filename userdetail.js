
let b = document.getElementById("username11");
window.onload = function(){ 
    if (localStorage.getItem(`loginuser`)) {
        let prof = JSON.parse(localStorage.getItem(`loginuser`));
        let prof1 = prof.username;
        b.innerHTML = prof1;
} 
}

function openUserProducts() {
    window.location.href = "newproduct.html";
}

// let logOut = document.getElementById("logBtn");
// logOut.addEventListener("click", ()=> {
    
//     localStorage.removeItem("loginuser");
//     window.location.href = "index.html";
// })

let arrOfAcc = [];
let count = +localStorage.getItem("num");
for(let i = 0; i<count; i++) {
    arrOfAcc.push(JSON.parse(localStorage.getItem(`user${i}`)));
}

console.log(arrOfAcc);



let user = document.getElementById("user");
let loggedInUser = JSON.parse(localStorage.getItem("loginuser")).username;
let nameP = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let username = document.getElementById("username");  
// let userNum = +localStorage.getItem("clickcount");
let obj;
arrOfAcc.forEach(account => {
    if (loggedInUser == account.username) {
        obj = account;
    }
})

// console.log(obj);

if(localStorage.getItem("loggedInUser")) {
    // user.innerHTML = loggedInUser;
    nameP.innerHTML = obj.name1;
    surname.innerHTML = obj.surname;
    email.innerHTML = obj.email;
    username.innerHTML = obj.username;
    
} else {
    user = "username";
}
