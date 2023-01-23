const fibonacci = function(input) {
    let n1 = 0, n2 = 1, nextNum;
    let seqArray = [0,1];
    console.log(seqArray[0])
    if (input < 0){
        return "OOPS";
    }
    for (i=0; i <=input; i++){
        nextNum = seqArray[i] + seqArray[i+1];
        seqArray.push(nextNum);
        console.log(`Next num is : ${nextNum}`);
    }
    console.log(`Full array: ${seqArray}`)
    return (seqArray[input])
};

console.log(fibonacci("4"));

// Do not edit below this line
module.exports = fibonacci;
