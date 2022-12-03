const ftoc = function(deg) {
toC= Math.round(((deg-32)*(5/9))*10)/10;
return toC
};

const ctof = function(deg) {
toF=Math.round(((deg*(9/5))+32)*10)/10;
return toF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
