const reverseString = function(string) {

let splitInput = string.split('');
let reverseInput = splitInput.reverse();
let joinInput = reverseInput.join('');
return joinInput;

};

// Do not edit below this line
module.exports = reverseString;
