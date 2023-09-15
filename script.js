//needed for checking if mousedown(for drawing)
let mouseDown = false;

//for starting
reDrawGrid();
declareEventsMenuButton();

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

//responsible for drawing the grid
function drawGrid(GRID_NUMBER = document.querySelector("#grid").value) {
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

//responsible for deleting then creating the grid again
function reDrawGrid() {
  const container = document.querySelector(".container");

  if (container) {
    container.remove();
  }
  createContainer();
  drawGrid();
  declareEventsColumn();
}

//change the color of a div inside the container
function changeColor(event) {
  let color = determineColor();
  if (mouseDown) {
    event.target.style.backgroundColor = color;
  }
}

//declare the events column(needed as a function because of deletion and recreation of columns)
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

//events for menu
function declareEventsMenuButton() {
  //events for color
  const choiceButtons = document.querySelectorAll(".choice-color");

  choiceButtons.forEach(function (but) {
    but.addEventListener("click", toggleActiveChoice);
  });

  //events for redraw
  const clear = document.querySelector("#clear");

  const range = document.querySelector("#grid");
  const label = document.querySelector("label[for = 'grid']");

  clear.addEventListener("click", reDrawGrid);
  range.addEventListener("change", reDrawGrid);

  range.addEventListener("input", function () {
    label.textContent = `${event.target.value}x${event.target.value}`;
  });
}

//determine the color of the lines
function determineColor() {
  let color;
  const button = document.querySelector(".choice-color.active");

  const CHOICE = button.dataset.choice;

  if (CHOICE === "rgb") {
    //generate random color
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } else if (CHOICE === "eraser") {
    color = "#FFFFFF";
  } else {
    color = "#000000";
  }

  return color;
}

//toggle active class on menu
function toggleActiveChoice(event) {
  const choiceButtons = document.querySelectorAll(".choice-color");
  const ACTIVE = "active";

  choiceButtons.forEach(function (but) {
    but.classList.remove(ACTIVE);
  });

  event.target.classList.add("active");
}
