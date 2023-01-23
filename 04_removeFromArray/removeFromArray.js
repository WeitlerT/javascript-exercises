const removeFromArray = function(...args) {
    let firstArray = args[0];
    let newArray = [];

    console.log(args);

    firstArray.forEach((item) => {
        if (!args.includes(item)) {
          newArray.push(item);
        }
      });
    console.log(newArray);
};

removeFromArray(["bird","dog","cat"], "cat");

// Do not edit below this line
module.exports = removeFromArray;
