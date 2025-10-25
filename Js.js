let body = document.querySelector(`body`)

let ism = document.getElementById("ism");

let logo = document.getElementById("logo");

let DarkModebtn = document.getElementById("DarkModebtn");
let LightModebtn = document.getElementById("LightMode");


function DarkMode() {
    body.style.backgroundColor = "black"
    body.style.color = "white"
   DarkModebtn.style.backgroundColor = "#FA9021"
   LightModebtn.style.backgroundColor = "#C4B5A5"
}

function LightMode() {
    body.style.backgroundColor = "#C4B5A5"
    body.style.color = "black"
   LightModebtn.style.backgroundColor = "#FA9021"
   DarkModebtn.style.backgroundColor = "black"
}
