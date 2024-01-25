const { GetMinMaxIntArray } = require("./NumberUtils");
let intArr = [1, 1, 2, 3, 4, 5];
let minMaxIntArray = GetMinMaxIntArray(intArr);
console.log("Minimum: ", minMaxIntArray.min);
console.log("Maximum: ", minMaxIntArray.max);
