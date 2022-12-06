const fibonacci = function(num) {
    let n1 = 0, n2 = 1, nextTerm=num;
    if (num>0) {
        for (let i = 2; i <= num; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        } return nextTerm
    } else {
        return "OOPS"
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
