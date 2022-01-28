var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)


function clickEventHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", function clickEventHandler)