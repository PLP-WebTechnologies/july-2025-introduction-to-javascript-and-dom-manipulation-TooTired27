// Part 1: Variables & Conditionals
// ==========================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are eligible to vote.";
  } else if (age > 0) {
    result.textContent = "❌ You are too young to vote.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}

// ==========================
// Part 2: Functions
// ==========================

// Function to calculate total with VAT
function calculateTotal(amount, vatRate) {
  let total = amount + (amount * vatRate);
  document.getElementById("totalResult").textContent = 
    `Total with VAT: R${total.toFixed(2)}`;
}

// Function to toggle visibility of a message
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// ==========================
// Part 3: Loops
// ==========================

// Countdown using a while loop
function countdown(start) {
  let output = "";
  let i = start;
  while (i >= 0) {
    output += i + " ";
    i--;
  }
  document.getElementById("countdownResult").textContent = output;
}

// Loop through an array and display items
function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grapes"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear old list
  
  // Using forEach loop
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Change background color when button is clicked
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "#f8f8f8" : "lightyellow";
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});