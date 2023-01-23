const findTheOldest = function() {
    const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]
      const ages = [];
      for (i=0;i<=people.length-1;i++){
        console.log(people[i].yearOfDeath - people[i].yearOfBirth);
        ages.push(people[i].yearOfDeath - people[i].yearOfBirth);
      }
      console.log(ages);
      let highestIndex = ages.indexOf(Math.max(...ages));
      let result = (people[highestIndex].name);
      console.log(result);
      return result;
};

findTheOldest();

// Do not edit below this line
module.exports = findTheOldest;
