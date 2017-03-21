//declare samecolor() here
function samecolor(hex){
  const doc = document;
  let divs = doc.querySelectorAll("#samecolor > div");
  for(let x = 0; x < divs.length; x++; let y = 0.25; y+=0.25){
    divs[x].style.backgroundColor = hex;
    divs[x].style.opacity = y;
  }
}
//declare diffcolor() here
