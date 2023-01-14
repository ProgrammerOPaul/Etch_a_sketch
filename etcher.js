const container = document.getElementById("container");
const clearBtn =  document.getElementById("btnClear");
const colorPicker = document.getElementById("picker");
const gridItems = document.getElementsByClassName("grid-item");
let slider = document.getElementById("range");
let output = document.getElementById("length");
let color = "black";
let mouseDown = false;

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

function removeGrid(){
  while(gridItems.length > 0){
      gridItems[0].parentNode.removeChild(gridItems[0]);
  }
}

function paint (color){
  for (c = 0; c < gridItems.length; c++){
    gridItems[c].addEventListener('mouseenter', function onMouseEnter(event){
      if (mouseDown){
        event.target.style.backgroundColor = color}
     }
    )
    gridItems[c].addEventListener('mousedown', function onClick(event) {
          event.target.style.backgroundColor = color})
  }
}

function pickColor(event) {
  color = event.target.value;
  paint(color);
};

function clear(){
  for (c = 0; c < gridItems.length; c++){
    gridItems[c].style.backgroundColor = "";
  }
}

makeGrid (slider.value, slider.value);

paint(color);

clearBtn.addEventListener("click", clear);

colorPicker.addEventListener("change", pickColor);

document.addEventListener("DOMContentLoaded", function() {
  output.innerHTML = slider.value + "x" + slider.value;
  slider.oninput = function() {
    output.innerHTML = slider.value + "x" + slider.value;
    removeGrid();
    makeGrid(slider.value, slider.value);
    paint(color);
  }
})





