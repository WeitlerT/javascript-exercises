const palindromes = function (str) {
    let newString = "";

    for (i = str.length-1; i >= 0; i--){
        newString += str[i];
    }

    newString = newString.toLowerCase();
    str = str.toLowerCase();
    console.log(`str: ${str}`);
    console.log(`NewString: ${newString}`);
    if (newString === str){
        return true;
    }
    else{
        return false;
    }
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
