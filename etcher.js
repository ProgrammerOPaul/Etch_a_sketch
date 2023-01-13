const container = document.getElementById("container");
let color = "blue";
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

makeGrid (16,16)


function paint (color){
  let element = document.getElementsByClassName("grid-item")
  for (c = 0; c < element.length; c++){
    element[c].addEventListener('mouseenter', function onMouseEnter(event){
      if (mouseDown){
        event.target.style.backgroundColor = color
      }
    })
    element[c].addEventListener('mousedown', function onClick(event) {
          event.target.style.backgroundColor = color}
        )
  }
}




paint(color);


// Element.addEventListener('click', color);
