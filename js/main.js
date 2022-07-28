const numRows = 16;
const numCols = 16;

var gridContainer = document.getElementById("grid-container");

for (i = 0; i < numRows; i++) {
  for (j = 0; j < numCols; j++) {
    var cell = document.createElement("div");
    gridContainer.appendChild(cell);
    cell.classList.add("grid-item");
  }
}

function addMouseHoverListeners() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function (gridItem) {
    gridItem.addEventListener("mouseover", () => {
      gridItem.classList.add("updated-grid-item");
    });
  });
}

addMouseHoverListeners();
