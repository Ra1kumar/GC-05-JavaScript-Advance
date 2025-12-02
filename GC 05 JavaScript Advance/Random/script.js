// Given Array
let a = [2, 5, 7, 8, 9];

// Function 1: Sum
function findSum() {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i];

  showResult(`Sum of Array Elements = <b>${sum}</b>`);
}

// Function 2: Binary Conversion
function convertBinary() {
  let result = "<b>Binary Conversion:</b><br>";
  a.forEach(num => {
    result += `${num} ➝ ${num.toString(2)}<br>`;
  });

  showResult(result);
}

// Function 3: Even & Odd
function findEvenOdd() {
  let evens = [];
  let odds = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) evens.push(a[i]);
    else odds.push(a[i]);
  }

  showResult(`
    <b>Even Numbers:</b> ${evens.join(", ")}<br>
    <b>Odd Numbers:</b> ${odds.join(", ")}
  `);
}

// Function 4: Max & Min
function findMaxMin() {
  let max = a[0];
  let min = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) max = a[i];
    if (a[i] < min) min = a[i];
  }

  showResult(`
    <b>Maximum:</b> ${max}<br>
    <b>Minimum:</b> ${min}
  `);
}

// Display Output
function showResult(msg) {
  document.getElementById("result").innerHTML = msg;
}

// Add buttons dynamically to page
document.body.innerHTML += `
  <div class="container">
      <h2>Array = [2, 5, 7, 8, 9]</h2>

      <button onclick="findSum()">Find Sum</button>
      <button onclick="convertBinary()">Binary Conversion</button>
      <button onclick="findEvenOdd()">Even & Odd</button>
      <button onclick="findMaxMin()">Max & Min</button>

      <div id="result" class="output-box"></div>
  </div>
`;
