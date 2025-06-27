let inp = document.getElementById("Img");
inp.addEventListener("input", ()=>{
    let img1 =  document.getElementById("img1");
    img1.src = inp.value;
})



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


let obj = {
    brand:"",
    model:"",
    categories:"",
    description:"",
    price:"",
    img:"",
};
 
b = 0;  

    let br  = document.getElementById("brand");
    let md  = document.getElementById("model");
    let ct = document.getElementById("categories");
    let ds = document.getElementById("Description");
    let pr = document.getElementById("price");  
    let img1 =  document.getElementById("img1");
    let image = document.getElementById("Img");

function func1(){

    obj.brand = br.value;
    obj.model = md.value;
    obj.categories = ct.value;
    obj.description = ds.value;
    obj.price = pr.value;          
    obj.img = img1.src;       
localStorage.setItem(`product${b++}`,JSON.stringify(obj))
alert("Успешно");
location.href = `newproduct.html`;
}


// for(let i = 0; i<img1.length;i++){
//     if(img1[i]){
//         let br  = document.getElementById("brand")[i]
//         let md  = document.getElementById("model")[i]
//         let ct = document.getElementById("categories")[i]
//         let ds = document.getElementById("Description")[i]
//         let pr = document.getElementById("price")[i]
//         let img1 =  document.getElementById("img1");[i]
//         obj.brand = br.value
//         obj.model = md.value
//         obj.categories = ct.value
//         obj.description = ds.value
//         obj.price = pr.value           
//         obj.img = img1.src 
//             localStorage.setItem(`custom ${i}`,JSON.stringify(CustomObj));
//         }
//     }

    
// let rr = localStorage.getItem("redacted");

    //  if(localStorage.getItem("redacted")) {
    //     localStorage.setItem(`${rr}`, JSON.stringify(obj));
    //     // localStorage.removeItem("redacted");
    // } else {
    //     // localStorage.setItem(`Item ${count}`, JSON.stringify(compObj));
    // }
let redactedItem = JSON.parse(localStorage.getItem(localStorage.getItem("redacted")));
console.log(redactedItem);

function writeInfo() {
    br.value = redactedItem.brand;
    model.value = redactedItem.model;
    ct.value = redactedItem.categories;
    ds.value = redactedItem.description;
    pr.value = redactedItem.price;
    img1.src = redactedItem.img; 
    image.value = redactedItem.img;
}


writeInfo();

// localStorage.clear()