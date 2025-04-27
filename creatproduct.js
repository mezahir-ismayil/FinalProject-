let inp = document.getElementById("Img");
inp.addEventListener("input", ()=>{
    let img1 =  document.getElementById("img1");
    img1.src = inp.value;
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

function func1(){
    let br  = document.getElementById("brand")
    let md  = document.getElementById("model")
    let ct = document.getElementById("categories")
    let ds = document.getElementById("Description")
    let pr = document.getElementById("price")    
    let img1 =  document.getElementById("img1");
    obj.brand = br.value
    obj.model = md.value
    obj.categories = ct.value
    obj.description = ds.value
    obj.price = pr.value           
    obj.img = img1.src           
localStorage.setItem(`product${b++}`,JSON.stringify(obj))
alert("суксесфул")
location.href = `newproduct.html`
}


for(let i = 0; i<img1.length;i++){
    if(img1[i]){
        let br  = document.getElementById("brand")[i]
        let md  = document.getElementById("model")[i]
        let ct = document.getElementById("categories")[i]
        let ds = document.getElementById("Description")[i]
        let pr = document.getElementById("price")[i]
        let img1 =  document.getElementById("img1");[i]
        obj.brand = br.value
        obj.model = md.value
        obj.categories = ct.value
        obj.description = ds.value
        obj.price = pr.value           
        obj.img = img1.src 
            localStorage.setItem(`custom ${i}`,JSON.stringify(CustomObj));
        }
    }


// localStorage.clear()