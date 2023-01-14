const container = document.getElementById("container");
const clearBtn =  document.getElementById("btnClear");
let color = "blue";
let mouseDown = false;
let slider = document.getElementById("range")
let output = document.getElementById("length")

document.body.onmousedown = function() { 
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

function makeGrid (rows, columns) {
  container.style.setProperty('--grid_rows', rows);
  container.style.setProperty('--grid_col', columns);
  for (c = 0; c < (rows * columns); c++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  };
};

function paint (color){
  let element = document.getElementsByClassName("grid-item");
  for (c = 0; c < element.length; c++){
    element[c].addEventListener('mouseenter', function onMouseEnter(event){
      if (mouseDown){
        event.target.style.backgroundColor = color}
     }
    )
    element[c].addEventListener('mousedown', function onClick(event) {
          event.target.style.backgroundColor = color})
  }
}

function clear(){
  let element = document.getElementsByClassName("grid-item");
  for (c = 0; c < element.length; c++){
    element[c].style.backgroundColor = "";
  }
}

makeGrid (slider.value, slider.value);

clearBtn.addEventListener("click", clear);

paint(color);

function removeGrid(){
  const elements = document.getElementsByClassName("grid-item");
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  output.innerHTML = slider.value + "x" + slider.value;
  slider.oninput = function() {
    output.innerHTML = slider.value + "x" + slider.value;
    removeGrid();
    makeGrid(slider.value, slider.value);
    paint(color);
  }
})