let grid = 16;

createContainer();
drawGrid(grid);

let mouseDown = false;
declareEventsColumn();

//create the container
function createContainer() {
  const gridContainer = document.querySelector("#grid-container");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");
  gridContainer.appendChild(mainContainer);

  mainContainer.addEventListener("mouseleave", function () {
    mouseDown = false;
  });
}

//draw grid
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
//change the color of a div inside the container
function changeColor(event) {
  let color = determineColor();
  if (mouseDown) {
    event.target.style.backgroundColor = color;
  }
}

function declareEventsColumn() {
  const gridEvent = document.querySelectorAll(".column");
  gridEvent.forEach(function (box) {
    box.addEventListener("mousedown", function (event) {
      mouseDown = true;
      changeColor(event);
    });
  });

  gridEvent.forEach(function (box) {
    box.addEventListener("mouseup", function () {
      mouseDown = false;
    });
  });

  gridEvent.forEach(function (box) {
    box.addEventListener("mouseenter", changeColor);
  });
}


function determineColor()
{
  let color;
  const button = document.querySelector(".choice-color.active");
  
  const CHOICE = button.dataset.choice;
  
  if(CHOICE ==="rgb")
  {
    color = randomColorGenerator();
  }
  else if(CHOICE === "eraser")
  {
    color = "#FFFFFF";
  }
  else
  {
    color = "#000000";
  }

  return color;
}

function randomColorGenerator()
{
  return "#123456";
}