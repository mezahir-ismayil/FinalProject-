let arr = []; 

for(let i=0;i<localStorage.length;i++){
    let tbody = document.getElementsByClassName("addedElements")[0];
    if(!localStorage.key(i).search("custom")){
        let objOfElement = JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(i);
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td><img src="${objOfElement.img}" alt="">
        ${objOfElement.name1}</td>
        <td>${objOfElement.price}</td>
        <td> <input oninput="func2(${i}) class="inpp1" type="number"></td>
    <td class="sub"></td>
    <td><button onclick="deleteCustom(${i})">Delete</button></td>`;
    function func2(index){
        let a = arr.indexOf(index)
        let sub = document.getElementsByClassName("sub");
        let inp1 = document.getElementsByClassName("inpp1");
        sub[a].innerHTML = inp1[a].value * JSON.parse(localStorage.getItem(localStorage.key(index))).price;
        objOfElement.sub = sub.innerHTML
    }
    tbody.append(tr);
    function deleteCustom(index){
        localStorage.removeItem(localStorage.key(index));
        window.location.reload();
    }
    }
}