const reverseString = function(string) {
    let splitString = string.split("");
    let reverseString = splitString.reverse();
    let finalString = reverseString.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
