let dogDisplay = document.getElementById("image")

function upDate(previewPic){
  dogDisplay.innerHTML = previewPic.alt
  dogDisplay.style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo(){
    dogDisplay.innerHTML = "Hover over an image below to display here."
    dogDisplay.style.backgroundImage = "url(" + '' + ")";
}