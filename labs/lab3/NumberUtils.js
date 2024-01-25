function CheckCountEvenAndOddIntArray(intArr) {
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < intArr.length; i++) {
    let numberCheck = intArr[i];
    if (numberCheck % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  return {
    countEven: countEven,
    countOdd: countOdd,
  };
}

function GetMinMaxIntArray(intArr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < intArr.length; i++) {
    let numberCheck = intArr[i];
    if (i === 0) {
      min = numberCheck;
      max = numberCheck;
    }
    if (numberCheck < min) {
      min = numberCheck;
    }
    if (numberCheck > max) {
      max = numberCheck;
    }
  }
  return {
    min: min,
    max: max,
  };
}

function GetMinMaxIntArray(intArr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < intArr.length; i++) {
    let numberCheck = intArr[i];
    if (i === 0) {
      min = numberCheck;
      max = numberCheck;
    }
    if (numberCheck < min) {
      min = numberCheck;
    }
    if (numberCheck > max) {
      max = numberCheck;
    }
  }
  return {
    min: min,
    max: max,
  };
}

function SortMinToMaxIntArray(intArr) {
  let resultArray = [];
  for (let i = 0; i < intArr.length; ) {
    var getMinValueIntArray = GetMinMaxIntArray(intArr);
    var minValue = getMinValueIntArray.min;
    resultArray.push(minValue);
    var indexMinValue = intArr.indexOf(minValue);
    if (indexMinValue > -1) {
      intArr.splice(indexMinValue, 1);
    }
  }
  return resultArray;
}

function MergeTwoArrayAndSortMinToMax(arr1, arr2) {
  let resultArray = [];
  for (let i = 0; i < arr1.length; i++) {
    resultArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    resultArray.push(arr2[i]);
  }
  return SortMinToMaxIntArray(resultArray);
}

module.exports = {
  CheckCountEvenAndOddIntArray: CheckCountEvenAndOddIntArray,
  GetMinMaxIntArray: GetMinMaxIntArray,
  SortMinToMaxIntArray: SortMinToMaxIntArray,
  MergeTwoArrayAndSortMinToMax: MergeTwoArrayAndSortMinToMax,
};
