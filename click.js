//declare samecolor() here
function samecolor(){
  const doc = document;

  let divs = doc.querySelectorAll("#samecolor > div");
  let y =0.25;
  for(let x = 0; x < divs.length; x++){
    divs[x].style.backgroundColor = "#fac0aa";
    divs[x].style.opacity = y;
    y+=0.25;

  }
}
//declare diffcolor() here
function diffcolor(){
  const doc = document;
  let divs = doc.querySelectorAll("#diffcolor > div");
  for(let x = 0; x < divs.length; x++){
    if(x % 2 == 0){
      divs[x].style.backgroundColor = "#992222";
    }
    else{
      divs[x].style.backgroundColor = "#66dddd";
    }
  }
}
