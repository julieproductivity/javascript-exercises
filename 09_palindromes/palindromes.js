const palindromes = function (str) {
   /*  var len = Math.floor(str.length / 2);
    for (var i = 0; i < word; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true; */
    //USE A FOR LOOP:
    var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g; \W removes all non-alphanumeric characters:
    str = str.toLowerCase().replace(re, '');

    var len = str.length;
    for (var i = 0; i< len/2; i++) {
        if (str[i] !== str[len-i-1]) {
            return false;
        } 
        } return true;
    };

// Do not edit below this line
module.exports = palindromes;
