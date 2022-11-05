const removeFromArray = function(arr,i) {

    let removeArr = arr.slice(0,i);
    let removedArrItem = arr(i);
    let concatArray = removeArr.concat(removedArrItem);
    return concatArray;
};

// Do not edit below this line
module.exports = removeFromArray;
