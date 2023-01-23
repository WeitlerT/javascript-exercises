const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(inputArray) {
  let sum = 0;
  for (i=0; i< inputArray.length; i++){
    sum += inputArray[i];
  }
  return sum;
	
};

const multiply = function(inputArray) {
  let sum = 1;
  for (i=0; i< inputArray.length; i++){
    sum = sum * inputArray[i];
  }
  return sum;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(input) {
	if (input === 0 || input ===1){
    return 1;
  }
  for (i=input-1;i >= 1; i--){
    input = input * i;
  }
  return input;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
