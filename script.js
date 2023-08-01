let divRef = document.querySelector("div");
let buttonAqua = document.getElementById("aqua");
let buttonTeal = document.getElementById("teal");
let buttonPink = document.getElementById("pink");
let buttonPurple = document.getElementById("purple");
let buttonColorless = document.getElementById("colorless");

function changeToAqua() {
    divRef.style.backgroundColor = "aqua";
}
function changeToTeal() {
    divRef.style.backgroundColor = "teal";
}
function changeToPink() {
    divRef.style.backgroundColor = "pink";
}
function changeToPurple() {
    divRef.style.backgroundColor = "purple";
}
function changeToColorless() {
    divRef.style.backgroundColor = "white";
}
buttonAqua.addEventListener("click", changeToAqua);
buttonTeal.addEventListener("click", changeToTeal);
buttonPink.addEventListener("click", changeToPink);
buttonPurple.addEventListener("click", changeToPurple);
buttonColorless.addEventListener("click", changeToColorless);
