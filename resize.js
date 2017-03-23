//Declare tabletSize() here
function tabletSize(){
  const doc = document;
  let array = doc.querySelectorAll("section");
  let width = array[0].style.width;
  let height = array[0].style.height;
  for(let x = 0; x < array.length; x ++){
    array[x].style.width = 0.75 * width;
    array[x].style.height = 0.75 * height;
  }
}

//Declare phoneSize() here
