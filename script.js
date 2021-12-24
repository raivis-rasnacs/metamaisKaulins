function roll() {
  for (var i = 1; i<10; i++) {
    setTimeout(function (){

  clearField()
  var randNum = Math.floor((Math.random()*6)+1)
  
  switch (randNum) {
  case 1:
    document.getElementById("5").style.visibility = "visible";
    break;
  case 2:
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("9").style.visibility = "visible";
    break;
  case 3:
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("5").style.visibility = "visible";
    document.getElementById("9").style.visibility = "visible";
    break;
  case 4:
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("7").style.visibility = "visible";
    document.getElementById("9").style.visibility = "visible";
    break;
  case 5:
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("5").style.visibility = "visible";
    document.getElementById("7").style.visibility = "visible";
    document.getElementById("9").style.visibility = "visible";
    break;
  case 6:
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("4").style.visibility = "visible";
    document.getElementById("6").style.visibility = "visible";
    document.getElementById("7").style.visibility = "visible";
    document.getElementById("9").style.visibility = "visible";
    break;
  }
    }, i*100); 
}
}

function clearField() {
 for (var i = 1; i < 10; i++) {
    document.getElementById(i).style.visibility = "hidden";
    }
  }