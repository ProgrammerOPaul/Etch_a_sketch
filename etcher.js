const container = document.getElementById("gridContainer");
const clearBtn =  document.getElementById("btnClear");
const eraserBtn = document.getElementById("btnEraser");
const brushBtn = document.getElementById("btnBrush");
const colorPicker = document.getElementById("picker");
const gridItems = document.getElementsByClassName("grid-item");
let slider = document.getElementById("range");
let output = document.getElementById("length");
let color = colorPicker.value;
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

function pickEraser(){
  paint("");
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

function btnPressed(button){
  selected = document.getElementsByClassName("selected");
  if (selected.length > 0){
    selected[0].classList.remove("selected");
    button.classList.add("selected");
  }
  else{
    button.classList.add("selected");
  }

}

makeGrid (slider.value, slider.value);

paint(color);

clearBtn.addEventListener("click", clear);

eraserBtn.addEventListener("click", function(){
  pickEraser();
  btnPressed(eraserBtn);
});

brushBtn.addEventListener("click", function(){
  paint(color);
  btnPressed(brushBtn);
});

colorPicker.addEventListener("change", function(event){
  pickColor(event);
  btnPressed(brushBtn);
});

document.addEventListener("DOMContentLoaded", function() {
  output.innerHTML = slider.value + "x" + slider.value;
  slider.oninput = function() {
    output.innerHTML = slider.value + "x" + slider.value;
    removeGrid();
    makeGrid(slider.value, slider.value);
    paint(color);
  }
});

$('button').on('click', function(){
  $('button').removeClass('selected');
  $(this).addClass('selected');
});





