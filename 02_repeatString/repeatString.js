const repeatString = function(string, num) {
let output="";

   while(num > 0) {
    output += string;
    num++;
   }
   return output;
}

// Do not edit below this line
module.exports = repeatString;
