let bulbimgEl = document.getElementById("bulbimg"); // to change the bulb image we need to identify it first 
let catimgEl = document.getElementById("catimg");
let modeChangeEl = document.getElementById("modeChange");
let offButtonEl = document.getElementById("offButton");
let onButtonEl = document.getElementById("onButton");

function offcat(){
    bulbimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    modeChangeEl.textContent = " Switch OFF ";
    offButtonEl.style.backgroundColor = "red"
    onButtonEl.style.backgroundColor= "grey";
    
}


function oncat(){
    bulbimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    modeChangeEl.textContent = " Switch ON ";
    offButtonEl.style.backgroundColor = "grey"
    onButtonEl.style.backgroundColor = "green";
}