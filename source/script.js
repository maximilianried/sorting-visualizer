const max = 700;
const value = [];
let width = document.getElementById("graphic").clientWidth;
let len = document.getElementById("slider").value;

createArray(len, max);
createGraphic(len);

// Sorting
function bubbleSort() {
  bubbleSortAlgo();
}

function slider() {
  resetGraphic(len);
  len = document.getElementById("slider").value;
  createArray(len, max);
  createGraphic(len);
}

// Window
window.onresize = function () {
  resetGraphic(len);
  createGraphic(len);
};

// Array
function createArray(len, max) {
  for (let i = 0; i < len; i++) {
    value[i] = Math.floor(Math.random() * Math.floor(max));
  }
}

// Graphic
function createGraphic(len) {
  for (let i = 0; i < len; i++) {
    width = (document.getElementById("graphic").clientWidth - len * 2) / len;
    const newElement = document.createElement("div");

    newElement.setAttribute("id", "div" + i);
    newElement.style.width = width + "px";
    newElement.style.height = value[i] + "px";
    newElement.style.float = "left";
    newElement.style.marginLeft = "2px";
    newElement.style.backgroundColor = "#0e6efd";
    document.getElementById("graphic").appendChild(newElement);
  }
}

function resetGraphic(len) {
  for (let i = 0; i < len; i++) {
    let div = document.getElementById("div" + i);
    div.remove();
  }
}

// Bubble sort
function bubbleSortAlgo() {
  let sorted = len;
  for (let i = 0; i < len; i++) {
    setTimeout(function () {
      for (let j = 0; j < len; j++) {
        if (value[j] > value[j + 1]) {
          let temp = value[j];
          value[j] = value[j + 1];
          value[j + 1] = temp;
        }
        document.getElementById("div" + j).style.height = value[j] + "px";
      }
      sorted -= 1;
      document.getElementById("div" + sorted).style.backgroundColor = "#1cba6e";
    }, 50 * i);
  }
}