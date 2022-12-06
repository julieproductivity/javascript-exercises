const add = function(a,b) {
	c=a+b;
  return c
};

const subtract = function(a,b) {
	c=a-b;
  return c
};

const sum = function(arr) {
	
    let sum = 0;
    for (let i =0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum
  }
  
const multiply = function(arr) {
  var sum = 1;
  for (let i = 0; i < arr.length; i++){
    sum *= arr[i];
    
  }
  return sum
};

const power = function(a,b) {
	result = a**b;
  return result 
};

const factorial = function(num) {
	if (num == 0 || num == 1) {
    return 1
  }
  else {
    for (let i = num-1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
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
