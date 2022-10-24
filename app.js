let color = "black";

// Select the elements on the page - colorPicker, colorBtn, RainbowBtn, eraserBtn, clearBtn, Size value & grid
const colorPicker = document.getElementById("colorPicker");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const grid = document.getElementById("grid");

// Create Grid function
function createGrid(size) {
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", square);
  }
}

createGrid(16);

// Change Grid size
function changeSize(sizeSlider) {
  createGrid(sizeSlider);
}

// Color Square
function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

// Change color
function changeColor(choice) {
  color = choice;
}

//Reset to default
function resetGrid() {
  let grid = document.querySelector("#grid");
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
}
