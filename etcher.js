const container = document.getElementById("container");

function makeGrid (rows, columns) {
  container.style.setProperty('grid_rows', rows);
  container.style.setProperty('grid_columns', columns);
  for (c = 0; c < (rows * columns); c++){
    let cell = document.createElement('div');
    cell.innerText = (c+1);
    container.appendChild(cell).className = 'grid-item';
  };
};