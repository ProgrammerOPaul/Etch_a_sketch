const container = document.getElementById("grid-container");
const clearBtn =  document.getElementById("btn-clear");
const eraserBtn = document.getElementById("btn-eraser");
const brushBtn = document.getElementById("btn-brush");
const colorPicker = document.getElementById("color-picker");
const gridItems = document.getElementsByClassName("grid-item");
let gridSlider = document.getElementById("range");
let gridSize = document.getElementById("length");
let color = colorPicker.value;
let mouseDown = false;

document.body.onmousedown = function() { 
  mouseDown = true;
};
document.body.onmouseup = function() {
  mouseDown = false;
};

function makeGrid (rows, columns) {
  container.style.setProperty('--grid_rows', rows);
  container.style.setProperty('--grid_col', columns);
  for (c = 0; c < (rows * columns); c++){
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }};

function removeGrid(){
  while(gridItems.length > 0){
      gridItems[0].parentNode.removeChild(gridItems[0]);
  }};

function paintBrush (color){
  for (c = 0; c < gridItems.length; c++){
    gridItems[c].addEventListener('mouseenter', function onMouseEnter(event){
      if (mouseDown){
        event.target.style.backgroundColor = color
      }})
    gridItems[c].addEventListener('mousedown', function onClick(event) {
          event.target.style.backgroundColor = color})
  }};

function pickEraser(){
  paintBrush("");
};

function pickColor(event) {
  color = event.target.value;
  paintBrush(color);
};

function clearGrid(){
  for (c = 0; c < gridItems.length; c++){
    gridItems[c].style.backgroundColor = "";
  }};

function btnPressed(button){
  selected = document.getElementsByClassName("selected-button");
  if (selected.length > 0){
    selected[0].classList.remove("selected-button");
    button.classList.add("selected-button");
  }
  else{
    button.classList.add("selected-button");
  }};

makeGrid (gridSlider.value, gridSlider.value);

paintBrush(color);

clearBtn.addEventListener("click", clearGrid);

eraserBtn.addEventListener("click", function(){
  pickEraser();
  btnPressed(eraserBtn);
});

brushBtn.addEventListener("click", function(){
  paintBrush(color);
  btnPressed(brushBtn);
});

colorPicker.addEventListener("change", function(event){
  pickColor(event);
  btnPressed(brushBtn);
});

document.addEventListener("DOMContentLoaded", function() {
  gridSize.innerHTML = gridSlider.value + "x" + gridSlider.value;
  gridSlider.oninput = function() {
    gridSize.innerHTML = gridSlider.value + "x" + gridSlider.value;
    removeGrid();
    makeGrid(gridSlider.value, gridSlider.value);
    paintBrush(color);
  }
});