//declare samecolor() here
function samecolor(){
  let color ="#fac0aa";
  const doc = document;
  let divs = doc.querySelectorAll("#samecolor div");
  for(let x = 0, let y=0.25; x < divs.length; x++, y+=0.25){
    divs[x].style.backgroundColor = color;
    divs[x].style.opacity = y;
    console.log("for");
  }
  console.log("funcyi");
}
//declare diffcolor() here
function diffcolor(){
  let color = "#992222";
  let comp = "#66dddd";
  const doc = document;
  let divs = doc.querySelectorAll("#diffcolor div");
  for(let x = 0; x < divs.length; x++){
    if(x % 2 == 0){
      divs[x].style.backgroundColor = color;
    }
    else{
      divs[x].style.backgroundColor = comp;
    }
  }
}
