function pasTouche1(){
    document.getElementById("left_aside").innerHTML = "Touche pas à ça !!!"
}
function pasTouche2(){
    document.getElementById("center_aside").innerHTML = "J'ai dis touche pas !!!"
}
function pasTouche3(){
    document.getElementById("right_aside").innerHTML = "Tu vas tout casser..."
}

document.addEventListener("mouseup", pasTouche1);
document.addEventListener("click", pasTouche2);
document.addEventListener("click", pasTouche3);