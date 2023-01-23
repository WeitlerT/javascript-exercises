const sumAll = function(num1, num2) {
    //Dont allow for non int values
    if (Number.isInteger(num1) == false|| Number.isInteger(num2) == false){
        console.log("ERROR");
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0){
        console.log("ERROR no neg numbers");
        return "ERROR";
    }

    //Pick smaller number as start and bigger as end
    let finalSum = 0;
    let startingNum;
    let endingNum;
    if (num1 < num2){
        startingNum = num1;
        endingNum = num2;
    }
    else if (num2 < num1){
        startingNum = num2;
        endingNum = num1;
    }
    else {
        return num1+num2;
    }
    //Add numbers between range to finalSum
    for (i=startingNum; i<endingNum + 1; i++){
        finalSum = finalSum + i;
        console.log(finalSum);
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
