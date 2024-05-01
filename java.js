
let BoLike = document.getElementById("BotonLike")
let p = document.getElementById("contador")


function contar(){
    p.innerHTML= parseInt(p.innerHTML)+1
}


BoLike.addEventListener("click",function(){
    contar()
})