const { increaseOrDecreaseWeight } = require("./CalculatorBMI");

let height = 1.7;
let weight = 84;
let resultIncreaseOrDecreaseWeight = increaseOrDecreaseWeight(height, weight).toString();
if(resultIncreaseOrDecreaseWeight === "0")
    console.log("you normal weight");
else
    console.log((resultIncreaseOrDecreaseWeight.indexOf("-") ? "decrease " : "increase ") + "weight: " + resultIncreaseOrDecreaseWeight.replace("-",""));

