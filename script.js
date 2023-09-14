createContainer();

drawGrid(16);

const gridEvent = document.querySelectorAll(".column");
gridEvent.forEach(function(box){box.addEventListener("click", function(event) {console.log(event.target.classList.add("clicked"))})});

function createContainer() {
  const body = document.querySelector("body");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");
  body.appendChild(mainContainer);
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
