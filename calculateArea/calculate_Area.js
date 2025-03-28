let length;
let width;

function calculateArea(length, width) {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
  //return length * width;

  let area = length * width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

  console.log(area)
}