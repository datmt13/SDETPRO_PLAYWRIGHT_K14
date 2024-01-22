let inputNumber = 2;
if(checkEvenNumber(inputNumber))
    console.log(inputNumber + " is even number");
else 
    console.log(inputNumber + " is odd number");

function checkEvenNumber(inputNumber){
    if(inputNumber % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}