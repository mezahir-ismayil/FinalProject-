let tbody = document.getElementsByClassName("newproduct")[0];
let id = 1;

for(let i=0;i<localStorage.length;i++){
    if(!localStorage.key(i).search("custom")){
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let tr = document.createElement("tr");
        tr.innerHTML = `
         <td>${id++}</td>
    <td>${obj.brand}</td>
    <td>${obj.model}</td>
    <td>${obj.categories}</td>
    <td><img src="${obj.img}" alt=""></td>
    <td>${obj.price}</td>
    <td><button onclick="redact(${localStorage.key(i)} )">Редактировать</button></td>;
    <td><button onclick="deleteCustom(${i})">Delete</button></td>`;
    tbody.append(tr);
    function deleteCustom(index){
        localStorage.removeItem(localStorage.key(index));
        window.location.reload();
    }
    function redact(index){
        localStorage.setItem("editKey",key);
        window.location.href = `creatproduct.html`
    }
    }
}