let grid = 16;

createContainer();
drawGrid(grid);

const gridEvent = document.querySelectorAll(".column");
let mouseDown =false;

gridEvent.forEach(function(box){box.addEventListener("mousedown", function(event) {mouseDown = true; changeColor(event)})});

gridEvent.forEach(function(box){box.addEventListener("mouseup", function() {mouseDown = false;})});

gridEvent.forEach(function(box){box.addEventListener("mouseenter", changeColor)});



function createContainer() {
  const gridContainer = document.querySelector("#grid-container");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");
  gridContainer.appendChild(mainContainer);
}

function drawGrid(GRID_NUMBER) {
  const mainContainer = document.querySelector(".container");
  for (let i = 1; i <= GRID_NUMBER; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    mainContainer.appendChild(row);

    for (let j = 1; j <= GRID_NUMBER; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
}

function changeColor(event)
{
  console.log(event);
  if(mouseDown)
  {
    event.target.style.backgroundColor = "#000000";
  }
}

