const { calculateBMI, getStatusByBMI } = require("./CalculatorBMI");

let height = 1.7;
let weight = 62.9;
let resultBMI = calculateBMI(height, weight);
console.log("BMI result: " + resultBMI);
console.log("BMI status: " + getStatusByBMI(resultBMI));
