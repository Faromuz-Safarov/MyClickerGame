
const counter = document.getElementById("points");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgradeButton");
const powerDisplay = document.getElementById("power");
const costDisplay = document.getElementById("cost");
const message = document.getElementById("message");

// Load saved progress
let points = Number(localStorage.getItem("points")) || 0;
let power = Number(localStorage.getItem("power")) || 1;
let cost = Number(localStorage.getItem("cost")) || 10;

// Save progress
function saveGame() {
    localStorage.setItem("points", points);
    localStorage.setItem("power", power);
    localStorage.setItem("cost", cost);
}

// Update the screen
function updateDisplay() {
    counter.textContent = points;
    powerDisplay.textContent = power;
    costDisplay.textContent = cost;

    upgradeButton.disabled = points < cost;

    saveGame();
}

// Earn points when clicked
clickButton.addEventListener("click", function() {
    points += power;
    message.textContent = "You earned " + power + " points!";
    updateDisplay();
});

// Buy an upgrade
upgradeButton.addEventListener("click", function() {
    if (points >= cost) {
        points -= cost;
        power += 1;
        cost = Math.ceil(cost * 1.7);

        message.textContent = "Upgrade purchased!";
        updateDisplay();
    }
});

// Load the game screen
updateDisplay();
