//Color Palette
const blackButton = document.getElementById("black");

blackButton.style.backgroundColor = "black";

window.onload = () => {
  //Color Palette
  function generateColors() {
    const colors = document.getElementsByClassName("color");
    for (let i = 1; i < colors.length; i += 1) {
      const buttonStyle = colors[i].style;
      let currentColor = buttonStyle.backgroundColor;
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      if (buttonStyle.backgroundColor === currentColor) {
        buttonStyle.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    }
  }

  function generateColorsButton() {
    const randomButton = document.querySelector("[data-button]");
    randomButton.addEventListener("click", generateColors);
  }

  function generateColors() {
    const colorsButton = document.getElementsByClassName("color");
    let r, g, b;

    for (let i = 1; i < colorsButton.length; i += 1) {
      const buttonStyle = colorsButton[i].style;
      let currentColor = buttonStyle.backgroundColor;
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      if (buttonStyle.backgroundColor === currentColor) {
        buttonStyle.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    }
  }

  function colorSelector() {
    const colors = document.getElementsByClassName("color");

    for (let i = 0; i < colors.length; i += 1) {
      colors[i].addEventListener("click", () => {
        for (let j = 0; j < colors.length; j += 1) {
          colors[j].classList.remove("selected");
        }

        colors[i].classList.add("selected");
      })
    }
  }

  generateColors();
  generateColorsButton();
  colorSelector();
};

// Pixel Board 

function addPixel() {
  const pixelElement = document.createElement("li");
  pixelElement.className = "pixel";
  pixelElement.addEventListener("click", () => setBackground(pixelElement));

  return pixelElement;
}

function verifyInputNumber(inputValue) {
  let value = inputValue;

  if (value > 50) {
    value = 50;
  } else if (value < 5) {
    value = 5;
  }

  return value;
}

function setPixels(input) {
  const lineInput = input;
  if (!lineInput.value) {
    alert("Board inválido!");
    return;
  }
  const lineInputValue = verifyInputNumber(lineInput.value);
  const pixelBoardElement = document.getElementById("pixel-board");
  pixelBoardElement.innerHTML = "";
  for (let i = 0; i < lineInputValue; i += 1) {
    const lineContainer = document.createElement("div");
    lineContainer.className = "line";
    for (let j = 0; j < lineInputValue; j += 1) {
      const pixelElement = addPixel();
      lineContainer.appendChild(pixelElement);
    }
    pixelBoardElement.appendChild(lineContainer);
  }
}

function setBlocks() {
  const generateBoardButton = document.getElementById("generate-board");
  const lineInput = document.getElementById("board-size");

  generateBoardButton.addEventListener("click", () => setPixels(lineInput));
}

function setBackground(element) {
  const pixelBlock = element;
  const selectedBlock = document.querySelector(".selected");

  pixelBlock.style.backgroundColor = selectedBlock.style.backgroundColor;
}

function setColor() {
  const pixelBlock = document.getElementsByClassName("pixel");

  for (let i = 0; i < pixelBlock.length; i += 1) {
    const pixel = pixelBlock[i];
    pixel.addEventListener("click", () => setBackground(pixel));
  }
}

function resetColors() {
  const resetContainer = document.querySelector(".reset-container");
  const resetDiv = document.createElement("div");
  const resetButton = document.createElement("button");

  resetDiv.id = "reset-button";
  resetButton.id = "clear-board";
  resetButton.innerText = "Limpar";

  resetContainer.appendChild(resetDiv);
  resetDiv.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    const getBlocks = document.getElementsByClassName("pixel");
    for (let i = 0; i < getBlocks.length; i += 1) {
      getBlocks[i].style.backgroundColor = "white";
    }
  });
}

setBlocks();
setColor();
resetColors();