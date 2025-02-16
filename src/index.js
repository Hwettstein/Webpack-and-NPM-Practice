import "./pages/index.css";

// Import the image
import stepsSrc from "./images/steps.png";

// Select the element and set the src
const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;

const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10
