let img = document.getElementsByTagName("img")[0];
let name1 = document.getElementById("name");
let price = document.getElementById("price");
let data = document.getElementById("data");
let rate = document.getElementById("rating");


let b = document.getElementById("username11");
window.onload = function(){ 
    if (localStorage.getItem(`loginuser`)) {
        let prof = JSON.parse(localStorage.getItem(`loginuser`));
        let prof1 = prof.username;
        b.innerHTML = prof1;
} 
}


let numOfElement = localStorage.getItem("clickedElement");
let obj = JSON.parse(localStorage.getItem(`tovar ${numOfElement}`));

img.src = obj.img;
name1.innerHTML = obj.name1;
price.innerHTML = obj.price + " $";
// data.innerHTML = obj.data;
rate.innerHTML = obj.rate;