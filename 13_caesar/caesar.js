//abcdefghijklmnopqrstuvwxyz
//A-Z : 65-90
//a-z : 97-122
const caesar = function(stringInput, shiftInput) {
    let unicodeVal = [];
    let shiftedArray = [];
    let resultArray = [];
    let resultString;
    for (i=0; i <= stringInput.length-1; i++){
        //Convert stringInput to UTF16 and store in new array
        unicodeVal.push(stringInput.charCodeAt(i))
        // console.log(`Unshifted vals: ${unicodeVal}`);
        //Check that unicode val is in acceptable range
        if (unicodeVal[i]>=65 && unicodeVal[i]<=90 || 
        unicodeVal[i]>=97 && unicodeVal[i]<=122){
        //Check that it still is once shifted
        let uniShift = unicodeVal[i]+shiftInput;
            if (uniShift>=65 && uniShift<=90 || 
                uniShift>=97 && uniShift<=122)
            {
                shiftedArray.push(unicodeVal[i] + shiftInput);
            }
            //If its not we have to check further
            else if (shiftInput > 0)
            {
                if(shiftInput > 26){
                    shiftInput = 26;
                }
                if(uniShift > 90 && uniShift < 97 || uniShift > 122)
                {
                    shiftedArray.push(unicodeVal[i] + shiftInput - 26);
                }
                else
                {
                    console.log("ERROR")
                }
            }
            //But since we need to accept neg vals as well
            else if(shiftInput < 0)
            {
                if(uniShift < 97 && uniShift > 90 || uniShift < 64)
                {
                    shiftedArray.push(unicodeVal[i] + shiftInput + 26);
                }
                else
                {
                    console.log("ERROR")
                }
            }
        }
        else{
            shiftedArray.push(unicodeVal[i]);
        }
        //Shift unicode array by specified value
        // console.log("Shifted vals " + shiftedArray);
        //Convert the shifted values back to characters
        resultArray.push((String.fromCharCode(shiftedArray[i])));
        // console.log(resultArray);
        //Convert that array back into a string
        resultString = resultArray.join("");
        // console.log(resultString);
    }
    return resultString;
};

caesar("Hello, World!", 5)

// Do not edit below this line
module.exports = caesar;
