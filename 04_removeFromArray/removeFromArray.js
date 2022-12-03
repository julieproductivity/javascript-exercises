const removeFromArray = function(arr, ...args) {
    removedItems= arr.filter(item => !args.includes(item));


    return removedItems;
};

// Do not edit below this line
module.exports = removeFromArray;


/** pass test 1
   */ 