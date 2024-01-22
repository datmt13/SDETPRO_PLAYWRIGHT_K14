function calculateBMI(height, weight) {
    return weight / (height * 2);
}

function getStatusByBMI(resultBMI) {
    var result = "";
    if(resultBMI < 18.5){
        result = "Underweight";
    }
    else if(resultBMI >= 18.5 && resultBMI <= 24.9){
        result = "Normal weight";
    }
    else if(resultBMI >= 25 && resultBMI <= 29.9){
        result = "Overweight";
        console.log("");
    }
    else {
        result = "Obesity";
    }
    return result;
}

function increaseOrDecreaseWeight(height, weight){
    let resultBMI = calculateBMI(height, weight);
    let normalWeightBMI = 0;
    let statusBMI = getStatusByBMI(resultBMI).toLocaleLowerCase();
    if(statusBMI === "normal weight"){
        return 0;
    }
    if(statusBMI === "underweight"){
        normalWeightBMI = 18.5;
    }
    if(statusBMI === "overweight" || statusBMI === "obesity"){
        normalWeightBMI = 24.9;
    }
    let resultWeight = normalWeightBMI * (height * 2);
    return resultWeight - weight;
}

module.exports = {
    calculateBMI: calculateBMI,
    getStatusByBMI: getStatusByBMI,
    increaseOrDecreaseWeight: increaseOrDecreaseWeight
}