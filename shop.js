


let basketBtn = document.getElementsByClassName("add")
let CustomObj = {
img:"",
name1:"",    
price:"",
description:"",
rate:"",
}


for(let i = 0; i<basketBtn.length;i++){
 let p1 = document.getElementsByClassName("red")[i];
p1.innerHTML =  Math.floor(Math.random() * 3000)
    if(basketBtn[i]){
        basketBtn[i].addEventListener("click",()=>{
            let img = document.getElementsByTagName("img")[i];
            let nameofcustom = document.getElementsByTagName("h3")[i];
            let price = document.getElementsByClassName("red")[i];
            let rate = document.getElementsByClassName("rate")[i];
            CustomObj.img = img.src;
            CustomObj.name1 = nameofcustom.innerHTML;
            CustomObj.price = price.innerHTML;
            CustomObj.rate = rate.innerHTML;
            localStorage.setItem(`custom ${i}`,JSON.stringify(CustomObj));
        })
    }
}
let CustomObj2 = {
    img:"",
    name1:"",    
    price:"",
    description:"",
    }

for(let i = 0; i<basketBtn.length;i++){
    let img = document.getElementsByTagName("img")[i];
    let nameofcustom = document.getElementsByTagName("h3")[i];
    let price = document.getElementsByClassName("red")[i];
    let rate = document.getElementsByClassName("rate")[i];
    CustomObj2.img = img.src;
    CustomObj2.name1 = nameofcustom.innerHTML;
    CustomObj2.price = price.innerHTML;
    CustomObj2.rate = rate.innerHTML;
    localStorage.setItem(`tovar ${i}`,JSON.stringify(CustomObj2));
}

let images = document.getElementsByTagName("img");
for(let k = 0;k<images.length;k++){
    images[k].addEventListener("click",()=>{
        localStorage.setItem("clickedElement",k);
window.location.href = "detail1.html";
    })
}
const shopContainer = document.getElementById("shop-products");
const products = JSON.parse(localStorage.getItem("products")) || [];

if (products.length === 0) {
    shopContainer.innerHTML = "<p>Нет товаров</p>";
} else {
    products.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("product");
        item.innerHTML = `
            <img src="${product.imgUrl}" alt="${product.model}" width="150">
            <h4>${product.brand} ${product.model}</h4>
            <p>${product.description}</p>
            <span>$${product.price}</span>
        `;
        shopContainer.appendChild(item);
    });
}