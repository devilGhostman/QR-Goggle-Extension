var container = document.querySelector(".container");
var qrInput = document.querySelector(".qr-input");
var qrImg = document.querySelector(".qr-image");
var qrcode = document.querySelector(".qr-code");
var butn = document.querySelector(".btn");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    console.log(tab.url);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${tab.url}`;
        qrImg.onload = function () {
          container.classList.add("active");
          qrcode.style.display = "block";
        }
  });

function perform(){
    if(qrInput.value.length > 0){   
        
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrInput.value}`;
        qrImg.onload = function () {
          container.classList.add("active");
          qrcode.style.display = "block";
          butn.style.display = "block";
          butn.innerHTML="Sharable Code";
        }
        
    }

}

function removeperform(){
    if(!qrInput.value){
        container.classList.remove("active");
        qrcode.style.display = "none";
        butn.style.display = "none";
    }
}

qrInput.addEventListener('input',perform);
qrInput.addEventListener('keyup',removeperform);


