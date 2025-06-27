// let tbody = document.getElementsByClassName("newproduct")[0];
// let id = 1;



// let b = document.getElementById("username11");
// window.onload = function(){ 
//     if (localStorage.getItem(`loginuser`)) {
//         let prof = JSON.parse(localStorage.getItem(`loginuser`));
//         let prof1 = prof.username;
//         b.innerHTML = prof1;
// } 
// }

// let logOut = document.getElementById("logBtn");
// logOut.addEventListener("click", ()=> {
    
//     localStorage.removeItem("loginuser");
//     window.location.href = "index.html";
// })

// let user = document.getElementById("user");
// let loggedInUser = localStorage.getItem("loginuser");


function logOut()  {
    window.location.href = "index.html";
    localStorage.removeItem("loginuser");
}
function newComp() {
    window.location.href = "creatproduct.html";
}
let user = document.getElementById("user");
let loggedInUser = JSON.parse(localStorage.getItem("loginuser")).username;

if(localStorage.getItem("loggedInUser")) {
    user.innerHTML = loggedInUser;
    
} else {
    user = "username";
}


// for(let i=0;i<localStorage.length;i++){
//     if(!localStorage.key(i).search("custom")){
//         let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
//         let tr = document.createElement("tr");
//         tr.innerHTML = `
//          <td>${id++}</td>
//     <td>${obj.brand}</td>
//     <td>${obj.model}</td>
//     <td>${obj.categories}</td>
//     <td><img src="${obj.img}" alt=""></td>
//     <td>${obj.price}</td>
//     <td><button onclick="redact(${localStorage.key(i)} )">Редактировать</button></td>;
//     <td><button onclick="deleteCustom(${i})">Delete</button></td>`;
//     tbody.append(tr);
//     function deleteCustom(index){
//         localStorage.removeItem(localStorage.key(index));
//         window.location.reload();
//     }
//     function redact(index){
//         localStorage.setItem("editKey",key);
//         window.location.href = `creatproduct.html`
//     }
//     }
// }



let tbody = document.getElementById("addedItems");
let count = +localStorage.getItem("clickedElement");
let id = 1;
let tr;
window.onload = function () {
    if(localStorage.getItem("redacted")) {
        localStorage.removeItem("redacted");
    }

    for(let i =0; i<=count; i++) {
        let items = JSON.parse(localStorage.getItem(`product${i}`));
        if (JSON.parse(localStorage.getItem(`product${i}`))) {
            tr = document.createElement("tr");
            // for(let k = 1; k<=8; k++) {
            //     let td = document.createElement("td");
            //     td.innerHTML = items.brand; 
            //     tr.append(td);
            // }
            tr.innerHTML = `
            <td>${1110+id++}</td>
            <td>${items.brand}</td>
            <td>${items.model}</td>
            <td>${items.categories}</td>
            <td><img src ="${items.img}" class="img" ></td>
            <td>${items.price} $</td>
            <td>${id-1}/${count}</td>
            <td> 
                <button onclick="redact(${i})" class="bt1">Редактировать</button>
                <button onclick="deleteI(${i})" class="bt2">Удалить</button>
            </td>            
        
        `;
            tbody.append(tr);
            // <td><img src="${pc.image}" alt="${pc.name}" width="50"></td>
            // <td>
            //     <button class="btn btn-secondary" onclick="editPc(${pc.id})">Customize</button>
            //     <button class="btn btn-danger" onclick="removePc(${pc.id})">Remove</button>
            // </td>
        } else {
            continue;
        }
    }
}
    function deleteI(index) {
        localStorage.removeItem(`product${index}`);
        window.location.reload(); 
    }

    function redact(index) {
        window.location.href = "creatproduct.html";
        localStorage.setItem("redacted", `product${index}`);
    }