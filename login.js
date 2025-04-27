let i1 = document.getElementById("inp12")
let i2 = document.getElementById("inp22")
let ii3 = localStorage.getItem("name")
let ii4 = localStorage.getItem("password")
let btn = document.getElementById("btn2")
function func20(){
    if(i1.value == ii3.value && i2.value == ii4.value){
        alert("ты зарегался харош")
        location.href("index.html")
    }else{
        alert("что то неправильно")
    }
}
