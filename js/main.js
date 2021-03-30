var compteurImage=1;
var totalimage=11;
function slider(x){
      var image = document.getElementById('img');
      compteurImage = compteurImage + x;
      image.src= "images/pexel"+ compteurImage+ ".jpg";
      if(compteurImage>=totalimage)
      {
            compteurImage =1;
      }
      if(compteurImage<1){compteurImage = totalimage;}
}

function sliderAuto(x){
      var image = document.getElementById('img');
      compteurImage = compteurImage + 1;
      image.src= "images/pexel"+ compteurImage+ ".jpg";
      if(compteurImage>=totalimage)
      {
            compteurImage =1;
      }
      if(compteurImage<1){compteurImage = totalimage;}
}
window.setInterval(sliderAuto,3000);