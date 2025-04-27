let img = document.getElementsByTagName("img")[0];
let name1 = document.getElementById("name");
let price = document.getElementById("price");
let data = document.getElementById("data");

let numOfElement = localStorage.getItem("clickedElement");
let obj = JSON.parse(localStorage.getItem(`tovar ${numOfElement}`));

img.src = obj.img;
name1.innerHTML = obj.name1;
price.innerHTML = obj.price;
data.innerHTML = obj.data;