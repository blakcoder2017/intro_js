let grocery1;
let grocery2;
let grocery3;

function calculateGrocery () {
    grocery1 = parseFloat(document.getElementById("grocery_1").value);
    grocery2 = parseFloat(document.getElementById("grocery_2").value);
    grocery3 = parseFloat(document.getElementById("grocery_3").value);

    let total = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The total cost of the groceries is: ${total}`;

}