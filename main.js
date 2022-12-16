var container = document.querySelector(".container");
var generateBtn = document.querySelector(".generate-btn");
var qrInput = document.querySelector(".qr-input"); 
var qrImage = document.querySelector("qr-image");
window.onload=function(){
generateBtn.onclick = function () {      
    if(qrInput.value.length > 0){ 
      generateBtn.innerText = "Generating QR Code..."       
      qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="+qrInput.value;
      qrImage.onload = function () {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code"
      }
    }
}
}