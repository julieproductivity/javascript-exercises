const sumAll = function(a,b) {
   /*  let sum = 0;
if ((a>0 && b>0) && (a<b)){
   for (let i =0; i<=b; i++){
    sum += i;
   }
    return sum;
}
else {
    return "ERROR"
} */

let sum = 0;
 if ((a>0 && b>0) && (a<b) && (typeof a=="number" && typeof b=="number")){
    for (let i =0; i<=b; i++){
     sum += i;
    }
    return sum;
}
else if ((a>0 && b>0) && (a>b) && (typeof a=="number" && typeof b=="number")){
    for (let i = b; i<=a; i++){
     sum += i;
        }
        return sum;
}
else {
    return 'ERROR'
};
}

// Do not edit below this line
module.exports = sumAll;
