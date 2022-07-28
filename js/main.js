function createGrid(size) {
  var gridContainer = document.getElementById("grid-container");
  gridContainer.style.setProperty("--grid-rows", size);
  gridContainer.style.setProperty("--grid-cols", size);
  for (i = 0; i < size * size; i++) {
    var gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem);
    gridItem.classList.add("grid-item");
  }
  //need to call mouseHoverListener every time a new grid is created
  //because the child elements were deleted
  addMouseHoverListeners();
}

function addMouseHoverListeners() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function (gridItem) {
    gridItem.addEventListener("mouseover", () => {
      gridItem.classList.add("updated-grid-item");
    });
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addButtonClickListener() {
  const sizeSelectionButton = document.getElementById("size-selection-button");
  sizeSelectionButton.addEventListener("click", () => {
    const size = prompt("How many rows?", defaultSize);
    if (size == null || size == "" || size > 100) {
      alert("invalid input: Size must be between 1-100");
    } else {
      var gridContainer = document.getElementById("grid-container");
      removeAllChildNodes(gridContainer);
      createGrid(size);
    }
  });
}

const defaultSize = 16;
createGrid(defaultSize);
addButtonClickListener();
