const leapYears = function(years) {
    if ((years%4==0) && (years%400==0)){
        return true //1600
        
    } else if ((years/4) && (years%4==0)&&(years%100 !==0)){
        return true //1996, 34992
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
