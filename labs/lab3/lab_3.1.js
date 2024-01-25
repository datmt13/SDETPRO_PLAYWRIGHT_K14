const { CheckCountEvenAndOddIntArray } = require("./NumberUtils");
let intArr = [1, 2, 3, 4, 5];
let countEvenAndOddIntArray = CheckCountEvenAndOddIntArray(intArr);
console.log("Even numbers: ", countEvenAndOddIntArray.countEven);
console.log("Odd numbers: ", countEvenAndOddIntArray.countOdd);
