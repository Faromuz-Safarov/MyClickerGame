
let points = 0;
let power = 1;
let cost = 10;

// Find the elements on the page
const pointsDisplay = document.getElementById("points");
const powerDisplay = document.getElementById("power");
const costDisplay = document.getElementById("cost");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgradeButton");
const message = document.getElementById("message");

// Update the numbers on the screen
function updateScreen() {
  pointsDisplay.textContent = points;
  powerDisplay.textContent = power;
  costDisplay.textContent = cost;
}

// Earn points when the main button is clicked
clickButton.addEventListener("click", function () {
  points = points + power;
  message.textContent = "+" + power + " points!";
  updateScreen();
});

// Buy an upgrade
upgradeButton.addEventListener("click", function () {
  if (points >= cost) {
    points = points - cost;
    power = power + 1;
    cost = Math.ceil(cost * 1.5);

    message.textContent = "Upgrade purchased!";
    updateScreen();
  } else {
    message.textContent = "Not enough points yet!";
  }
});

// Show the starting values
updateScreen();
